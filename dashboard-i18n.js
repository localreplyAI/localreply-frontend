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
  "\"Ajouter \u00e0 la FAQ\"": {en:"\"Add to FAQ\"", de:"\"Zur FAQ hinzuf\u00fcgen\"", it:"\"Aggiungi al FAQ\"", es:"\"A\u00f1adir al FAQ\"", pt:"\"Adicionar ao FAQ\"", nl:"\"Toevoegen aan FAQ\"", pl:"\"Dodaj do FAQ\""},
  "Aucun service trouv\u00e9 \u2014": {en:"No service found \u2014", de:"Kein Dienst gefunden \u2014", it:"Nessun servizio trovato \u2014", es:"Ning\u00fan servicio encontrado \u2014", pt:"Nenhum servi\u00e7o encontrado \u2014", nl:"Geen dienst gevonden \u2014", pl:"Nie znaleziono us\u0142ugi \u2014"},
  "Aucune question trouv\u00e9e \u2014": {en:"No question found \u2014", de:"Keine Frage gefunden \u2014", it:"Nessuna domanda trovata \u2014", es:"Ninguna pregunta encontrada \u2014", pt:"Nenhuma pergunta encontrada \u2014", nl:"Geen vraag gevonden \u2014", pl:"Nie znaleziono pytania \u2014"},
  "irr\u00e9versible": {en:"irreversible", de:"unwiderruflich", it:"irreversibile", es:"irreversible", pt:"irrevers\u00edvel", nl:"onomkeerbaar", pl:"nieodwracalne"},
  "\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais": {en:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", de:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", it:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", es:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", pt:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", nl:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais", pl:"\ud83c\uddeb\ud83c\uddf7 Fran\u00e7ais"},
  "\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas": {en:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", de:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", it:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", es:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", pt:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", nl:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas", pl:"\ud83c\uddf5\ud83c\uddf9 Portugu\u00eas"}
,
  "Toutes vos donn\u00e9es seront d\u00e9finitivement supprim\u00e9es : configuration, conversations, RDV, FAQ. Action": {en:"All your data will be permanently deleted: configuration, conversations, appointments, FAQ. Action", de:"Alle Ihre Daten werden dauerhaft gel\u00f6scht: Konfiguration, Gespr\u00e4che, Termine, FAQ. Aktion", it:"Tutti i tuoi dati saranno definitivamente eliminati: configurazione, conversazioni, appuntamenti, FAQ. Azione", es:"Todos tus datos ser\u00e1n eliminados permanentemente: configuraci\u00f3n, conversaciones, citas, FAQ. Acci\u00f3n", pt:"Todos os seus dados ser\u00e3o eliminados permanentemente: configura\u00e7\u00e3o, conversas, marca\u00e7\u00f5es, FAQ. A\u00e7\u00e3o", nl:"Al uw gegevens worden permanent verwijderd: configuratie, gesprekken, afspraken, FAQ. Actie", pl:"Wszystkie Twoje dane zostan\u0105 trwale usuni\u0119te: konfiguracja, rozmowy, wizyty, FAQ. Akcja"}
,
  "❓ Question sans réponse": {"en":"❓ Unanswered question","de":"❓ Unbeantwortete Frage","it":"❓ Domanda senza risposta","es":"❓ Pregunta sin respuesta","pt":"❓ Pergunta sem resposta","nl":"❓ Onbeantwoorde vraag","pl":"❓ Pytanie bez odpowiedzi"}
,
  '🇫🇷 Français': {en:'🇫🇷 Français',de:'🇫🇷 Français',it:'🇫🇷 Français',es:'🇫🇷 Français',pt:'🇫🇷 Français',nl:'🇫🇷 Français',pl:'🇫🇷 Français'},
  '🇩🇪 Deutsch': {en:'🇩🇪 Deutsch',de:'🇩🇪 Deutsch',it:'🇩🇪 Deutsch',es:'🇩🇪 Deutsch',pt:'🇩🇪 Deutsch',nl:'🇩🇪 Deutsch',pl:'🇩🇪 Deutsch'},
  '🇮🇹 Italiano': {en:'🇮🇹 Italiano',de:'🇮🇹 Italiano',it:'🇮🇹 Italiano',es:'🇮🇹 Italiano',pt:'🇮🇹 Italiano',nl:'🇮🇹 Italiano',pl:'🇮🇹 Italiano'},
  '🇪🇸 Español': {en:'🇪🇸 Español',de:'🇪🇸 Español',it:'🇪🇸 Español',es:'🇪🇸 Español',pt:'🇪🇸 Español',nl:'🇪🇸 Español',pl:'🇪🇸 Español'},
  '🇬🇧 English': {en:'🇬🇧 English',de:'🇬🇧 English',it:'🇬🇧 English',es:'🇬🇧 English',pt:'🇬🇧 English',nl:'🇬🇧 English',pl:'🇬🇧 English'},
  '🇵🇹 Português': {en:'🇵🇹 Português',de:'🇵🇹 Português',it:'🇵🇹 Português',es:'🇵🇹 Português',pt:'🇵🇹 Português',nl:'🇵🇹 Português',pl:'🇵🇹 Português'},
  '🇳🇱 Nederlands': {en:'🇳🇱 Nederlands',de:'🇳🇱 Nederlands',it:'🇳🇱 Nederlands',es:'🇳🇱 Nederlands',pt:'🇳🇱 Nederlands',nl:'🇳🇱 Nederlands',pl:'🇳🇱 Nederlands'},
  '🇵🇱 Polski': {en:'🇵🇱 Polski',de:'🇵🇱 Polski',it:'🇵🇱 Polski',es:'🇵🇱 Polski',pt:'🇵🇱 Polski',nl:'🇵🇱 Polski',pl:'🇵🇱 Polski'}

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

// ═══════════════════════════════════════════════════════
// Universal text translator - replaces ALL visible French text
// Call: lrTranslateAll(lang) after DOM ready
// ═══════════════════════════════════════════════════════
const LR_TEXT_MAP = {
  // Sidebar common
  'Accueil': {en:'Home',de:'Startseite',it:'Home',es:'Inicio',pt:'Início',nl:'Home',pl:'Strona główna'},
  'Configuration': {en:'Configuration',de:'Konfiguration',it:'Configurazione',es:'Configuración',pt:'Configuração',nl:'Configuratie',pl:'Konfiguracja'},
  'Messages': {en:'Messages',de:'Nachrichten',it:'Messaggi',es:'Mensajes',pt:'Mensagens',nl:'Berichten',pl:'Wiadomości'},
  'Rendez-vous': {en:'Appointments',de:'Termine',it:'Appuntamenti',es:'Citas',pt:'Marcações',nl:'Afspraken',pl:'Wizyty'},
  'Analytics': {en:'Analytics',de:'Analytics',it:'Analytics',es:'Analytics',pt:'Analytics',nl:'Analytics',pl:'Analytics'},
  'Mon compte': {en:'My account',de:'Mein Konto',it:'Il mio account',es:'Mi cuenta',pt:'A minha conta',nl:'Mijn account',pl:'Moje konto'},
  'Abonnement': {en:'Subscription',de:'Abonnement',it:'Abbonamento',es:'Suscripción',pt:'Subscrição',nl:'Abonnement',pl:'Subskrypcja'},
  'Retour au site': {en:'Back to site',de:'Zurück zur Website',it:'Torna al sito',es:'Volver al sitio',pt:'Voltar ao site',nl:'Terug naar site',pl:'Powrót do strony'},
  'Déconnexion': {en:'Sign out',de:'Abmelden',it:'Esci',es:'Cerrar sesión',pt:'Sair',nl:'Uitloggen',pl:'Wyloguj się'},
  'Compte': {en:'Account',de:'Konto',it:'Account',es:'Cuenta',pt:'Conta',nl:'Account',pl:'Konto'},
  'Chargement...': {en:'Loading...',de:'Laden...',it:'Caricamento...',es:'Cargando...',pt:'A carregar...',nl:'Laden...',pl:'Ładowanie...'},
  // Days
  'Lundi': {en:'Monday',de:'Montag',it:'Lunedì',es:'Lunes',pt:'Segunda',nl:'Maandag',pl:'Poniedziałek'},
  'Mardi': {en:'Tuesday',de:'Dienstag',it:'Martedì',es:'Martes',pt:'Terça',nl:'Dinsdag',pl:'Wtorek'},
  'Mercredi': {en:'Wednesday',de:'Mittwoch',it:'Mercoledì',es:'Miércoles',pt:'Quarta',nl:'Woensdag',pl:'Środa'},
  'Jeudi': {en:'Thursday',de:'Donnerstag',it:'Giovedì',es:'Jueves',pt:'Quinta',nl:'Donderdag',pl:'Czwartek'},
  'Vendredi': {en:'Friday',de:'Freitag',it:'Venerdì',es:'Viernes',pt:'Sexta',nl:'Vrijdag',pl:'Piątek'},
  'Samedi': {en:'Saturday',de:'Samstag',it:'Sabato',es:'Sábado',pt:'Sábado',nl:'Zaterdag',pl:'Sobota'},
  'Dimanche': {en:'Sunday',de:'Sonntag',it:'Domenica',es:'Domingo',pt:'Domingo',nl:'Zondag',pl:'Niedziela'},
  'Fermé': {en:'Closed',de:'Geschlossen',it:'Chiuso',es:'Cerrado',pt:'Fechado',nl:'Gesloten',pl:'Zamknięte'},
  // Common UI
  'Enregistrer': {en:'Save',de:'Speichern',it:'Salva',es:'Guardar',pt:'Guardar',nl:'Opslaan',pl:'Zapisz'},
  'Annuler': {en:'Cancel',de:'Abbrechen',it:'Annulla',es:'Cancelar',pt:'Cancelar',nl:'Annuleren',pl:'Anuluj'},
  'Ajouter': {en:'Add',de:'Hinzufügen',it:'Aggiungi',es:'Añadir',pt:'Adicionar',nl:'Toevoegen',pl:'Dodaj'},
  'Modifier': {en:'Edit',de:'Bearbeiten',it:'Modifica',es:'Editar',pt:'Editar',nl:'Bewerken',pl:'Edytuj'},
  'Supprimer': {en:'Delete',de:'Löschen',it:'Elimina',es:'Eliminar',pt:'Eliminar',nl:'Verwijderen',pl:'Usuń'},
  'Ignorer': {en:'Ignore',de:'Ignorieren',it:'Ignora',es:'Ignorar',pt:'Ignorar',nl:'Negeren',pl:'Ignoruj'},
  'Confirmer': {en:'Confirm',de:'Bestätigen',it:'Conferma',es:'Confirmar',pt:'Confirmar',nl:'Bevestigen',pl:'Potwierdź'},
  'Déconnecter': {en:'Disconnect',de:'Trennen',it:'Disconnetti',es:'Desconectar',pt:'Desligar',nl:'Verbinding verbreken',pl:'Rozłącz'},
  'Rechercher...': {en:'Search...',de:'Suchen...',it:'Cerca...',es:'Buscar...',pt:'Pesquisar...',nl:'Zoeken...',pl:'Szukaj...'},
  '← Retour': {en:'← Back',de:'← Zurück',it:'← Indietro',es:'← Volver',pt:'← Voltar',nl:'← Terug',pl:'← Powrót'},
  'Voir tout →': {en:'See all →',de:'Alle anzeigen →',it:'Vedi tutto →',es:'Ver todo →',pt:'Ver tudo →',nl:'Alles zien →',pl:'Zobacz wszystko →'},
  // Forms & labels
  'Nom': {en:'Name',de:'Name',it:'Nome',es:'Nombre',pt:'Nome',nl:'Naam',pl:'Nazwa'},
  'Email': {en:'Email',de:'E-Mail',it:'Email',es:'Email',pt:'Email',nl:'E-mail',pl:'Email'},
  'Téléphone': {en:'Phone',de:'Telefon',it:'Telefono',es:'Teléfono',pt:'Telefone',nl:'Telefoon',pl:'Telefon'},
  'Description': {en:'Description',de:'Beschreibung',it:'Descrizione',es:'Descripción',pt:'Descrição',nl:'Beschrijving',pl:'Opis'},
  'Adresse': {en:'Address',de:'Adresse',it:'Indirizzo',es:'Dirección',pt:'Endereço',nl:'Adres',pl:'Adres'},
  'Adresse complète': {en:'Full address',de:'Vollständige Adresse',it:'Indirizzo completo',es:'Dirección completa',pt:'Endereço completo',nl:'Volledig adres',pl:'Pełny adres'},
  'Question': {en:'Question',de:'Frage',it:'Domanda',es:'Pregunta',pt:'Pergunta',nl:'Vraag',pl:'Pytanie'},
  'Réponse': {en:'Answer',de:'Antwort',it:'Risposta',es:'Respuesta',pt:'Resposta',nl:'Antwoord',pl:'Odpowiedź'},
  'Langue': {en:'Language',de:'Sprache',it:'Lingua',es:'Idioma',pt:'Idioma',nl:'Taal',pl:'Język'},
  'Fuseau horaire': {en:'Time zone',de:'Zeitzone',it:'Fuso orario',es:'Zona horaria',pt:'Fuso horário',nl:'Tijdzone',pl:'Strefa czasowa'},
  'Aucun': {en:'None',de:'Keine',it:'Nessuno',es:'Ninguno',pt:'Nenhum',nl:'Geen',pl:'Brak'},
  // Stats & dashboard
  'RDV confirmés': {en:'Confirmed appts',de:'Bestätigte Termine',it:'App. confermati',es:'Citas confirmadas',pt:'Marcações confirmadas',nl:'Bevestigde afspraken',pl:'Potwierdzone wizyty'},
  'À traiter': {en:'To handle',de:'Zu bearbeiten',it:'Da gestire',es:'Por gestionar',pt:'A tratar',nl:'Te verwerken',pl:'Do obsługi'},
  'Conversations': {en:'Conversations',de:'Gespräche',it:'Conversazioni',es:'Conversaciones',pt:'Conversas',nl:'Gesprekken',pl:'Rozmowy'},
  '30 derniers jours': {en:'Last 30 days',de:'Letzte 30 Tage',it:'Ultimi 30 giorni',es:'Últimos 30 días',pt:'Últimos 30 dias',nl:'Laatste 30 dagen',pl:'Ostatnie 30 dni'},
  '— 30 derniers jours': {en:'— Last 30 days',de:'— Letzte 30 Tage',it:'— Ultimi 30 giorni',es:'— Últimos 30 días',pt:'— Últimos 30 dias',nl:'— Laatste 30 dagen',pl:'— Ostatnie 30 dni'},
  'Voir tout →': {en:'See all →',de:'Alle anzeigen →',it:'Vedi tutto →',es:'Ver todo →',pt:'Ver tudo →',nl:'Alles zien →',pl:'Zobacz wszystko →'},
  'Aucune activité récente': {en:'No recent activity',de:'Keine letzte Aktivität',it:'Nessuna attività recente',es:'Sin actividad reciente',pt:'Sem atividade recente',nl:'Geen recente activiteit',pl:'Brak ostatniej aktywności'},
  // Config
  '+ Ajouter': {en:'+ Add',de:'+ Hinzufügen',it:'+ Aggiungi',es:'+ Añadir',pt:'+ Adicionar',nl:'+ Toevoegen',pl:'+ Dodaj'},
  '+ Règle': {en:'+ Rule',de:'+ Regel',it:'+ Regola',es:'+ Regla',pt:'+ Regra',nl:'+ Regel',pl:'+ Reguła'},
  '+ Service': {en:'+ Service',de:'+ Dienst',it:'+ Servizio',es:'+ Servicio',pt:'+ Serviço',nl:'+ Dienst',pl:'+ Usługa'},
  'Aucun service trouvé': {en:'No service found',de:'Kein Dienst gefunden',it:'Nessun servizio trovato',es:'Ningún servicio encontrado',pt:'Nenhum serviço encontrado',nl:'Geen dienst gevonden',pl:'Nie znaleziono usługi'},
  'Aucune question trouvée': {en:'No question found',de:'Keine Frage gefunden',it:'Nessuna domanda trovata',es:'Ninguna pregunta encontrada',pt:'Nenhuma pergunta encontrada',nl:'Geen vraag gevonden',pl:'Nie znaleziono pytania'},
  // Messages
  'À traiter en priorité': {en:'Priority to handle',de:'Vorrangig zu bearbeiten',it:'Da gestire con priorità',es:'Tratar con prioridad',pt:'A tratar com prioridade',nl:'Prioriteit te verwerken',pl:'Priorytetowo do obsługi'},
  'Répondues': {en:'Answered',de:'Beantwortet',it:'Risposte',es:'Respondidas',pt:'Respondidas',nl:'Beantwoord',pl:'Odpowiedziane'},
  'Ignorées': {en:'Ignored',de:'Ignoriert',it:'Ignorate',es:'Ignoradas',pt:'Ignoradas',nl:'Genegeerd',pl:'Zignorowane'},
  'Client notifié par email': {en:'Customer notified by email',de:'Kunde per E-Mail benachrichtigt',it:'Cliente notificato via email',es:'Cliente notificado por email',pt:'Cliente notificado por email',nl:'Klant per e-mail geïnformeerd',pl:'Klient powiadomiony emailem'},
  'Ajoutées à la FAQ': {en:'Added to FAQ',de:'Zur FAQ hinzugefügt',it:'Aggiunte al FAQ',es:'Añadidas al FAQ',pt:'Adicionadas ao FAQ',nl:'Toegevoegd aan FAQ',pl:'Dodane do FAQ'},
  // Rendez-vous
  'Confirmés': {en:'Confirmed',de:'Bestätigt',it:'Confermati',es:'Confirmadas',pt:'Confirmadas',nl:'Bevestigd',pl:'Potwierdzone'},
  'Passés': {en:'Past',de:'Vergangene',it:'Passati',es:'Pasadas',pt:'Passadas',nl:'Verstreken',pl:'Minione'},
  'À confirmer': {en:'To confirm',de:'Zu bestätigen',it:'Da confermare',es:'Por confirmar',pt:'A confirmar',nl:'Te bevestigen',pl:'Do potwierdzenia'},
  // Mon compte
  'Mot de passe': {en:'Password',de:'Passwort',it:'Password',es:'Contraseña',pt:'Palavra-passe',nl:'Wachtwoord',pl:'Hasło'},
  'Prénom': {en:'First name',de:'Vorname',it:'Nome',es:'Nombre',pt:'Nome próprio',nl:'Voornaam',pl:'Imię'},
  'Nom': {en:'Last name',de:'Nachname',it:'Cognome',es:'Apellido',pt:'Apelido',nl:'Achternaam',pl:'Nazwisko'},
  'Ces actions sont irréversibles': {en:'These actions are irreversible',de:'Diese Aktionen sind unwiderruflich',it:'Queste azioni sono irreversibili',es:'Estas acciones son irreversibles',pt:'Estas ações são irreversíveis',nl:'Deze acties zijn onomkeerbaar',pl:'Te działania są nieodwracalne'},
  'Canal de notification par événement': {en:'Notification channel by event',de:'Benachrichtigungskanal nach Ereignis',it:'Canale di notifica per evento',es:'Canal de notificación por evento',pt:'Canal de notificação por evento',nl:'Meldingskanaal per gebeurtenis',pl:'Kanał powiadomień według zdarzenia'},
  // Abonnement
  'Mensuel': {en:'Monthly',de:'Monatlich',it:'Mensile',es:'Mensual',pt:'Mensal',nl:'Maandelijks',pl:'Miesięcznie'},
  'Annuel': {en:'Annual',de:'Jährlich',it:'Annuale',es:'Anual',pt:'Anual',nl:'Jaarlijks',pl:'Rocznie'},
  'Conversations illimitées': {en:'Unlimited conversations',de:'Unbegrenzte Gespräche',it:'Conversazioni illimitate',es:'Conversaciones ilimitadas',pt:'Conversas ilimitadas',nl:'Onbeperkte gesprekken',pl:'Nieograniczone rozmowy'},
  'Analytics avancés': {en:'Advanced analytics',de:'Erweiterte Analytics',it:'Analytics avanzati',es:'Analytics avanzados',pt:'Analytics avançados',nl:'Uitgebreide analytics',pl:'Zaawansowana analityka'},
  'Résumés IA quotidiens': {en:'Daily AI summaries',de:'Tägliche KI-Zusammenfassungen',it:'Riepiloghi IA quotidiani',es:'Resúmenes IA diarios',pt:'Resumos IA diários',nl:'Dagelijkse AI-samenvattingen',pl:'Codzienne podsumowania AI'},
  'Alertes urgences temps réel': {en:'Real-time urgency alerts',de:'Echtzeit-Dringlichkeitswarnungen',it:'Avvisi urgenza in tempo reale',es:'Alertas urgencia en tiempo real',pt:'Alertas urgência em tempo real',nl:'Real-time urgentiemeldingen',pl:'Powiadomienia o pilnych sprawach'},
  'Personnalité IA ajustable': {en:'Adjustable AI personality',de:'Anpassbare KI-Persönlichkeit',it:'Personalità IA regolabile',es:'Personalidad IA ajustable',pt:'Personalidade IA ajustável',nl:'Aanpasbare AI-persoonlijkheid',pl:'Regulowana osobowość AI'},
  'Nouvelles features en avant-première': {en:'New features early access',de:'Neue Funktionen zuerst',it:'Nuove funzionalità in anteprima',es:'Nuevas funciones en primicia',pt:'Novas funcionalidades em estreia',nl:'Nieuwe functies als eerste',pl:'Nowe funkcje jako pierwsi'},
  // Analytics
  'Questions les plus posées': {en:'Most asked questions',de:'Häufigste Fragen',it:'Domande più poste',es:'Preguntas más frecuentes',pt:'Perguntas mais frequentes',nl:'Meest gestelde vragen',pl:'Najczęstsze pytania'},
  "RDV créés par l'IA": {en:'Appointments created by AI',de:'Von KI erstellte Termine',it:"App. creati dall'IA",es:'Citas creadas por la IA',pt:'Marcações criadas pela IA',nl:'Afspraken gemaakt door AI',pl:'Wizyty utworzone przez AI'},
// Brand / nav
  'Dashboard': {en:'Dashboard',de:'Dashboard',it:'Dashboard',es:'Dashboard',pt:'Dashboard',nl:'Dashboard',pl:'Dashboard'},
  // Analytics
  "90 jours d'historique": {en:'90 days of history',de:'90 Tage Verlauf',it:'90 giorni di storico',es:'90 días de historial',pt:'90 dias de histórico',nl:'90 dagen geschiedenis',pl:'90 dni historii'},
  "RDV créés par l'IA": {en:'Appointments created by AI',de:'Von KI erstellte Termine',it:"App. creati dall'IA",es:'Citas creadas por IA',pt:'Marcações pela IA',nl:'Afspraken door AI',pl:'Wizyty przez AI'},
  'Plan Pro': {en:'Pro Plan',de:'Pro-Plan',it:'Piano Pro',es:'Plan Pro',pt:'Plano Pro',nl:'Pro-plan',pl:'Plan Pro'},
  // Config
  "Ce que l'IA peut suggérer après chaque service": {en:'What the AI can suggest after each service',de:'Was die KI nach jedem Dienst vorschlagen kann',it:"Cosa può suggerire l'IA dopo ogni servizio",es:'Qué puede sugerir la IA después de cada servicio',pt:'O que a IA pode sugerir após cada serviço',nl:'Wat de AI na elke dienst kan voorstellen',pl:'Co AI może sugerować po każdej usłudze'},
  "Ces informations sont utilisées par l'IA pour répondre à vos clients": {en:'This information is used by the AI to respond to your customers',de:'Diese Informationen werden von der KI verwendet, um Ihren Kunden zu antworten',it:"Queste informazioni sono usate dall'IA per rispondere ai clienti",es:'Esta información es utilizada por la IA para responder a sus clientes',pt:'Esta informação é usada pela IA para responder aos seus clientes',nl:'Deze informatie wordt gebruikt door de AI om uw klanten te antwoorden',pl:'Te informacje są używane przez AI do odpowiadania klientom'},
  "Créez une expérience unique pour vos clients": {en:'Create a unique experience for your customers',de:'Schaffen Sie ein einzigartiges Erlebnis für Ihre Kunden',it:"Crea un'esperienza unica per i tuoi clienti",es:'Crea una experiencia única para tus clientes',pt:'Crie uma experiência única para os seus clientes',nl:'Creëer een unieke ervaring voor uw klanten',pl:'Stwórz wyjątkowe doświadczenie dla swoich klientów'},
  "Jours fériés, congés, fermetures ponctuelles": {en:'Public holidays, vacations, temporary closures',de:'Feiertage, Urlaub, vorübergehende Schließungen',it:'Festività, ferie, chiusure temporanee',es:'Festivos, vacaciones, cierres puntuales',pt:'Feriados, férias, encerramentos pontuais',nl:'Feestdagen, vakantie, tijdelijke sluitingen',pl:'Święta, urlopy, tymczasowe zamknięcia'},
  "L'IA connaîtra vos prestations et pourra les recommander": {en:'The AI will know your services and can recommend them',de:'Die KI kennt Ihre Dienste und kann sie empfehlen',it:"L'IA conoscerà i tuoi servizi e potrà consigliarli",es:'La IA conocerá tus servicios y podrá recomendarlos',pt:'A IA conhecerá os seus serviços e poderá recomendá-los',nl:'De AI kent uw diensten en kan ze aanbevelen',pl:'AI pozna Twoje usługi i będzie mogła je polecać'},
  "L'IA répondra automatiquement à ces questions": {en:'The AI will automatically answer these questions',de:'Die KI beantwortet diese Fragen automatisch',it:"L'IA risponderà automaticamente a queste domande",es:'La IA responderá automáticamente a estas preguntas',pt:'A IA responderá automaticamente a estas perguntas',nl:'De AI beantwoordt deze vragen automatisch',pl:'AI automatycznie odpowie na te pytania'},
  "L'IA utilisera ces horaires pour répondre aux clients": {en:'The AI will use these hours to respond to customers',de:'Die KI verwendet diese Zeiten, um Kunden zu antworten',it:"L'IA utilizzerà questi orari per rispondere ai clienti",es:'La IA usará estos horarios para responder a los clientes',pt:'A IA usará estes horários para responder aos clientes',nl:'De AI gebruikt deze tijden om klanten te antwoorden',pl:'AI użyje tych godzin do odpowiadania klientom'},
  "Langue de l'interface": {en:'Interface language',de:'Oberflächensprache',it:"Lingua dell'interfaccia",es:'Idioma de interfaz',pt:'Idioma da interface',nl:'Interfacetaal',pl:'Język interfejsu'},
  "Nom de l'assistant": {en:'Assistant name',de:'Assistentenname',it:"Nome dell'assistente",es:'Nombre del asistente',pt:'Nome do assistente',nl:'Assistentnaam',pl:'Nazwa asystenta'},
  "Personnalité de l'IA": {en:'AI Personality',de:'KI-Persönlichkeit',it:"Personalità dell'IA",es:'Personalidad de la IA',pt:'Personalidade da IA',nl:'AI-persoonlijkheid',pl:'Osobowość AI'},
  "Phrase d'accueil personnalisée": {en:'Custom greeting',de:'Benutzerdefinierte Begrüßung',it:'Saluto personalizzato',es:'Saludo personalizado',pt:'Saudação personalizada',nl:'Aangepaste begroeting',pl:'Spersonalizowane powitanie'},
  "→ l'IA suggère": {en:'→ AI suggests',de:'→ KI schlägt vor',it:"→ l'IA suggerisce",es:'→ la IA sugiere',pt:'→ a IA sugere',nl:'→ AI stelt voor',pl:'→ AI sugeruje'},
  '✅ Activés': {en:'✅ Enabled',de:'✅ Aktiviert',it:'✅ Attivati',es:'✅ Activados',pt:'✅ Ativados',nl:'✅ Ingeschakeld',pl:'✅ Włączone'},
  '❌ Désactivée': {en:'❌ Disabled',de:'❌ Deaktiviert',it:'❌ Disattivata',es:'❌ Desactivada',pt:'❌ Desativada',nl:'❌ Uitgeschakeld',pl:'❌ Wyłączona'},
  '🙋 Réactive': {en:'🙋 Proactive',de:'🙋 Reaktiv',it:'🙋 Reattiva',es:'🙋 Reactiva',pt:'🙋 Reativa',nl:'🙋 Reactief',pl:'🙋 Reaktywna'},
  '🚫 Désactivées': {en:'🚫 Disabled',de:'🚫 Deaktiviert',it:'🚫 Disattivate',es:'🚫 Desactivadas',pt:'🚫 Desativadas',nl:'🚫 Uitgeschakeld',pl:'🚫 Wyłączone'},
  // Messages
  '"Ajouter à la FAQ"': {en:'"Add to FAQ"',de:'"Zur FAQ hinzufügen"',it:'"Aggiungi al FAQ"',es:'"Añadir al FAQ"',pt:'"Adicionar ao FAQ"',nl:'"Toevoegen aan FAQ"',pl:'"Dodaj do FAQ"'},
  'Question du client': {en:'Customer question',de:'Kundenfrage',it:'Domanda del cliente',es:'Pregunta del cliente',pt:'Pergunta do cliente',nl:'Klantvraag',pl:'Pytanie klienta'},
  'Votre réponse': {en:'Your answer',de:'Ihre Antwort',it:'La tua risposta',es:'Tu respuesta',pt:'A sua resposta',nl:'Uw antwoord',pl:'Twoja odpowiedź'},
  'Traitées': {en:'Handled',de:'Bearbeitet',it:'Gestite',es:'Gestionadas',pt:'Tratadas',nl:'Verwerkt',pl:'Obsłużone'},
  '💬 Répondre au client': {en:'💬 Reply to customer',de:'💬 Auf Kunden antworten',it:'💬 Rispondere al cliente',es:'💬 Responder al cliente',pt:'💬 Responder ao cliente',nl:'💬 Antwoord aan klant',pl:'💬 Odpowiedź do klienta'},
  '📚 Ajouter à la FAQ': {en:'📚 Add to FAQ',de:'📚 Zur FAQ hinzufügen',it:'📚 Aggiungi al FAQ',es:'📚 Añadir al FAQ',pt:'📚 Adicionar ao FAQ',nl:'📚 Toevoegen aan FAQ',pl:'📚 Dodaj do FAQ'},
  'pour que la réponse soit permanente.': {en:'to make the answer permanent.',de:'um die Antwort dauerhaft zu speichern.',it:'per rendere la risposta permanente.',es:'para que la respuesta sea permanente.',pt:'para tornar a resposta permanente.',nl:'om het antwoord permanent te maken.',pl:'aby odpowiedź była trwała.'},
  // Rendez-vous
  "Gérez vos demandes de RDV et confirmez vos créneaux": {en:'Manage your appointment requests and confirm your slots',de:'Verwalten Sie Terminanfragen und bestätigen Sie Ihre Slots',it:'Gestisci le richieste di appuntamento e conferma i tuoi slot',es:'Gestiona las solicitudes de cita y confirma tus franjas',pt:'Gira os pedidos de marcação e confirme os seus horários',nl:'Beheer afspraakverzoeken en bevestig uw tijdsloten',pl:'Zarządzaj prośbami o wizytę i potwierdzaj swoje terminy'},
  // Mon compte
  "Client avec une urgence détectée par l'IA": {en:'Customer with urgency detected by AI',de:'Kunde mit von KI erkannter Dringlichkeit',it:"Cliente con urgenza rilevata dall'IA",es:'Cliente con urgencia detectada por la IA',pt:'Cliente com urgência detetada pela IA',nl:'Klant met door AI gedetecteerde urgentie',pl:'Klient z pilnością wykrytą przez AI'},
  "L'IA ne sait pas répondre à un client": {en:"The AI can't answer a customer",de:'Die KI kann einem Kunden nicht antworten',it:"L'IA non sa rispondere a un cliente",es:'La IA no sabe responder a un cliente',pt:'A IA não sabe responder a um cliente',nl:'De AI kan een klant niet antwoorden',pl:'AI nie może odpowiedzieć klientowi'},
  "Les notifications SMS sont réservées au plan Pro.": {en:'SMS notifications are reserved for the Pro plan.',de:'SMS-Benachrichtigungen sind dem Pro-Plan vorbehalten.',it:'Le notifiche SMS sono riservate al piano Pro.',es:'Las notificaciones SMS son para el plan Pro.',pt:'As notificações SMS são reservadas ao Plano Pro.',nl:'SMS-meldingen zijn voorbehouden aan het Pro-plan.',pl:'Powiadomienia SMS są zarezerwowane dla planu Pro.'},
  "Les résumés quotidiens sont réservés au plan Pro.": {en:'Daily summaries are reserved for the Pro plan.',de:'Tägliche Zusammenfassungen sind dem Pro-Plan vorbehalten.',it:'I riepiloghi quotidiani sono riservati al piano Pro.',es:'Los resúmenes diarios son para el plan Pro.',pt:'Os resumos diários são reservados ao Plano Pro.',nl:'Dagelijkse samenvattingen zijn voorbehouden aan het Pro-plan.',pl:'Codzienne podsumowania są zarezerwowane dla planu Pro.'},
  "⭐ Plan Pro": {en:'⭐ Pro Plan',de:'⭐ Pro-Plan',it:'⭐ Piano Pro',es:'⭐ Plan Pro',pt:'⭐ Plano Pro',nl:'⭐ Pro-plan',pl:'⭐ Plan Pro'},
  '🗑️ Confirmer': {en:'🗑️ Confirm',de:'🗑️ Bestätigen',it:'🗑️ Conferma',es:'🗑️ Confirmar',pt:'🗑️ Confirmar',nl:'🗑️ Bevestigen',pl:'🗑️ Potwierdź'},
  '🗑️ Supprimer le compte': {en:'🗑️ Delete account',de:'🗑️ Konto löschen',it:'🗑️ Elimina account',es:'🗑️ Eliminar cuenta',pt:'🗑️ Eliminar conta',nl:'🗑️ Account verwijderen',pl:'🗑️ Usuń konto'},
  'définitivement': {en:'permanently',de:'dauerhaft',it:'definitivamente',es:'permanentemente',pt:'permanentemente',nl:'permanent',pl:'trwale'},
  // Abonnement
  'Analytics complets (90 jours)': {en:'Full analytics (90 days)',de:'Vollständige Analytics (90 Tage)',it:'Analytics completi (90 giorni)',es:'Analytics completos (90 días)',pt:'Analytics completos (90 dias)',nl:'Volledige analytics (90 dagen)',pl:'Pełna analityka (90 dni)'},
  "Détection urgences dans dashboard": {en:'Urgency detection in dashboard',de:'Dringlichkeitserkennung im Dashboard',it:'Rilevamento urgenze nel dashboard',es:'Detección urgencias en dashboard',pt:'Deteção urgências no dashboard',nl:'Urgentiedetectie in dashboard',pl:'Wykrywanie pilności w dashboardzie'},
  "IA 8 langues européennes": {en:'AI in 8 European languages',de:'KI auf 8 europäischen Sprachen',it:'IA in 8 lingue europee',es:'IA en 8 idiomas europeos',pt:'IA em 8 línguas europeias',nl:'AI in 8 Europese talen',pl:'AI w 8 europejskich językach'},
  "Résumés IA hebdomadaires": {en:'Weekly AI summaries',de:'Wöchentliche KI-Zusammenfassungen',it:'Riepiloghi IA settimanali',es:'Resúmenes IA semanales',pt:'Resumos IA semanais',nl:'Wekelijkse AI-samenvattingen',pl:'Tygodniowe podsumowania AI'},
  "Type d'affiche": {en:"Poster type",de:'Plakattyp',it:'Tipo di poster',es:'Tipo de cartel',pt:'Tipo de cartaz',nl:'Postertype',pl:'Typ plakatu'},
  "Questions transmises par l'IA — répondez pour enrichir sa base de connaissances": {en:"Questions forwarded by the AI — answer to enrich its knowledge",de:"Von der KI weitergeleitete Fragen — antworten Sie",it:"Domande inoltrate dall'IA — rispondi per arricchire",es:"Preguntas reenviadas por la IA — respóndelas",pt:"Perguntas encaminhadas pela IA — responda",nl:"Door de AI doorgestuurde vragen — beantwoord ze",pl:"Pytania przekazane przez AI — odpowiedz"},
  "L'IA sait maintenant répondre": {en:"The AI now knows how to answer",de:"Die KI kann jetzt antworten",it:"L'IA sa ora rispondere",es:"La IA ahora sabe responder",pt:"A IA já sabe responder",nl:"De AI kan nu antwoorden",pl:"AI teraz potrafi odpowiedzieć"},
  "Envoyer votre réponse par email au client (si adresse disponible)": {en:"Send your reply by email to the customer (if address available)",de:"Antwort per E-Mail senden (falls Adresse verfügbar)",it:"Invia la risposta via email (se indirizzo disponibile)",es:"Enviar respuesta por email al cliente (si hay dirección)",pt:"Enviar resposta por email ao cliente (se endereço disponível)",nl:"Antwoord per e-mail sturen (indien adres beschikbaar)",pl:"Wyślij odpowiedź emailem do klienta (jeśli adres dostępny)"},
  "L'IA répondra automatiquement à cette question pour tous les clients suivants": {en:"The AI will automatically answer this question for all future customers",de:"Die KI beantwortet diese Frage automatisch für alle zukünftigen Kunden",it:"L'IA risponderà automaticamente a questa domanda",es:"La IA responderá automáticamente a esta pregunta",pt:"A IA responderá automaticamente a esta pergunta",nl:"De AI beantwoordt deze vraag automatisch",pl:"AI automatycznie odpowie na to pytanie"},

};

// Apply universal translations to all text nodes on the page
function lrTranslateAll(lang) {
  if (!lang || lang === 'fr') return; // French is the source, no translation needed
  const map = LR_TEXT_MAP;
  
  // Walk all text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Skip script, style, input values
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (['SCRIPT','STYLE','INPUT','TEXTAREA','SELECT'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (node.textContent.trim().length < 2) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  
  nodes.forEach(node => {
    const text = node.textContent.trim();
    if (map[text] && map[text][lang]) {
      node.textContent = node.textContent.replace(text, map[text][lang]);
    }
  });
}

// Auto-apply on load
(function() {
  const lang = lrDashGetLang();
  if (lang && lang !== 'fr') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { 
        setTimeout(function() { lrTranslateAll(lang); }, 100);
      });
    } else {
      setTimeout(function() { lrTranslateAll(lang); }, 100);
    }
  }
})();
