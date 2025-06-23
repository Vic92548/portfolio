
import { ExternalLink, Github, Star } from 'lucide-react';
import GitHubStars from './GitHubStars';
import { useRef, useState } from 'react';
import SkillTag from './SkillTag';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  video?: string;
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
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const hasValidGithubLink = project.links.github && project.links.github !== '#';
  const githubRepo = hasValidGithubLink ? project.links.github.replace('https://github.com/', '') : '';

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered && project.video ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
          }`}
        />
        
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            loop
            playsInline
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-3">
            <div className={`relative ${hasValidGithubLink ? 'flex-1' : 'w-full'}`}>
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-magic-blue hover:bg-magic-blue/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 group/button"
              >
                <span className="inline-flex items-center justify-center w-full transition-transform duration-300 group-hover/button:-translate-x-1">
                  {translations.viewLive}
                </span>
                <ExternalLink className="absolute right-3 w-4 h-4 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 translate-x-2 transition-all duration-300" />
              </a>
            </div>
            {hasValidGithubLink && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors overflow-hidden group/github"
              >
                <span className="inline-flex items-center justify-center w-full transition-transform duration-300 group-hover/github:-translate-x-1">
                  <Github className="w-4 h-4 mr-1" />
                  <GitHubStars repo={githubRepo} />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-magic-blue/10 text-magic-blue rounded-lg border border-magic-blue/20">
            {
              project.category === 'webApps' ? 'Web App' : 
              project.category === 'games' ? 'Game' : 'Open Source'
            }
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
