// Utility to extract dynamic data from website components
export const extractWebsiteData = (language: 'en' | 'fr' | 'es') => {
  // Extract projects data (this matches your WorkSection projects)
  const projects = [
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
      image: 'https://repository-images.githubusercontent.com/409968355/5e9c3a9b-1e4d-4b3d-8c1e-5e9c3a9b1e4d',
      links: { 
        live: 'https://bpplang.com', 
        github: 'https://github.com/BuckshotPlusPlus/BuckshotPlusPlus' 
      }
    },
    {
      id: 'only-wish',
      title: 'Only Wish',
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
        live: 'https://store.steampowered.com/app/2542010/Only_Wish/', 
        github: '#' 
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
        live: 'https://nextsaas.co/', 
        github: '#' 
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
        github: 'https://github.com/LazyDB-community/uptime-robot-nodejs' 
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
      tech: ['Unity', 'C#', 'Procedural Generation', 'AI Integration', 'Multiplayer'],
      category: 'games',
      featured: true,
      status: 'active',
      image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2716030/header.jpg?t=1746793041',
      video: 'https://video.fastly.steamstatic.com/store_trailers/257033315/movie480_vp9.webm?t=1735947222',
      links: { 
        live: 'https://store.steampowered.com/app/2716030/Poly_Plaza/', 
        github: '#' 
      }
    },
    {
      id: 'broll',
      title: 'Broll',
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
        live: 'https://store.steampowered.com/app/1265300/Broll/', 
        github: '#' 
      }
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

interface WorkExperience {
  name: string;
  role: string;
  startDate: Date;
  endDate: Date | 'Present';
  description: string | { en: string; fr: string; es: string };
  technologies: string[];
}

// Import the clients data from WorkSection
const workExperience: WorkExperience[] = [
  {
    name: 'Kakiyo',
    role: 'Automation & Process Consultant',
    startDate: new Date('2024-05-01'),
    endDate: new Date(),
    description: {
      en: 'Set up automation and processes to help build their product faster and in a more scalable way. Implemented efficient workflows and systems to enhance their development pipeline and operational efficiency.',
      fr: 'Mise en place de l\'automatisation et des processus pour accélérer le développement de leur produit de manière plus évolutive. Implémentation de flux de travail et de systèmes efficaces pour améliorer leur pipeline de développement et leur efficacité opérationnelle.',
      es: 'Configuración de automatización y procesos para ayudar a construir su producto de manera más rápida y escalable. Implementación de flujos de trabajo y sistemas eficientes para mejorar su canalización de desarrollo y eficiencia operativa.'
    },
    technologies: ['Process Automation', 'Workflow Optimization', 'Scalable Architecture', 'AI Integration']
  },
  {
    name: 'JUNIA',
    role: 'Computer Science Teacher',
    startDate: new Date('2023-09-01'),
    endDate: 'Present',
    description: {
      en: 'Computer Science Teacher for first-year students, specializing in C programming. Delivered comprehensive lectures and practical sessions to help students master fundamental programming concepts and develop strong problem-solving skills.',
      fr: 'Enseignant en informatique pour les étudiants de première année, spécialisé en programmation C. J\'ai dispensé des cours magistraux et des travaux pratiques pour aider les étudiants à maîtriser les concepts fondamentaux de la programmation et à développer de solides compétences en résolution de problèmes.',
      es: 'Profesor de Informática para estudiantes de primer año, especializado en programación en C. Impartí clases teóricas y prácticas para ayudar a los estudiantes a dominar los conceptos fundamentales de programación y desarrollar fuertes habilidades de resolución de problemas.'
    },
    technologies: ['C Programming', 'Algorithms', 'Data Structures', 'Problem Solving']
  }
];

export const generateExperience = (language: 'en' | 'fr' | 'es', projectCount: number) => {
  return workExperience.map(job => {
    const formatDate = (date: Date) => {
      return date.toLocaleDateString(
        language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'en-US',
        { year: 'numeric', month: 'short' }
      );
    };

    const isPresent = job.endDate === 'Present';
    const period = `${formatDate(job.startDate)} - ${isPresent ? 
      (language === 'fr' ? 'Présent' : language === 'es' ? 'Presente' : 'Present') : 
      formatDate(job.endDate as Date)}`;

    // Convert description to achievements array
    const description = typeof job.description === 'string' ? 
      job.description : 
      job.description[language];
    
    const achievements = [
      description,
      ...job.technologies.map(tech => `Technologies: ${tech}`)
    ];

    return {
      title: job.role,
      company: job.name,
      period: period,
      achievements: achievements
    };
  });
};
