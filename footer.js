// ══════════════════════════════════════════════
//  LocalReply — Footer partagé
// ══════════════════════════════════════════════

(function() {
  const footerHTML = `
    <footer style="
      background:#060E1C;border-top:1px solid rgba(255,255,255,0.07);
      padding:48px 24px 32px;
      font-family:'Segoe UI',system-ui,-apple-system,sans-serif;
    ">
      <div style="max-width:1200px;margin:0 auto;">

        <!-- Grid -->
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;">

          <!-- Brand -->
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
              <img src="/assets/logo.png"
                alt="LocalReply" style="width:28px;height:28px;border-radius:7px;background:#fff;padding:3px;">
              <span style="font-size:16px;font-weight:800;color:#fff;">LocalReply</span>
            </div>
            <p style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.7;max-width:280px;">
              L'assistant IA 24/7 pour les petits commerces en Europe. 8 langues, prise de RDV automatique, FAQ intelligente.
            </p>
            <div style="margin-top:16px;font-size:13px;color:rgba(255,255,255,0.35);">
              🇫🇷 FR · 🇬🇧 EN · 🇩🇪 DE · 🇮🇹 IT · 🇪🇸 ES · 🇵🇹 PT · 🇳🇱 NL · 🇵🇱 PL
            </div>
          </div>

          <!-- Produit -->
          <div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">Produit</div>
            ${[
              ['/features', 'Fonctionnalités'],
              ['/pricing', 'Tarifs'],
              ['/demo', 'Démo live'],
              ['/blog', 'Blog'],
            ].map(([href, label]) => `<a href="${href}" style="display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;margin-bottom:10px;transition:color 0.2s;" onmouseenter="this.style.color='#00D4FF'" onmouseleave="this.style.color='rgba(255,255,255,0.6)'">${label}</a>`).join('')}
          </div>

          <!-- Entreprise -->
          <div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">Entreprise</div>
            ${[
              ['/about', 'À propos'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => `<a href="${href}" style="display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;margin-bottom:10px;transition:color 0.2s;" onmouseenter="this.style.color='#00D4FF'" onmouseleave="this.style.color='rgba(255,255,255,0.6)'">${label}</a>`).join('')}
          </div>

          <!-- Légal -->
          <div>
            <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:14px;">Légal</div>
            ${[
              ['/terms', 'CGU'],
              ['/privacy', 'Confidentialité'],
              ['/gdpr', 'RGPD'],
            ].map(([href, label]) => `<a href="${href}" style="display:block;font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;margin-bottom:10px;transition:color 0.2s;" onmouseenter="this.style.color='#00D4FF'" onmouseleave="this.style.color='rgba(255,255,255,0.6)'">${label}</a>`).join('')}
          </div>
        </div>

        <!-- Bottom -->
        <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
          <div style="font-size:13px;color:rgba(255,255,255,0.3);">
            © ${new Date().getFullYear()} LocalReply. Tous droits réservés.
          </div>
          <a href="/auth" style="
            padding:9px 20px;background:linear-gradient(135deg,#0052CC,#00D4FF);
            border-radius:9px;color:#fff;font-size:13px;font-weight:700;text-decoration:none;
          ">Essai gratuit 14 jours →</a>
        </div>
      </div>

      <!-- Mobile responsive -->
      <style>
        @media(max-width:768px){
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media(max-width:480px){
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      </style>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
