import { projects, getProjectCount } from '@/data/projects';
import { cvService } from '@/services/cvService';

// Utility to extract dynamic data from website components
export const extractWebsiteData = (language: 'en' | 'fr' | 'es') => {
  // Get project count from the imported function
  const projectCount = getProjectCount();

  // Extract hero section data
  cvService.setLanguage(language);
  const personalInfo = cvService.getPersonalInfo();

  // Extract hero section data
  const heroData = {
    name: personalInfo.name,
    title: personalInfo.title,
    description: personalInfo.summary,
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

// Import the work experience data from workExperience.ts
import { workExperience as workExperienceData } from '@/data/workExperience';

// Map the work experience data to the expected format
const workExperience = workExperienceData.map(job => ({
  name: job.name,
  role: job.role,
  startDate: job.startDate,
  endDate: job.endDate,
  description: job.contribution, // Using contribution instead of description as it's more detailed
  technologies: job.technologies
}));

export const generateExperience = (language: 'en' | 'fr' | 'es', projectCount: number) => {
  return workExperience.map(job => {
    const formatDate = (date: Date) => {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${month}/${year}`;
    };

    const isPresent = job.endDate === 'Present';
    const period = `${formatDate(job.startDate)} - ${isPresent ? 
      (language === 'fr' ? 'Présent' : language === 'es' ? 'Presente' : 'Present') : 
      formatDate(job.endDate as Date)}`;

    // Get the description in the correct language
    const description = typeof job.description === 'string' ? 
      job.description : 
      job.description[language];
    
    // Split the description into bullet points based on periods
    const achievements = description
      .split(/(?<!\.)\.\s+/)
      .filter(point => point.trim().length > 0)
      .map(point => point.endsWith('.') ? point : point + '.')
      .map(point => point.trim());

    return {
      title: job.role,
      company: job.name,
      period: period,
      achievements: achievements,
      technologies: job.technologies
    };
  });
};
