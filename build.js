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

// ── SEO: canonical/hreflang/Open Graph config ──
const SITE_URL = 'https://uselocalreply.com';

const OG_LOCALE = {
  en: 'en_US', fr: 'fr_FR', de: 'de_DE', it: 'it_IT',
  es: 'es_ES', pt: 'pt_PT', nl: 'nl_NL', pl: 'pl_PL',
};

// URL slug per page, matching vercel.json's rewrites. Home has no slug.
const PAGE_SLUGS = {
  home: '', about: 'about', blog: 'blog', contact: 'contact',
  features: 'features', gdpr: 'gdpr', pricing: 'pricing',
  privacy: 'privacy', terms: 'terms',
};

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

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Absolute URL for a given language + page, matching vercel.json's rewrite scheme:
// default lang has no /lang prefix, home has no slug segment.
function pageUrl(lang, page) {
  const slug = Object.prototype.hasOwnProperty.call(PAGE_SLUGS, page) ? PAGE_SLUGS[page] : page;
  const langPrefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const pagePath = slug ? `/${slug}` : '';
  return `${SITE_URL}${langPrefix}${pagePath}`;
}

function canonicalTag(lang, page) {
  return `<link rel="canonical" href="${pageUrl(lang, page)}">`;
}

// hreflang alternates for every supported language + x-default, for one page.
function hreflangBlock(page) {
  const links = LANGS.map(
    lang => `  <link rel="alternate" hreflang="${lang}" href="${pageUrl(lang, page)}">`
  );
  links.push(`  <link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, page)}">`);
  return links.join('\n');
}

// Open Graph + Twitter Card tags for one page/language.
function ogTags(lang, page, title) {
  const safeTitle = escapeAttr(title || 'LocalReply');
  const url = pageUrl(lang, page);
  const locale = OG_LOCALE[lang] || 'en_US';
  const altLocales = LANGS
    .filter(l => l !== lang)
    .map(l => `  <meta property="og:locale:alternate" content="${OG_LOCALE[l] || 'en_US'}">`)
    .join('\n');

  return [
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${safeTitle}">`,
    `<meta property="og:description" content="${safeTitle}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:site_name" content="LocalReply">`,
    `<meta property="og:image" content="${SITE_URL}/logo.png">`,
    `<meta property="og:locale" content="${locale}">`,
    altLocales,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${safeTitle}">`,
    `<meta name="twitter:description" content="${safeTitle}">`,
    `<meta name="twitter:image" content="${SITE_URL}/logo.png">`,
  ].join('\n  ');
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

function generateSitemap(pages) {
  const urlEntries = [];
  for (const page of pages) {
    for (const lang of LANGS) {
      const loc = pageUrl(lang, page);
      const altLinks = LANGS
        .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${pageUrl(l, page)}"/>`)
        .join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, page)}"/>`;
      urlEntries.push(
        `  <url>\n    <loc>${loc}</loc>\n${altLinks}\n${xDefault}\n  </url>`
      );
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries.join('\n')}\n</urlset>\n`;
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
  const renderedPages = [];

  for (const file of templateFiles) {
    const page = file.replace(/\.html$/, '');
    renderedPages.push(page);
    const templateSrc = fs.readFileSync(path.join(TEMPLATES_DIR, file), 'utf8');
    console.log(`→ Rendering ${file} for ${LANGS.length} languages`);

    for (const lang of LANGS) {
      const data = loadLocale(lang, page);
      data.seo_canonical = canonicalTag(lang, page);
      data.seo_hreflang = hreflangBlock(page);
      data.seo_og = ogTags(lang, page, data.meta_title);
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

  console.log('→ Writing sitemap.xml');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), generateSitemap(renderedPages), 'utf8');

  if (totalMissing > 0) {
    console.warn(`\n⚠ Build finished with ${totalMissing} missing translation key(s) — see warnings above.`);
  } else {
    console.log('\n✓ Build finished, no missing keys.');
  }
}

main();
