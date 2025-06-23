import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { extractWebsiteData } from '../utils/dataExtractor';
import WorkFilters from './WorkFilters';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  language: 'en' | 'fr' | 'es';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const { projects, skills } = extractWebsiteData(language);

  const translations = {
    en: {
      title: "Projects",
      subtitle: "A collection of my personal and open-source projects",
      filters: {
        all: "All Projects",
        webApps: "Web Apps",
        games: "Games",
        openSource: "Open Source"
      },
      viewAll: "View All Projects",
      viewLive: "View Live",
      sourceCode: "Source Code",

    },
    fr: {
      title: "Projets",
      subtitle: "Une collection de mes projets personnels et open-source",
      filters: {
        all: "Tous les projets",
        webApps: "Applications Web",
        games: "Jeux",
        openSource: "Open Source"
      },
      viewAll: "Voir tous les projets",
      viewLive: "Voir en direct",
      sourceCode: "Code source",

    },
    es: {
      title: "Proyectos",
      subtitle: "Una colección de mis proyectos personales y de código abierto",
      filters: {
        all: "Todos los proyectos",
        webApps: "Aplicaciones Web",
        games: "Juegos",
        openSource: "Código Abierto"
      },
      viewAll: "Ver todos los proyectos",
      viewLive: "Ver en vivo",
      sourceCode: "Código fuente",

    }
  } as const;

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getSkillWithUrl = (skillName: string) => {
    // Search through all skill categories to find the skill
    const allSkills = Object.values(skills).flat();
    return allSkills.find(skill => skill.name === skillName) || { name: skillName, url: '#' };
  };

  // Get translations for ProjectCard
  const cardTranslations = {
    viewLive: language === 'fr' ? 'Voir en direct' : language === 'es' ? 'Ver en vivo' : 'View Live'
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          {translations[language].title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {translations[language].subtitle}
        </p>
      </div>

      <WorkFilters 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={{
          all: translations[language].filters.all,
          webApps: translations[language].filters.webApps,
          games: translations[language].filters.games,
          openSource: translations[language].filters.openSource
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project: any, index) => ( // Using any type here to avoid complex type definitions
          // The project object structure should be properly typed in a real implementation
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              description: typeof project.description === 'object' 
                ? project.description[language] || project.description.en 
                : project.description
            }}
            translations={cardTranslations}
            getSkillWithUrl={getSkillWithUrl}
            animationDelay={`${index * 100}ms`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
