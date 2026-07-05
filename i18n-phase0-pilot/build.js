#!/usr/bin/env node
// ══════════════════════════════════════════════════════════════
// LocalReply — Static i18n build
//
// Reads /templates/{page}.html ({{key}} placeholders) + per-language
// JSON in /locales/{lang}/{page}.json (falling back to /locales/{lang}/common.json
// for shared keys), and writes fully-rendered static HTML into /dist:
//   - /dist/{page}.html            → default language (EN)
//   - /dist/{lang}/{page}.html     → every other supported language
//
// Every other file in the repo (assets, untouched pages, nav.js, etc.)
// is copied into /dist unchanged, so pages not yet migrated keep working.
// ══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const LOCALES_DIR = path.join(ROOT, 'locales');

// Default language is served at the root (no prefix), per product decision:
// international audience, English first.
const DEFAULT_LANG = 'en';
const LANGS = ['en', 'fr', 'de', 'it', 'es', 'pt', 'nl', 'pl'];

// Files/dirs at repo root that must never be copied into dist.
const EXCLUDE = new Set([
  'dist', 'templates', 'locales', 'build.js', 'node_modules',
  '.git', '.gitignore', 'README.md',
]);

function rimraf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function loadLocale(lang, page) {
  const common = readJsonSafe(path.join(LOCALES_DIR, lang, 'common.json'));
  const pageData = readJsonSafe(path.join(LOCALES_DIR, lang, `${page}.json`));
  return Object.assign({}, common, pageData, { _lang: lang });
}

function readJsonSafe(p) {
  if (!fs.existsSync(p)) return {};
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function render(template, data) {
  const missing = [];
  const out = template.replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (m, key) => {
    if (Object.prototype.hasOwnProperty.call(data, key)) return data[key];
    missing.push(key);
    return m; // leave placeholder visible so it's obvious in a preview
  });
  return { out, missing };
}

function main() {
  console.log('→ Cleaning dist/');
  rimraf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  console.log('→ Copying static files into dist/');
  for (const entry of fs.readdirSync(ROOT)) {
    if (EXCLUDE.has(entry)) continue;
    copyRecursive(path.join(ROOT, entry), path.join(DIST, entry));
  }

  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.log('→ No templates/ directory found, nothing to render.');
    return;
  }

  const templateFiles = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.html'));
  let totalMissing = 0;

  for (const file of templateFiles) {
    const page = file.replace(/\.html$/, '');
    const templateSrc = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf8');
    console.log(`→ Rendering ${file} for ${LANGS.length} languages`);

    for (const lang of LANGS) {
      const data = loadLocale(lang, page);
      const { out, missing } = render(templateSrc, data);

      if (missing.length) {
        totalMissing += missing.length;
        console.warn(`  ⚠ ${lang}/${page}: missing keys → ${missing.join(', ')}`);
      }

      const outPath = lang === DEFAULT_LANG
        ? path.join(DIST, `${page}.html`)
        : path.join(DIST, lang, `${page}.html`);

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, out, 'utf8');
    }
  }

  if (totalMissing > 0) {
    console.warn(`\n⚠ Build finished with ${totalMissing} missing translation key(s) — see warnings above.`);
  } else {
    console.log('\n✓ Build finished, no missing keys.');
  }
}

main();
