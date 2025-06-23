import { useEffect, useState } from 'react';
import { ArrowRight, Download, Code, Zap, Layers } from 'lucide-react';
import TypingAnimation from '@/components/TypingAnimation';
import CounterAnimation from '@/components/CounterAnimation';
import { extractWebsiteData } from '@/utils/dataExtractor';
import { fetchAllProjectStars } from '@/utils/github';

interface HeroSectionProps {
  language: 'en' | 'fr' | 'es';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [gitHubStars, setGitHubStars] = useState<number | null>(null);

  // Extract data to get projects
  const { projects, projectCount } = extractWebsiteData(language);

  const translations = {
    en: {
      badge: "Available for new projects",
      title: "Building the future of",
      titleHighlight: ["games", "web", "tools"],
      subtitle: "Full-stack engineer and entrepreneur. I create digital products that scale to hundreds of thousands of users, with a focus on developer experience and performance.",
      cta: "View My Work",
      ctaSecondary: "Download Resume",
      stats: {
        downloads: "Downloads",
        stars: "GitHub Stars", 
        products: "Products Shipped"
      },
      features: [
        { icon: Code, title: "Full-Stack Development", desc: "React, Node.js, TypeScript" },
        { icon: Zap, title: "Performance Focused", desc: "Optimized for scale" },
        { icon: Layers, title: "Modern Architecture", desc: "Clean, maintainable code" }
      ]
    },
    fr: {
      badge: "Disponible pour de nouveaux projets",
      title: "Construire l'avenir des",
      titleHighlight: ["jeux", "logiciels", "sites web", "outils"],
      subtitle: "Ingénieur full-stack et entrepreneur. Je crée des produits numériques qui évoluent vers des centaines de milliers d'utilisateurs, en me concentrant sur l'expérience développeur et les performances.",
      cta: "Voir mes travaux",
      ctaSecondary: "Télécharger CV",
      stats: {
        downloads: "Téléchargements",
        stars: "Étoiles GitHub",
        products: "Produits livrés"
      },
      features: [
        { icon: Code, title: "Développement Full-Stack", desc: "React, Node.js, TypeScript" },
        { icon: Zap, title: "Axé sur les performances", desc: "Optimisé pour l'échelle" },
        { icon: Layers, title: "Architecture moderne", desc: "Code propre et maintenable" }
      ]
    },
    es: {
      badge: "Disponible para nuevos proyectos",
      title: "Construyendo el futuro de las",
      titleHighlight: ["juegos", "experiencias web", "herramientas"],
      subtitle: "Ingeniero full-stack y emprendedor. Creo productos digitales que escalan a cientos de miles de usuarios, enfocándome en la experiencia del desarrollador y el rendimiento.",
      cta: "Ver mi trabajo",
      ctaSecondary: "Descargar CV",
      stats: {
        downloads: "Descargas",
        stars: "Estrellas GitHub",
        products: "Productos enviados"
      },
      features: [
        { icon: Code, title: "Desarrollo Full-Stack", desc: "React, Node.js, TypeScript" },
        { icon: Zap, title: "Enfocado en rendimiento", desc: "Optimizado para escala" },
        { icon: Layers, title: "Arquitectura moderna", desc: "Código limpio y mantenible" }
      ]
    }
  };

  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate feature cards
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % (t.features?.length || 1));
    }, 5000);

    // Fetch GitHub stars for all projects
    const fetchStars = async () => {
      const stars = await fetchAllProjectStars(projects);
      setGitHubStars(stars);
    };
    
    fetchStars();
    
    return () => clearInterval(interval);
  }, [t.features?.length]);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const event = new CustomEvent('downloadResume', { detail: { language } });
    window.dispatchEvent(event);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-darker-gray via-nordic-gray to-darker-gray">
      {/* Enhanced Background with moving particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(94, 106, 210, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 30s linear infinite'
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-magic-blue/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-magic-blue/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-magic-blue/30 rounded-full blur-lg animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-3 px-4 py-2 bg-border-dark/80 border border-border-dark rounded-full text-sm font-medium text-dark-text mb-8 animate-fade-in delay-100 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.1s' }}
            >
              <div className="w-2 h-2 bg-magic-blue rounded-full animate-pulse" />
              {t.badge}
            </div>

            {/* Title */}
            <h1 
              className={`text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in delay-200 text-dark-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.2s' }}
            >
              {t.title}
              <br />
              <span className="bg-gradient-to-r from-magic-blue to-magic-blue/80 bg-clip-text text-transparent">
                <TypingAnimation 
                  words={t.titleHighlight}
                  className="inline-block"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-xl lg:text-xl text-light-gray mb-10 leading-relaxed max-w-2xl lg:max-w-none animate-fade-in delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.3s' }}
            >
              {t.subtitle}
            </p>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 mb-10 animate-fade-in delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.4s' }}
            >
              <div className="text-center lg:text-left">
                <CounterAnimation 
                  target={150000} 
                  className="text-3xl lg:text-4xl font-bold text-dark-text"
                />
                <div className="text-sm text-light-gray mt-1">{t.stats.downloads}</div>
              </div>
              <div className="text-center lg:text-left">
                <CounterAnimation 
                  target={gitHubStars || 2100} 
                  className="text-3xl lg:text-4xl font-bold text-dark-text"
                />
                <div className="text-sm text-light-gray mt-1">{t.stats.stars}</div>
              </div>
              <div className="text-center lg:text-left">
                <CounterAnimation 
                  target={projectCount} 
                  className="text-3xl lg:text-4xl font-bold text-dark-text"
                />
                <div className="text-sm text-light-gray mt-1">{t.stats.products}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.5s' }}
            >
              <button onClick={scrollToWork} className="btn btn-primary btn-lg group shadow-lg">
                {t.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={handleDownloadResume} className="btn btn-secondary btn-lg group">
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                {t.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Interactive Visual - Feature Cards */}
          <div 
            className={`animate-fade-left delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transition: 'all 0.6s ease-out 0.6s' }}
          >
            <div className="relative">
              {/* Main showcase card */}
              <div className="bg-gradient-to-br from-border-dark/90 to-border-dark/60 backdrop-blur-lg rounded-3xl p-8 border border-border-dark/50 shadow-2xl">
                <div className="space-y-6">
                  {t.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                          activeCard === index 
                            ? 'bg-magic-blue/20 border border-magic-blue/30 scale-105' 
                            : 'bg-border-dark/30 border border-transparent hover:bg-border-dark/50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeCard === index ? 'bg-magic-blue text-white' : 'bg-border-dark text-magic-blue'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark-text">{feature.title}</div>
                          <div className="text-sm text-light-gray">{feature.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Progress indicator */}
                <div className="flex gap-2 mt-6 justify-center">
                  {t.features.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeCard === index ? 'w-8 bg-magic-blue' : 'w-2 bg-border-dark'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-magic-blue/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-magic-blue/30 rounded-full blur-lg animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
