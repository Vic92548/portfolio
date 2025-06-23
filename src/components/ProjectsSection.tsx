import { useState, useEffect, useMemo } from 'react';
import { useCV } from '@/hooks/useCV';
import type { Project } from '@/types/cv';
import { motion, Variants } from 'framer-motion';
import ProjectCard from './ProjectCard';

type Skill = {
  name: string;
  url: string;
};

// Simple fadeIn animation with proper typing
const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number): Variants => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
});

interface ProjectsSectionProps {
  language: 'en' | 'fr' | 'es';
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const { data: cvData, loading, error, getLocalizedString } = useCV(language);

  // Helper function to get skill with URL
  const getSkillWithUrl = (techName: string): Skill => {
    return {
      name: techName,
      url: `#${techName.toLowerCase().replace(/\s+/g, '-')}`
    };
  };

  const cardTranslations = useMemo(() => ({
    en: { viewLive: 'View Live' },
    fr: { viewLive: 'Voir en direct' },
    es: { viewLive: 'Ver en vivo' }
  }), []);
  
  useEffect(() => {
    if (cvData?.projects) {
      if (activeFilter === 'all') {
        setFilteredProjects(cvData.projects);
      } else {
        setFilteredProjects(
          cvData.projects.filter(project => 
            project.category?.toLowerCase() === activeFilter.toLowerCase()
          )
        );
      }
    }
  }, [activeFilter, cvData]);

  if (loading) return <div className="py-20 text-center">Loading projects...</div>;
  if (error) return <div className="py-20 text-center text-red-500">Error loading projects</div>;
  if (!cvData?.projects?.length) return null;

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

  return (
    <section id="projects" className="py-20 bg-darker-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl font-bold text-dark-text mb-4">
            {getLocalizedString({
              en: 'Projects',
              fr: 'Projets',
              es: 'Proyectos'
            })}
          </h2>
          <p className="text-light-gray text-xl max-w-2xl mx-auto">
            {getLocalizedString({
              en: 'A collection of my personal and open-source projects',
              fr: 'Une collection de mes projets personnels et open-source',
              es: 'Una colección de mis proyectos personales y de código abierto'
            })}
          </p>
        </motion.div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'openSource', 'games', 'webApps'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-magic-blue text-white'
                  : 'bg-border-dark text-light-gray hover:bg-border-dark/80'
              }`}
            >
              {getLocalizedString({
                en: {
                  all: 'All Projects',
                  openSource: 'Open Source',
                  games: 'Games',
                  webApps: 'Web Apps'
                }[filter],
                fr: {
                  all: 'Tous les projets',
                  openSource: 'Open Source',
                  games: 'Jeux',
                  webApps: 'Applications Web'
                }[filter],
                es: {
                  all: 'Todos los proyectos',
                  openSource: 'Código Abierto',
                  games: 'Juegos',
                  webApps: 'Aplicaciones Web'
                }[filter]
              })}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // Format project data for ProjectCard
            const description = typeof project.description === 'string' 
              ? project.description 
              : project.description?.[language] || project.description?.en || 'No description available';
              
            const projectForCard = {
              id: project.id,
              title: project.title,
              category: project.category,
              description: description, // Convert to string
              image: project.image,
              video: project.video,
              tech: project.tech || [],
              status: 'active',
              links: {
                live: project.links?.live || project.links?.demo || '#',
                github: project.links?.github || '#',
                npm: project.links?.npm
              }
            };
            
            return (
              <motion.div
                key={project.id}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="w-full"
              >
                <ProjectCard
                  project={projectForCard}
                  translations={cardTranslations[language]}
                  getSkillWithUrl={getSkillWithUrl}
                  animationDelay={`${index * 100}ms`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
