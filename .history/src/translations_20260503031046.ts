
export type Language = 'fr' | 'en';

export interface Content {
  nav: {
    home: string;
    about: string;
    actions: string;
    partners: string;
    publications: string;
    join: string;
    donate: string;
    contact: string;
    overview: string;
  };
  hero: {
    title: string;
    subtitle: string;
    motto: string;
    ctaDonate: string;
    ctaJoin: string;
  };
  about: {
    title: string;
    vision: {
      title: string;
      text: string;
    };
    mission: {
      title: string;
      text: string;
      points: string[];
    };
    objectives: {
      title: string;
      generalObjective: {
        title: string;
        text: string;
      };
      specificObjectives: {
        title: string;
        list: string[];
      };
      audiencesActivities: {
        title: string;
        audiences: string;
        activitiesTitle: string;
        activities: string[];
      };
      expectedResults: {
        title: string;
        list: string[];
      };
      resources: {
        title: string;
        text: string;
      };
    };
    team: {
      title: string;
      intro: string;
      directionLabel: string;
    governanceTitle: string;
    governanceText: string;
    members: {
        name: string;
        role: string;
        description: string;
      }[];
    };
  };
  home: {
    presentation: string;
    latestProjects: string;
    latestCareers: string;
    latestPublications: string;
    viewMore: string;
    allProjects: string;
    allCareers: string;
    allPublications: string;
    contactCTA: string;
    features: {
      expertise: { title: string; text: string };
      community: { title: string; text: string };
      influence: { title: string; text: string };
    };
    projects: {
      p1: { title: string; theme: string };
      p2: { title: string; theme: string };
      p3: { title: string; theme: string };
    };
    careers: {
      c1: { title: string; type: string; location: string };
      c2: { title: string; type: string; location: string };
    };
    publications: {
      pb1: { title: string; category: string; date: string };
      pb2: { title: string; category: string; date: string };
    };
  };
  expertise: {
    title: string;
    subtitle: string;
    domains: {
      title: string;
      description: string;
      icon: string;
    }[];
    approach: {
      title: string;
      data: { title: string; text: string };
      coop: { title: string; text: string };
    };
  };
  projects: {
    title: string;
    subtitle: string;
    filterButton: string;
    closeButton: string;
    clearButton: string;
    filters: {
      all: string;
      ongoing: string;
      completed: string;
      theme: string;
      status: string;
    };
    themes: {
      digital: string;
      training: string;
      inclusion: string;
      cooperation: string;
      orientation: string;
    };
    noProjects: string;
    details: {
      description: string;
      objectives: string;
      impact: string;
      status: string;
      date: string;
      theme: string;
      backToProjects: string;
      location: string;
      budget: string;
      beneficiaries: string;
      supportTitle: string;
      supportText: string;
      donateCTA: string;
    };
  };
  join: {
    title: string;
    intro: string;
    explorer: string;
    jobsTitle: string;
    jobsText: string;
    membershipTitle: string;
    membershipText: string;
    membershipCTA: string;
    expertTitle: string;
    expertText: string;
    partnerTitle: string;
    partnerText: string;
  };
  donate: {
    title: string;
    description: string;
    formLabelName: string;
    formLabelEmail: string;
    formLabelAmount: string;
    formLabelMessage: string;
    submit: string;
    anonymous: string;
    impactLabel: string;
    secureTitle: string;
    secureText: string;
    quickTitle: string;
    quickText: string;
    thankYou: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    addressTitle: string;
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    formTitle: string;
    labelIdentity: string;
    labelEmail: string;
    labelPhone: string;
    labelSubject: string;
    labelMessage: string;
    subjects: {
      partnership: string;
      membership: string;
      expertise: string;
      other: string;
    };
    submit: string;
    success: string;
    expertNote: string;
    mapPlaceholder: string;
  };
  publications: {
    title: string;
    documentsLabel: string;
    articlesLabel: string;
    readMore: string;
    readingTime: string;
    allCategories: string;
    filterPlaceholder: string;
    availableDocs: string;
    identifiedOpp: string;
    notFound: string;
    back: string;
    share: string;
    editorialTitle: string;
    editorialBio: string;
  };
  workingTogether: {
    membership: {
      title: string;
      intro: string;
      statutesTitle: string;
      statutesText: string;
      benefitsTitle: string;
      benefits: string[];
      formTitle: string;
      readyTitle: string;
      feesInfo: string;
    };
    expert: {
      title: string;
      intro: string;
      statusTitle: string;
      statusText: string;
      formTitle: string;
      fieldsTitle: string;
      readyTitle: string;
      readyText: string;
      contactCTA: string;
      secureData: string;
    };
    partner: {
      title: string;
      intro: string;
      guaranteesTitle: string;
      guaranteesText: string;
      collaborationTitle: string;
      guaranteesList: {
        audit: { title: string; text: string };
        accountability: { title: string; text: string };
      };
      cta: string;
      types: {
        technical: { title: string; text: string };
        financial: { title: string; text: string };
        advocacy: { title: string; text: string };
      };
    };
    careers: {
      title: string;
      intro: string;
      valuesTitle: string;
      valuesText: string;
      processTitle: string;
      processText: string;
      listingTitle: string;
      applyNow: string;
      interestedTitle: string;
      applyText: string;
      requirements: string;
      notFound: string;
      backToOffers: string;
      allOffers: string;
      postedOn: string;
      location: string;
      equity: string;
      innovation: string;
      expertsStat: string;
      searchPlaceholder: string;
      filterAll: string;
      filterJobs: string;
      filterInternships: string;
      filterVolunteering: string;
      contractType: string;
      duration: string;
      responsibilities: string;
      qualifications: string;
      deadline: string;
    };
  };
  footer: {
    legal: string;
    rights: string;
  };
  loader: {
    slogan: string;
    loading: string;
  };
}

export const translations: Record<Language, Content> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      actions: "Actions",
      partners: "Partenaires",
      publications: "Publications",
      join: "Agir ensemble",
      donate: "Faire un don",
      contact: "Contact",
      overview: "Vue d'ensemble"
    },
    hero: {
      title: "eduBuilders Institute",
      subtitle: "Institut ouest-africain d'innovation et de coopération en éducation",
      motto: "L'éducation de qualité commence par la coopération",
      ctaDonate: "Faire un don",
      ctaJoin: "Rejoindre l'institut"
    },
    about: {
      title: "À propos",
      vision: {
        title: "Notre Vision",
        text: "D’ici 2050, eduBuilders Institute ambitionne de devenir un acteur de référence contribuant, de manière significative, à ce que les systèmes éducatifs béninois, et plus largement ouest-africains offrent à tous les apprenants, notamment les plus vulnérables, des apprentissages de qualité grâce au renforcement des capacités, à l’innovation pédagogique et à la coopération éducative."
      },
      mission: {
        title: "Notre Mission",
        text: "eduBuilders Institute œuvre pour le renforcement des systèmes éducatifs du Bénin et en Afrique de l’Ouest en :",
        points: [
          "Développant les compétences des enseignants et formateurs.",
          "Favorisant la coopération et les échanges éducatifs et culturels.",
          "Promouvant l’innovation pédagogique et numérique.",
          "Accompagnant les jeunes dans leur orientation et insertion socioprofessionnelle.",
          "Produisant des connaissances et expertises fondées sur des données probantes pour soutenir les politiques éducatives."
        ]
      },
      objectives: {
        title: "Nos Objectifs",
        generalObjective: {
          title: "Objectif général",
          text: "Amélioration durable de l'éducation et de l'EFTP (Enseignement et Formation Techniques et Professionnels) pour tous, incluant les vulnérables."
        },
        specificObjectives: {
          title: "Objectifs spécifiques",
          list: [
            "Promouvoir la coopération et la mobilité éducative régionale.",
            "Renforcer les capacités des enseignants et des formateurs.",
            "Faciliter l'accès à une éducation de qualité pour les communautés défavorisées.",
            "Soutenir l'orientation scolaire et l'égalité des chances.",
            "Encourager l'innovation pédagogique et technologique.",
            "Mobiliser des ressources via le plaidoyer et les partenariats."
          ]
        },
        audiencesActivities: {
          title: "Publics cibles",
          audiences: "Apprenants (élèves, étudiants, apprentis), enseignants, formateurs, et cadres de l'éducation.",
          activitiesTitle: "Axes d'activités",
          activities: [
            "Formations et renforcement de capacités.",
            "Échanges et mobilité éducative.",
            "Logiciels et solutions numériques.",
            "Études et recherche-action.",
            "Accompagnement et orientation."
          ]
        },
        expectedResults: {
          title: "Résultats attendus",
          list: [
            "Amélioration de la qualité des apprentissages.",
            "Accès inclusif et équitable renforcé.",
            "Innovation numérique intégrée aux pratiques.",
            "Utilisation accrue de données probantes pour les politiques.",
            "Compétences des enseignants en adéquation avec les défis.",
            "Insertion socioprofessionnelle des jeunes facilitée.",
            "Coopération régionale dynamisée."
          ]
        },
        resources: {
          title: "Ressources",
          text: "Cotisations, subventions, partenariats, prestations et dons."
        }
      },
      team: {
        title: "Notre Équipe",
        intro: "Une équipe dédiée à l'excellence et à l'innovation éducative.",
        directionLabel: "Direction Générale",
        governanceTitle: "Gouvernance Collaborative",
        governanceText: "Notre équipe dirigeante place l'éthique, la transparence et l'innovation au sommet de ses priorités pour garantir l'impact de nos missions.",
        members: [
          {
            name: "Directeur Général",
            role: "Stratégie et représentation",
            description: "Responsable de la définition de la vision stratégique, de la coordination globale des activités et de la représentation officielle de l'Institut auprès des partenaires nationaux et internationaux."
          },
          {
            name: "Coordinateur",
            role: "Mise en œuvre opérationnelle",
            description: "Assure la planification opérationnelle, le suivi des projets sur le terrain et la coordination technique entre les différentes équipes pour atteindre les objectifs fixés."
          },
          {
            name: "Chargé d'administration et de trésorerie",
            role: "Gestion financière et logistique",
            description: "Garant de la saine gestion des ressources financières, de la transparence comptable et de l'organisation logistique nécessaire au bon fonctionnement de l'Institut."
          }
        ]
      }
    },
    home: {
      presentation: "eduBuilders Institute est une organisation apolitique et à but non lucratif intervenant au Bénin et en Afrique de l’Ouest. Elle œuvre pour le renforcement des systèmes éducatifs à travers la coopération, l’innovation et le développement des compétences.",
      latestProjects: "Nos Derniers Projets",
      latestCareers: "Opportunités Réncentes",
      latestPublications: "Dernières Publications",
      viewMore: "Lire la suite",
      allProjects: "Voir tous les projets",
      allCareers: "Voir toutes les offres",
      allPublications: "Toutes les ressources",
      contactCTA: "Nous contacter",
      features: {
        expertise: { title: "Expertise", text: "Appui technique aux ministères et développement de curricula innovants." },
        community: { title: "Communauté", text: "Renforcement de capacités des enseignants et soutien à la jeunesse." },
        influence: { title: "Rayonnement", text: "Coopération régionale en Afrique de l'Ouest pour un impact durable." }
      },
      projects: {
        p1: { title: "Plateforme EduDigital Bénin", theme: "Numérique" },
        p2: { title: "Programme Excellence Enseignante", theme: "Formation" },
        p3: { title: "Inclusion Sans Frontières", theme: "Inclusion" }
      },
      careers: {
        c1: { title: "Spécialiste en Ingénierie de la Formation", type: "Salarié", location: "Bénin / Hybride" },
        c2: { title: "Stagiaire d'appui technique et à la recherche", type: "Stage", location: "Bénin" }
      },
      publications: {
        pb1: { title: "Rapport Annuel sur l'Éducation au Bénin (2024)", category: "Rapport", date: "Mars 2024" },
        pb2: { title: "Le Numérique Educatif en Afrique de l’Ouest", category: "Étude", date: "Janvier 2024" }
      }
    },
    expertise: {
      title: "Domaines d'intervention et d'expertise",
      subtitle: "Notre expertise au service de la transformation des systèmes éducatifs ouest-africains.",
      domains: [
        {
          title: "Analyse et évaluation en éducation",
          description: "Analyse et mise en œuvre de dispositifs pour comprendre les systèmes et orienter les politiques éducatives basées sur des données probantes.",
          icon: "BarChart2"
        },
        {
          title: "Formation des enseignant.es",
          description: "Accompagnement professionnel, renforcement des pratiques et approches centrées sur l'apprentissage pour une éducation de qualité.",
          icon: "BookOpen"
        },
        {
          title: "Coopération éducative",
          description: "Collaboration institutions-chercheurs-praticiens, co-construction de solutions innovantes et échanges culturels et éducatifs.",
          icon: "Handshake"
        },
        {
          title: "Orientation scolaire et professionnelle",
          description: "Soutien aux élèves et étudiants pour des choix éclairés et une insertion socioprofessionnelle durable.",
          icon: "Compass"
        },
        {
          title: "Éducation inclusive",
          description: "Accès équitable, prise en compte des besoins des publics vulnérables (y compris en situation d’urgence) et résilience.",
          icon: "HeartPulse"
        },
        {
          title: "Développement du numérique éducatif",
          description: "Le numérique comme levier de transformation, d'innovation pédagogique et d'enrichissement des ressources d'apprentissage.",
          icon: "Laptop"
        }
      ],
      approach: {
        title: "Notre Approche",
        data: {
          title: "Basée sur les données",
          text: "Nous utilisons des évidences et des données probantes pour orienter chaque intervention, garantissant son efficacité et sa pertinence."
        },
        coop: {
          title: "Co-construction",
          text: "Aucune solution n'est imposée. Nous travaillons main dans la main avec les acteurs locaux pour bâtir des systèmes résilients."
        }
      }
    },
    projects: {
      title: "Nos Projets",
      subtitle: "Découvrez nos initiatives et leur impact sur le terrain.",
      filterButton: "Filtrer",
      closeButton: "Fermer",
      clearButton: "Tout effacer",
      filters: {
        all: "Tous les projets",
        ongoing: "En cours",
        completed: "Terminé",
        theme: "Thématique",
        status: "Statut"
      },
      themes: {
        digital: "Numérique",
        training: "Formation",
        inclusion: "Inclusion",
        cooperation: "Coopération",
        orientation: "Orientation"
      },
      noProjects: "Aucun projet ne correspond à vos filtres.",
      details: {
        description: "Description du projet",
        objectives: "Objectifs du projet",
        impact: "Impact attendu",
        status: "Statut du projet",
        date: "Période",
        theme: "Thématique",
        backToProjects: "Retour aux projets",
        location: "Lieu",
        budget: "Budget",
        beneficiaries: "Bénéficiaires directs",
        supportTitle: "Soutenir ce projet",
        supportText: "Vous souhaitez contribuer au succès de cette initiative ? Participez au financement ou apportez votre expertise technique.",
        donateCTA: "Faire un don"
      }
    },
    join: {
      title: "Agir Ensemble",
      intro: "Participez à la transformation éducative de l'Afrique de l'Ouest.",
      explorer: "Explorer",
      jobsTitle: "Emploi, Stage et Volontariat",
      jobsText: "Recrutement régulier pour notre organe de soutien technique ou pour des stages d'appui à la recherche. Rejoignez une équipe passionnée.",
      membershipTitle: "Adhérer",
      membershipText: "L'adhésion se fait par demande écrite soumise à l'approbation de la Direction Générale, accompagnée des frais d'adhésion requis.",
      membershipCTA: "Nous contacter pour soumettre votre demande d'adhésion",
      expertTitle: "Contribuer en tant qu'Expert",
      expertText: "Ouvert aux membres d'honneur et conseillers techniques apportant une expertise de haut niveau.",
      partnerTitle: "Devenir Partenaire",
      partnerText: "Partenariats stratégiques de plaidoyer et de financement pour un impact durable."
    },
    donate: {
      title: "Soutenir notre action",
      description: "Votre don permet de financer des programmes d'innovation pédagogique en Afrique de l'Ouest.",
      formLabelName: "Nom complet",
      formLabelEmail: "Email",
      formLabelAmount: "Montant (FCFA)",
      formLabelMessage: "Message (Optionnel)",
      submit: "Confirmer le don",
      anonymous: "Faire un don anonyme",
      impactLabel: "Impact Social",
      secureTitle: "Fonds sécurisés",
      secureText: "Transparence totale sur l'utilisation de vos contributions.",
      quickTitle: "Action rapide",
      quickText: "Déploiement immédiat de ressources pédagogiques critiques.",
      thankYou: "Merci pour votre générosité ! (Simulation)"
    },
    contact: {
      title: "Nous contacter",
      subtitle: "Nous sommes à votre écoute pour toute collaboration ou demande d'information.",
      address: "Ms Gbaguidi, Route de Ouidah, Quartier Fandji, Abomey-Calavi, Bénin",
      addressTitle: "Siège Social",
      phoneTitle: "Téléphone",
      phone: "+229 00 00 00 00",
      emailTitle: "Email",
      email: "contact@edubuilders.bj",
      formTitle: "Envoyez-nous un message",
      labelIdentity: "Nom et Prénom *",
      labelEmail: "Adresse email *",
      labelPhone: "Téléphone (Optionnel)",
      labelSubject: "Objet *",
      labelMessage: "Message *",
      subjects: {
        partnership: "Partenariat",
        membership: "Adhésion",
        expertise: "Expertise",
        other: "Autre"
      },
      submit: "Envoyer le message",
      success: "Votre message a été envoyé avec succès !",
      expertNote: "Vous souhaitez contribuer en tant qu'expert ? Précisez votre domaine d'intervention dans l'objet de votre message.",
      mapPlaceholder: "Emplacement Carte Google Maps"
    },
    publications: {
      title: "Publications & Ressources",
      documentsLabel: "Rapports & Documents",
      articlesLabel: "Articles & Actualités",
      readMore: "Lire l'article",
      readingTime: "min de lecture",
      allCategories: "Toutes les catégories",
      filterPlaceholder: "Rechercher une opportunité...",
      availableDocs: "documents disponibles",
      identifiedOpp: "opportunités identifiées",
      notFound: "Article non trouvé",
      back: "Retour aux publications",
      share: "Partager",
      editorialTitle: "EduBuilders Éditorial",
      editorialBio: "Expertise en innovation et coopération éducative en Afrique de l'Ouest."
    },
    workingTogether: {
      membership: {
        title: "Adhérer",
        intro: "L'adhésion est un acte d'engagement pour l'avenir éducatif de l'Afrique de l'Ouest.",
        statutesTitle: "Conditions Statutaires (Art. 5)",
        statutesText: "L'adhésion nécessite une demande écrite soumise à l'approbation de la Direction Générale et le paiement du droit d'adhésion.",
        benefitsTitle: "Vos Droits & Avantages",
        benefits: [
          "Droit de vote à l'Assemblée Générale",
          "Accès aux rapports d'activités annuels",
          "Droit de participation aux projets de l'Institut",
          "Priorité sur les formations spécialisées"
        ],
        formTitle: "Demande d'adhésion",
        readyTitle: "Prêt à nous rejoindre ?",
        feesInfo: "Les détails relatifs aux droits d'adhésion vous seront communiqués lors de nos échanges."
      },
      expert: {
        title: "Contribuer en tant qu'Expert",
        intro: "Mobilisation de l'expertise (académiques, chercheurs, praticiens) pour l'assistance technique régionale.",
        statusTitle: "Statut de Membre d'Honneur",
        statusText: "Possibilité d'être nommé 'Membre d'honneur' par l'Assemblée Générale sur proposition du Directeur Général pour services exceptionnels.",
        formTitle: "Soumettre mon expertise",
        fieldsTitle: "Domaines d'Expertise Prioritaires",
        readyTitle: "Prêt à contribuer ?",
        readyText: "Nous sommes toujours à la recherche d'experts passionnés pour transformer l'éducation.",
        contactCTA: "Nous contacter",
        secureData: "Données sécurisées"
      },
      partner: {
        title: "Devenir Partenaire",
        intro: "L'éducation de qualité commence par la coopération.",
        guaranteesTitle: "Transparence & Redevabilité (Art. 10)",
        guaranteesText: "Engagement strict pour la transparence, le contrôle externe et la reddition de comptes systématique.",
        collaborationTitle: "Une collaboration basée sur la confiance et l'impact.",
        guaranteesList: {
          audit: { title: "Contrôle Externe", text: "Audits annuels systématiques et rapports de transparence publics." },
          accountability: { title: "Responsabilité", text: "Indicateurs de performance clairs et redevabilité envers nos partenaires." }
        },
        cta: "Démarrer un partenariat",
        types: {
          technical: { title: "Partenariat Technique", text: "Co-développement de solutions pédagogiques innovantes." },
          financial: { title: "Partenariat Financier", text: "Soutien aux programmes à fort impact social." },
          advocacy: { title: "Partenariat de Plaidoyer", text: "Influence conjointe sur les politiques éducatives régionales." }
        }
      },
      careers: {
        title: "Emploi, Stage et Volontariat",
        intro: "Rejoignez l'organe de soutien technique spécialisé ou postulez pour un stage d'appui technique et de recherche.",
        valuesTitle: "Nos Valeurs",
        valuesText: "Équité, innovation et impact mesurable sur les apprentissages sont au cœur de notre culture.",
        processTitle: "Recrutement Process",
        processText: "Ouvert aux membres et aux externes sur la base exclusive des compétences techniques et de l'alignement aux valeurs. Nous accueillons également des stagiaires pour l'appui technique et la recherche.",
        listingTitle: "Opportunités actuelles",
        applyNow: "Postuler maintenant",
        interestedTitle: "Intéressé par ce poste ?",
        applyText: "Soumettez votre candidature dès aujourd'hui pour rejoindre une équipe dédiée à l'excellence éducative.",
        requirements: "CV + Lettre de motivation requis",
        notFound: "Offre non trouvée",
        backToOffers: "Retour aux carrières",
        allOffers: "Toutes les offres",
        postedOn: "Publié le",
        equity: "Équité",
        innovation: "Innovation",
        expertsStat: "Experts Internationaux",
        searchPlaceholder: "Rechercher une offre...",
        filterAll: "Tous",
        filterJobs: "Emploi",
        filterInternships: "Stage",
        filterVolunteering: "Volontariat",
        location: "Lieu",
        contractType: "Type de contrat",
        duration: "Durée",
        responsibilities: "Responsabilités",
        qualifications: "Qualifications & Compétences",
        deadline: "Date limite"
      }
    },
    footer: {
      legal: "eduBuilders Institute - Organisation régie par la Loi N° 2025-19 du Bénin.",
      rights: "Tous droits réservés"
    },
    loader: {
      slogan: "L'éducation de qualité commence par la coopération",
      loading: "Chargement..."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      actions: "Actions",
      partners: "Partners",
      publications: "Publications",
      join: "Work Together",
      donate: "Donate",
      contact: "Contact",
      overview: "Overview"
    },
    hero: {
      title: "eduBuilders Institute",
      subtitle: "West African Institute for Innovation and Cooperation in Education",
      motto: "Quality education starts with cooperation",
      ctaDonate: "Make a Donation",
      ctaJoin: "Join the Institute"
    },
    about: {
      title: "About Us",
      vision: {
        title: "Our Vision",
        text: "By 2050, eduBuilders Institute aims to become a benchmark player contributing significantly to ensuring that Beninese and, more broadly, West African education systems provide all learners, especially the most vulnerable, with quality learning through capacity building, pedagogical innovation, and educational cooperation."
      },
      mission: {
        title: "Our Mission",
        text: "eduBuilders Institute works to strengthen education systems in Benin and West Africa by:",
        points: [
          "Developing the skills of teachers and trainers.",
          "Fostering educational and cultural cooperation and exchange.",
          "Promoting pedagogical and digital innovation.",
          "Supporting young people in their guidance and socio-professional integration.",
          "Producing evidence-based knowledge and expertise to support educational policies."
        ]
      },
      objectives: {
        title: "Our Objectives",
        generalObjective: {
          title: "General Objective",
          text: "Sustainable improvement of education and TVET (Technical and Vocational Education and Training) for all, including the vulnerable."
        },
        specificObjectives: {
          title: "Specific Objectives",
          list: [
            "Promote regional educational cooperation and mobility.",
            "Strengthen the capacities of teachers and trainers.",
            "Facilitate access to quality education for disadvantaged communities.",
            "Support educational guidance and equal opportunity.",
            "Encourage pedagogical and technological innovation.",
            "Mobilize resources through advocacy and partnerships."
          ]
        },
        audiencesActivities: {
          title: "Target Audiences",
          audiences: "Learners (pupils, students, apprentices), teachers, trainers, and education managers.",
          activitiesTitle: "Activity Areas",
          activities: [
            "Training and capacity building.",
            "Educational exchange and mobility.",
            "Software and digital solutions.",
            "Action research and studies.",
            "Support and guidance."
          ]
        },
        expectedResults: {
          title: "Expected Results",
          list: [
            "Improved quality of learning.",
            "Strengthened inclusive and equitable access.",
            "Digital innovation integrated into practices.",
            "Increased use of evidence for policies.",
            "Teacher skills aligned with current challenges.",
            "Facilitated socio-professional integration of young people.",
            "Energized regional cooperation."
          ]
        },
        resources: {
          title: "Resources",
          text: "Dues, grants, partnerships, services, and donations."
        }
      },
      team: {
        title: "Our Team",
        intro: "A team dedicated to excellence and educational innovation.",
        directionLabel: "General Management",
        governanceTitle: "Collaborative Governance",
        governanceText: "Our leadership team puts ethics, transparency, and innovation at the top of its priorities to ensure the impact of our missions.",
        members: [
          {
            name: "Director General",
            role: "Strategy and Representation",
            description: "Responsible for defining the strategic vision, global coordination of activities, and official representation of the Institute to national and international partners."
          },
          {
            name: "Coordinator",
            role: "Operational Implementation",
            description: "Ensures operational planning, on-the-ground project monitoring, and technical coordination between teams to achieve the set objectives."
          },
          {
            name: "Administration and Treasury Officer",
            role: "Financial and Logistics Management",
            description: "Guardian of sound financial resource management, accounting transparency, and logistical organization necessary for the smooth operation of the Institute."
          }
        ]
      }
    },
    home: {
      presentation: "eduBuilders Institute is an apolitical and non-profit organization operating in Benin and West Africa. It works to strengthen education systems through cooperation, innovation, and skills development.",
      latestProjects: "Our Latest Projects",
      latestCareers: "Recent Opportunities",
      latestPublications: "Latest Publications",
      viewMore: "Read more",
      allProjects: "View all projects",
      allCareers: "View all offers",
      allPublications: "All resources",
      contactCTA: "Contact us",
      features: {
        expertise: { title: "Expertise", text: "Technical support to ministries and development of innovative curricula." },
        community: { title: "Community", text: "Teacher capacity building and youth support." },
        influence: { title: "Reach", text: "Regional cooperation in West Africa for sustainable impact." }
      },
      projects: {
        p1: { title: "EduDigital Benin Platform", theme: "Digital" },
        p2: { title: "Teacher Excellence Program", theme: "Training" },
        p3: { title: "Inclusion Without Borders", theme: "Inclusion" }
      },
      careers: {
        c1: { title: "Training Engineering Specialist", type: "Salaried", location: "Benin / Hybrid" },
        c2: { title: "Technical and Research Support Intern", type: "Internship", location: "Benin" }
      },
      publications: {
        pb1: { title: "Annual Report on Education in Benin (2024)", category: "Report", date: "March 2024" },
        pb2: { title: "Digital Education in West Africa", category: "Study", date: "January 2024" }
      }
    },
    expertise: {
      title: "Areas of Intervention and Expertise",
      subtitle: "Our expertise at the service of transforming West African education systems.",
      domains: [
        {
          title: "Analysis and Evaluation in Education",
          description: "Analysis and implementation of mechanisms to understand systems and guide education policies based on evidence.",
          icon: "BarChart2"
        },
        {
          title: "Teacher Training",
          description: "Professional support, strengthening of practices and learning-centered approaches for quality education.",
          icon: "BookOpen"
        },
        {
          title: "Educational Cooperation",
          description: "Collaboration between institutions, researchers, and practitioners, co-construction of innovative solutions and educational exchanges.",
          icon: "Handshake"
        },
        {
          title: "Educational and Vocational Guidance",
          description: "Support for students and pupils for informed choices and sustainable socio-professional integration.",
          icon: "Compass"
        },
        {
          title: "Inclusive Education",
          description: "Equitable access, taking into account the needs of vulnerable populations (including in emergency situations) and resilience.",
          icon: "HeartPulse"
        },
        {
          title: "Digital Educational Development",
          description: "Digital technology as a lever for transformation, pedagogical innovation, and enrichment of learning resources.",
          icon: "Laptop"
        }
      ],
      approach: {
        title: "Our Approach",
        data: {
          title: "Data-Driven",
          text: "We use evidence and data to guide each intervention, ensuring its effectiveness and relevance."
        },
        coop: {
          title: "Co-construction",
          text: "No solution is imposed. We work hand in hand with local actors to build resilient systems."
        }
      }
    },
    projects: {
      title: "Our Projects",
      subtitle: "Discover our initiatives and their impact on the ground.",
      filterButton: "Filter",
      closeButton: "Close",
      clearButton: "Clear all",
      filters: {
        all: "All projects",
        ongoing: "Ongoing",
        completed: "Completed",
        theme: "Theme",
        status: "Status"
      },
      themes: {
        digital: "Digital",
        training: "Training",
        inclusion: "Inclusion",
        cooperation: "Cooperation",
        orientation: "Orientation"
      },
      noProjects: "No projects match your filters.",
      details: {
        description: "Project Description",
        objectives: "Project Objectives",
        impact: "Expected Impact",
        status: "Project Status",
        date: "Period",
        theme: "Theme",
        backToProjects: "Back to projects",
        location: "Location",
        budget: "Budget",
        beneficiaries: "Direct Beneficiaries",
        supportTitle: "Support this project",
        supportText: "Would you like to contribute to the success of this initiative? Participate in funding or bring your technical expertise.",
        donateCTA: "Donate"
      }
    },
    join: {
      title: "Act Together",
      intro: "Participate in the educational transformation of West Africa.",
      explorer: "Explore",
      jobsTitle: "Jobs, Internship and Volunteering",
      jobsText: "Regular recruitment for our technical support body or for research support internships. Join a passionate team.",
      membershipTitle: "Membership",
      membershipText: "Membership is through a written request approved by the General Directorate, along with required membership fees.",
      membershipCTA: "Contact us to submit your membership application",
      expertTitle: "Expert Contribution",
      expertText: "Open to honorary members and technical advisors providing high-level expertise.",
      partnerTitle: "Become a Partner",
      partnerText: "Strategic advocacy and funding partnerships for sustainable impact."
    },
    donate: {
      title: "Support Our Actions",
      description: "Your donation helps fund pedagogical innovation programs in West Africa.",
      formLabelName: "Full Name",
      formLabelEmail: "Email",
      formLabelAmount: "Amount",
      formLabelMessage: "Message (Optional)",
      submit: "Confirm Donation",
      anonymous: "Make an anonymous donation",
      impactLabel: "Social Impact",
      secureTitle: "Secure Funds",
      secureText: "Total transparency in the use of your contributions.",
      quickTitle: "Quick Action",
      quickText: "Immediate deployment of critical pedagogical resources.",
      thankYou: "Thank you for your generosity! (Simulated)"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are at your service for any collaboration or information request.",
      address: "Ms Gbaguidi, Route de Ouidah, Fandji Quarter, Abomey-Calavi, Benin",
      addressTitle: "Headquarters",
      phoneTitle: "Phone",
      phone: "+229 00 00 00 00",
      emailTitle: "Email",
      email: "contact@edubuilders.bj",
      formTitle: "Send us a message",
      labelIdentity: "First & Last Name *",
      labelEmail: "Email Address *",
      labelPhone: "Phone (Optional)",
      labelSubject: "Subject *",
      labelMessage: "Message *",
      subjects: {
        partnership: "Partnership",
        membership: "Membership",
        expertise: "Expertise",
        other: "Other"
      },
      submit: "Send Message",
      success: "Your message has been sent successfully!",
      expertNote: "Would you like to contribute as an expert? Specify your area of expertise in the message subject.",
      mapPlaceholder: "Google Maps Location"
    },
    publications: {
      title: "Publications & Resources",
      documentsLabel: "Reports & Documents",
      articlesLabel: "Articles & News",
      readMore: "Read More",
      readingTime: "min read",
      allCategories: "All Categories",
      filterPlaceholder: "Search for opportunity...",
      availableDocs: "available documents",
      identifiedOpp: "identified opportunities",
      notFound: "Article not found",
      back: "Back to publications",
      share: "Share",
      editorialTitle: "EduBuilders Editorial",
      editorialBio: "Expertise in innovation and educational cooperation in West Africa."
    },
    workingTogether: {
      membership: {
        title: "Join as Member",
        intro: "Membership is an act of commitment to the educational future of West Africa.",
        statutesTitle: "Statutory Conditions (Art. 5)",
        statutesText: "Membership requires a written request approved by the General Directorate and payment of the membership fee.",
        benefitsTitle: "Your Rights & Benefits",
        benefits: [
          "Voting rights at the General Assembly",
          "Access to annual activity reports",
          "Right to participate in Institute projects",
          "Priority for specialized training"
        ],
        formTitle: "Membership Application",
        readyTitle: "Ready to join us?",
        feesInfo: "Details regarding membership fees will be communicated to you during our exchanges."
      },
      expert: {
        title: "Contribute as Expert",
        intro: "Mobilizing expertise (academics, researchers, practitioners) for regional technical assistance.",
        statusTitle: "Honorary Member Status",
        statusText: "Possibility of being appointed 'Honorary Member' by the General Assembly upon the recommendation of the Director General for exceptional services.",
        formTitle: "Submit My Expertise",
        fieldsTitle: "Priority Areas of Expertise",
        readyTitle: "Ready to contribute?",
        readyText: "We are always looking for passionate experts to transform education.",
        contactCTA: "Contact us",
        secureData: "Secure data"
      },
      partner: {
        title: "Become a Partner",
        intro: "Quality education starts with cooperation.",
        guaranteesTitle: "Transparency & Accountability (Art. 10)",
        guaranteesText: "Strict commitment to transparency, external oversight, and systematic accountability.",
        collaborationTitle: "A collaboration based on trust and impact.",
        guaranteesList: {
          audit: { title: "External Audit", text: "Systematic annual audits and public transparency reports." },
          accountability: { title: "Accountability", text: "Clear performance indicators and accountability to our partners." }
        },
        cta: "Start a partnership",
        types: {
          technical: { title: "Technical Partnership", text: "Co-development of innovative pedagogical solutions." },
          financial: { title: "Financial Partnership", text: "Support for high social impact programs." },
          advocacy: { title: "Advocacy Partnership", text: "Joint influence on regional education policies." }
        }
      },
      careers: {
        title: "Employment, Internship and Volunteering",
        intro: "Join the specialized technical support body or apply for a technical and research support internship.",
        valuesTitle: "Our Values",
        valuesText: "Equity, innovation, and measurable impact on learning are at the heart of our culture.",
        processTitle: "Recruitment Process",
        processText: "Open to members and external candidates based exclusively on technical skills and values alignment. We also welcome interns for technical support and research.",
        listingTitle: "Current Opportunities",
        applyNow: "Apply Now",
        interestedTitle: "Interested in this position?",
        applyText: "Submit your application today to join a team dedicated to educational excellence.",
        requirements: "CV + Cover Letter required",
        notFound: "Job not found",
        backToOffers: "Back to careers",
        allOffers: "All offers",
        postedOn: "Posted on",
        equity: "Equity",
        innovation: "Innovation",
        expertsStat: "International Experts",
        searchPlaceholder: "Search for an offer...",
        filterAll: "All",
        filterJobs: "Jobs",
        filterInternships: "Internships",
        filterVolunteering: "Volunteering",
        location: "Location",
        contractType: "Contract Type",
        duration: "Duration",
        responsibilities: "Responsibilities",
        qualifications: "Qualifications & Skills",
        deadline: "Deadline"
      }
    },
    footer: {
      legal: "eduBuilders Institute - Governed by Law No. 2025-19 of Benin.",
      rights: "All rights reserved"
    },
    loader: {
      slogan: "Quality education starts with cooperation",
      loading: "Loading..."
    }
  }
};
