
import { ExternalLink, Github } from 'lucide-react';
import SkillTag from './SkillTag';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  featured: boolean;
  links: {
    live: string;
    github: string;
  };
}

interface Translations {
  featured: string;
  viewLive: string;
}

interface Skill {
    name: string;
    url: string;
}

interface ProjectCardProps {
  project: Project;
  translations: Translations;
  getSkillWithUrl: (techName: string) => Skill;
  animationDelay: string;
}

const ProjectCard = ({ project, translations, getSkillWithUrl, animationDelay }: ProjectCardProps) => {
  return (
    <article 
      className={`group relative bg-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
        project.featured ? 'ring-2 ring-magic-blue/20' : ''
      }`}
      style={{ 
        animation: `fade-in 0.5s ease-out forwards`,
        animationDelay,
        opacity: 0
      }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-magic-blue text-white text-xs font-medium rounded-full">
          {translations.featured}
        </div>
      )}

      <div className="relative aspect-video bg-nordic-gray/10 dark:bg-border-dark/30 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-3">
            <a 
              href={project.links.live}
              className="flex-1 bg-magic-blue hover:bg-magic-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              {translations.viewLive}
            </a>
            <a 
              href={project.links.github}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-magic-blue/10 text-magic-blue rounded-lg border border-magic-blue/20">
            {project.category === 'devTools' ? 'Developer Tool' : 
             project.category === 'webApps' ? 'Web App' : 
             project.category === 'games' ? 'Game' : 'Open Source'}
          </span>
          <span className="flex items-center gap-2 text-xs text-magic-blue">
            <div className="w-2 h-2 bg-magic-blue rounded-full animate-pulse"></div>
            Active
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-magic-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((techName, idx) => (
            <SkillTag 
              key={idx}
              skill={getSkillWithUrl(techName)}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
