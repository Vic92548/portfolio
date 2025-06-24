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
    role: 'Game Developer',
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
    role: 'Computer Science Teacher',
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
      en: 'Set up automation and processes to help build their product faster and in a more scalable way. Implemented efficient workflows and systems to enhance their development pipeline and operational efficiency.',
      fr: 'Mise en place de l\'automatisation et des processus pour accélérer le développement de leur produit de manière plus évolutive. Implémentation de flux de travail et de systèmes efficaces pour améliorer leur pipeline de développement et leur efficacité opérationnelle.',
      es: 'Configuración de automatización y procesos para ayudar a construir su producto de manera más rápida y escalable. Implementación de flujos de trabajo y sistemas eficientes para mejorar su canalización de desarrollo y eficiencia operativa.'
    },
    role: 'Automation & Process Consultant',
    startDate: new Date('2024-05-01'),
    endDate: new Date(),
    technologies: ['Process Automation', 'Workflow Optimization', 'Scalable Architecture', 'AI Integration']
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
      en: 'Developing a sales automation platform integrated with AI to optimize supply chain management and tech talent solutions. Working on innovative services that help businesses streamline their operations and access top tech talent.',
      fr: 'Développement d\'une plateforme d\'automatisation des ventes intégrée à l\'IA pour optimiser la gestion de la chaîne d\'approvisionnement et les solutions de talents technologiques. Travail sur des services innovants qui aident les entreprises à rationaliser leurs opérations et à accéder aux meilleurs talents technologiques.',
      es: 'Desarrollo de una plataforma de automatización de ventas integrada con IA para optimizar la gestión de la cadena de suministro y las soluciones de talento tecnológico. Trabajando en servicios innovadores que ayudan a las empresas a optimizar sus operaciones y acceder al mejor talento tecnológico.'
    },
    role: 'AI & Automation Consultant',
    startDate: new Date('2024-06-01'),
    endDate: 'Present',
    technologies: ['AI Integration', 'Sales Automation', 'Supply Chain Management', 'Tech Talent Solutions', 'Process Optimization']
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
      en: 'Contributed to the development and maintenance of game servers, particularly focusing on DarkRP. Worked on creating exclusive addons and ensuring a high-quality role-playing experience for the community. Helped in building a welcoming environment that encourages role-play and community engagement.',
      fr: 'Contribué au développement et à la maintenance des serveurs de jeux, en particulier sur DarkRP. Travaillé sur la création d\'addons exclusifs et assuré une expérience de jeu de rôle de haute qualité pour la communauté. A aidé à construire un environnement accueillant qui encourage le jeu de rôle et l\'engagement communautaire.',
      es: 'Contribuí al desarrollo y mantenimiento de servidores de juegos, particularmente en DarkRP. Trabajé en la creación de complementos exclusivos y asegurando una experiencia de juego de rol de alta calidad para la comunidad. Ayudé a construir un entorno acogedor que fomenta el juego de rol y la participación comunitaria.'
    },
    role: 'Game Server Developer',
    startDate: new Date('2023-01-01'),
    endDate: 'Present',
    technologies: ['Garry\'s Mod', 'Lua', 'Server Administration', 'Game Modding', 'Community Management', 'Linux Server']
  }
];
