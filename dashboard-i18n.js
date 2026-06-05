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
