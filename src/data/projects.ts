import { ProjectBase } from '@/types/cv';

export const projects: ProjectBase[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: {
      en: 'My personal portfolio website, the one you are currently on. Built with Vite, React, and Shadcn/UI, and designed to be easily customizable. It is open-source and available for anyone to use as a template.',
      fr: 'Mon portfolio personnel, celui sur lequel vous êtes actuellement. Construit avec Vite, React et Shadcn/UI, et conçu pour être facilement personnalisable. Il est open-source et disponible pour que quiconque puisse l\'utiliser comme modèle.',
      es: 'Mi portafolio personal, el que estás viendo actualmente. Construido con Vite, React y Shadcn/UI, y diseñado para ser fácilmente personalizable. Es de código abierto y está disponible para que cualquiera lo use como plantilla.'
    },
    tech: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
    category: 'webApps',
    featured: true,
    status: 'active',
    image: 'https://opengraph.githubassets.com/1/Vic92548/portfolio',
    links: {
      live: 'https://victorchanet.work',
      github: 'https://github.com/Vic92548/portfolio'
    }
  },
  {
    id: 'buckshot-plus-plus',
    title: 'BuckshotPlusPlus',
    description: {
      en: 'A modern, simple, and efficient web development language. BPP is a fullstack solution that combines component-based architecture with a clean syntax, making web development faster and more intuitive.',
      fr: 'Un langage de développement web moderne, simple et efficace. BPP est une solution fullstack qui combine une architecture basée sur les composants avec une syntaxe propre, rendant le développement web plus rapide et plus intuitif.',
      es: 'Un lenguaje de desarrollo web moderno, simple y eficiente. BPP es una solución fullstack que combina una arquitectura basada en componentes con una sintaxis limpia, lo que hace que el desarrollo web sea más rápido e intuitivo.'
    },
    tech: ['C#', 'JavaScript', 'Web Development', 'Fullstack', 'Open Source'],
    category: 'openSource',
    featured: true,
    status: 'active',
    image: 'https://polyplaza-wiki.b-cdn.net/Screenshot%202025-06-24%20220527.jpg',
    links: { 
      live: 'https://bpplang.com', 
      github: 'https://github.com/BuckshotPlusPlus/BuckshotPlusPlus',
      demo: 'https://bpplang.com/demo',
      npm: 'https://www.npmjs.com/package/buckshotplusplus'
    },
    role: 'Creator & Lead Developer',
    responsibilities: {
      en: [
        'Designed and implemented the core language features',
        'Created the compiler and runtime environment',
        'Built the standard library and documentation'
      ],
      fr: [
        'Conçu et implémenté les fonctionnalités principales du langage',
        'Créé le compilateur et l\'environnement d\'exécution',
        'Développé la bibliothèque standard et la documentation'
      ],
      es: [
        'Diseñé e implementé las características principales del lenguaje',
        'Creé el compilador y el entorno de ejecución',
        'Desarrollé la biblioteca estándar y la documentación'
      ]
    }
  },
  {
    id: 'only-wish',
    title: 'Only Wish',
    downloads: 31899,
    description: {
      en: 'A next-generation advancement of the "Only Up" genre. Explore breathtaking landscapes, uncover hidden realms, and experience revolutionary vehicular exploration. Features engaging NPC dialogues and authentic driving dynamics. Released on Steam with positive reviews.',
      fr: 'Une avancée de nouvelle génération du genre "Only Up". Explorez des paysages à couper le souffle, découvrez des royaumes cachés et vivez une exploration véhiculaire révolutionnaire. Comprend des dialogues PNJ captivants et une dynamique de conduite authentique. Sorti sur Steam avec des critiques positives.',
      es: 'Un avance de próxima generación del género "Only Up". Explora paisajes impresionantes, descubre reinos ocultos y experimenta una exploración vehicular revolucionaria. Incluye diálogos con PNJ atractivos y dinámica de conducción auténtica. Publicado en Steam con críticas positivas.'
    },
    tech: ['Unreal Engine 5', 'C++', 'Blueprint', 'Game Analytics', 'JetBrains Rider'],
    category: 'games',
    featured: true,
    status: 'active',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2542010/header.jpg?t=1726438639',
    video: 'https://video.fastly.steamstatic.com/store_trailers/256984464/movie480_vp9.webm?t=1700780677',
    links: { 
      live: 'https://store.steampowered.com/app/2542010/Only_Wish/' 
    }
  },
  {
    id: 'next-saas',
    title: 'Next SaaS',
    description: {
      en: 'Full-stack development agency specializing in rapid SaaS development. We build institutional-grade products that scale from MVP to enterprise, handling everything from architecture to infrastructure.',
      fr: 'Agence de développement full-stack spécialisée dans le développement rapide de SaaS. Nous créons des produits de qualité institutionnelle qui évoluent du MVP à l\'entreprise, en gérant tout de l\'architecture à l\'infrastructure.',
      es: 'Agencia de desarrollo full-stack especializada en desarrollo rápido de SaaS. Construimos productos de grado institucional que escalan desde MVP hasta empresa, manejando todo desde la arquitectura hasta la infraestructura.'
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'webApps',
    featured: true,
    status: 'active',
    image: 'https://polyplaza-wiki.b-cdn.net/Screenshot%202025-06-22%20145627.jpg',
    links: { 
      live: 'https://nextsaas.co/' 
    }
  },
  {
    id: 'uptime-robot-nodejs',
    title: 'Uptime Robot Node.js',
    description: {
      en: 'A simple and easy-to-use Node.js library for interacting with the UptimeRobot API v2. Provides promise-based methods for all UptimeRobot API endpoints, making it easy to monitor your websites and services programmatically.',
      fr: 'Une bibliothèque Node.js simple et facile à utiliser pour interagir avec l\'API UptimeRobot v2. Fournit des méthodes basées sur les promesses pour tous les points de terminaison de l\'API UptimeRobot, facilitant la surveillance programmatique de vos sites Web et services.',
      es: 'Una biblioteca Node.js simple y fácil de usar para interactuar con la API de UptimeRobot v2. Proporciona métodos basados en promesas para todos los puntos finales de la API de UptimeRobot, lo que facilita el monitoreo programático de sus sitios web y servicios.'
    },
    tech: ['Node.js', 'JavaScript', 'REST API', 'NPM Package'],
    category: 'openSource',
    featured: false,
    status: 'active',
    image: 'https://user-images.githubusercontent.com/22132982/163850103-6ae48ad4-edcb-4f1d-8664-8711ad15b4ba.png',
    links: { 
      live: 'https://github.com/LazyDB-community/uptime-robot-nodejs', 
      github: 'https://github.com/LazyDB-community/uptime-robot-nodejs',
      npm: 'https://www.npmjs.com/package/@lazydb_community/uptimerobot'
    }
  },
  {
    id: 'poly-plaza',
    title: 'Poly Plaza',
    description: {
      en: 'An open-world entrepreneurial sandbox game where you can buy properties, collect rent, and become the richest in town. Features daily updates, property management, and resource trading with dynamic NPC pricing.',
      fr: 'Un bac à sable entrepreneurial en monde ouvert où vous pouvez acheter des propriétés, percevoir des loyers et devenir le plus riche de la ville. Comprend des mises à jour quotidiennes, une gestion immobilière et un commerce de ressources avec des prix dynamiques selon les PNJ.',
      es: 'Un sandbox de emprendimiento en mundo abierto donde puedes comprar propiedades, cobrar alquileres y convertirte en el más rico de la ciudad. Incluye actualizaciones diarias, gestión de propiedades y comercio de recursos con precios dinámicos según los PNJ.'
    },
    downloads: 37384,
    tech: ['Unreal Engine 5', 'C++', 'Blueprint', 'Game Analytics', 'JetBrains Rider'],
    category: 'games',
    featured: true,
    status: 'active',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2716030/header.jpg?t=1746793041',
    video: 'https://video.fastly.steamstatic.com/store_trailers/257033315/movie480_vp9.webm?t=1735947222',
    links: { 
      live: 'https://store.steampowered.com/app/2716030/Poly_Plaza/', 
      steam: 'https://store.steampowered.com/app/2716030/Poly_Plaza/'
    }
  },
  {
    id: 'broll',
    title: 'Broll',
    downloads: 36527,
    description: {
      en: '3D ragdoll-based platformender where physics laws don\'t apply! Explore open levels, create custom content, and challenge friends in local multiplayer. Released on Steam with mostly positive reviews.',
      fr: 'Plateforme 3D basée sur des poupées de chiffon où les lois de la physique ne s\'appliquent pas ! Explorez des niveaux ouverts, créez du contenu personnalisé et défiez vos amis en multijoueur local. Publié sur Steam avec des critiques majoritairement positives.',
      es: 'Plataforma 3D basada en muñecos de trapo donde las leyes de la física no se aplican! Explora niveles abiertos, crea contenido personalizado y desafía a amigos en multijugador local. Lanzado en Steam con reseñas mayormente positivas.'
    },
    tech: ['Unreal Engine 4', 'C++', 'Blueprint', 'Game Analytics', 'JetBrains Rider'],
    category: 'games',
    featured: true,
    status: 'active',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1265300/header.jpg?t=1726438492',
    video: 'https://video.fastly.steamstatic.com/store_trailers/256841789/movie480_vp9.webm?t=1625575060',
    links: { 
      live: 'https://store.steampowered.com/app/1265300/Broll/'
    }
  }
];

export const getProjectCount = (): number => projects.length;
