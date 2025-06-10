
import { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap, Gamepad2 } from 'lucide-react';
import SkillTag from './SkillTag';
import { extractWebsiteData } from '../utils/dataExtractor';

interface WorkSectionProps {
  language: 'en' | 'fr' | 'es';
}

const WorkSection = ({ language }: WorkSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      id: 'devflow',
      category: 'devTools',
      title: 'DevFlow',
      description: {
        en: 'Streamlined CI/CD pipeline tool that reduces deployment time from hours to minutes for small development teams.',
        fr: 'Outil de pipeline CI/CD rationalisé qui réduit le temps de déploiement d\'heures à minutes pour les petites équipes de développement.',
        es: 'Herramienta de pipeline CI/CD optimizada que reduce el tiempo de despliegue de horas a minutos para equipos de desarrollo pequeños.'
      },
      image: '/placeholder.svg',
      tech: ['TypeScript', 'Docker', 'AWS', 'PostgreSQL'],
      status: 'active',
      featured: true,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 'apiforge',
      category: 'webApps',
      title: 'APIForge',
      description: {
        en: 'Visual API builder that enables non-technical users to create and manage REST APIs through an intuitive drag-and-drop interface.',
        fr: 'Constructeur d\'API visuel qui permet aux utilisateurs non techniques de créer et gérer des API REST via une interface glisser-déposer intuitive.',
        es: 'Constructor visual de API que permite a usuarios no técnicos crear y gestionar APIs REST a través de una interfaz intuitiva de arrastrar y soltar.'
      },
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
      status: 'active',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 'codeformat',
      category: 'openSource',
      title: 'CodeFormat',
      description: {
        en: 'Open-source code formatter supporting 20+ programming languages with configurable rules and VS Code integration.',
        fr: 'Formateur de code open source prenant en charge plus de 20 langages de programmation avec des règles configurables et une intégration VS Code.',
        es: 'Formateador de código de código abierto compatible con más de 20 lenguajes de programación con reglas configurables e integración con VS Code.'
      },
      image: '/placeholder.svg',
      tech: ['TypeScript', 'Rust', 'WebAssembly', 'VS Code API'],
      status: 'active',
      featured: true,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 'pixelquest',
      category: 'games',
      title: 'PixelQuest',
      description: {
        en: 'Retro-style platformer game built with HTML5 Canvas and TypeScript, featuring procedural level generation and local multiplayer.',
        fr: 'Jeu de plateforme rétro construit avec HTML5 Canvas et TypeScript, avec génération procédurale de niveaux et multijoueur local.',
        es: 'Juego de plataformas retro construido con HTML5 Canvas y TypeScript, con generación procedimental de niveles y multijugador local.'
      },
      image: '/placeholder.svg',
      tech: ['TypeScript', 'HTML5 Canvas', 'WebGL', 'Web Audio API'],
      status: 'active',
      featured: false,
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      id: 'reactflow',
      category: 'devTools',
      title: 'ReactFlow Builder',
      description: {
        en: 'Advanced workflow automation tool with visual node editor, supporting complex business logic and integrations.',
        fr: 'Outil d\'automatisation de workflow avancé avec éditeur de nœuds visuels, prenant en charge la logique métier complexe et les intégrations.',
        es: 'Herramienta avanzada de automatización de flujos de trabajo con editor visual de nodos, compatible con lógica empresarial compleja e integraciones.'
      },
      image: '/placeholder.svg',
      tech: ['React', 'TypeScript', 'Node.js', 'WebSockets'],
      status: 'active',
      featured: true,
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  const t = translations[language];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Get skills data for mapping tech to URLs - Fix the type issue
  const websiteData = extractWebsiteData(language);
  const allSkills = [
    ...websiteData.skills.frontend,
    ...websiteData.skills.backend,
    ...websiteData.skills.cloud,
    ...websiteData.skills.tools
  ];

  const getSkillWithUrl = (techName: string): { name: string; url: string } => {
    const skill = allSkills.find(s => s.name === techName);
    return skill ? { name: skill.name, url: skill.url } : { name: techName, url: '#' };
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
        <div className="flex flex-wrap justify-center gap-2 mb-16 animate-fade-in delay-200">
          <div className="flex gap-1 p-1 bg-nordic-gray/10 dark:bg-border-dark/30 rounded-2xl border border-border backdrop-blur-sm">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeFilter === key
                    ? 'bg-magic-blue text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Fixed animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <article 
              key={`${project.id}-${activeFilter}`}
              className={`group relative bg-background border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                project.featured ? 'ring-2 ring-magic-blue/20' : ''
              }`}
              style={{ 
                animation: `fade-in 0.5s ease-out forwards`,
                animationDelay: `${300 + index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-magic-blue text-white text-xs font-medium rounded-full">
                  {t.featured}
                </div>
              )}

              {/* Project Image */}
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
                      {t.viewLive}
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

              {/* Project Content */}
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
                  {project.description[language]}
                </p>

                {/* Tech Stack - Now clickable */}
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
