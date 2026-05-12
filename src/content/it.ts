// Tutti i testi del sito in italiano.
// Le stringhe marcate con TODO: devono essere personalizzate dal cliente.
// Struttura pronta per aggiungere src/content/en.ts in futuro.

export const it = {
  studio: {
    name: 'Studio Associato Consulenze Aziendali Integrate',
    shortName: 'Studio A.C.A.I.',
    // TODO: Inserire l'anno di fondazione
    foundedYear: '1990',
    address: 'Viale Villa Heloise 21, 90100 Palermo (PA)',
    phone: '091 303025 / 091 220679',
    phoneMobile: '091 303025',
    email: 'info@studio-acai.it',
    // TODO: Inserire P.IVA reale
    piva: '00000000000',
    // TODO: Inserire URL sito definitivo
    siteUrl: 'https://TODO-studio-url.it',
  },

  nav: {
    home: 'Home',
    chiSiamo: 'Chi Siamo',
    servizi: 'Servizi',
    team: 'Il Team',
    contatti: 'Contatti',
    faq: 'FAQ',
  },

  hero: {
    // TODO: Personalizzare il titolo principale
    title: 'Consulenza Fiscale e Tributaria a Palermo',
    // TODO: Personalizzare il sottotitolo
    subtitle:
      'Professionalità, riservatezza e competenza al servizio di privati e imprese dal TODO:foundedYear.',
    cta: 'Scopri i Nostri Servizi',
    ctaSecondary: 'Contattaci',
  },

  home: {
    serviziTitle: 'I Nostri Servizi',
    serviziSubtitle:
      'Offriamo una consulenza professionale a 360° in ambito fiscale, tributario e societario.',
    perchéNoi: {
      title: 'Perché Scegliere il Nostro Studio',
      subtitle:
        'Un riferimento solido e affidabile per navigare la complessità fiscale italiana.',
      values: [
        {
          title: 'Esperienza Consolidata',
          // TODO: Personalizzare gli anni di esperienza
          description:
            'Oltre TODO: anni di attività al fianco di famiglie, professionisti e imprese palermitane.',
          icon: '⚖️',
        },
        {
          title: 'Approccio Personalizzato',
          description:
            'Ogni cliente è unico. Analizziamo la situazione specifica per offrire soluzioni su misura.',
          icon: '🤝',
        },
        {
          title: 'Aggiornamento Continuo',
          description:
            'Il nostro team si aggiorna costantemente su normativa fiscale, giurisprudenza tributaria e circolari dell\'Agenzia delle Entrate.',
          icon: '📚',
        },
        {
          title: 'Discrezione e Riservatezza',
          description:
            'Trattiamo ogni informazione con la massima riservatezza nel pieno rispetto del GDPR.',
          icon: '🔒',
        },
      ],
    },
    ctaSection: {
      title: 'Hai Bisogno di una Consulenza?',
      subtitle:
        'Contattaci per un primo incontro conoscitivo. Analizziamo la tua situazione senza impegno.',
      cta: 'Prenota una Consulenza',
    },
  },

  chiSiamo: {
    meta: {
      title: 'Chi Siamo — Studio A.C.A.I.',
      description:
        'Scopri la storia, i valori e l\'approccio professionale dello Studio A.C.A.I. di Palermo.',
    },
    title: 'Chi Siamo',
    subtitle: 'Una storia di competenza, dedizione e fiducia',
    storia: {
      title: 'La Nostra Storia',
      // TODO: Personalizzare la storia dello studio
      paragraphs: [
        'Lo Studio A.C.A.I. — Studio Associato Consulenze Aziendali Integrate — nasce a Palermo nel TODO:foundedYear con l\'obiettivo di offrire una consulenza fiscale e tributaria di alto livello, capace di rispondere alle esigenze di privati, professionisti e imprese.',
        'Nel corso degli anni, abbiamo costruito un rapporto di fiducia con la nostra clientela, affiancandola nelle scelte patrimoniali più rilevanti e nella gestione degli adempimenti fiscali con puntualità e precisione.',
        'Oggi il nostro studio conta un team di TODO: professionisti qualificati, operativi su tutto il territorio siciliano con base principale a Palermo.',
      ],
    },
    valori: {
      title: 'I Nostri Valori',
      items: [
        {
          title: 'Integrità',
          description:
            'Operiamo con trasparenza e correttezza in ogni fase del rapporto professionale.',
        },
        {
          title: 'Competenza',
          description:
            'Formazione continua e specializzazione per garantire soluzioni accurate e aggiornate.',
        },
        {
          title: 'Prossimità',
          description:
            'Siamo vicini ai nostri clienti, disponibili e reattivi a ogni esigenza.',
        },
        {
          title: 'Riservatezza',
          description:
            'La gestione dei dati sensibili è prioritaria. Operiamo nel pieno rispetto della normativa privacy.',
        },
      ],
    },
    approccio: {
      title: 'Il Nostro Approccio',
      description:
        'Prima ascoltiamo. Ogni consulenza inizia con un\'analisi approfondita della situazione del cliente. Solo dopo definiamo la strategia più adeguata, che sia per la gestione ordinaria o per situazioni straordinarie come contenziosi, successioni o ristrutturazioni aziendali.',
    },
  },

  servizi: {
    meta: {
      title: 'Servizi — Studio A.C.A.I.',
      description:
        'Consulenza fiscale, tributaria, contabile e societaria a Palermo. Dichiarazioni dei redditi, IVA, assistenza imprese e molto altro.',
    },
    title: 'I Nostri Servizi',
    subtitle:
      'Competenza specializzata per ogni esigenza fiscale, contabile e tributaria.',
    items: [
      {
        id: 'fiscale',
        icon: '📊',
        title: 'Consulenza Fiscale',
        description:
          'Pianificazione fiscale personalizzata per ottimizzare il carico tributario nel pieno rispetto della normativa vigente. Analisi di operazioni straordinarie, cessioni, donazioni e successioni.',
        details: [
          'Pianificazione fiscale individuale e societaria',
          'Ottimizzazione del carico fiscale',
          'Consulenza su operazioni straordinarie',
          'Analisi di convenienza fiscale',
        ],
      },
      {
        id: 'tributario',
        icon: '⚖️',
        title: 'Diritto Tributario',
        description:
          'Assistenza e rappresentanza in ogni fase del contenzioso tributario, dagli avvisi di accertamento fino alla Corte di Cassazione. Gestione di procedure di adesione e mediazione fiscale.',
        details: [
          'Assistenza in accertamenti fiscali',
          'Ricorsi alle Corti di Giustizia Tributaria',
          'Procedure di adesione e mediazione',
          'Autotutela e interpelli',
        ],
      },
      {
        id: 'amministrativo',
        icon: '🏛️',
        title: 'Diritto Amministrativo',
        description:
          'Consulenza in materia di diritto amministrativo con focus su procedimenti con la Pubblica Amministrazione, appalti pubblici e regolamentazione d\'impresa.',
        details: [
          'Rapporti con la Pubblica Amministrazione',
          'Appalti e contratti pubblici',
          'Autorizzazioni e licenze',
          'Ricorsi amministrativi',
        ],
      },
      {
        id: 'contabilita',
        icon: '📒',
        title: 'Contabilità e Bilancio',
        description:
          'Tenuta della contabilità ordinaria e semplificata, redazione del bilancio d\'esercizio, bilancio consolidato e situazioni patrimoniali periodiche.',
        details: [
          'Contabilità ordinaria e semplificata',
          'Redazione bilancio d\'esercizio',
          'Bilancio consolidato',
          'Situazioni contabili infrannuali',
        ],
      },
      {
        id: 'dichiarazioni',
        icon: '📋',
        title: 'Dichiarazioni dei Redditi',
        description:
          'Elaborazione e invio di tutte le dichiarazioni fiscali: Modello 730, Redditi PF/SP/SC/ENC, IVA, IRAP, IMU, F24 e adempimenti periodici.',
        details: [
          'Modello 730 e Redditi PF',
          'Dichiarazioni societarie (Redditi SC/SP)',
          'Dichiarazioni IVA e IRAP',
          'F24 e adempimenti periodici',
        ],
      },
      {
        id: 'imprese',
        icon: '🏢',
        title: 'Assistenza alle Imprese',
        description:
          'Supporto continuativo alle imprese: costituzione, gestione ordinaria, operazioni straordinarie, crisi d\'impresa e passaggio generazionale.',
        details: [
          'Costituzione e avvio d\'impresa',
          'Gestione fiscale e contabile ordinaria',
          'Fusioni, scissioni, trasformazioni',
          'Passaggio generazionale e successioni d\'impresa',
        ],
      },
    ],
  },

  team: {
    meta: {
      title: 'Il Team — Studio A.C.A.I.',
      description:
        'Conosci i professionisti dello Studio A.C.A.I. di Palermo.',
    },
    title: 'Il Nostro Team',
    subtitle:
      'Professionisti qualificati e aggiornati al tuo fianco.',
    members: [
      {
        // TODO: Inserire nome e cognome
        name: 'Nome Cognome',
        // TODO: Inserire ruolo
        role: 'Dottore Commercialista — Fondatore',
        // TODO: Inserire descrizione professionale
        bio: 'Breve descrizione professionale, specializzazioni e anni di esperienza.',
        // TODO: Inserire iscrizione ordine
        albo: 'Iscritto all\'Ordine dei Dottori Commercialisti di Palermo n. XXXX',
        photo: null,
      },
      {
        // TODO: Inserire nome e cognome
        name: 'Nome Cognome',
        // TODO: Inserire ruolo
        role: 'Avvocato Tributarista',
        // TODO: Inserire descrizione professionale
        bio: 'Breve descrizione professionale, specializzazioni e anni di esperienza.',
        // TODO: Inserire iscrizione ordine
        albo: 'Iscritto all\'Ordine degli Avvocati di Palermo n. XXXX',
        photo: null,
      },
      {
        // TODO: Inserire nome e cognome
        name: 'Nome Cognome',
        // TODO: Inserire ruolo
        role: 'Consulente Contabile',
        // TODO: Inserire descrizione professionale
        bio: 'Breve descrizione professionale, specializzazioni e anni di esperienza.',
        // TODO: Inserire iscrizione ordine
        albo: 'Iscritta all\'Ordine dei Consulenti del Lavoro di Palermo n. XXXX',
        photo: null,
      },
    ],
  },

  contatti: {
    meta: {
      title: 'Contatti — Studio A.C.A.I.',
      description:
        'Contatta lo Studio A.C.A.I. di Palermo. Viale Villa Heloise 21. Telefono, email e modulo di contatto.',
    },
    title: 'Contattaci',
    subtitle:
      'Siamo a tua disposizione per un primo incontro conoscitivo senza impegno.',
    form: {
      title: 'Invia un Messaggio',
      namePlaceholder: 'Nome e Cognome',
      emailPlaceholder: 'Indirizzo Email',
      phonePlaceholder: 'Telefono (opzionale)',
      subjectPlaceholder: 'Oggetto',
      messagePlaceholder: 'Descrivi brevemente la tua esigenza...',
      submit: 'Invia Richiesta',
      privacy:
        'Inviando il modulo acconsenti al trattamento dei dati personali ai sensi del D.Lgs. 196/2003 e del GDPR 2016/679.',
    },
    info: {
      addressTitle: 'Indirizzo',
      phoneTitle: 'Telefono',
      emailTitle: 'Email',
      hoursTitle: 'Orari di Studio',
      hours: 'Lunedì – Venerdì: 9:00–13:00 / 15:00–18:30\nSabato: su appuntamento\nDomenica: chiuso',
    },
  },

  faq: {
    meta: {
      title: 'FAQ — Studio A.C.A.I.',
      description:
        'Domande frequenti su consulenza fiscale, dichiarazioni dei redditi, contenzioso tributario e servizi dello studio.',
    },
    title: 'Domande Frequenti',
    subtitle:
      'Risposte alle domande più comuni dei nostri clienti in materia fiscale e tributaria.',
    items: [
      {
        question: 'Quando è obbligatorio presentare la dichiarazione dei redditi?',
        answer:
          'La dichiarazione dei redditi è obbligatoria per tutti i contribuenti che hanno percepito redditi non assoggettati a ritenuta alla fonte a titolo definitivo, o che hanno più fonti di reddito. Anche i lavoratori dipendenti con particolari situazioni (es. immobili, investimenti) devono valutare la presentazione. Il nostro studio analizza gratuitamente la tua situazione per determinare l\'obbligo.',
      },
      {
        question: 'Cosa succede se ricevo un avviso di accertamento?',
        answer:
          'Un avviso di accertamento non è una condanna: è l\'avvio di un procedimento che può essere contestato. È fondamentale non ignorarlo e rivolgersi subito a un professionista. Il nostro studio valuta nel dettaglio l\'atto e, a seconda dei casi, propone l\'accertamento con adesione, la mediazione fiscale o il ricorso alla Corte di Giustizia Tributaria.',
      },
      {
        question: 'Qual è la differenza tra commercialista e avvocato tributarista?',
        answer:
          'Il commercialista si occupa prevalentemente di contabilità, bilancio, dichiarazioni fiscali e consulenza tributaria preventiva. L\'avvocato tributarista è abilitato alla rappresentanza in giudizio davanti alle Corti di Giustizia Tributaria. Il nostro studio integra entrambe le figure, offrendo una consulenza completa dalla pianificazione al contenzioso.',
      },
      {
        question: 'Come funziona la mediazione fiscale?',
        answer:
          'La mediazione fiscale (o reclamo-mediazione) è una procedura obbligatoria per le controversie fiscali di valore fino a 50.000 euro. Prima di ricorrere al giudice tributario, il contribuente deve presentare un reclamo/proposta di mediazione all\'Agenzia delle Entrate. Il procedimento si conclude entro 90 giorni. In caso di mancato accordo, si può procedere con il ricorso giurisdizionale.',
      },
      {
        question: 'Quali regimi contabili esistono per le piccole imprese?',
        answer:
          'Le piccole imprese e i professionisti possono scegliere tra: il regime forfettario (ricavi fino a 85.000€, aliquota agevolata 15% o 5%), la contabilità semplificata (per imprese con ricavi fino a 500.000€ per prestazioni di servizi o 800.000€ per altre attività), e la contabilità ordinaria (obbligatoria per le società di capitali e per chi supera le soglie). Il regime più conveniente dipende da molti fattori che analizziamo insieme.',
      },
      {
        question: 'Come posso pianificare fiscalmente la successione della mia impresa?',
        answer:
          'Il passaggio generazionale d\'impresa richiede una pianificazione anticipata per ottimizzare i costi fiscali e garantire la continuità aziendale. Gli strumenti principali includono: donazione con patto di famiglia, holding di famiglia, trust, e pianificazione successoria con testamento. Il nostro studio elabora strategie personalizzate che tengono conto della struttura societaria, dei rapporti familiari e degli obiettivi del cliente.',
      },
    ],
  },

  footer: {
    tagline: 'Consulenza fiscale e tributaria professionale a Palermo.',
    copyright: `© ${new Date().getFullYear()} Studio A.C.A.I. Tutti i diritti riservati.`,
    privacy: 'Privacy Policy',
    legal: 'Note Legali',
  },
} as const;

export type Content = typeof it;
