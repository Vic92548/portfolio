import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { extractWebsiteData } from '../utils/dataExtractor';
import WorkFilters from './WorkFilters';
import ProjectCard from './ProjectCard';

interface WorkSectionProps {
  language: 'en' | 'fr' | 'es';
}

const WorkSection = ({ language }: WorkSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const { projects, skills } = extractWebsiteData(language);

  const translations = {
    en: {
      title: "Selected Work",
      subtitle: "Projects that showcase technical depth and real-world impact",
      filters: {
        all: "All Projects",
        webApps: "Web Apps",
        devTools: "Developer Tools",
        games: "Games",
        openSource: "Open Source"
      },
      viewAll: "View All Projects",
      viewLive: "View Live",
      sourceCode: "Source Code",
      featured: "Featured"
    },
    fr: {
      title: "Travaux sélectionnés",
      subtitle: "Projets qui démontrent la profondeur technique et l'impact du monde réel",
      filters: {
        all: "Tous les projets",
        webApps: "Applications Web",
        devTools: "Outils de développement",
        games: "Jeux",
        openSource: "Open Source"
      },
      viewAll: "Voir tous les projets",
      viewLive: "Voir en direct",
      sourceCode: "Code source",
      featured: "En vedette"
    },
    es: {
      title: "Trabajo seleccionado",
      subtitle: "Proyectos que muestran profundidad técnica e impacto del mundo real",
      filters: {
        all: "Todos los proyectos",
        webApps: "Aplicaciones Web",
        devTools: "Herramientas de desarrollo",
        games: "Juegos",
        openSource: "Código abierto"
      },
      viewAll: "Ver todos los proyectos",
      viewLive: "Ver en vivo",
      sourceCode: "Código fuente",
      featured: "Destacado"
    }
  };

  const t = translations[language];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const allSkills: Array<{ name: string; url: string }> = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.cloud,
    ...skills.tools
  ];

  const getSkillWithUrl = (techName: string): { name: string; url: string } => {
    const skill = allSkills.find((s) => s.name === techName);
    return skill || { name: techName, url: '#' };
  };

  return (
    <section id="work" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <WorkFilters 
          filters={t.filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${activeFilter}`}
              project={{
                ...project,
                description: project.description[language],
              }}
              translations={{
                featured: t.featured,
                viewLive: t.viewLive,
              }}
              getSkillWithUrl={getSkillWithUrl}
              animationDelay={`${300 + index * 100}ms`}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-fade-in delay-600">
          <button className="btn btn-secondary btn-lg group">
            {t.viewAll}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
