// ══════════════════════════════════════════════
//  LocalReply — Navbar publique partagée
//  Injecté sur toutes les pages publiques
// ══════════════════════════════════════════════

(function() {
  const currentPath = window.location.pathname;

  const links = [
    { href: '/',          label: 'Accueil'         },
    { href: '/features',  label: 'Fonctionnalités' },
    { href: '/pricing',   label: 'Tarifs'          },
    { href: '/demo',      label: 'Démo'            },
    { href: '/blog',      label: 'Blog'            },
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
          <img src="https://localreplyai.odoo.com/web/image/641-827d8c47/logo%20localreplyAI%20v2-1.png"
            alt="LocalReply" style="width:32px;height:32px;border-radius:8px;background:#fff;padding:3px;">
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
              ${l.label}
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
              Connexion
            </a>
            <a href="/auth" style="
              padding:9px 18px;background:linear-gradient(135deg,#0052CC,#00D4FF);
              border-radius:10px;color:#fff;font-size:14px;font-weight:700;text-decoration:none;
              box-shadow:0 4px 12px rgba(0,82,204,0.35);transition:all 0.2s;white-space:nowrap;
            "
            onmouseenter="this.style.transform='translateY(-1px)'"
            onmouseleave="this.style.transform='none'">
              Essai gratuit →
            </a>
          `}

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
          ">${l.label}</a>
        `).join('')}
        <div style="height:1px;background:rgba(255,255,255,0.08);margin:12px 0;"></div>
        ${isLoggedIn ? `
          <a href="/dashboard" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:700;background:linear-gradient(135deg,#0052CC,#00D4FF);color:#fff;text-align:center;">Dashboard →</a>
        ` : `
          <a href="/auth" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:600;color:rgba(255,255,255,0.8);text-align:center;border:1px solid rgba(255,255,255,0.2);margin-bottom:8px;">Connexion</a>
          <a href="/auth" style="display:block;padding:13px 16px;border-radius:10px;text-decoration:none;font-size:15px;font-weight:700;background:linear-gradient(135deg,#0052CC,#00D4FF);color:#fff;text-align:center;">Essai gratuit 14 jours →</a>
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
})();
