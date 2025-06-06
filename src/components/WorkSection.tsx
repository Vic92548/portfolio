
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

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
        openSource: "Open Source"
      },
      viewAll: "View All Projects",
      viewLive: "View Live",
      sourceCode: "Source Code"
    },
    fr: {
      title: "Travaux sélectionnés",
      subtitle: "Projets qui démontrent la profondeur technique et l'impact du monde réel",
      filters: {
        all: "Tous les projets",
        webApps: "Applications Web",
        devTools: "Outils de développement",
        openSource: "Open Source"
      },
      viewAll: "Voir tous les projets",
      viewLive: "Voir en direct",
      sourceCode: "Code source"
    },
    es: {
      title: "Trabajo seleccionado",
      subtitle: "Proyectos que muestran profundidad técnica e impacto del mundo real",
      filters: {
        all: "Todos los proyectos",
        webApps: "Aplicaciones Web",
        devTools: "Herramientas de desarrollo",
        openSource: "Código abierto"
      },
      viewAll: "Ver todos los proyectos",
      viewLive: "Ver en vivo",
      sourceCode: "Código fuente"
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
      metrics: [
        { number: '12K+', label: 'Daily Users' },
        { number: '99.8%', label: 'Uptime' },
        { number: '67%', label: 'Time Saved' }
      ],
      tech: ['TypeScript', 'Docker', 'AWS', 'PostgreSQL'],
      status: 'active',
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
      metrics: [
        { number: '8K+', label: 'APIs Created' },
        { number: '45%', label: 'Dev Time Saved' },
        { number: '99.9%', label: 'Reliability' }
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
      status: 'active',
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
      metrics: [
        { number: '150K+', label: 'Downloads' },
        { number: '2.1K', label: 'GitHub Stars' },
        { number: '300+', label: 'Contributors' }
      ],
      tech: ['TypeScript', 'Rust', 'WebAssembly', 'VS Code API'],
      status: 'active',
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

  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            {t.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in delay-200">
          <div className="flex gap-1 p-1 bg-background rounded-lg border border-border">
            {Object.entries(t.filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeFilter === key
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a 
                    href={project.links.live}
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.viewLive}
                  </a>
                  <a 
                    href={project.links.github}
                    className="btn btn-secondary btn-sm"
                  >
                    <Github className="w-4 h-4" />
                    {t.sourceCode}
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                    {project.category === 'devTools' ? 'Developer Tool' : 
                     project.category === 'webApps' ? 'Web App' : 'Open Source'}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-vc-success-500">
                    <div className="w-2 h-2 bg-vc-success-500 rounded-full"></div>
                    Active
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-bold text-foreground">{metric.number}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-fade-in delay-600">
          <button className="btn btn-secondary btn-lg">
            {t.viewAll}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
