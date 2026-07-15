// ═══════════════════════════════════════════════════════════════
// LocalReply Dashboard — Shared i18n translations
// Used by all dashboard-*.html pages
// Apply with: window.lrDashApplyLang(lang)
// ═══════════════════════════════════════════════════════════════

// Sync the language from the URL path prefix (e.g. /de/dashboard) into
// localStorage before anything below reads it, so the dashboard is
// consistent with the rest of the site's language-in-URL convention.
// Falls back to whatever was already in localStorage / the browser
// language when there is no prefix (e.g. plain /dashboard).
(function() {
  const _langPrefixes = ['fr','en','de','it','es','pt','nl','pl'];
  const first = window.location.pathname.replace(/^\/+/, '').split('/')[0];
  if (_langPrefixes.indexOf(first) >= 0) {
    try { localStorage.setItem('lr_lang', first); } catch (e) {}
  }
})();

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
  // Sidebar links to pages outside the dashboard (mon-compte, abonnement,
  // back-to-site) were hardcoded without a language prefix, so they always
  // dropped the user back into English regardless of the dashboard's
  // current language. Prefix them here to match.
  const _withLangPrefix = (href) => lang === 'en' ? href : (href === '/' ? '/' + lang : '/' + lang + href);
  const _backLink = document.getElementById('dn-back'); if (_backLink) { const a = _backLink.closest('a'); if (a) a.href = _withLangPrefix('/'); }
  const _accountLink = document.getElementById('dn-account'); if (_accountLink) { const a = _accountLink.closest('a'); if (a) a.href = _withLangPrefix('/mon-compte'); }
  const _billingLink = document.getElementById('dn-billing'); if (_billingLink) { const a = _billingLink.closest('a'); if (a) a.href = _withLangPrefix('/abonnement'); }
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
  // Audit fixes — untranslated strings missed by per-ID dictionaries (bare text nodes without an id)
  '🔄 Actualiser': {en:'🔄 Refresh',de:'🔄 Aktualisieren',it:'🔄 Aggiorna',es:'🔄 Actualizar',pt:'🔄 Atualizar',nl:'🔄 Vernieuwen',pl:'🔄 Odśwież'},
  '⏳ RDV en attente de validation': {en:'⏳ Appointments awaiting validation',de:'⏳ Zu bestätigende Termine',it:'⏳ Appuntamenti in attesa di convalida',es:'⏳ Citas pendientes de validación',pt:'⏳ Marcações pendentes de validação',nl:'⏳ Afspraken in afwachting van goedkeuring',pl:'⏳ Wizyty oczekujące na zatwierdzenie'},
  'Zone de danger': {en:'Danger zone',de:'Gefahrenzone',it:'Zona pericolosa',es:'Zona de peligro',pt:'Zona de perigo',nl:'Gevarenzone',pl:'Strefa zagrożenia'},


  // Recovered — these entries were accidentally pasted into LR_DASH_NAV_IDS
  // instead of LR_TEXT_MAP, so they silently never applied despite looking
  // like valid translations. Moved here during the full-dashboard audit.
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
,
  "Actif \u00b7 8 langues": {en:"Active \u00b7 8 languages", de:"Aktiv \u00b7 8 Sprachen", it:"Attivo \u00b7 8 lingue", es:"Activo \u00b7 8 idiomas", pt:"Ativo \u00b7 8 l\u00ednguas", nl:"Actief \u00b7 8 talen", pl:"Aktywny \u00b7 8 j\u0119zyk\u00f3w"},
  "Hier": {en:"Yesterday", de:"Gestern", it:"Ieri", es:"Ayer", pt:"Ontem", nl:"Gisteren", pl:"Wczoraj"},
  "Essai Pro gratuit \ud83c\udf81": {en:"Free Pro Trial \ud83c\udf81", de:"Kostenloser Pro-Test \ud83c\udf81", it:"Trial Pro gratuito \ud83c\udf81", es:"Trial Pro gratuito \ud83c\udf81", pt:"Trial Pro gratuito \ud83c\udf81", nl:"Gratis Pro-proef \ud83c\udf81", pl:"Darmowy Trial Pro \ud83c\udf81"},
  "Pro \u2b50": {en:"Pro \u2b50", de:"Pro \u2b50", it:"Pro \u2b50", es:"Pro \u2b50", pt:"Pro \u2b50", nl:"Pro \u2b50", pl:"Pro \u2b50"},
  "Standard \ud83d\udce6": {en:"Standard \ud83d\udce6", de:"Standard \ud83d\udce6", it:"Standard \ud83d\udce6", es:"Standard \ud83d\udce6", pt:"Standard \ud83d\udce6", nl:"Standard \ud83d\udce6", pl:"Standard \ud83d\udce6"},
  "D\u00e9finis": {en:"Configured", de:"Konfiguriert", it:"Configurati", es:"Configurados", pt:"Configurados", nl:"Geconfigureerd", pl:"Skonfigurowane"},
  "\u00c0 configurer dans Configuration": {en:"To configure in Configuration", de:"In Konfiguration einrichten", it:"Da configurare in Configurazione", es:"A configurar en Configuraci\u00f3n", pt:"A configurar em Configura\u00e7\u00e3o", nl:"In te stellen in Configuratie", pl:"Do skonfigurowania w Konfiguracji"},
  "\u00c0 enrichir dans Configuration": {en:"To enrich in Configuration", de:"In Konfiguration anreichern", it:"Da arricchire in Configurazione", es:"A enriquecer en Configuraci\u00f3n", pt:"A enriquecer em Configura\u00e7\u00e3o", nl:"Te verrijken in Configuratie", pl:"Do wzbogacenia w Konfiguracji"},
  "\u00c0 ajouter dans Configuration": {en:"To add in Configuration", de:"In Konfiguration hinzuf\u00fcgen", it:"Da aggiungere in Configurazione", es:"A a\u00f1adir en Configuraci\u00f3n", pt:"A adicionar em Configura\u00e7\u00e3o", nl:"Toe te voegen in Configuratie", pl:"Do dodania w Konfiguracji"},
  "Calcul...": {en:"Calculating...", de:"Berechnung...", it:"Calcolo...", es:"Calculando...", pt:"A calcular...", nl:"Berekenen...", pl:"Obliczanie..."},
  "\ud83d\udfe2 Excellent": {en:"\ud83d\udfe2 Excellent", de:"\ud83d\udfe2 Ausgezeichnet", it:"\ud83d\udfe2 Eccellente", es:"\ud83d\udfe2 Excelente", pt:"\ud83d\udfe2 Excelente", nl:"\ud83d\udfe2 Uitstekend", pl:"\ud83d\udfe2 Doskona\u0142y"},
  "Connect\u00e9 \u00b7 RDV automatiques actifs": {en:"Connected \u00b7 Automatic bookings active", de:"Verbunden \u00b7 Automatische Buchungen aktiv", it:"Connesso \u00b7 Prenotazioni automatiche attive", es:"Conectado \u00b7 Reservas autom\u00e1ticas activas", pt:"Ligado \u00b7 Marca\u00e7\u00f5es autom\u00e1ticas ativas", nl:"Verbonden \u00b7 Automatische afspraken actief", pl:"Po\u0142\u0105czono \u00b7 Automatyczne rezerwacje aktywne"},
  "Non connect\u00e9": {en:"Not connected", de:"Nicht verbunden", it:"Non connesso", es:"No conectado", pt:"N\u00e3o ligado", nl:"Niet verbonden", pl:"Niepo\u0142\u0105czono"},
  "RDV confirm\u00e9": {en:"Confirmed appointment", de:"Best\u00e4tigter Termin", it:"Appuntamento confermato", es:"Cita confirmada", pt:"Marca\u00e7\u00e3o confirmada", nl:"Bevestigde afspraak", pl:"Potwierdzona wizyta"},
  "Question sans r\u00e9ponse": {en:"Unanswered question", de:"Unbeantwortete Frage", it:"Domanda senza risposta", es:"Pregunta sin respuesta", pt:"Pergunta sem resposta", nl:"Onbeantwoorde vraag", pl:"Pytanie bez odpowiedzi"},
  "Abonnement inactif": {en:"Inactive subscription", de:"Inaktives Abonnement", it:"Abbonamento inattivo", es:"Suscripci\u00f3n inactiva", pt:"Subscri\u00e7\u00e3o inativa", nl:"Inactief abonnement", pl:"Nieaktywna subskrypcja"},
  "Services & tarifs": {en:"Services & rates", de:"Dienste & Tarife", it:"Servizi & tariffe", es:"Servicios & tarifas", pt:"Servi\u00e7os & tarifas", nl:"Diensten & tarieven", pl:"Us\u0142ugi & cennik"},
  "Horaires": {en:"Hours", de:"\u00d6ffnungszeiten", it:"Orari", es:"Horarios", pt:"Hor\u00e1rios", nl:"Openingstijden", pl:"Godziny"},
  "Assistant IA 24/7": {en:"AI Assistant 24/7", de:"KI-Assistent 24/7", it:"Assistente IA 24/7", es:"Asistente IA 24/7", pt:"Assistente IA 24/7", nl:"AI-assistent 24/7", pl:"Asystent AI 24/7"},
  "Navigation": {en:"Navigation", de:"Navigation", it:"Navigazione", es:"Navegaci\u00f3n", pt:"Navega\u00e7\u00e3o", nl:"Navigatie", pl:"Nawigacja"},
  "Tester mon IA \u2192": {en:"Test my AI \u2192", de:"Meine KI testen \u2192", it:"Testa la mia IA \u2192", es:"Probar mi IA \u2192", pt:"Testar a minha IA \u2192", nl:"Mijn AI testen \u2192", pl:"Testuj moj\u0105 AI \u2192"},
  "Tester mon assistant IA": {en:"Test my AI assistant", de:"Meinen KI-Assistenten testen", it:"Testa il mio assistente IA", es:"Probar mi asistente IA", pt:"Testar o meu assistente IA", nl:"Mijn AI-assistent testen", pl:"Testuj mojego asystenta AI"},
  "Vue client \u2192": {en:"Customer view \u2192", de:"Kundenansicht \u2192", it:"Vista cliente \u2192", es:"Vista cliente \u2192", pt:"Vista do cliente \u2192", nl:"Klantweergave \u2192", pl:"Widok klienta \u2192"},
  "Configurer \u2192": {en:"Configure \u2192", de:"Konfigurieren \u2192", it:"Configura \u2192", es:"Configurar \u2192", pt:"Configurar \u2192", nl:"Configureren \u2192", pl:"Skonfiguruj \u2192"},
  "Votre lien & QR Code": {en:"Your link & QR Code", de:"Ihr Link & QR-Code", it:"Il tuo link & Codice QR", es:"Tu enlace & C\u00f3digo QR", pt:"O seu link & C\u00f3digo QR", nl:"Uw link & QR-code", pl:"Tw\u00f3j link & Kod QR"},
  "Liens de tracking par source": {en:"Tracking links by source", de:"Tracking-Links nach Quelle", it:"Link di tracciamento per fonte", es:"Enlaces de seguimiento por fuente", pt:"Links de rastreamento por fonte", nl:"Trackinglinks per bron", pl:"Linki \u015bledzenia wg \u017ar\u00f3d\u0142a"},
  "\ud83d\udcf1 QR Vitrine": {en:"\ud83d\udcf1 QR Display", de:"\ud83d\udcf1 QR Schaufenster", it:"\ud83d\udcf1 QR Vetrina", es:"\ud83d\udcf1 QR Escaparate", pt:"\ud83d\udcf1 QR Montra", nl:"\ud83d\udcf1 QR Etalage", pl:"\ud83d\udcf1 QR Witryna"},
  "\ud83d\ude80 Mise en route": {en:"\ud83d\ude80 Getting started", de:"\ud83d\ude80 Erste Schritte", it:"\ud83d\ude80 Per iniziare", es:"\ud83d\ude80 Primeros pasos", pt:"\ud83d\ude80 Primeiros passos", nl:"\ud83d\ude80 Aan de slag", pl:"\ud83d\ude80 Pierwsze kroki"},
  "\ud83d\udca1 Conseil": {en:"\ud83d\udca1 Tip", de:"\ud83d\udca1 Tipp", it:"\ud83d\udca1 Consiglio", es:"\ud83d\udca1 Consejo", pt:"\ud83d\udca1 Dica", nl:"\ud83d\udca1 Tip", pl:"\ud83d\udca1 Wskaz\u00f3wka"},
  "Partagez avec vos clients pour acc\u00e9der \u00e0 votre assistant 24/7": {en:"Share with your customers to access your assistant 24/7", de:"Teilen Sie mit Ihren Kunden f\u00fcr 24/7-Zugang", it:"Condividi con i tuoi clienti per accedere 24/7", es:"Comparte con tus clientes para acceder 24/7", pt:"Partilhe com os seus clientes para acesso 24/7", nl:"Deel met uw klanten voor 24/7 toegang", pl:"Udost\u0119pnij klientom dost\u0119p 24/7"},
  "Compl\u00e9tez ces \u00e9tapes pour tirer le meilleur de LocalReply": {en:"Complete these steps to get the most from LocalReply", de:"Vervollst\u00e4ndigen Sie diese Schritte f\u00fcr das Beste aus LocalReply", it:"Completa questi passaggi per sfruttare al meglio LocalReply", es:"Completa estos pasos para sacar el m\u00e1ximo de LocalReply", pt:"Completa estes passos para tirar o m\u00e1ximo do LocalReply", nl:"Voltooi deze stappen voor het meeste uit LocalReply", pl:"Wykonaj te kroki, aby w pe\u0142ni korzysta\u0107 z LocalReply"},
  "8 actions concr\u00e8tes pour attirer plus de clients": {en:"8 concrete actions to attract more customers", de:"8 konkrete Aktionen f\u00fcr mehr Kunden", it:"8 azioni concrete per attirare pi\u00f9 clienti", es:"8 acciones concretas para atraer m\u00e1s clientes", pt:"8 a\u00e7\u00f5es concretas para atrair mais clientes", nl:"8 concrete acties om meer klanten te trekken", pl:"8 konkretnych dzia\u0142a\u0144 dla wi\u0119cej klient\u00f3w"},
  "\ud83d\udcc5 RDV en attente": {en:"\ud83d\udcc5 Pending appointments", de:"\ud83d\udcc5 Ausstehende Termine", it:"\ud83d\udcc5 Appuntamenti in attesa", es:"\ud83d\udcc5 Citas pendientes", pt:"\ud83d\udcc5 Marca\u00e7\u00f5es pendentes", nl:"\ud83d\udcc5 Afspraken in behandeling", pl:"\ud83d\udcc5 Wizyty oczekuj\u0105ce"}
,
  "R\u00e9pondez pour enrichir la FAQ automatiquement": {en:"Reply to automatically enrich the FAQ", de:"Antworten Sie, um die FAQ automatisch anzureichern", it:"Rispondi per arricchire automaticamente il FAQ", es:"Responde para enriquecer autom\u00e1ticamente el FAQ", pt:"Responde para enriquecer automaticamente o FAQ", nl:"Antwoord om de FAQ automatisch te verrijken", pl:"Odpowiedz, aby automatycznie wzbogaci\u0107 FAQ"},
  "\ud83c\udf10 Site web": {en:"\ud83c\udf10 Website", de:"\ud83c\udf10 Website", it:"\ud83c\udf10 Sito web", es:"\ud83c\udf10 Sitio web", pt:"\ud83c\udf10 Site web", nl:"\ud83c\udf10 Website", pl:"\ud83c\udf10 Strona internetowa"},
  "German": {en:"German", de:"Deutsch", it:"Tedesco", es:"Alem\u00e1n", pt:"Alem\u00e3o", nl:"Duits", pl:"Niemiecki"},
  "Spanish": {en:"Spanish", de:"Spanisch", it:"Spagnolo", es:"Espa\u00f1ol", pt:"Espanhol", nl:"Spaans", pl:"Hiszpa\u0144ski"},
  "Portuguese": {en:"Portuguese", de:"Portugiesisch", it:"Portoghese", es:"Portugu\u00e9s", pt:"Portugu\u00eas", nl:"Portugees", pl:"Portuga\u0142ski"},
  "Dutch": {en:"Dutch", de:"Niederl\u00e4ndisch", it:"Olandese", es:"Neerland\u00e9s", pt:"Neerland\u00eas", nl:"Nederlands", pl:"Niderlandzki"},
  "Polish": {en:"Polish", de:"Polnisch", it:"Polacco", es:"Polaco", pt:"Polaco", nl:"Pools", pl:"Polski"},
  "To confirm \u2192": {en:"To confirm \u2192", de:"Zu best\u00e4tigen \u2192", it:"Da confermare \u2192", es:"A confirmar \u2192", pt:"A confirmar \u2192", nl:"Te bevestigen \u2192", pl:"Do potwierdzenia \u2192"},
  "100% des conversations": {en:"100% of conversations", de:"100% der Gespr\u00e4che", it:"100% delle conversazioni", es:"100% de las conversaciones", pt:"100% das conversas", nl:"100% van de gesprekken", pl:"100% rozm\u00f3w"}
,
  "Répondez pour enrichir la FAQ automatiquement": {"en":"Reply to automatically enrich the FAQ","de":"Antworten Sie, um die FAQ anzureichern","it":"Rispondi per arricchire automaticamente il FAQ","es":"Responde para enriquecer automáticamente el FAQ","pt":"Responde para enriquecer automaticamente o FAQ","nl":"Antwoord om de FAQ automatisch te verrijken","pl":"Odpowiedz, aby automatycznie wzbogacić FAQ"},

  // Audit fixes round 2 — more untranslated strings found in a full sweep
  // of every dashboard page (bare text nodes / mismatched dictionary keys).
  'Prendre rendez-vous': {en:'Book an appointment',de:'Termin vereinbaren',it:'Prenotare un appuntamento',es:'Reservar una cita',pt:'Marcar uma consulta',nl:'Een afspraak maken',pl:'Umów wizytę'},
  'Réserver une table': {en:'Book a table',de:'Tisch reservieren',it:'Prenotare un tavolo',es:'Reservar una mesa',pt:'Reservar uma mesa',nl:'Een tafel reserveren',pl:'Zarezerwuj stolik'},
  "Quand un client pose une question que votre IA ne connaît pas, elle vous la transmet ici. Répondez pour que l'IA apprenne et réponde automatiquement la prochaine fois. Cochez": {en:"When a customer asks a question your AI doesn't know, it's forwarded to you here. Reply so the AI learns and answers automatically next time. Check",de:"Wenn ein Kunde eine Frage stellt, die Ihre KI nicht kennt, wird sie Ihnen hier weitergeleitet. Antworten Sie, damit die KI lernt und beim nächsten Mal automatisch antwortet. Aktivieren Sie",it:"Quando un cliente pone una domanda che la tua IA non conosce, ti viene inoltrata qui. Rispondi affinché l'IA impari e risponda automaticamente la prossima volta. Seleziona",es:"Cuando un cliente hace una pregunta que tu IA no conoce, se te reenvía aquí. Responde para que la IA aprenda y responda automáticamente la próxima vez. Marca",pt:"Quando um cliente faz uma pergunta que a sua IA não conhece, ela é-lhe reencaminhada aqui. Responda para que a IA aprenda e responda automaticamente da próxima vez. Marque",nl:"Wanneer een klant een vraag stelt die uw AI niet kent, wordt deze hier naar u doorgestuurd. Beantwoord de vraag zodat de AI leert en de volgende keer automatisch antwoordt. Vink",pl:"Gdy klient zada pytanie, na które Twoja AI nie zna odpowiedzi, zostanie ono tutaj przekazane. Odpowiedz, aby AI się nauczyła i odpowiadała automatycznie następnym razem. Zaznacz"},
  "⚠️ Pas d'email client — vous pouvez répondre mais le client ne sera pas notifié.": {en:"⚠️ No customer email — you can reply but the customer won't be notified.",de:"⚠️ Keine Kunden-E-Mail — Sie können antworten, aber der Kunde wird nicht benachrichtigt.",it:"⚠️ Nessuna email del cliente — puoi rispondere ma il cliente non sarà avvisato.",es:"⚠️ Sin email del cliente — puedes responder pero el cliente no será notificado.",pt:"⚠️ Sem email do cliente — pode responder mas o cliente não será notificado.",nl:"⚠️ Geen klant-e-mail — u kunt antwoorden maar de klant wordt niet op de hoogte gebracht.",pl:"⚠️ Brak emaila klienta — możesz odpowiedzieć, ale klient nie zostanie powiadomiony."},
  '📧 Notifier le client': {en:'📧 Notify customer',de:'📧 Kunde benachrichtigen',it:'📧 Notificare il cliente',es:'📧 Notificar al cliente',pt:'📧 Notificar o cliente',nl:'📧 Klant informeren',pl:'📧 Powiadom klienta'},
  'En attente': {en:'Pending',de:'Ausstehend',it:'In attesa',es:'Pendiente',pt:'Pendente',nl:'In behandeling',pl:'Oczekujące'},
  'Aucun rendez-vous confirmé': {en:'No confirmed appointments',de:'Keine bestätigten Termine',it:'Nessun appuntamento confermato',es:'Ninguna cita confirmada',pt:'Nenhuma marcação confirmada',nl:'Geen bevestigde afspraken',pl:'Brak potwierdzonych wizyt'},
  'Les rendez-vous confirmés apparaîtront ici': {en:'Confirmed appointments will appear here',de:'Bestätigte Termine werden hier angezeigt',it:'Gli appuntamenti confermati appariranno qui',es:'Las citas confirmadas aparecerán aquí',pt:'As marcações confirmadas aparecerão aqui',nl:'Bevestigde afspraken verschijnen hier',pl:'Potwierdzone wizyty pojawią się tutaj'},
  '💡 Exemple : Si le client choisit': {en:'💡 Example: If the customer chooses',de:'💡 Beispiel: Wenn der Kunde',it:'💡 Esempio: Se il cliente sceglie',es:'💡 Ejemplo: Si el cliente elige',pt:'💡 Exemplo: Se o cliente escolher',nl:'💡 Voorbeeld: Als de klant kiest',pl:'💡 Przykład: Jeśli klient wybierze'},
  'Si client choisit': {en:'If customer chooses',de:'Wenn Kunde wählt',it:'Se il cliente sceglie',es:'Si el cliente elige',pt:'Se o cliente escolher',nl:'Als de klant kiest',pl:'Jeśli klient wybierze'},
  '→ suggérer': {en:'→ suggest',de:'→ vorschlagen',it:'→ suggerire',es:'→ sugerir',pt:'→ sugerir',nl:'→ voorstellen',pl:'→ zasugerować'},
  '-- Service --': {en:'-- Service --',de:'-- Dienst --',it:'-- Servizio --',es:'-- Servicio --',pt:'-- Serviço --',nl:'-- Dienst --',pl:'-- Usługa --'},
  '🗑️ Supprimer le logo': {en:'🗑️ Remove logo',de:'🗑️ Logo entfernen',it:'🗑️ Rimuovi logo',es:'🗑️ Eliminar logo',pt:'🗑️ Remover logo',nl:'🗑️ Logo verwijderen',pl:'🗑️ Usuń logo'},
  'Pas encore de données sur cette période': {en:'No data yet for this period',de:'Noch keine Daten für diesen Zeitraum',it:'Nessun dato ancora per questo periodo',es:'Aún no hay datos para este período',pt:'Ainda sem dados para este período',nl:'Nog geen gegevens voor deze periode',pl:'Brak jeszcze danych dla tego okresu'},
  'Revenez plus tard, ou essayez une période plus longue (30 ou 90 jours)': {en:'Check back later, or try a longer period (30 or 90 days)',de:'Schauen Sie später vorbei oder wählen Sie einen längeren Zeitraum (30 oder 90 Tage)',it:'Torna più tardi o prova un periodo più lungo (30 o 90 giorni)',es:'Vuelve más tarde o prueba un período más largo (30 o 90 días)',pt:'Volte mais tarde ou experimente um período mais longo (30 ou 90 dias)',nl:'Kom later terug of probeer een langere periode (30 of 90 dagen)',pl:'Wróć później lub wypróbuj dłuższy okres (30 lub 90 dni)'},
  'Plus': {en:'More',de:'Mehr',it:'Altro',es:'Más',pt:'Mais',nl:'Meer',pl:'Więcej'},
  'Défini dans Configuration': {en:'Set in Configuration',de:'In Konfiguration festgelegt',it:'Impostato in Configurazione',es:'Definido en Configuración',pt:'Definido em Configuração',nl:'Ingesteld in Configuratie',pl:'Ustawione w Konfiguracji'},
  'Chaque matin — résumé de la veille': {en:'Every morning — previous day summary',de:'Jeden Morgen — Zusammenfassung des Vortages',it:'Ogni mattina — riepilogo del giorno precedente',es:'Cada mañana — resumen del día anterior',pt:'Todas as manhãs — resumo do dia anterior',nl:'Elke ochtend — samenvatting van de vorige dag',pl:'Każdego ranka — podsumowanie poprzedniego dnia'},
  'Cette action supprimera': {en:'This action will delete',de:'Diese Aktion löscht',it:'Questa azione eliminerà',es:'Esta acción eliminará',pt:'Esta ação eliminará',nl:'Deze actie verwijdert',pl:'Ta czynność usunie'},
  'votre compte et toutes vos données.': {en:'your account and all your data.',de:'Ihr Konto und alle Ihre Daten.',it:'il tuo account e tutti i tuoi dati.',es:'tu cuenta y todos tus datos.',pt:'a sua conta e todos os seus dados.',nl:'uw account en al uw gegevens.',pl:'Twoje konto i wszystkie dane.'},
  'Tapez': {en:'Type',de:'Geben Sie',it:'Digita',es:'Escribe',pt:'Escreva',nl:'Typ',pl:'Wpisz'},
  'pour confirmer': {en:'to confirm',de:'zur Bestätigung',it:'per confermare',es:'para confirmar',pt:'para confirmar',nl:'ter bevestiging',pl:'aby potwierdzić'},
  'Votre plan actuel': {en:'Your current plan',de:'Ihr aktueller Plan',it:'Il tuo piano attuale',es:'Tu plan actual',pt:'O seu plano atual',nl:'Uw huidige plan',pl:'Twój aktualny plan'},
  'Prise de RDV + Google Calendar': {en:'Appointment booking + Google Calendar',de:'Terminbuchung + Google Calendar',it:'Prenotazione appuntamenti + Google Calendar',es:'Reserva de citas + Google Calendar',pt:'Marcação de consultas + Google Calendar',nl:'Afspraken maken + Google Calendar',pl:'Umawianie wizyt + Google Calendar'},
  'Confirmations par email': {en:'Email confirmations',de:'E-Mail-Bestätigungen',it:'Conferme via email',es:'Confirmaciones por email',pt:'Confirmações por email',nl:'E-mailbevestigingen',pl:'Potwierdzenia emailem'},
  'Lien public + QR Code': {en:'Public link + QR Code',de:'Öffentlicher Link + QR-Code',it:'Link pubblico + Codice QR',es:'Enlace público + Código QR',pt:'Link público + Código QR',nl:'Openbare link + QR-code',pl:'Link publiczny + Kod QR'},
  "FAQ auto-enrichie par l'IA": {en:'FAQ auto-enriched by AI',de:'FAQ automatisch durch KI angereichert',it:"FAQ auto-arricchita dall'IA",es:'FAQ auto-enriquecida por la IA',pt:'FAQ auto-enriquecida pela IA',nl:'FAQ automatisch verrijkt door AI',pl:'FAQ automatycznie wzbogacana przez AI'},
  'Notifications SMS clients': {en:'Customer SMS notifications',de:'SMS-Benachrichtigungen für Kunden',it:'Notifiche SMS ai clienti',es:'Notificaciones SMS a clientes',pt:'Notificações SMS aos clientes',nl:'SMS-meldingen voor klanten',pl:'Powiadomienia SMS dla klientów'},
  'Support prioritaire 24h': {en:'Priority support within 24h',de:'Prioritäts-Support innerhalb 24h',it:'Supporto prioritario entro 24h',es:'Soporte prioritario en 24h',pt:'Suporte prioritário em 24h',nl:'Prioriteitsondersteuning binnen 24u',pl:'Priorytetowe wsparcie w 24h'},
  'Oui, sans engagement. Annulez depuis le portail de facturation.': {en:'Yes, no commitment. Cancel from the billing portal.',de:'Ja, ohne Vertragsbindung. Kündigen Sie über das Abrechnungsportal.',it:'Sì, senza impegno. Annulla dal portale di fatturazione.',es:'Sí, sin compromiso. Cancela desde el portal de facturación.',pt:'Sim, sem compromisso. Cancele através do portal de faturação.',nl:'Ja, zonder verplichting. Zeg op via het factureringsportaal.',pl:'Tak, bez zobowiązań. Anuluj przez portal rozliczeniowy.'},
  '📋 Utiliser un template': {en:'📋 Use a template',de:'📋 Vorlage verwenden',it:'📋 Usa un modello',es:'📋 Usar una plantilla',pt:'📋 Usar um modelo',nl:'📋 Een sjabloon gebruiken',pl:'📋 Użyj szablonu'},
  'SUPPRIMER': {en:'DELETE',de:'LÖSCHEN',it:'ELIMINA',es:'ELIMINAR',pt:'ELIMINAR',nl:'VERWIJDEREN',pl:'USUŃ'},
  // Personnel & Ressources tab
  '👥 Personnel': {en:'👥 Staff',de:'👥 Personal',it:'👥 Personale',es:'👥 Personal',pt:'👥 Pessoal',nl:'👥 Personeel',pl:'👥 Personel'},
  'Personnel & Ressources': {en:'Staff & Resources',de:'Personal & Ressourcen',it:'Personale e risorse',es:'Personal y recursos',pt:'Pessoal e recursos',nl:'Personeel & middelen',pl:'Personel i zasoby'},
  'Nombre de personnes/ressources pouvant traiter des RDV en parallèle (ex: coiffeurs, praticiens...). Fonctionne uniquement en mode Google Calendar — 10 maximum.': {en:'Number of people/resources that can handle appointments in parallel (e.g. hairdressers, practitioners...). Only works in Google Calendar mode — 10 maximum.',de:'Anzahl der Personen/Ressourcen, die Termine parallel bearbeiten können (z. B. Friseure, Behandler...). Funktioniert nur im Google Kalender-Modus — maximal 10.',it:'Numero di persone/risorse che possono gestire appuntamenti in parallelo (es: parrucchieri, professionisti...). Funziona solo in modalità Google Calendar — massimo 10.',es:'Número de personas/recursos que pueden atender citas en paralelo (ej: peluqueros, profesionales...). Solo funciona en modo Google Calendar — máximo 10.',pt:'Número de pessoas/recursos que podem tratar marcações em paralelo (ex: cabeleireiros, profissionais...). Só funciona no modo Google Calendar — máximo 10.',nl:'Aantal personen/middelen dat afspraken parallel kan afhandelen (bijv. kappers, behandelaars...). Werkt alleen in Google Agenda-modus — maximaal 10.',pl:'Liczba osób/zasobów, które mogą obsługiwać wizyty równolegle (np. fryzjerzy, specjaliści...). Działa tylko w trybie Google Calendar — maksymalnie 10.'},
  '➕ Ajouter': {en:'➕ Add',de:'➕ Hinzufügen',it:'➕ Aggiungi',es:'➕ Añadir',pt:'➕ Adicionar',nl:'➕ Toevoegen',pl:'➕ Dodaj'},
  "📅 Cette section n'a d'effet qu'en mode \"Google Calendar\" (onglet Rendez-vous). Avec un lien de réservation ou la gestion manuelle, elle n'est pas utilisée.": {en:"📅 This section only has an effect in \"Google Calendar\" mode (Appointments tab). With a booking link or manual management, it is not used.",de:'📅 Dieser Abschnitt wirkt sich nur im Modus "Google Kalender" aus (Tab Termine). Bei einem Buchungslink oder manueller Verwaltung wird er nicht verwendet.',it:'📅 Questa sezione ha effetto solo in modalità "Google Calendar" (scheda Appuntamenti). Con un link di prenotazione o la gestione manuale, non viene utilizzata.',es:'📅 Esta sección solo tiene efecto en el modo "Google Calendar" (pestaña Citas). Con un enlace de reserva o gestión manual, no se utiliza.',pt:'📅 Esta secção só tem efeito no modo "Google Calendar" (separador Marcações). Com um link de reserva ou gestão manual, não é utilizada.',nl:'📅 Dit gedeelte heeft alleen effect in de modus "Google Agenda" (tabblad Afspraken). Bij een boekingslink of handmatig beheer wordt het niet gebruikt.',pl:'📅 Ta sekcja ma znaczenie tylko w trybie "Google Calendar" (zakładka Wizyty). Przy linku do rezerwacji lub ręcznym zarządzaniu nie jest używana.'},
  "Aucune ressource configurée — l'IA se comportera comme si vous n'aviez qu'une seule disponibilité à la fois.": {en:"No resources configured — the AI will behave as if you only had one availability at a time.",de:'Keine Ressourcen konfiguriert — die KI verhält sich so, als hätten Sie jeweils nur eine Verfügbarkeit.',it:"Nessuna risorsa configurata — l'IA si comporterà come se aveste una sola disponibilità alla volta.",es:'Ningún recurso configurado — la IA se comportará como si solo tuviera una disponibilidad a la vez.',pt:'Nenhum recurso configurado — a IA comportar-se-á como se tivesse apenas uma disponibilidade de cada vez.',nl:'Geen middelen geconfigureerd — de AI gedraagt zich alsof u slechts één beschikbaarheid tegelijk heeft.',pl:'Brak skonfigurowanych zasobów — AI będzie działać tak, jakbyś miał tylko jedną dostępność naraz.'},
  '💾 Enregistrer le personnel': {en:'💾 Save staff',de:'💾 Personal speichern',it:'💾 Salva personale',es:'💾 Guardar personal',pt:'💾 Guardar pessoal',nl:'💾 Personeel opslaan',pl:'💾 Zapisz personel'},
  'Active': {en:'Active',de:'Aktiv',it:'Attivo',es:'Activo',pt:'Ativo',nl:'Actief',pl:'Aktywny'},
  '💾 Personnel enregistré': {en:'💾 Staff saved',de:'💾 Personal gespeichert',it:'💾 Personale salvato',es:'💾 Personal guardado',pt:'💾 Pessoal guardado',nl:'💾 Personeel opgeslagen',pl:'💾 Personel zapisany'},
  'Maximum 10 personnes/ressources': {en:'Maximum 10 people/resources',de:'Maximal 10 Personen/Ressourcen',it:'Massimo 10 persone/risorse',es:'Máximo 10 personas/recursos',pt:'Máximo 10 pessoas/recursos',nl:'Maximaal 10 personen/middelen',pl:'Maksymalnie 10 osób/zasobów'},
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

// Auto-apply on load — runs multiple times to catch dynamic content,
// PLUS a MutationObserver so content added later (dynamic rows, async
// API responses, builder UIs, etc.) gets translated automatically too,
// instead of only relying on fixed timers that can miss late-rendered content.
(function() {
  const lang = lrDashGetLang();
  if (!lang || lang === 'fr') return;

  function runTranslate() { lrTranslateAll(lang); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Run at 3 intervals to catch content loaded at different times
      setTimeout(runTranslate, 50);   // static HTML
      setTimeout(runTranslate, 600);  // after fast API responses
      setTimeout(runTranslate, 2000); // after slow API responses
      startObserver();
    });
  } else {
    setTimeout(runTranslate, 50);
    setTimeout(runTranslate, 600);
    setTimeout(runTranslate, 2000);
    startObserver();
  }

  // Global helper: call window.lrRetranslate() after rendering dynamic content
  window.lrRetranslate = runTranslate;

  // Watch for DOM changes (new nodes added/changed anywhere in the page —
  // e.g. dynamically-added rows in a rule builder) and re-translate shortly
  // after. Debounced so a burst of changes only triggers one pass, and
  // self-terminating: once a node's text is translated it no longer matches
  // a LR_TEXT_MAP key, so it produces no further mutations.
  function startObserver() {
    if (!('MutationObserver' in window) || !document.body) return;
    let debounceTimer = null;
    const observer = new MutationObserver(function(mutations) {
      // Ignore mutations that are just text we ourselves just translated
      const relevant = mutations.some(m => m.type === 'childList' || m.type === 'characterData');
      if (!relevant) return;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(runTranslate, 150);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    window.lrDashObserver = observer;
  }
})();

// ── Shared sidebar logo renderer ──
// Used by every dashboard page's loadSidebarInfo(). Previously only defined
// locally inside dashboard.html / abonnement.html / onboarding.html -- the
// other 5 dashboard pages called it without ever defining it, throwing an
// uncaught ReferenceError on every load (and leaving the sidebar stuck on
// "Loading..." since the rest of loadSidebarInfo() never got to run).
if (typeof renderSidebarLogo !== 'function') {
  function renderSidebarLogo(name, logoUrl, type) {
    const wrap = document.getElementById('sidebarLogoWrap');
    const span = document.getElementById('sidebarLogo');
    if (!wrap && !span) return;

    const initials = (name||'')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(w => w[0].toUpperCase())
      .join('');
    const display = initials || '?';

    if (logoUrl) {
      const img = new Image();
      img.onload = function() {
        if (wrap) {
          wrap.style.background = 'none';
          wrap.style.padding = '0';
          wrap.innerHTML = '<img src="' + logoUrl + '" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">';
        }
      };
      img.onerror = function() {
        // Fallback initiales si logo broken
        if (wrap) {
          wrap.style.background = 'linear-gradient(135deg,#0052CC,#00D4FF)';
          wrap.innerHTML = '<span style="color:#fff;font-weight:700;font-size:15px;letter-spacing:-0.5px;">' + display + '</span>';
        } else if (span) { span.textContent = display; }
      };
      img.src = logoUrl;
    } else {
      // Initiales sur fond gradient
      if (wrap) {
        wrap.style.background = 'linear-gradient(135deg,#0052CC,#00D4FF)';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.innerHTML = '<span style="color:#fff;font-weight:700;font-size:15px;letter-spacing:-0.5px;">' + display + '</span>';
      } else if (span) { span.textContent = display; }
    }
  }
}

// ── Shared confirm/alert modal (replaces native confirm()/alert()) ──
// Native dialogs can't be styled, break visual consistency with the rest of
// the app, and can behave inconsistently in some embedded contexts (mobile
// webviews, PWAs). This gives every dashboard page the same Promise-based API
// (customConfirm/customAlert) with a styled modal matching the app's design.
(function() {
  function ensureModalRoot() {
    let root = document.getElementById('lrConfirmModalRoot');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'lrConfirmModalRoot';
    root.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;align-items:center;justify-content:center;';
    root.innerHTML = `
      <div style="background:rgba(8,16,35,0.99);border:1px solid rgba(0,212,255,0.25);border-radius:20px;padding:32px;max-width:420px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5);font-family:'Segoe UI',system-ui,-apple-system,sans-serif;">
        <div id="lrConfirmIcon" style="font-size:40px;margin-bottom:14px;">⚠️</div>
        <p id="lrConfirmMessage" style="color:#fff;font-size:15px;line-height:1.6;margin:0 0 24px;"></p>
        <div id="lrConfirmButtons" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <button id="lrConfirmCancelBtn" style="padding:13px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:10px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Annuler</button>
          <button id="lrConfirmOkBtn" style="padding:13px;background:linear-gradient(135deg,#0052CC,#00D4FF);border:none;border-radius:10px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;">OK</button>
        </div>
      </div>`;
    document.body.appendChild(root);
    return root;
  }

  window.customConfirm = function(message, opts) {
    opts = opts || {};
    return new Promise(function(resolve) {
      const root = ensureModalRoot();
      document.getElementById('lrConfirmMessage').textContent = message;
      document.getElementById('lrConfirmIcon').textContent = opts.icon || '⚠️';
      const okBtn = document.getElementById('lrConfirmOkBtn');
      const cancelBtn = document.getElementById('lrConfirmCancelBtn');
      okBtn.textContent = opts.okLabel || 'OK';
      cancelBtn.textContent = opts.cancelLabel || 'Annuler';
      okBtn.style.background = opts.danger ? 'linear-gradient(135deg,#EF4444,#DC2626)' : 'linear-gradient(135deg,#0052CC,#00D4FF)';
      document.getElementById('lrConfirmButtons').style.display = 'grid';
      cancelBtn.style.display = 'block';
      function cleanup(result) {
        root.style.display = 'none';
        okBtn.onclick = null; cancelBtn.onclick = null;
        resolve(result);
      }
      okBtn.onclick = function() { cleanup(true); };
      cancelBtn.onclick = function() { cleanup(false); };
      root.style.display = 'flex';
    });
  };

  window.customAlert = function(message, opts) {
    opts = opts || {};
    return new Promise(function(resolve) {
      const root = ensureModalRoot();
      document.getElementById('lrConfirmMessage').textContent = message;
      document.getElementById('lrConfirmIcon').textContent = opts.icon || 'ℹ️';
      const okBtn = document.getElementById('lrConfirmOkBtn');
      const cancelBtn = document.getElementById('lrConfirmCancelBtn');
      okBtn.textContent = opts.okLabel || 'OK';
      okBtn.style.background = 'linear-gradient(135deg,#0052CC,#00D4FF)';
      cancelBtn.style.display = 'none';
      function cleanup() {
        root.style.display = 'none';
        okBtn.onclick = null;
        resolve();
      }
      okBtn.onclick = cleanup;
      root.style.display = 'flex';
    });
  };

  // Shared logout(), replacing the 8 nearly-identical local copies across
  // dashboard pages. Each page's onclick="logout()" resolves to this one.
  if (typeof window.logout !== 'function') {
    window.logout = async function() {
      const ok = await window.customConfirm('Êtes-vous sûr de vouloir vous déconnecter ?', { icon: '👋' });
      if (ok) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('business_id');
        window.location.href = '/auth';
      }
    };
  }
})();

// ── CONFIGURATION ADAPTATIVE : masquer le lien "Rendez-vous" si le commerce n'utilise pas la prise de RDV ──
async function lrDashApplyRdvVisibility() {
  if (location.pathname.includes('dashboard-rendez-vous')) return; // toujours visible sur sa propre page (pour pouvoir réactiver le mode)
  try {
    const token = localStorage.getItem('auth_token');
    const businessId = localStorage.getItem('business_id');
    if (!token || !businessId) return;
    const res = await fetch(`https://localreply-api.onrender.com/api/business/${businessId}/config`, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    if (!res.ok) return;
    const data = await res.json();
    const rdvMode = data?.business?.rdv_mode || 'google';
    if (rdvMode === 'none') {
      document.querySelectorAll('a[href="/dashboard-rendez-vous"]').forEach(el => { el.style.display = 'none'; });
    }
  } catch (e) { /* silencieux — la nav reste visible par défaut en cas d'erreur */ }
}
document.addEventListener('DOMContentLoaded', lrDashApplyRdvVisibility);
