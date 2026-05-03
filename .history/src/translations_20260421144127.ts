
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
    visionMission: {
      title: string;
      visionTitle: string;
      visionText: string;
      missionTitle: string;
      missionText: string;
      valuesTitle: string;
      values: { title: string; text: string }[];
    };
    objectives: {
      title: string;
      intro: string;
      list: { title: string; text: string; icon: string }[];
    };
  };
  actions: {
    title: string;
    fields: string[];
  };
  join: {
    title: string;
    jobsTitle: string;
    jobsText: string;
    membershipTitle: string;
    membershipText: string;
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
  };
  contact: {
    title: string;
    address: string;
    formTitle: string;
    submit: string;
  };
  publications: {
    title: string;
    documentsLabel: string;
    articlesLabel: string;
    readMore: string;
    readingTime: string;
    allCategories: string;
    filterPlaceholder: string;
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
    };
    expert: {
      title: string;
      intro: string;
      statusTitle: string;
      statusText: string;
      formTitle: string;
    };
    partner: {
      title: string;
      intro: string;
      guaranteesTitle: string;
      guaranteesText: string;
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
      location: string;
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
      contact: "Contact"
    },
    hero: {
      title: "EduBuilders Institute",
      subtitle: "Institut ouest-africain d'innovation et de coopération en éducation",
      motto: "L'éducation de qualité commence par la coopération",
      ctaDonate: "Faire un don",
      ctaJoin: "Rejoindre l'institut"
    },
    about: {
      title: "À propos",
      visionMission: {
        title: "Vision & Mission",
        visionTitle: "Notre Vision",
        visionText: "<h2>L'éducation comme levier de progrès</h2><p>Nous aspirons à un avenir où l'éducation est le levier fondamental du <strong>développement humain durable</strong> et de la cohésion sociale en Afrique de l'Ouest. Une vision où chaque talent trouve sa place dans une société apprenante.</p>",
        missionTitle: "Notre Mission",
        missionText: "<h2>Coopérer pour transformer</h2><p>Notre engagement est de renforcer la <strong>coopération éducative</strong> pour améliorer l'accès, la qualité et l'équité des systèmes d'enseignement. Nous donnons la priorité aux plus vulnérables au Bénin et dans la sous-région.</p>",
        valuesTitle: "Nos Valeurs Fondamentales",
        values: [
          { title: "Innovation", text: "Repenser les méthodes d'apprentissage pour répondre aux défis du futur." },
          { title: "Inclusion", text: "Garantir que personne ne soit laissé de côté dans le parcours éducatif." },
          { title: "Excellence", text: "Viser les plus hauts standards de qualité pédagogique." }
        ]
      },
      objectives: {
        title: "Nos Objectifs",
        intro: "EduBuilders Institute se positionne comme un acteur majeur du renforcement des systèmes éducatifs au Bénin et en Afrique de l'Ouest.",
        list: [
          { title: "Coopération & Mobilité", text: "Promouvoir la coopération et la mobilité éducative régionale.", icon: "Handshake" },
          { title: "Capacités Enseignantes", text: "Renforcer les capacités des enseignants et des formateurs.", icon: "Users" },
          { title: "Accès Équitable", text: "Faciliter l'accès à une éducation de qualité pour les communautés défavorisées.", icon: "Heart" },
          { title: "Orientation & Équité", text: "Soutenir l'orientation scolaire et l'égalité des chances.", icon: "Compass" },
          { title: "Innovation Contextualisée", text: "Encourager l'innovation pédagogique et technologique adaptée aux réalités locales.", icon: "Lightbulb" },
          { title: "Échanges Culturels", text: "Favoriser l'apprentissage des langues et les échanges culturels.", icon: "Globe" },
          { title: "Mobilisation de Ressources", text: "Mobiliser les ressources via le plaidoyer et les partenariats stratégiques.", icon: "TrendingUp" }
        ]
      }
    },
    actions: {
      title: "Domaines d'Action & Expertise",
      fields: [
        "Développement de curricula",
        "Éducation numérique",
        "Éducation en situation d'urgence",
        "Formation des enseignants",
        "Éducation inclusive",
        "Recherche pédagogique",
        "Évaluation des politiques publiques",
        "Gouvernance scolaire",
        "Apprentissage tout au long de la vie",
        "Éducation à la citoyenneté",
        "Alphabétisation fonctionnelle",
        "Transition école-emploi",
        "Coopération internationale en éducation"
      ]
    },
    join: {
      title: "Agir Ensemble",
      jobsTitle: "Emplois & Volontariat",
      jobsText: "Recrutement régulier pour notre organe de soutien technique. Rejoignez une équipe passionnée.",
      membershipTitle: "Adhésion",
      membershipText: "L'adhésion se fait par demande écrite soumise à l'approbation de la Direction Générale, accompagnée des frais d'adhésion requis.",
      expertTitle: "Contribution d'Expert",
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
      anonymous: "Faire un don anonyme"
    },
    contact: {
      title: "Où nous trouver",
      address: "Godomey, Abomey-Calavi, Bénin",
      formTitle: "Nous contacter",
      submit: "Envoyer le message"
    },
    publications: {
      title: "Publications & Ressources",
      documentsLabel: "Rapports & Documents",
      articlesLabel: "Articles & Actualités",
      readMore: "Lire l'article",
      readingTime: "min de lecture",
      allCategories: "Toutes les catégories",
      filterPlaceholder: "Rechercher une opportunité..."
    },
    workingTogether: {
      membership: {
        title: "Devenir Membre",
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
        formTitle: "Demande d'adhésion"
      },
      expert: {
        title: "Contribuer en tant qu'Expert",
        intro: "Mobilisation de l'expertise (académiques, chercheurs, praticiens) pour l'assistance technique régionale.",
        statusTitle: "Statut de Membre d'Honneur",
        statusText: "Possibilité d'être nommé 'Membre d'honneur' par l'Assemblée Générale sur proposition du Directeur Général pour services exceptionnels.",
        formTitle: "Soumettre mon expertise"
      },
      partner: {
        title: "Devenir Partenaire",
        intro: "L'éducation de qualité commence par la coopération.",
        guaranteesTitle: "Transparence & Redevabilité (Art. 10)",
        guaranteesText: "Engagement strict pour la transparence, le contrôle externe et la reddition de comptes systématique.",
        types: {
          technical: { title: "Partenariat Technique", text: "Co-développement de solutions pédagogiques innovantes." },
          financial: { title: "Partenariat Financier", text: "Soutien aux programmes à fort impact social." },
          advocacy: { title: "Partenariat de Plaidoyer", text: "Influence conjointe sur les politiques éducatives régionales." }
        }
      },
      careers: {
        title: "Emplois & Volontariat",
        intro: "Rejoignez l'organe de soutien technique spécialisé ou l'équipe opérationnelle.",
        valuesTitle: "Nos Valeurs",
        valuesText: "Équité, innovation et impact mesurable sur les apprentissages sont au cœur de notre culture.",
        processTitle: "Recrutement Process",
        processText: "Ouvert aux membres et aux externes sur la base exclusive des compétences techniques et de l'alignement aux valeurs.",
        listingTitle: "Opportunités actuelles",
        applyNow: "Postuler maintenant",
        location: "Lieu",
        contractType: "Type de contrat",
        duration: "Durée",
        responsibilities: "Responsabilités",
        qualifications: "Qualifications & Compétences",
        deadline: "Date limite"
      }
    },
    footer: {
      legal: "EduBuilders Institute - Organisation régie par la Loi N° 2025-19 du Bénin.",
      rights: "Tous droits réservés"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      actions: "Expertise",
      partners: "Partners",
      publications: "Publications",
      join: "Join Us",
      donate: "Donate",
      contact: "Contact"
    },
    hero: {
      title: "EduBuilders Institute",
      subtitle: "West African Institute for Innovation and Cooperation in Education",
      motto: "Quality education starts with cooperation",
      ctaDonate: "Make a Donation",
      ctaJoin: "Join the Institute"
    },
    about: {
      title: "About Us",
      visionMission: {
        title: "Vision & Mission",
        visionTitle: "Our Vision",
        visionText: "<h2>Education as a Lever for Progress</h2><p>We aspire to a future where education is the fundamental lever for <strong>sustainable human development</strong> and social cohesion in West Africa. A vision where every talent finds its place in a learning society.</p>",
        missionTitle: "Our Mission",
        missionText: "<h2>Cooperating to Transform</h2><p>Our commitment is to strengthen <strong>educational cooperation</strong> to improve access, quality, and equity in education systems. We prioritize the most vulnerable in Benin and the sub-region.</p>",
        valuesTitle: "Our Core Values",
        values: [
          { title: "Innovation", text: "Rethinking learning methods to meet the challenges of the future." },
          { title: "Inclusion", text: "Ensuring that no one is left behind in the educational journey." },
          { title: "Excellence", text: "Aiming for the highest standards of pedagogical quality." }
        ]
      },
      objectives: {
        title: "Our Objectives",
        intro: "EduBuilders Institute acts as a key player in strengthening the education systems of Benin and West Africa.",
        list: [
          { title: "Cooperation & Mobility", text: "Promote regional educational cooperation and mobility.", icon: "Handshake" },
          { title: "Teacher Capacity", text: "Strengthen the capacities of teachers and trainers.", icon: "Users" },
          { title: "Equitable Access", text: "Facilitate access to quality education for disadvantaged communities.", icon: "Heart" },
          { title: "Guidance & Equity", text: "Support educational guidance and equal opportunities.", icon: "Compass" },
          { title: "Contextualized Innovation", text: "Encourage pedagogical and technological innovation adapted to local realities.", icon: "Lightbulb" },
          { title: "Cultural Exchange", text: "Promote language learning and cultural exchange.", icon: "Globe" },
          { title: "Resource Mobilization", text: "Mobilize resources through advocacy and strategic partnerships.", icon: "TrendingUp" }
        ]
      }
    },
    actions: {
      title: "Fields of Action & Expertise",
      fields: [
        "Curriculum development",
        "Digital education",
        "Education in emergencies",
        "Teacher training",
        "Inclusive education",
        "Pedagogical research",
        "Public policy evaluation",
        "School governance",
        "Lifelong learning",
        "Citizenship education",
        "Functional literacy",
        "School-to-work transition",
        "International educational cooperation"
      ]
    },
    join: {
      title: "Act Together",
      jobsTitle: "Jobs & Volunteering",
      jobsText: "Regular recruitment for our technical support organ. Join a passionate team.",
      membershipTitle: "Membership",
      membershipText: "Membership is through a written request approved by the General Directorate, along with required membership fees.",
      expertTitle: "Expert Contribution",
      expertText: "Open to honorary members and technical advisors providing high-level expertise.",
      partnerTitle: "Become a Partner",
      partnerText: "Strategic advocacy and funding partnerships for sustainable impact."
    },
    donate: {
      title: "Support Our Action",
      description: "Your donation helps fund pedagogical innovation programs in West Africa.",
      formLabelName: "Full Name",
      formLabelEmail: "Email",
      formLabelAmount: "Amount ($)",
      formLabelMessage: "Message (Optional)",
      submit: "Confirm Donation",
      anonymous: "Donate Anonymously"
    },
    contact: {
      title: "Where to Find Us",
      address: "Godomey, Abomey-Calavi, Benin",
      formTitle: "Contact Us",
      submit: "Send Message"
    },
    publications: {
      title: "Publications & Resources",
      documentsLabel: "Reports & Documents",
      articlesLabel: "Articles & News",
      readMore: "Read More",
      readingTime: "min read",
      allCategories: "All Categories",
      filterPlaceholder: "Search for opportunity..."
    },
    workingTogether: {
      membership: {
        title: "Become a Member",
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
        formTitle: "Membership Application"
      },
      expert: {
        title: "Contribute as an Expert",
        intro: "Mobilizing expertise (academics, researchers, practitioners) for regional technical assistance.",
        statusTitle: "Honorary Member Status",
        statusText: "Possibility of being appointed 'Honorary Member' by the General Assembly upon the recommendation of the Director General for exceptional services.",
        formTitle: "Submit My Expertise"
      },
      partner: {
        title: "Become a Partner",
        intro: "Quality education starts with cooperation.",
        guaranteesTitle: "Transparency & Accountability (Art. 10)",
        guaranteesText: "Strict commitment to transparency, external oversight, and systematic accountability.",
        types: {
          technical: { title: "Technical Partnership", text: "Co-development of innovative pedagogical solutions." },
          financial: { title: "Financial Partnership", text: "Support for high social impact programs." },
          advocacy: { title: "Advocacy Partnership", text: "Joint influence on regional education policies." }
        }
      },
      careers: {
        title: "Employment & Volunteering",
        intro: "Join the specialized technical support body or the operational team.",
        valuesTitle: "Our Values",
        valuesText: "Equity, innovation, and measurable impact on learning are at the heart of our culture.",
        processTitle: "Recruitment Process",
        processText: "Open to members and external candidates based exclusively on technical skills and values alignment.",
        listingTitle: "Current Opportunities",
        applyNow: "Apply Now",
        location: "Location",
        contractType: "Contract Type",
        duration: "Duration",
        responsibilities: "Responsibilities",
        qualifications: "Qualifications & Skills",
        deadline: "Deadline"
      }
    },
    footer: {
      legal: "EduBuilders Institute - Governed by Law No. 2025-19 of Benin.",
      rights: "All rights reserved"
    }
  }
};
