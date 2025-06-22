
// Utility to extract dynamic data from website components
export const extractWebsiteData = (language: 'en' | 'fr' | 'es') => {
  // Extract projects data (this matches your WorkSection projects)
  const projects = [
    {
      id: 'broll',
      title: 'Broll',
      description: {
        en: '3D ragdoll-based platformer where physics laws don\'t apply! Explore open levels, create custom content, and challenge friends in local multiplayer. Released on Steam with mostly positive reviews.',
        fr: 'Plateforme 3D basée sur des poupées de chiffon où les lois de la physique ne s\'appliquent pas ! Explorez des niveaux ouverts, créez du contenu personnalisé et défiez vos amis en multijoueur local. Publié sur Steam avec des critiques majoritairement positives.',
        es: 'Plataforma 3D basada en muñecos de trapo donde las leyes de la física no se aplican! Explora niveles abiertos, crea contenido personalizado y desafía a amigos en multijugador local. Lanzado en Steam con reseñas mayormente positivas.'
      },
      tech: ['Unreal Engine 4', 'C++', 'Blueprint', 'Game Analytics', 'JetBrains Rider'],
      category: 'games',
      featured: true,
      status: 'active',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1265300/header.jpg?t=1726438492',
      links: { 
        live: 'https://store.steampowered.com/app/1265300/Broll/', 
        github: '#' 
      }
    },
    {
      id: 'devflow',
      title: 'DevFlow',
      description: {
        en: 'Streamlined CI/CD pipeline tool that reduces deployment time from hours to minutes for small development teams.',
        fr: 'Outil de pipeline CI/CD rationalisé qui réduit le temps de déploiement d\'heures à minutes pour les petites équipes de développement.',
        es: 'Herramienta de pipeline CI/CD optimizada que reduce el tiempo de despliegue de horas a minutos para equipos de desarrollo pequeños.'
      },
      tech: ['TypeScript', 'Docker', 'AWS', 'PostgreSQL'],
      category: 'devTools',
      featured: true,
      status: 'active',
      image: '/placeholder.svg',
      links: { live: '#', github: '#' }
    },
    {
      id: 'apiforge',
      title: 'APIForge',
      description: {
        en: 'Visual API builder that enables non-technical users to create and manage REST APIs through an intuitive drag-and-drop interface.',
        fr: 'Constructeur d\'API visuel qui permet aux utilisateurs non techniques de créer et gérer des API REST via une interface glisser-déposer intuitive.',
        es: 'Constructor visual de API que permite a usuarios no técnicos crear y gestionar APIs REST a través de una interfaz intuitiva de arrastrar y soltar.'
      },
      tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
      category: 'webApps',
      featured: false,
      status: 'active',
      image: '/placeholder.svg',
      links: { live: '#', github: '#' }
    },
    {
      id: 'codeformat',
      title: 'CodeFormat',
      description: {
        en: 'Open-source code formatter supporting 20+ programming languages with configurable rules and VS Code integration.',
        fr: 'Formateur de code open source prenant en charge plus de 20 langages de programmation avec des règles configurables et une intégration VS Code.',
        es: 'Formateador de código de código abierto compatible con más de 20 lenguajes de programación con reglas configurables e integración con VS Code.'
      },
      tech: ['TypeScript', 'Rust', 'WebAssembly', 'VS Code API'],
      category: 'openSource',
      featured: true,
      status: 'active',
      image: '/placeholder.svg',
      links: { live: '#', github: '#' }
    },
    {
      id: 'pixelquest',
      title: 'PixelQuest',
      description: {
        en: 'Retro-style platformer game built with HTML5 Canvas and TypeScript, featuring procedural level generation and local multiplayer.',
        fr: 'Jeu de plateforme rétro construit avec HTML5 Canvas et TypeScript, avec génération procédurale de niveaux et multijoueur local.',
        es: 'Juego de plataformas retro construido con HTML5 Canvas y TypeScript, con generación procedimental de niveles y multijugador local.'
      },
      tech: ['TypeScript', 'HTML5 Canvas', 'WebGL', 'Web Audio API'],
      category: 'games',
      featured: false,
      status: 'active',
      image: '/placeholder.svg',
      links: { live: '#', github: '#' }
    },
    {
      id: 'reactflow',
      title: 'ReactFlow Builder',
      description: {
        en: 'Advanced workflow automation tool with visual node editor, supporting complex business logic and integrations.',
        fr: 'Outil d\'automatisation de workflow avancé avec éditeur de nœuds visuels, prenant en charge la logique métier complexe et les intégrations.',
        es: 'Herramienta avanzada de automatización de flujos de trabajo con editor visual de nodos, compatible con lógica empresarial compleja e integraciones.'
      },
      tech: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
      category: 'devTools',
      featured: true,
      status: 'active',
      image: '/placeholder.svg',
      links: { live: '#', github: '#' }
    }
  ];

  // Calculate actual project count
  const projectCount = projects.length;

  // Extract hero section data
  const heroData = {
    name: 'Victor Chanet',
    title: {
      en: 'Full-Stack Engineer & Game Developer',
      fr: 'Ingénieur Full-Stack & Développeur de Jeux',
      es: 'Ingeniero Full-Stack y Desarrollador de Juegos'
    },
    description: {
      en: 'Full-stack engineer and game developer. I create digital products and games that scale to hundreds of thousands of users, with a focus on developer experience and performance.',
      fr: 'Ingénieur full-stack et développeur de jeux. Je crée des produits numériques et des jeux qui évoluent vers des centaines de milliers d\'utilisateurs, en me concentrant sur l\'expérience développeur et les performances.',
      es: 'Ingeniero full-stack y desarrollador de juegos. Creo productos digitales y juegos que escalan a cientos de miles de usuarios, enfocándome en la experiencia del desarrollador y el rendimiento.'
    },
    stats: {
      downloads: 150000,
      stars: 2100,
      products: projectCount // Dynamic count
    }
  };

  // Complete skills data with URLs (matching WorkSection)
  const skillsData = {
    frontend: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'Vue.js', url: 'https://vuejs.org/' },
      { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'HTML5 Canvas', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' },
      { name: 'WebGL', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API' }
    ],
    backend: [
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'Redis', url: 'https://redis.io/' },
      { name: 'Express.js', url: 'https://expressjs.com/' },
      { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { name: 'GraphQL', url: 'https://graphql.org/' },
      { name: 'WebSockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
      { name: 'C++', url: 'https://cplusplus.com/' }
    ],
    cloud: [
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/' },
      { name: 'Vercel', url: 'https://vercel.com/' },
      { name: 'Netlify', url: 'https://www.netlify.com/' },
      { name: 'Firebase', url: 'https://firebase.google.com/' },
      { name: 'Supabase', url: 'https://supabase.com/' },
      { name: 'Railway', url: 'https://railway.app/' }
    ],
    tools: [
      { name: 'Git', url: 'https://git-scm.com/' },
      { name: 'VS Code', url: 'https://code.visualstudio.com/' },
      { name: 'Figma', url: 'https://www.figma.com/' },
      { name: 'Linear', url: 'https://linear.app/' },
      { name: 'Notion', url: 'https://www.notion.so/' },
      { name: 'Postman', url: 'https://www.postman.com/' },
      { name: 'Vite', url: 'https://vitejs.dev/' },
      { name: 'Webpack', url: 'https://webpack.js.org/' },
      { name: 'WebAssembly', url: 'https://webassembly.org/' },
      { name: 'VS Code API', url: 'https://code.visualstudio.com/api' },
      { name: 'Rust', url: 'https://www.rust-lang.org/' },
      { name: 'Web Audio API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API' },
      { name: 'Unreal Engine 4', url: 'https://www.unrealengine.com/' },
      { name: 'Blueprint', url: 'https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/' },
      { name: 'Game Analytics', url: 'https://gameanalytics.com/' },
      { name: 'JetBrains Rider', url: 'https://www.jetbrains.com/rider/' }
    ]
  };

  return {
    projects,
    projectCount,
    heroData,
    skills: skillsData,
    language
  };
};

export const generateExperience = (language: 'en' | 'fr' | 'es', projectCount: number) => {
  const experiences = {
    en: [
      {
        title: 'Senior Full-Stack Engineer',
        company: 'Independent Consultant',
        period: '2020 - Present',
        achievements: [
          `Built and scaled ${projectCount} production applications serving 150K+ users`,
          'Developed DevFlow CI/CD pipeline tool with 99.8% uptime',
          'Created open-source tools with 150K+ total downloads',
          'Specialized in developer experience and performance optimization'
        ]
      },
      {
        title: 'Lead Developer',
        company: 'Tech Startup',
        period: '2018 - 2020',
        achievements: [
          'Led development team of 5 engineers',
          'Architected microservices handling 100K+ concurrent users',
          'Reduced deployment time by 67% through automation',
          'Implemented modern CI/CD practices and code quality standards'
        ]
      }
    ],
    fr: [
      {
        title: 'Ingénieur Full-Stack Senior',
        company: 'Consultant Indépendant',
        period: '2020 - Présent',
        achievements: [
          `Construit et mis à l'échelle ${projectCount} applications de production servant 150K+ utilisateurs`,
          'Développé l\'outil de pipeline CI/CD DevFlow avec 99.8% de disponibilité',
          'Créé des outils open source avec 150K+ téléchargements totaux',
          'Spécialisé dans l\'expérience développeur et l\'optimisation des performances'
        ]
      }
    ],
    es: [
      {
        title: 'Ingeniero Full-Stack Senior',
        company: 'Consultor Independiente',
        period: '2020 - Presente',
        achievements: [
          `Construido y escalado ${projectCount} aplicaciones de producción sirviendo 150K+ usuarios`,
          'Desarrollado herramienta de pipeline CI/CD DevFlow con 99.8% de tiempo activo',
          'Creado herramientas de código abierto con 150K+ descargas totales',
          'Especializado en experiencia del desarrollador y optimización del rendimiento'
        ]
      }
    ]
  };

  return experiences[language];
};
