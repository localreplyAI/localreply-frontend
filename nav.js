
// Vérification expiration token JWT
(function() {
  const token = localStorage.getItem('auth_token');
  const publicPages = ['/', '/auth', '/home', '/features', '/pricing', '/about', '/blog', '/chat'];
  const path = window.location.pathname;
  const isDashboard = path.startsWith('/dashboard') || 
                      path === '/mon-compte' || 
                      path === '/abonnement' ||
                      path === '/onboarding' ||
                      path === '/choisir-plan';
  
  if (!isDashboard) return; // Pages publiques — pas de vérif
  
  if (!token) {
    window.location.href = '/auth';
    return;
  }
  
  // Vérifier expiration
  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));
    const exp = payload.exp;
    if (exp && Date.now() / 1000 > exp) {
      // Token expiré
      localStorage.removeItem('auth_token');
      localStorage.removeItem('business_id');
      localStorage.removeItem('business_slug');
      window.location.href = '/auth?expired=1';
    }
  } catch(e) {
    // Token malformé
    localStorage.removeItem('auth_token');
    window.location.href = '/auth';
  }
})();

// ══════════════════════════════════════════════
//  LocalReply — Navbar publique partagée
//  Injecté sur toutes les pages publiques
// ══════════════════════════════════════════════

(function() {
  const currentPath = window.location.pathname;

  const links = [
    { href: '/',          label: 'Accueil',         i18n: 'nav_home'     },
    { href: '/features',  label: 'Fonctionnalités', i18n: 'nav_features' },
    { href: '/pricing',   label: 'Tarifs',          i18n: 'nav_pricing'  },
    { href: '/demo',      label: 'Démo',            i18n: 'nav_demo'     },
    { href: '/about',     label: 'À propos',        i18n: 'nav_about'    },
  ];

  const isActive = (href) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  const token = localStorage.getItem('auth_token');
  const isLoggedIn = !!token;

  const navHTML = `
    <nav id="lr-navbar" style="
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: rgba(10,22,40,0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    ">
      <div style="max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:64px;">

        <!-- Logo -->
        <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
          <img src="/assets/logo.png"
            alt="LocalReply" style="width:36px;height:36px;border-radius:0;background:transparent;">
          <span style="font-size:17px;font-weight:800;color:#fff;letter-spacing:-0.3px;">LocalReply</span>
        </a>

        <!-- Links desktop -->
        <div id="lr-nav-links" style="display:flex;align-items:center;gap:4px;">
          ${links.map(l => `
            <a href="${l.href}" style="
              padding:8px 14px;border-radius:9px;text-decoration:none;font-size:14px;font-weight:600;
              transition:all 0.2s;
              color:${isActive(l.href) ? '#00D4FF' : 'rgba(255,255,255,0.7)'};
              background:${isActive(l.href) ? 'rgba(0,212,255,0.1)' : 'transparent'};
            "
            onmouseenter="this.style.color='#fff';this.style.background='rgba(255,255,255,0.07)'"
            onmouseleave="this.style.color='${isActive(l.href) ? '#00D4FF' : 'rgba(255,255,255,0.7)'}';\
this.style.background='${isActive(l.href) ? 'rgba(0,212,255,0.1)' : 'transparent'}'">
              <span data-i18n="${l.i18n}">${l.label}</span>
            </a>
          `).join('')}
        </div>

        <!-- CTA -->
        <div style="display:flex;align-items:center;gap:10px;">
          ${isLoggedIn ? `
            <a href="/dashboard" style="
              padding:9px 18px;background:linear-gradient(135deg,#0052CC,#00D4FF);
              border-radius:10px;color:#fff;font-size:14px;font-weight:700;text-decoration:none;
              box-shadow:0 4px 12px rgba(0,82,204,0.35);transition:all 0.2s;
            "
            onmouseenter="this.style.transform='translateY(-1px)'"
            onmouseleave="this.style.transform='none'">
              Dashboard →
            </a>
          ` : `
            <a href="/auth" style="
              padding:9px 16px;background:transparent;border:1px solid rgba(255,255,255,0.2);
              border-radius:10px;color:rgba(255,255,255,0.8);font-size:14px;font-weight:600;
              text-decoration:none;transition:all 0.2s;
            "
            onmouseenter="this.style.borderColor='rgba(255,255,255,0.5)';this.style.color='#fff'"
            onmouseleave="this.style.borderColor='rgba(255,255,255,0.2)';this.style.color='rgba(255,255,255,0.8)'">
              <span data-i18n="nav_login">Connexion</span>
            </a>
            <a href="/auth" style="
              padding:9px 18px;background:linear-gradient(135deg,#0052CC,#00D4FF);
              border-radius:10px;color:#fff;font-size:14px;font-weight:700;text-decoration:none;
              box-shadow:0 4px 12px rgba(0,82,204,0.35);transition:all 0.2s;white-space:nowrap;
            "
            onmouseenter="this.style.transform='translateY(-1px)'"
            onmouseleave="this.style.transform='none'">
              <span data-i18n="nav_cta">Essai gratuit →</span>
            </a>
          `}

          <!-- Sélecteur de langue -->
          <div id="lr-lang-wrap" style="position:relative;">
            <button id="lr-lang-btn" onclick="lrToggleLangMenu()" style="
              background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);
              border-radius:8px;color:#fff;font-size:13px;font-weight:600;
              padding:7px 12px;cursor:pointer;white-space:nowrap;
              transition:background 0.2s;
            "
            onmouseenter="this.style.background='rgba(255,255,255,0.12)'"
            onmouseleave="this.style.background='rgba(255,255,255,0.07)'">
              🌍 FR ▾
            </button>
            <div id="lr-lang-dd" style="
              display:none;position:absolute;top:calc(100% + 8px);right:0;
              background:#0D1B2E;border:1px solid rgba(0,212,255,0.2);
              border-radius:10px;padding:6px;min-width:160px;
              box-shadow:0 12px 40px rgba(0,0,0,0.5);z-index:9999;
            ">
              ${['fr:🇫🇷:Français','en:🇬🇧:English','de:🇩🇪:Deutsch','it:🇮🇹:Italiano','es:🇪🇸:Español','pt:🇵🇹:Português','nl:🇳🇱:Nederlands','pl:🇵🇱:Polski'].map(l => {
                const [code,flag,name] = l.split(':');
                return `<button onclick="lrApplyLang('${code}')" style="
                  width:100%;padding:8px 10px;background:none;border:none;
                  color:rgba(255,255,255,0.85);font-size:13px;cursor:pointer;
                  text-align:left;border-radius:7px;display:flex;align-items:center;gap:8px;
                " onmouseover="this.style.background='rgba(0,212,255,0.1)'"
                   onmouseout="this.style.background='none'">
                  ${flag} ${name}
                </button>`;
              }).join('')}
            </div>
          </div>

          <!-- Burger mobile -->
          <button id="lr-burger" onclick="lrToggleMenu()" style="
            display:none;background:transparent;border:none;cursor:pointer;
            padding:8px;color:#fff;font-size:22px;line-height:1;
          ">☰</button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div id="lr-mobile-menu" style="
        display:none;background:rgba(10,22,40,0.98);
        border-top:1px solid rgba(255,255,255,0.08);
        padding:16px 24px 24px;flex-direction:column;gap:4px;
      ">
        ${links.map(l => `
          <a href="${l.href}" style="
            display:block;padding:13px 16px;border-radius:10px;text-decoration:none;
            font-size:15px;font-weight:600;transition:all 0.2s;
            color:${isActive(l.href) ? '#00D4FF' : 'rgba(255,255,255,0.8)'};
            background:${isActive(l.href) ? 'rgba(0,212,255,0.1)' : 'transparent'};
          "><span data-i18n="${l.i18n}">${l.label}</span></a>
        `).join('')}
        <div style="height:1px;background:rgba(255,255,255,0.08);margin:12px 0;"></div>
        ${isLoggedIn ? `
          <a href="/dashboard" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:700;background:linear-gradient(135deg,#0052CC,#00D4FF);color:#fff;text-align:center;">Dashboard →</a>
        ` : `
          <a href="/auth" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:600;color:rgba(255,255,255,0.8);text-align:center;border:1px solid rgba(255,255,255,0.2);margin-bottom:8px;"><span data-i18n="nav_login">Connexion</span></a>
          <a href="/auth" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:700;background:linear-gradient(135deg,#0052CC,#00D4FF);color:#fff;text-align:center;"><span data-i18n="nav_cta">Essai gratuit →</span></a>
        `}
      </div>
    </nav>
    <div style="height:64px;"></div>
  `;

  // Injecter au début du body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Responsive
  function lrCheckResponsive() {
    const burger = document.getElementById('lr-burger');
    const links = document.getElementById('lr-nav-links');
    if (window.innerWidth < 768) {
      if (burger) burger.style.display = 'block';
      if (links) links.style.display = 'none';
    } else {
      if (burger) burger.style.display = 'none';
      if (links) links.style.display = 'flex';
      const menu = document.getElementById('lr-mobile-menu');
      if (menu) menu.style.display = 'none';
    }
  }

  window.lrToggleMenu = function() {
    const menu = document.getElementById('lr-mobile-menu');
    const burger = document.getElementById('lr-burger');
    if (!menu) return;
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    if (burger) burger.textContent = open ? '☰' : '✕';
  };

  window.addEventListener('resize', lrCheckResponsive);
  lrCheckResponsive();

  // Appliquer la langue sauvegardée à la navbar dès l'injection
  // (sur les pages sans i18n complet, seules les clés nav_* sont disponibles)
  const _navLang = localStorage.getItem('lr_lang') || (navigator.language || 'fr').substring(0, 2).toLowerCase();
  const _navTranslations = {
    fr: { nav_home: 'Accueil', nav_features: 'Fonctionnalités', nav_pricing: 'Tarifs', nav_demo: 'Démo', nav_about: 'À propos', nav_login: 'Connexion', nav_cta: 'Essai gratuit →' },
    en: { nav_home: 'Home', nav_features: 'Features', nav_pricing: 'Pricing', nav_demo: 'Demo', nav_about: 'About', nav_login: 'Sign in', nav_cta: 'Free trial →' },
    de: { nav_home: 'Startseite', nav_features: 'Funktionen', nav_pricing: 'Preise', nav_demo: 'Demo', nav_about: 'Über uns', nav_login: 'Anmelden', nav_cta: 'Kostenlos testen →' },
    it: { nav_home: 'Home', nav_features: 'Funzionalità', nav_pricing: 'Prezzi', nav_demo: 'Demo', nav_about: 'Chi siamo', nav_login: 'Accedi', nav_cta: 'Prova gratuita →' },
    es: { nav_home: 'Inicio', nav_features: 'Funcionalidades', nav_pricing: 'Precios', nav_demo: 'Demo', nav_about: 'Acerca de', nav_login: 'Iniciar sesión', nav_cta: 'Prueba gratuita →' },
    pt: { nav_home: 'Início', nav_features: 'Funcionalidades', nav_pricing: 'Preços', nav_demo: 'Demo', nav_about: 'Sobre', nav_login: 'Entrar', nav_cta: 'Teste gratuito →' },
    nl: { nav_home: 'Home', nav_features: 'Functies', nav_pricing: 'Prijzen', nav_demo: 'Demo', nav_about: 'Over ons', nav_login: 'Inloggen', nav_cta: 'Gratis proberen →' },
    pl: { nav_home: 'Strona główna', nav_features: 'Funkcje', nav_pricing: 'Ceny', nav_demo: 'Demo', nav_about: 'O nas', nav_login: 'Zaloguj się', nav_cta: 'Bezpłatny test →' },
  };

  function lrApplyNavLang(lang) {
    const t = _navTranslations[lang] || _navTranslations.fr;
    // Mettre à jour tous les éléments data-i18n dans la navbar uniquement
    const navbar = document.getElementById('lr-navbar');
    if (navbar) {
      navbar.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
      });
    }
    // Mettre à jour le bouton de langue
    const btn = document.getElementById('lr-lang-btn');
    const langMap = { fr:'🇫🇷', en:'🇬🇧', de:'🇩🇪', it:'🇮🇹', es:'🇪🇸', pt:'🇵🇹', nl:'🇳🇱', pl:'🇵🇱' };
    if (btn) btn.innerHTML = (langMap[lang] || '🌍') + ' ' + lang.toUpperCase() + ' ▾';
    localStorage.setItem('lr_lang', lang);
  }

  // Définir lrApplyLang globalement si elle n'existe pas encore (pages sans i18n complet)
  if (typeof window.lrApplyLang === 'undefined') {
    window.lrApplyLang = function(lang) {
      lrApplyNavLang(lang);
      const dd = document.getElementById('lr-lang-dd');
      if (dd) dd.style.display = 'none';
    };
  } else {
    // Sur home.html, lrApplyLang existe déjà — on la patch pour aussi mettre à jour la navbar
    const _originalApplyLang = window.lrApplyLang;
    window.lrApplyLang = function(lang) {
      _originalApplyLang(lang);
      lrApplyNavLang(lang);
    };
  }

  // Appliquer la langue au chargement
  const _supportedNavLangs = Object.keys(_navTranslations);
  lrApplyNavLang(_supportedNavLangs.indexOf(_navLang) >= 0 ? _navLang : 'fr');
})();
