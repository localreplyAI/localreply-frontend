// ═══════════════════════════════════════════════════════════════
// LocalReply Dashboard — Shared i18n translations
// Used by all dashboard-*.html pages
// Apply with: window.lrDashApplyLang(lang)
// ═══════════════════════════════════════════════════════════════

const LR_DASH_T = {
  fr: {
    // Nav sidebar
    nav_home: 'Accueil', nav_config: 'Configuration', nav_messages: 'Messages',
    nav_rdv: 'Rendez-vous', nav_analytics: 'Analytics', nav_account: 'Mon compte',
    nav_billing: 'Abonnement', nav_back: 'Retour au site', nav_logout: 'Déconnexion',
    nav_pro: 'PRO', nav_section_account: 'Compte',
    // Mobile nav
    mob_home: 'Accueil', mob_config: 'Config', mob_messages: 'Messages',
    mob_rdv: 'RDV', mob_more: 'Plus',
    // Common
    loading: 'Chargement...', error: 'Erreur', save: 'Enregistrer',
    cancel: 'Annuler', close: 'Fermer', edit: 'Modifier', delete: 'Supprimer',
    add: 'Ajouter', confirm: 'Confirmer', send: 'Envoyer', yes: 'Oui', no: 'Non',
    days_30: '30 derniers jours', days_7: '7 derniers jours', days_90: '90 jours',
    logout_confirm: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    session_expired: 'Session expirée. Veuillez vous reconnecter.',
    subscription_expired: 'Votre abonnement a expiré ou été annulé. Choisissez un plan pour continuer.',
    start_trial: 'Démarrer votre essai',
  },
  en: {
    nav_home: 'Home', nav_config: 'Configuration', nav_messages: 'Messages',
    nav_rdv: 'Appointments', nav_analytics: 'Analytics', nav_account: 'My account',
    nav_billing: 'Subscription', nav_back: 'Back to site', nav_logout: 'Sign out',
    nav_pro: 'PRO', nav_section_account: 'Account',
    mob_home: 'Home', mob_config: 'Config', mob_messages: 'Messages',
    mob_rdv: 'Appts', mob_more: 'More',
    loading: 'Loading...', error: 'Error', save: 'Save',
    cancel: 'Cancel', close: 'Close', edit: 'Edit', delete: 'Delete',
    add: 'Add', confirm: 'Confirm', send: 'Send', yes: 'Yes', no: 'No',
    days_30: 'Last 30 days', days_7: 'Last 7 days', days_90: '90 days',
    logout_confirm: 'Are you sure you want to sign out?',
    session_expired: 'Session expired. Please sign in again.',
    subscription_expired: 'Your subscription has expired or been cancelled. Choose a plan to continue.',
    start_trial: 'Start your trial',
  },
  de: {
    nav_home: 'Startseite', nav_config: 'Konfiguration', nav_messages: 'Nachrichten',
    nav_rdv: 'Termine', nav_analytics: 'Analytics', nav_account: 'Mein Konto',
    nav_billing: 'Abonnement', nav_back: 'Zurück zur Website', nav_logout: 'Abmelden',
    nav_pro: 'PRO', nav_section_account: 'Konto',
    mob_home: 'Start', mob_config: 'Konfig', mob_messages: 'Nachr.',
    mob_rdv: 'Termine', mob_more: 'Mehr',
    loading: 'Laden...', error: 'Fehler', save: 'Speichern',
    cancel: 'Abbrechen', close: 'Schließen', edit: 'Bearbeiten', delete: 'Löschen',
    add: 'Hinzufügen', confirm: 'Bestätigen', send: 'Senden', yes: 'Ja', no: 'Nein',
    days_30: 'Letzte 30 Tage', days_7: 'Letzte 7 Tage', days_90: '90 Tage',
    logout_confirm: 'Sind Sie sicher, dass Sie sich abmelden möchten?',
    session_expired: 'Sitzung abgelaufen. Bitte erneut anmelden.',
    subscription_expired: 'Ihr Abonnement ist abgelaufen oder wurde gekündigt. Wählen Sie einen Plan.',
    start_trial: 'Testphase starten',
  },
  it: {
    nav_home: 'Home', nav_config: 'Configurazione', nav_messages: 'Messaggi',
    nav_rdv: 'Appuntamenti', nav_analytics: 'Analytics', nav_account: 'Il mio account',
    nav_billing: 'Abbonamento', nav_back: 'Torna al sito', nav_logout: 'Esci',
    nav_pro: 'PRO', nav_section_account: 'Account',
    mob_home: 'Home', mob_config: 'Config', mob_messages: 'Messaggi',
    mob_rdv: 'App.ti', mob_more: 'Altro',
    loading: 'Caricamento...', error: 'Errore', save: 'Salva',
    cancel: 'Annulla', close: 'Chiudi', edit: 'Modifica', delete: 'Elimina',
    add: 'Aggiungi', confirm: 'Conferma', send: 'Invia', yes: 'Sì', no: 'No',
    days_30: 'Ultimi 30 giorni', days_7: 'Ultimi 7 giorni', days_90: '90 giorni',
    logout_confirm: 'Sei sicuro di voler uscire?',
    session_expired: 'Sessione scaduta. Accedi di nuovo.',
    subscription_expired: 'Il tuo abbonamento è scaduto o annullato. Scegli un piano.',
    start_trial: 'Inizia la prova',
  },
  es: {
    nav_home: 'Inicio', nav_config: 'Configuración', nav_messages: 'Mensajes',
    nav_rdv: 'Citas', nav_analytics: 'Analytics', nav_account: 'Mi cuenta',
    nav_billing: 'Suscripción', nav_back: 'Volver al sitio', nav_logout: 'Cerrar sesión',
    nav_pro: 'PRO', nav_section_account: 'Cuenta',
    mob_home: 'Inicio', mob_config: 'Config', mob_messages: 'Mensajes',
    mob_rdv: 'Citas', mob_more: 'Más',
    loading: 'Cargando...', error: 'Error', save: 'Guardar',
    cancel: 'Cancelar', close: 'Cerrar', edit: 'Editar', delete: 'Eliminar',
    add: 'Añadir', confirm: 'Confirmar', send: 'Enviar', yes: 'Sí', no: 'No',
    days_30: 'Últimos 30 días', days_7: 'Últimos 7 días', days_90: '90 días',
    logout_confirm: '¿Seguro que quieres cerrar sesión?',
    session_expired: 'Sesión expirada. Vuelve a iniciar sesión.',
    subscription_expired: 'Tu suscripción ha expirado o se ha cancelado. Elige un plan.',
    start_trial: 'Iniciar prueba',
  },
  pt: {
    nav_home: 'Início', nav_config: 'Configuração', nav_messages: 'Mensagens',
    nav_rdv: 'Marcações', nav_analytics: 'Analytics', nav_account: 'A minha conta',
    nav_billing: 'Subscrição', nav_back: 'Voltar ao site', nav_logout: 'Sair',
    nav_pro: 'PRO', nav_section_account: 'Conta',
    mob_home: 'Início', mob_config: 'Config', mob_messages: 'Msg',
    mob_rdv: 'Marc.', mob_more: 'Mais',
    loading: 'A carregar...', error: 'Erro', save: 'Guardar',
    cancel: 'Cancelar', close: 'Fechar', edit: 'Editar', delete: 'Eliminar',
    add: 'Adicionar', confirm: 'Confirmar', send: 'Enviar', yes: 'Sim', no: 'Não',
    days_30: 'Últimos 30 dias', days_7: 'Últimos 7 dias', days_90: '90 dias',
    logout_confirm: 'Tem a certeza que quer sair?',
    session_expired: 'Sessão expirada. Por favor inicie sessão novamente.',
    subscription_expired: 'A sua subscrição expirou ou foi cancelada. Escolha um plano.',
    start_trial: 'Iniciar teste',
  },
  nl: {
    nav_home: 'Home', nav_config: 'Configuratie', nav_messages: 'Berichten',
    nav_rdv: 'Afspraken', nav_analytics: 'Analytics', nav_account: 'Mijn account',
    nav_billing: 'Abonnement', nav_back: 'Terug naar site', nav_logout: 'Uitloggen',
    nav_pro: 'PRO', nav_section_account: 'Account',
    mob_home: 'Home', mob_config: 'Config', mob_messages: 'Ber.',
    mob_rdv: 'Afsp.', mob_more: 'Meer',
    loading: 'Laden...', error: 'Fout', save: 'Opslaan',
    cancel: 'Annuleren', close: 'Sluiten', edit: 'Bewerken', delete: 'Verwijderen',
    add: 'Toevoegen', confirm: 'Bevestigen', send: 'Verzenden', yes: 'Ja', no: 'Nee',
    days_30: 'Laatste 30 dagen', days_7: 'Laatste 7 dagen', days_90: '90 dagen',
    logout_confirm: 'Weet u zeker dat u wilt uitloggen?',
    session_expired: 'Sessie verlopen. Log opnieuw in.',
    subscription_expired: 'Uw abonnement is verlopen of geannuleerd. Kies een plan.',
    start_trial: 'Proef starten',
  },
  pl: {
    nav_home: 'Strona główna', nav_config: 'Konfiguracja', nav_messages: 'Wiadomości',
    nav_rdv: 'Wizyty', nav_analytics: 'Analytics', nav_account: 'Moje konto',
    nav_billing: 'Subskrypcja', nav_back: 'Powrót do strony', nav_logout: 'Wyloguj się',
    nav_pro: 'PRO', nav_section_account: 'Konto',
    mob_home: 'Główna', mob_config: 'Konfig', mob_messages: 'Wiad.',
    mob_rdv: 'Wizyty', mob_more: 'Więcej',
    loading: 'Ładowanie...', error: 'Błąd', save: 'Zapisz',
    cancel: 'Anuluj', close: 'Zamknij', edit: 'Edytuj', delete: 'Usuń',
    add: 'Dodaj', confirm: 'Potwierdź', send: 'Wyślij', yes: 'Tak', no: 'Nie',
    days_30: 'Ostatnie 30 dni', days_7: 'Ostatnie 7 dni', days_90: '90 dni',
    logout_confirm: 'Czy na pewno chcesz się wylogować?',
    session_expired: 'Sesja wygasła. Zaloguj się ponownie.',
    subscription_expired: 'Twoja subskrypcja wygasła lub została anulowana. Wybierz plan.',
    start_trial: 'Rozpocznij okres próbny',
  },
};

// IDs des éléments communs de navigation présents dans chaque page dashboard
const LR_DASH_NAV_IDS = {
  'dn-home':        'nav_home',
  'dn-config':      'nav_config',
  'dn-messages':    'nav_messages',
  'dn-rdv':         'nav_rdv',
  'dn-analytics':   'nav_analytics',
  'dn-account':     'nav_account',
  'dn-billing':     'nav_billing',
  'dn-back':        'nav_back',
  'dn-logout':      'nav_logout',
  'dn-pro':         'nav_pro',
  'dn-section-account': 'nav_section_account',
  // Mobile
  'dn-mob-home':    'mob_home',
  'dn-mob-config':  'mob_config',
  'dn-mob-messages':'mob_messages',
  'dn-mob-rdv':     'mob_rdv',
  'dn-mob-more':    'mob_more',
};

function lrDashGetLang() {
  const lang = localStorage.getItem('lr_lang') || (navigator.language || 'fr').substring(0,2).toLowerCase();
  return LR_DASH_T.hasOwnProperty(lang) ? lang : 'fr';
}

function lrDashT(key) {
  const lang = lrDashGetLang();
  return LR_DASH_T[lang][key] || LR_DASH_T['fr'][key] || key;
}

function lrDashApplyNav() {
  const lang = lrDashGetLang();
  const t = LR_DASH_T[lang];
  // Apply nav ids
  Object.entries(LR_DASH_NAV_IDS).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });
  // data-i18n fallback
  document.querySelectorAll('[data-dash-i18n]').forEach(el => {
    const key = el.getAttribute('data-dash-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
}

// Auto-apply on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lrDashApplyNav);
} else {
  lrDashApplyNav();
}
