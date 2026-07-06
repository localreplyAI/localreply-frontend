// ══════════════════════════════════════════════
//  LocalReply — Footer partagé + i18n
// ══════════════════════════════════════════════

(function() {
  // Same fix as nav.js: without this, every footer link (Features, Pricing,
  // Blog, About, Contact, the CTA) always pointed to the default-language
  // URL, so clicking one from e.g. /it/... dropped you back to English.
  const currentPath = window.location.pathname;
  const _navLangPrefixes = ['fr','de','it','es','pt','nl','pl'];
  const _navLangRoutedSlugs = ['', 'contact', 'features', 'pricing', 'about', 'blog',
    'auth', 'onboarding', 'mon-compte', 'abonnement', 'choisir-plan', 'reset-password', 'forgot-password',
    'dashboard', 'dashboard-configuration', 'dashboard-rendez-vous', 'dashboard-messages', 'dashboard-analytics',
    'privacy', 'terms', 'gdpr'];
  function _curLang() {
    const first = currentPath.replace(/^\/+/, '').split('/')[0];
    return _navLangPrefixes.indexOf(first) >= 0 ? first : '';
  }
  const _lang = _curLang();
  function withLang(href) {
    if (!_lang) return href;
    const slug = href === '/' ? '' : href.replace(/^\//, '');
    if (_navLangRoutedSlugs.indexOf(slug) === -1) return href; // e.g. /demo -- no per-language route
    return slug ? '/' + _lang + '/' + slug : '/' + _lang;
  }

  const FOOTER_T = {
    fr: { brand_desc: "L'assistant IA 24/7 pour les petits commerces en Europe. 8 langues, prise de RDV automatique, FAQ intelligente.", col_product: 'Produit', features: 'Fonctionnalités', pricing: 'Tarifs', demo: 'Démo live', blog: 'Blog', col_company: 'Entreprise', about: 'À propos', contact: 'Contact', col_legal: 'Légal', terms: 'CGU', privacy: 'Confidentialité', gdpr: 'RGPD', rights: 'Tous droits réservés.', cta: 'Essai gratuit 14 jours →' },
    en: { brand_desc: 'The 24/7 AI assistant for local businesses across Europe. 8 languages, automatic bookings, smart FAQ.', col_product: 'Product', features: 'Features', pricing: 'Pricing', demo: 'Live demo', blog: 'Blog', col_company: 'Company', about: 'About', contact: 'Contact', col_legal: 'Legal', terms: 'Terms', privacy: 'Privacy', gdpr: 'GDPR', rights: 'All rights reserved.', cta: 'Free 14-day trial →' },
    de: { brand_desc: 'Der 24/7-KI-Assistent für lokale Unternehmen in Europa. 8 Sprachen, automatische Terminbuchung, intelligente FAQ.', col_product: 'Produkt', features: 'Funktionen', pricing: 'Preise', demo: 'Live-Demo', blog: 'Blog', col_company: 'Unternehmen', about: 'Über uns', contact: 'Kontakt', col_legal: 'Rechtliches', terms: 'AGB', privacy: 'Datenschutz', gdpr: 'DSGVO', rights: 'Alle Rechte vorbehalten.', cta: '14 Tage kostenlos testen →' },
    it: { brand_desc: "L'assistente IA 24/7 per le attività locali in Europa. 8 lingue, prenotazioni automatiche, FAQ intelligente.", col_product: 'Prodotto', features: 'Funzionalità', pricing: 'Prezzi', demo: 'Demo live', blog: 'Blog', col_company: 'Azienda', about: 'Chi siamo', contact: 'Contatto', col_legal: 'Legale', terms: 'Termini', privacy: 'Privacy', gdpr: 'GDPR', rights: 'Tutti i diritti riservati.', cta: 'Prova gratuita 14 giorni →' },
    es: { brand_desc: 'El asistente IA 24/7 para negocios locales en Europa. 8 idiomas, citas automáticas, FAQ inteligente.', col_product: 'Producto', features: 'Funcionalidades', pricing: 'Precios', demo: 'Demo en vivo', blog: 'Blog', col_company: 'Empresa', about: 'Acerca de', contact: 'Contacto', col_legal: 'Legal', terms: 'Términos', privacy: 'Privacidad', gdpr: 'RGPD', rights: 'Todos los derechos reservados.', cta: 'Prueba gratuita 14 días →' },
    pt: { brand_desc: 'O assistente IA 24/7 para negócios locais na Europa. 8 línguas, marcações automáticas, FAQ inteligente.', col_product: 'Produto', features: 'Funcionalidades', pricing: 'Preços', demo: 'Demo ao vivo', blog: 'Blog', col_company: 'Empresa', about: 'Sobre', contact: 'Contacto', col_legal: 'Legal', terms: 'Termos', privacy: 'Privacidade', gdpr: 'RGPD', rights: 'Todos os direitos reservados.', cta: 'Teste gratuito 14 dias →' },
    nl: { brand_desc: 'De 24/7 AI-assistent voor lokale bedrijven in Europa. 8 talen, automatische afspraken, slimme FAQ.', col_product: 'Product', features: 'Functies', pricing: 'Prijzen', demo: 'Live demo', blog: 'Blog', col_company: 'Bedrijf', about: 'Over ons', contact: 'Contact', col_legal: 'Juridisch', terms: 'Voorwaarden', privacy: 'Privacy', gdpr: 'AVG', rights: 'Alle rechten voorbehouden.', cta: '14 dagen gratis proberen →' },
    pl: { brand_desc: 'Asystent AI 24/7 dla lokalnych firm w Europie. 8 języków, automatyczne rezerwacje, inteligentne FAQ.', col_product: 'Produkt', features: 'Funkcje', pricing: 'Ceny', demo: 'Live demo', blog: 'Blog', col_company: 'Firma', about: 'O nas', contact: 'Kontakt', col_legal: 'Prawne', terms: 'Regulamin', privacy: 'Prywatność', gdpr: 'RODO', rights: 'Wszelkie prawa zastrzeżone.', cta: 'Bezpłatny test 14 dni →' },
  };

  function ft() {
    const lang = localStorage.getItem('lr_lang') || (navigator.language || 'fr').substring(0,2).toLowerCase();
    return FOOTER_T[lang] || FOOTER_T.fr;
  }

  function link(href, label) {
    return `<a href="${href}" style="display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;margin-bottom:10px;transition:color 0.2s;" onmouseenter="this.style.color='#00D4FF'" onmouseleave="this.style.color='rgba(255,255,255,0.6)'">${label}</a>`;
  }

  function buildFooter() {
    const t = ft();
    return `
    <footer id="lr-footer" style="background:#060E1C;border-top:1px solid rgba(255,255,255,0.07);padding:48px 24px 32px;font-family:'DM Sans','Segoe UI',system-ui,-apple-system,sans-serif;">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;">

          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
              <img src="/assets/logo.png" alt="LocalReply" style="width:32px;height:32px;background:transparent;">
              <span style="font-size:16px;font-weight:800;color:#fff;">LocalReply</span>
            </div>
            <p id="lr-footer-desc" style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:280px;">${t.brand_desc}</p>
            <div style="margin-top:16px;font-size:13px;color:rgba(255,255,255,0.35);">🇫🇷 FR · 🇬🇧 EN · 🇩🇪 DE · 🇮🇹 IT · 🇪🇸 ES · 🇵🇹 PT · 🇳🇱 NL · 🇵🇱 PL</div>
          </div>

          <div>
            <div id="lr-footer-col-product" style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">${t.col_product}</div>
            ${link(withLang('/features'), `<span id="lr-footer-features">${t.features}</span>`)}
            ${link(withLang('/pricing'), `<span id="lr-footer-pricing">${t.pricing}</span>`)}
            ${link('/demo', `<span id="lr-footer-demo">${t.demo}</span>`)}
            ${link(withLang('/blog'), `<span id="lr-footer-blog">${t.blog}</span>`)}
          </div>

          <div>
            <div id="lr-footer-col-company" style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">${t.col_company}</div>
            ${link(withLang('/about'), `<span id="lr-footer-about">${t.about}</span>`)}
            ${link(withLang('/contact'), `<span id="lr-footer-contact">${t.contact}</span>`)}
          </div>

          <div>
            <div id="lr-footer-col-legal" style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">${t.col_legal}</div>
            ${link(withLang('/terms'), `<span id="lr-footer-terms">${t.terms}</span>`)}
            ${link(withLang('/privacy'), `<span id="lr-footer-privacy">${t.privacy}</span>`)}
            ${link(withLang('/gdpr'), `<span id="lr-footer-gdpr">${t.gdpr}</span>`)}
          </div>
        </div>

        <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
          <div id="lr-footer-rights" style="font-size:13px;color:rgba(255,255,255,0.3);">© ${new Date().getFullYear()} LocalReply. ${t.rights}</div>
          <a id="lr-footer-cta" href="${withLang('/auth')}" style="padding:9px 20px;background:linear-gradient(135deg,#0052CC,#00D4FF);border-radius:9px;color:#fff;font-size:13px;font-weight:700;text-decoration:none;">${t.cta}</a>
        </div>
      </div>

      <style>
        @media(max-width:768px){
          #lr-footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          #lr-footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
        @media(max-width:480px){
          #lr-footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      </style>
    </footer>`;
  }

  document.body.insertAdjacentHTML('beforeend', buildFooter());

  // Expose re-render function so lrApplyLang can update the footer
  window.lrUpdateFooter = function() {
    const footer = document.getElementById('lr-footer');
    if (!footer) return;
    const t = ft();
    const ids = {
      'lr-footer-desc': t.brand_desc,
      'lr-footer-col-product': t.col_product,
      'lr-footer-features': t.features,
      'lr-footer-pricing': t.pricing,
      'lr-footer-demo': t.demo,
      'lr-footer-blog': t.blog,
      'lr-footer-col-company': t.col_company,
      'lr-footer-about': t.about,
      'lr-footer-contact': t.contact,
      'lr-footer-col-legal': t.col_legal,
      'lr-footer-terms': t.terms,
      'lr-footer-privacy': t.privacy,
      'lr-footer-gdpr': t.gdpr,
      'lr-footer-rights': `© ${new Date().getFullYear()} LocalReply. ${t.rights}`,
      'lr-footer-cta': t.cta,
    };
    Object.entries(ids).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    });
  };
})();
