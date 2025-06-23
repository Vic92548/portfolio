import { projects, getProjectCount } from '@/data/projects';

// Utility to extract dynamic data from website components
export const extractWebsiteData = (language: 'en' | 'fr' | 'es') => {
  // Get project count from the imported function
  const projectCount = getProjectCount();

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
    name: 'TEKGI',
    role: 'AI & Automation Consultant',
    startDate: new Date('2024-06-01'),
    endDate: 'Present',
    description: {
      en: 'Developing a sales automation platform integrated with AI to optimize supply chain management and tech talent solutions. Working on innovative services that help businesses streamline their operations and access top tech talent.',
      fr: 'Développement d\'une plateforme d\'automatisation des ventes intégrée à l\'IA pour optimiser la gestion de la chaîne d\'approvisionnement et les solutions de talents technologiques. Travail sur des services innovants qui aident les entreprises à rationaliser leurs opérations et à accéder aux meilleurs talents technologiques.',
      es: 'Desarrollo de una plataforma de automatización de ventas integrada con IA para optimizar la gestión de la cadena de suministro y las soluciones de talento tecnológico. Trabajando en servicios innovadores que ayudan a las empresas a optimizar sus operaciones y acceder al mejor talento tecnológico.'
    },
    technologies: ['AI Integration', 'Sales Automation', 'Supply Chain Management', 'Tech Talent Solutions', 'Process Optimization']
  },
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
