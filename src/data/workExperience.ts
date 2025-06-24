export interface WorkExperience {
  name: string;
  role: string;
  startDate: Date;
  endDate: Date | 'Present';
  description: {
    en: string;
    fr: string;
    es: string;
  };
  logo: string;
  url: string;
  contribution: {
    en: string;
    fr: string;
    es: string;
  };
  technologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    name: 'GURA CORP',
    description: {
      en: 'Futuristic FPS game development studio creating immersive off-world experiences and pushing the boundaries of interactive entertainment.',
      fr: 'Studio de développement de jeux FPS futuristes créant des expériences immersives hors du monde et repoussant les limites du divertissement interactif.',
      es: 'Estudio de desarrollo de videojuegos FPS futuristas que crea experiencias inmersivas fuera de este mundo y lleva los límites del entretenimiento interactivo más allá.'
    },
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQGF0_aZPxfw2w/company-logo_200_200/company-logo_200_200/0/1633091729805/guracorp_logo?e=1756339200&v=beta&t=NPCuW_dv6GBXRiq_hVi0TeZsA4qv8rtOYRH_0ptRsCM',
    url: 'https://twitter.com/GuraUniverse',
    contribution: {
      en: 'Provided expert advisory services on Steam integration and networking solutions. Offered guidance on Steamworks API implementation, store page optimization, and multiplayer networking strategies. Advised on both technical aspects and best practices for game publishing, community building, and platform-specific requirements.',
      fr: 'Services de conseil expert en intégration Steam et solutions de mise en réseau. Conseils sur la mise en œuvre de l\'API Steamworks, l\'optimisation des pages de vente et les stratégies de réseau multijoueur. Avis sur les aspects techniques et les meilleures pratiques pour la publication de jeux, la construction d\'une communauté et les exigences spécifiques à la plateforme.',
      es: 'Servicios de asesoramiento experto en integración de Steam y soluciones de red. Asesoramiento sobre la implementación de la API de Steamworks, optimización de páginas de la tienda y estrategias de red multijugador. Asesoramiento sobre aspectos técnicos y mejores prácticas para la publicación de juegos, creación de comunidades y requisitos específicos de la plataforma.'
    },
    role: 'Game Consultant',
    startDate: new Date('2024-01-01'),
    endDate: 'Present',
    technologies: ['Steamworks', 'Game Publishing', 'Multiplayer Networking', 'API Integration', 'Technical Advisory', 'Community Management', 'Platform Requirements']
  },
  {
    name: 'JUNIA',
    description: {
      en: 'Engineering school bringing together HEI, ISA and ISEN programs on its campuses in Lille, Bordeaux and Châteauroux.',
      fr: 'École d\'ingénieurs regroupant les programmes HEI, ISA et ISEN sur ses campus de Lille, Bordeaux et Châteauroux.',
      es: 'Escuela de ingeniería que reúne los programas HEI, ISA e ISEN en sus campus de Lille, Burdeos y Châteauroux.'
    },
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhqNoNfQywM0DUg7Y4r63wfoUQLnsNdHjTA&s',
    url: 'https://www.junia.com',
    contribution: {
      en: 'Computer Science Teacher for first-year students, specializing in C programming. Delivered comprehensive lectures and practical sessions to help students master fundamental programming concepts and develop strong problem-solving skills.',
      fr: 'Enseignant en informatique pour les étudiants de première année, spécialisé en programmation C. J\'ai dispensé des cours magistraux et des travaux pratiques pour aider les étudiants à maîtriser les concepts fondamentaux de la programmation et à développer de solides compétences en résolution de problèmes.',
      es: 'Profesor de Informática para estudiantes de primer año, especializado en programación en C. Impartí clases teóricas y prácticas para ayudar a los estudiantes a dominar los conceptos fundamentales de programación y desarrollar fuertes habilidades de resolución de problemas.'
    },
    role: 'Programming Instructor',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-05-01'),
    technologies: ['C Programming', 'Algorithms', 'Data Structures', 'Problem Solving']
  },
  {
    name: 'Kakiyo',
    description: {
      en: 'AI-powered LinkedIn automation platform that autonomously handles personalized conversations, qualifies prospects, and books meetings at scale.',
      fr: 'Plateforme d\'automatisation LinkedIn alimentée par l\'IA qui gère de manière autonome les conversations personnalisées, qualifie les prospects et planifie des réunions à grande échelle.',
      es: 'Plataforma de automatización de LinkedIn impulsada por IA que maneja conversaciones personalizadas, califica prospectos y programa reuniones de forma autónoma a gran escala.'
    },
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHkTxHwA_Hdnw/company-logo_100_100/B4EZeQerRgG4AQ-/0/1750475650674/kakiyo_logo?e=1756339200&v=beta&t=8TCebC0rQeo7in8XQJynHmStxSqNeDNvqeEv4y3oj5Y',
    url: 'https://kakiyo.com',
    contribution: {
      en: 'Architected and implemented a robust API foundation and LinkedIn automation system. Provided technical leadership in refactoring their V1 API, established coding standards, and guided the team in implementing scalable architecture patterns. Advised on feature implementation strategies and best practices to ensure maintainable, high-performance code.',
      fr: 'Conception et mise en œuvre d\'une base API robuste et d\'un système d\'automatisation LinkedIn. Leadership technique dans la refonte de leur API V1, établissement de normes de codage et accompagnement de l\'équipe dans la mise en œuvre de modèles d\'architecture évolutifs. Conseils sur les stratégies d\'implémentation des fonctionnalités et les meilleures pratiques pour assurer un code maintenable et performant.',
      es: 'Diseño e implementación de una base de API robusta y un sistema de automatización de LinkedIn. Liderazgo técnico en la refactorización de su API V1, establecimiento de estándares de codificación y guía al equipo en la implementación de patrones de arquitectura escalables. Asesoramiento sobre estrategias de implementación de características y mejores prácticas para garantizar un código mantenible y de alto rendimiento.'
    },
    role: 'Backend Architect',
    startDate: new Date('2024-05-01'),
    endDate: new Date(),
    technologies: ['API Development', 'System Architecture', 'Code Refactoring', 'LinkedIn Automation', 'Technical Leadership', 'Best Practices', 'Scalable Systems']
  },
  {
    name: 'TEKGI',
    description: {
      en: 'Supply Chain Management (SCM) & Tech Talent Solutions provider that optimizes processes and operations through innovative services and expert personnel.',
      fr: 'Fournisseur de solutions de gestion de la chaîne d\'approvisionnement (SCM) et de talents technologiques qui optimise les processus et les opérations grâce à des services innovants et à un personnel expert.',
      es: 'Proveedor de Soluciones de Gestión de la Cadena de Suministro (SCM) y Talento Tecnológico que optimiza procesos y operaciones a través de servicios innovadores y personal experto.'
    },
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHoZXI9FOkvcw/company-logo_100_100/company-logo_100_100/0/1729592579184/tekgi_logo?e=1756339200&v=beta&t=wnVQrMkWju7XqGuuduZMkpIvxTXfCObqvmMRC3k_Cgw',
    url: 'https://tekgi.com',
    contribution: {
      en: 'Architected and developed a comprehensive sales automation SaaS platform using Next.js, featuring advanced data enrichment capabilities through Clay integration. Built end-to-end solutions for lead management, automated outreach, and sales pipeline optimization, significantly improving team productivity and conversion rates.',
      fr: 'Conception et développement d\'une plateforme SaaS complète d\'automatisation des ventes avec Next.js, intégrant des capacités avancées d\'enrichissement de données via Clay. Développement de solutions complètes pour la gestion des prospects, la prospection automatisée et l\'optimisation du pipeline de vente, améliorant considérablement la productivité de l\'équipe et les taux de conversion.',
      es: 'Diseño y desarrollo de una plataforma SaaS integral de automatización de ventas utilizando Next.js, con capacidades avanzadas de enriquecimiento de datos a través de la integración con Clay. Desarrollo de soluciones integrales para la gestión de leads, prospección automatizada y optimización del embudo de ventas, mejorando significativamente la productividad del equipo y las tasas de conversión.'
    },
    role: 'Fullstack Engineer',
    startDate: new Date('2024-06-01'),
    endDate: 'Present',
    technologies: ['Next.js', 'SaaS Development', 'Sales Automation', 'Clay Integration', 'Data Enrichment', 'Lead Management', 'Sales Pipeline']
  },
  {
    name: 'French-Roleplay',
    description: {
      en: 'Non-profit association specialized in game server development, particularly for Garry\'s Mod DarkRP, creating a serious and friendly community around role-playing games.',
      fr: 'Association à but non lucratif spécialisée dans le développement de serveurs de jeux, notamment pour Garry\'s Mod DarkRP, créant une communauté sérieuse et conviviale autour des jeux de rôle.',
      es: 'Asociación sin ánimo de lucro especializada en el desarrollo de servidores de juegos, particularmente para Garry\'s Mod DarkRP, creando una comunidad seria y amigable en torno a los juegos de rol.'
    },
    logo: 'https://www.french-roleplay.com/public/img/logopetit.png',
    url: 'https://www.french-roleplay.com',
    contribution: {
      en: 'Developed engaging mini-games and exclusive addons for the Garry\'s Mod DarkRP server using Lua. Created unique gameplay experiences that enhanced role-playing interactions and community engagement. Contributed to server maintenance and optimization to ensure smooth gameplay for all players.',
      fr: 'Développement de mini-jeux captivants et d\'addons exclusifs pour le serveur Garry\'s Mod DarkRP en utilisant Lua. Création d\'expériences de jeu uniques qui ont amélioré les interactions de jeu de rôle et l\'engagement communautaire. Contribution à la maintenance et à l\'optimisation du serveur pour assurer une expérience de jeu fluide à tous les joueurs.',
      es: 'Desarrollo de minijuegos atractivos y complementos exclusivos para el servidor de Garry\'s Mod DarkRP utilizando Lua. Creación de experiencias de juego únicas que mejoraron las interacciones de rol y la participación comunitaria. Contribución al mantenimiento y optimización del servidor para garantizar una experiencia de juego fluida para todos los jugadores.'
    },
    role: 'Gameplay Programmer',
    startDate: new Date('2023-01-01'),
    endDate: 'Present',
    technologies: ['Garry\'s Mod', 'Lua', 'Game Development', 'Mini-Game Design', 'DarkRP', 'Server Optimization', 'Multiplayer Systems']
  }
];
