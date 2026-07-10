// ═══════════════════════════════════════════════════════════════
// LocalReply — dashboard-configuration.html
// Translation patch for the per-business-type label system
// (TYPE_CONFIGS section titles, column headers, placeholders).
//
// Load this AFTER the page's main inline <script> (i.e. as the last
// <script> before </body>) so getTypeConfig / updateServicesSection /
// addService already exist and can be wrapped.
//
// Add this single line to dashboard-configuration.html, right before
// the closing </body> tag:
//   <script src="/dashboard-config-types-i18n.js"></script>
// ═══════════════════════════════════════════════════════════════
(function () {

  // French source string -> translations for the other 7 languages.
  var LR_CFG_TYPES_I18N = {
    // Section titles
    'Services & Tarifs':      {en:'Services & Rates',      de:'Dienste & Tarife',        it:'Servizi & Tariffe',        es:'Servicios & Tarifas',       pt:'Serviços & Tarifas',        nl:'Diensten & Tarieven',       pl:'Usługi i cennik'},
    'Produits & Prix':        {en:'Products & Prices',     de:'Produkte & Preise',       it:'Prodotti & Prezzi',        es:'Productos & Precios',       pt:'Produtos & Preços',         nl:'Producten & Prijzen',       pl:'Produkty i ceny'},
    'Tables & Capacité':      {en:'Tables & Capacity',     de:'Tische & Kapazität',      it:'Tavoli & Capacità',        es:'Mesas & Capacidad',         pt:'Mesas & Capacidade',        nl:'Tafels & Capaciteit',       pl:'Stoliki i pojemność'},
    'Séances & Tarifs':       {en:'Screenings & Prices',   de:'Vorstellungen & Preise',  it:'Spettacoli & Prezzi',      es:'Sesiones & Precios',        pt:'Sessões & Preços',          nl:'Voorstellingen & Prijzen',  pl:'Seanse i ceny'},
    'Salles & Tarifs':        {en:'Rooms & Prices',        de:'Räume & Preise',          it:'Stanze & Prezzi',          es:'Salas & Precios',           pt:'Salas & Preços',            nl:'Kamers & Prijzen',          pl:'Pokoje i ceny'},
    'Chambres & Tarifs':      {en:'Rooms & Rates',         de:'Zimmer & Preise',         it:'Camere & Tariffe',         es:'Habitaciones & Tarifas',    pt:'Quartos & Tarifas',         nl:'Kamers & Tarieven',         pl:'Pokoje i stawki'},

    // Column 1 headers
    'Prestation':    {en:'Service',       de:'Leistung',            it:'Prestazione',      es:'Prestación',      pt:'Prestação',      nl:'Dienst',        pl:'Usługa'},
    'Soin':          {en:'Treatment',     de:'Behandlung',          it:'Trattamento',      es:'Tratamiento',     pt:'Tratamento',     nl:'Behandeling',   pl:'Zabieg'},
    'Séance':        {en:'Session',       de:'Sitzung',             it:'Seduta',           es:'Sesión',          pt:'Sessão',         nl:'Sessie',        pl:'Sesja'},
    'Acte':          {en:'Procedure',     de:'Leistung',            it:'Prestazione',      es:'Acto',            pt:'Ato',            nl:'Verrichting',   pl:'Zabieg'},
    'Consultation':  {en:'Consultation',  de:'Beratung',            it:'Consulenza',       es:'Consulta',        pt:'Consulta',       nl:'Consult',       pl:'Konsultacja'},
    'Mission':       {en:'Assignment',    de:'Auftrag',             it:'Incarico',         es:'Encargo',         pt:'Serviço',        nl:'Opdracht',      pl:'Zlecenie'},
    'Service':       {en:'Service',       de:'Dienst',              it:'Servizio',         es:'Servicio',        pt:'Serviço',        nl:'Dienst',        pl:'Usługa'},
    'Formation':     {en:'Training',      de:'Kurs',                it:'Formazione',       es:'Formación',       pt:'Formação',       nl:'Opleiding',     pl:'Szkolenie'},
    'Cours':         {en:'Class',         de:'Kurs',                it:'Corso',            es:'Clase',           pt:'Aula',           nl:'Les',           pl:'Zajęcia'},
    'Intervention':  {en:'Call-out',      de:'Einsatz',             it:'Intervento',       es:'Intervención',    pt:'Intervenção',    nl:'Interventie',   pl:'Interwencja'},
    'Table':         {en:'Table',         de:'Tisch',               it:'Tavolo',           es:'Mesa',            pt:'Mesa',           nl:'Tafel',         pl:'Stolik'},
    'Espace':        {en:'Space',         de:'Bereich',             it:'Spazio',           es:'Espacio',         pt:'Espaço',         nl:'Ruimte',        pl:'Przestrzeń'},
    'Chambre':       {en:'Room',          de:'Zimmer',              it:'Camera',           es:'Habitación',      pt:'Quarto',         nl:'Kamer',         pl:'Pokój'},
    'Salle':         {en:'Room',          de:'Saal',                it:'Sala',             es:'Sala',            pt:'Sala',           nl:'Zaal',          pl:'Sala'},
    'Entrée':        {en:'Entry',         de:'Eintritt',            it:'Ingresso',         es:'Entrada',         pt:'Entrada',        nl:'Toegang',       pl:'Wejście'},
    'Produit':       {en:'Product',       de:'Produkt',             it:'Prodotto',         es:'Producto',        pt:'Produto',        nl:'Product',       pl:'Produkt'},
    'Viande':        {en:'Meat',          de:'Fleisch',             it:'Carne',            es:'Carne',           pt:'Carne',          nl:'Vlees',         pl:'Mięso'},
    'Composition':   {en:'Arrangement',   de:'Gesteck',             it:'Composizione',     es:'Composición',     pt:'Composição',     nl:'Bloemstuk',     pl:'Kompozycja'},
    'Article':       {en:'Item',          de:'Artikel',             it:'Capo',             es:'Prenda',          pt:'Peça',           nl:'Artikel',       pl:'Artykuł'},

    // Column 2 headers
    'Prix (€)':        {en:'Price (€)',        de:'Preis (€)',         it:'Prezzo (€)',        es:'Precio (€)',        pt:'Preço (€)',        nl:'Prijs (€)',        pl:'Cena (€)'},
    'Capacité':        {en:'Capacity',         de:'Kapazität',         it:'Capacità',          es:'Capacidad',         pt:'Capacidade',       nl:'Capaciteit',       pl:'Pojemność'},
    'Prix/nuit (€)':   {en:'Price/night (€)',  de:'Preis/Nacht (€)',   it:'Prezzo/notte (€)',  es:'Precio/noche (€)',  pt:'Preço/noite (€)',  nl:'Prijs/nacht (€)',  pl:'Cena/noc (€)'},
    'Prix/pers (€)':   {en:'Price/person (€)', de:'Preis/Person (€)',  it:'Prezzo/persona (€)',es:'Precio/persona (€)',pt:'Preço/pessoa (€)', nl:'Prijs/persoon (€)',pl:'Cena/os. (€)'},

    // Column 3 headers
    'Durée (min)':  {en:'Duration (min)', de:'Dauer (Min.)',  it:'Durata (min)',  es:'Duración (min)', pt:'Duração (min)', nl:'Duur (min)',   pl:'Czas trwania (min)'},
    'Zone':         {en:'Area',           de:'Bereich',       it:'Zona',          es:'Zona',           pt:'Zona',          nl:'Zone',         pl:'Strefa'},
    'Type':         {en:'Type',           de:'Typ',           it:'Tipo',          es:'Tipo',           pt:'Tipo',          nl:'Type',         pl:'Typ'},
    'Joueurs':      {en:'Players',        de:'Spieler',       it:'Giocatori',     es:'Jugadores',      pt:'Jogadores',     nl:'Spelers',      pl:'Gracze'},
    'Unité':        {en:'Unit',           de:'Einheit',       it:'Unità',         es:'Unidad',         pt:'Unidade',       nl:'Eenheid',      pl:'Jednostka'},
    'Stock':        {en:'Stock',          de:'Bestand',       it:'Scorte',        es:'Stock',          pt:'Stock',         nl:'Voorraad',     pl:'Stan magazynowy'},

    // ph1 placeholders (service/product/reservation examples)
    'Ex: Coupe homme':          {en:"E.g. Men's haircut",     de:'Z.B. Herrenschnitt',        it:'Es. Taglio uomo',          es:'Ej. Corte hombre',        pt:'Ex. Corte masculino',       nl:'Bijv. Herenknipbeurt',       pl:'Np. Strzyżenie męskie'},
    'Ex: Massage relaxant':     {en:'E.g. Relaxing massage',  de:'Z.B. Entspannungsmassage',  it:'Es. Massaggio rilassante', es:'Ej. Masaje relajante',    pt:'Ex. Massagem relaxante',    nl:'Bijv. Ontspanningsmassage',  pl:'Np. Masaż relaksacyjny'},
    'Ex: Massage sportif':      {en:'E.g. Sports massage',    de:'Z.B. Sportmassage',         it:'Es. Massaggio sportivo',   es:'Ej. Masaje deportivo',    pt:'Ex. Massagem desportiva',   nl:'Bijv. Sportmassage',         pl:'Np. Masaż sportowy'},
    'Ex: Détartrage':           {en:'E.g. Scaling',           de:'Z.B. Zahnsteinentfernung',  it:'Es. Ablazione del tartaro',es:'Ej. Limpieza dental',     pt:'Ex. Destartarização',       nl:'Bijv. Tandsteen verwijderen',pl:'Np. Usuwanie kamienia'},
    'Ex: Examen de vue':        {en:'E.g. Eye exam',          de:'Z.B. Sehtest',              it:'Es. Esame della vista',    es:'Ej. Examen de la vista',  pt:'Ex. Exame de vista',        nl:'Bijv. Oogonderzoek',         pl:'Np. Badanie wzroku'},
    'Ex: Conseil juridique':    {en:'E.g. Legal advice',      de:'Z.B. Rechtsberatung',       it:'Es. Consulenza legale',    es:'Ej. Asesoría legal',      pt:'Ex. Aconselhamento jurídico',nl:'Bijv. Juridisch advies',    pl:'Np. Porada prawna'},
    'Ex: Étude projet':         {en:'E.g. Project study',     de:'Z.B. Projektstudie',        it:'Es. Studio di progetto',   es:'Ej. Estudio de proyecto', pt:'Ex. Estudo de projeto',     nl:'Bijv. Projectstudie',        pl:'Np. Analiza projektu'},
    'Ex: Bilan annuel':         {en:'E.g. Annual accounts',   de:'Z.B. Jahresabschluss',      it:'Es. Bilancio annuale',     es:'Ej. Balance anual',       pt:'Ex. Balanço anual',         nl:'Bijv. Jaarrekening',         pl:'Np. Bilans roczny'},
    'Ex: Estimation bien':      {en:'E.g. Property valuation',de:'Z.B. Immobilienbewertung',  it:'Es. Valutazione immobile', es:'Ej. Tasación inmueble',   pt:'Ex. Avaliação de imóvel',   nl:'Bijv. Taxatie pand',         pl:'Np. Wycena nieruchomości'},
    'Ex: Cours individuel':     {en:'E.g. Private lesson',    de:'Z.B. Einzelunterricht',     it:'Es. Lezione individuale',  es:'Ej. Clase individual',    pt:'Ex. Aula individual',       nl:'Bijv. Individuele les',      pl:'Np. Lekcja indywidualna'},
    'Ex: Cours collectif':      {en:'E.g. Group class',       de:'Z.B. Gruppenkurs',          it:'Es. Corso collettivo',     es:'Ej. Clase colectiva',     pt:'Ex. Aula em grupo',         nl:'Bijv. Groepsles',            pl:'Np. Zajęcia grupowe'},
    'Ex: Vidange':              {en:'E.g. Oil change',        de:'Z.B. Ölwechsel',            it:'Es. Tagliando',            es:'Ej. Cambio de aceite',    pt:'Ex. Mudança de óleo',       nl:'Bijv. Olieverversing',       pl:'Np. Wymiana oleju'},
    'Ex: Dépannage urgent':     {en:'E.g. Emergency callout', de:'Z.B. Notdienst',            it:'Es. Intervento urgente',   es:'Ej. Reparación urgente',  pt:'Ex. Reparação urgente',     nl:'Bijv. Spoedreparatie',       pl:'Np. Pilna naprawa'},
    'Ex: Ménage domicile':      {en:'E.g. Home cleaning',     de:'Z.B. Hausreinigung',        it:'Es. Pulizia domestica',    es:'Ej. Limpieza del hogar',  pt:'Ex. Limpeza doméstica',     nl:'Bijv. Huisschoonmaak',       pl:'Np. Sprzątanie domu'},
    'Ex: Tonte pelouse':        {en:'E.g. Lawn mowing',       de:'Z.B. Rasenmähen',           it:'Es. Taglio del prato',     es:'Ej. Corte de césped',     pt:'Ex. Corte de relva',        nl:'Bijv. Gras maaien',          pl:'Np. Koszenie trawnika'},
    'Ex: Consultation':         {en:'E.g. Consultation',      de:'Z.B. Beratung',             it:'Es. Consulenza',           es:'Ej. Consulta',            pt:'Ex. Consulta',              nl:'Bijv. Consult',              pl:'Np. Konsultacja'},
    'Ex: Toilettage chien':     {en:'E.g. Dog grooming',      de:'Z.B. Hundepflege',          it:'Es. Toelettatura cane',    es:'Ej. Peluquería canina',   pt:'Ex. Tosquia de cão',        nl:'Bijv. Hondentrimsalon',      pl:'Np. Strzyżenie psa'},
    'Ex: Portrait studio':      {en:'E.g. Studio portrait',   de:'Z.B. Studioporträt',        it:'Es. Ritratto in studio',   es:'Ej. Retrato en estudio',  pt:'Ex. Retrato em estúdio',    nl:'Bijv. Studioportret',        pl:'Np. Portret studyjny'},
    'Ex: Costume':              {en:'E.g. Suit',              de:'Z.B. Anzug',                it:'Es. Abito',                es:'Ej. Traje',               pt:'Ex. Fato',                  nl:'Bijv. Pak',                  pl:'Np. Garnitur'},
    'Ex: Table 4 pers.':        {en:'E.g. Table for 4',       de:'Z.B. Tisch für 4',          it:'Es. Tavolo per 4',         es:'Ej. Mesa para 4',         pt:'Ex. Mesa para 4',           nl:'Bijv. Tafel voor 4',         pl:'Np. Stolik dla 4 osób'},
    'Ex: Espace salon':         {en:'E.g. Lounge area',       de:'Z.B. Lounge-Bereich',       it:'Es. Area salotto',         es:'Ej. Zona salón',          pt:'Ex. Zona de estar',         nl:'Bijv. Loungeruimte',         pl:'Np. Strefa lounge'},
    'Ex: Table 2 pers.':        {en:'E.g. Table for 2',       de:'Z.B. Tisch für 2',          it:'Es. Tavolo per 2',         es:'Ej. Mesa para 2',         pt:'Ex. Mesa para 2',           nl:'Bijv. Tafel voor 2',         pl:'Np. Stolik dla 2 osób'},
    'Ex: Chambre double':       {en:'E.g. Double room',       de:'Z.B. Doppelzimmer',         it:'Es. Camera doppia',        es:'Ej. Habitación doble',    pt:'Ex. Quarto duplo',          nl:'Bijv. Tweepersoonskamer',    pl:'Np. Pokój dwuosobowy'},
    'Ex: Séance 3D':            {en:'E.g. 3D screening',      de:'Z.B. 3D-Vorstellung',       it:'Es. Proiezione 3D',        es:'Ej. Sesión 3D',           pt:'Ex. Sessão 3D',             nl:'Bijv. 3D-voorstelling',      pl:'Np. Seans 3D'},
    'Ex: Salle mystère':        {en:'E.g. Mystery room',      de:'Z.B. Mystery-Raum',         it:'Es. Stanza del mistero',   es:'Ej. Sala misteriosa',     pt:'Ex. Sala de mistério',      nl:'Bijv. Mysterykamer',         pl:'Np. Pokój zagadek'},
    'Ex: Adulte':               {en:'E.g. Adult',             de:'Z.B. Erwachsener',          it:'Es. Adulto',               es:'Ej. Adulto',              pt:'Ex. Adulto',                nl:'Bijv. Volwassene',           pl:'Np. Dorosły'},
    'Ex: Pain tradition':       {en:'E.g. Traditional bread', de:'Z.B. Baguette Tradition',   it:'Es. Pane tradizionale',    es:'Ej. Pan tradicional',     pt:'Ex. Pão tradicional',       nl:'Bijv. Traditioneel brood',   pl:'Np. Chleb tradycyjny'},
    'Ex: Entrecôte':            {en:'E.g. Ribeye steak',      de:'Z.B. Entrecôte',            it:'Es. Entrecôte',            es:'Ej. Entrecot',            pt:'Ex. Entrecosto',            nl:'Bijv. Entrecote',            pl:'Np. Antrykot'},
    'Ex: Saumon frais':         {en:'E.g. Fresh salmon',      de:'Z.B. Frischer Lachs',       it:'Es. Salmone fresco',       es:'Ej. Salmón fresco',       pt:'Ex. Salmão fresco',         nl:'Bijv. Verse zalm',           pl:'Np. Świeży łosoś'},
    'Ex: Bouquet de saison':    {en:'E.g. Seasonal bouquet',  de:'Z.B. Saisonaler Strauß',    it:'Es. Bouquet di stagione',  es:'Ej. Ramo de temporada',   pt:'Ex. Ramo da época',         nl:'Bijv. Seizoensboeket',       pl:'Np. Bukiet sezonowy'},
    'Ex: Nom du produit':       {en:'E.g. Product name',      de:'Z.B. Produktname',          it:'Es. Nome del prodotto',    es:'Ej. Nombre del producto', pt:'Ex. Nome do produto',       nl:'Bijv. Productnaam',          pl:'Np. Nazwa produktu'},
    'Nom du service':           {en:'Service name',           de:'Name der Dienstleistung',   it:'Nome del servizio',        es:'Nombre del servicio',     pt:'Nome do serviço',           nl:'Naam van de dienst',         pl:'Nazwa usługi'},

    // ph3 textual placeholders
    'Terrasse':   {en:'Terrace',  de:'Terrasse',      it:'Terrazza', es:'Terraza',   pt:'Terraço',  nl:'Terras',    pl:'Taras'},
    'Intérieur':  {en:'Indoor',   de:'Innenbereich',  it:'Interno',  es:'Interior',  pt:'Interior', nl:'Binnen',    pl:'Wewnątrz'},
    'Standard':   {en:'Standard', de:'Standard',      it:'Standard', es:'Estándar',  pt:'Standard', nl:'Standaard', pl:'Standardowy'},
    'Salle 1':    {en:'Room 1',   de:'Saal 1',        it:'Sala 1',   es:'Sala 1',    pt:'Sala 1',   nl:'Zaal 1',    pl:'Sala 1'},
    'pièce':      {en:'piece',    de:'Stück',         it:'pezzo',    es:'unidad',    pt:'peça',     nl:'stuk',      pl:'sztuka'},
    '/ kg':       {en:'/ kg',     de:'/ kg',          it:'/ kg',     es:'/ kg',      pt:'/ kg',     nl:'/ kg',      pl:'/ kg'}
  };

  // businessType -> service|product|reservation (mirrors businessConfigs in the page)
  var LR_CFG_TYPE_BY_BIZ = {
    salon:'service', spa:'service', massage:'service', dentist:'service', opticien:'product',
    restaurant:'reservation', cafe:'reservation', pizzeria:'reservation',
    bakery:'product', butcher:'product', fishmonger:'product', florist:'product',
    law:'service', architect:'service', accountant:'service', realtor:'service', training:'service',
    gym:'service', cinema:'reservation', escapegame:'reservation', pool:'reservation',
    garage:'service', plumber:'service', cleaning:'service', gardener:'service',
    medical:'service', vet:'service', grooming:'service', retail:'product', hotel:'reservation',
    photographer:'service', laundry:'service', other:'service',
    nailsalon:'service', tattoo:'service', drivingschool:'service', phonerepair:'service',
    locksmith:'service', pharmacy:'product'
  };

  var LR_CFG_TITLE_BY_TYPE = { service:'Services & Tarifs', product:'Produits & Prix', reservation:'Tables & Capacité' };
  var LR_CFG_TITLE_OVERRIDE = { cinema:'Séances & Tarifs', escapegame:'Salles & Tarifs', hotel:'Chambres & Tarifs' };

  function lrCfgLang() {
    return (typeof lrDashGetLang === 'function') ? lrDashGetLang() : 'fr';
  }

  function lrCfgT(fr, lang) {
    if (!fr || !lang || lang === 'fr') return fr;
    var e = LR_CFG_TYPES_I18N[fr];
    return (e && e[lang]) || fr;
  }

  function lrCfgSectionTitle(businessType, lang) {
    var fr = LR_CFG_TITLE_OVERRIDE[businessType] || LR_CFG_TITLE_BY_TYPE[LR_CFG_TYPE_BY_BIZ[businessType]] || LR_CFG_TITLE_BY_TYPE.service;
    return lrCfgT(fr, lang);
  }

  // ── Wrap getTypeConfig so col1/col2/col3/ph1/ph3 come back translated ──
  if (typeof window.getTypeConfig === 'function') {
    var _origGetTypeConfig = window.getTypeConfig;
    window.getTypeConfig = function (businessType) {
      var base = _origGetTypeConfig(businessType);
      var lang = lrCfgLang();
      if (!base || lang === 'fr') return base;
      return Object.assign({}, base, {
        col1: lrCfgT(base.col1, lang),
        col2: lrCfgT(base.col2, lang),
        col3: base.col3 ? lrCfgT(base.col3, lang) : base.col3,
        ph1:  lrCfgT(base.ph1, lang),
        ph3:  base.ph3 ? lrCfgT(base.ph3, lang) : base.ph3
      });
    };
  }

  // ── Re-apply translated title + column headers after the section renders ──
  function lrCfgRetranslateServiceSection() {
    var sel = document.getElementById('businessType');
    if (!sel) return;
    var businessType = sel.value;
    var lang = lrCfgLang();
    var cfg = (typeof window.getTypeConfig === 'function') ? window.getTypeConfig(businessType) : null;

    var titleEl = document.getElementById('serviceTitle');
    if (titleEl) titleEl.textContent = lrCfgSectionTitle(businessType, lang);

    if (cfg) {
      var hc = document.querySelector('.service-headers-container > div');
      if (hc && hc.children.length >= 3) {
        hc.children[0].textContent = cfg.col1 || '';
        hc.children[1].textContent = cfg.col2 || '';
        hc.children[2].textContent = cfg.col3 || '';
      }
    }
  }

  if (typeof window.updateServicesSection === 'function') {
    var _origUpdateServicesSection = window.updateServicesSection;
    window.updateServicesSection = function (type) {
      var ret = _origUpdateServicesSection.apply(this, arguments);
      lrCfgRetranslateServiceSection();
      return ret;
    };
  }

  // ── Fix up placeholders on newly-added service rows ──
  if (typeof window.addService === 'function') {
    var _origAddService = window.addService;
    window.addService = function () {
      var ret = _origAddService.apply(this, arguments);
      var lang = lrCfgLang();
      if (lang !== 'fr') {
        var list = document.getElementById('servicesList');
        var row = list && list.lastElementChild;
        var sel = document.getElementById('businessType');
        var cfg = (row && sel && typeof window.getTypeConfig === 'function') ? window.getTypeConfig(sel.value) : null;
        if (row && cfg) {
          var inputs = row.querySelectorAll('input');
          if (inputs[0] && cfg.ph1) inputs[0].placeholder = cfg.ph1;
          if (inputs[2] && cfg.ph3) inputs[2].placeholder = cfg.ph3;
        }
      }
      return ret;
    };
  }

  // Run once after load in case a business type is already selected
  // (existing business) before any change event fires.
  function _lrCfgInitialRun() {
    setTimeout(lrCfgRetranslateServiceSection, 300);
    setTimeout(lrCfgRetranslateServiceSection, 1200);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _lrCfgInitialRun);
  } else {
    _lrCfgInitialRun();
  }

})();
