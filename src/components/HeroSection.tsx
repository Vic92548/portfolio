
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react';
import TypingAnimation from '@/components/TypingAnimation';
import CounterAnimation from '@/components/CounterAnimation';
import InteractiveTerminal from '@/components/InteractiveTerminal';

interface HeroSectionProps {
  language: 'en' | 'fr' | 'es';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const translations = {
    en: {
      badge: "Available for new projects",
      title: "Building the future of",
      titleHighlight: ["developer tools", "web experiences", "digital products"],
      subtitle: "Full-stack engineer and entrepreneur. I create digital products that scale to hundreds of thousands of users, with a focus on developer experience and performance.",
      cta: "View My Work",
      ctaSecondary: "Download Resume",
      stats: {
        downloads: "Downloads",
        stars: "GitHub Stars",
        products: "Products Shipped"
      }
    },
    fr: {
      badge: "Disponible pour de nouveaux projets",
      title: "Construire l'avenir des",
      titleHighlight: ["outils de développement", "expériences web", "produits numériques"],
      subtitle: "Ingénieur full-stack et entrepreneur. Je crée des produits numériques qui évoluent vers des centaines de milliers d'utilisateurs, en me concentrant sur l'expérience développeur et les performances.",
      cta: "Voir mes travaux",
      ctaSecondary: "Télécharger CV",
      stats: {
        downloads: "Téléchargements",
        stars: "Étoiles GitHub",
        products: "Produits livrés"
      }
    },
    es: {
      badge: "Disponible para nuevos proyectos",
      title: "Construyendo el futuro de las",
      titleHighlight: ["herramientas de desarrollo", "experiencias web", "productos digitales"],
      subtitle: "Ingeniero full-stack y emprendedor. Creo productos digitales que escalan a cientos de miles de usuarios, enfocándome en la experiencia del desarrollador y el rendimiento.",
      cta: "Ver mi trabajo",
      ctaSecondary: "Descargar CV",
      stats: {
        downloads: "Descargas",
        stars: "Estrellas GitHub",
        products: "Productos enviados"
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // This will be handled by our ResumeGenerator component
    const event = new CustomEvent('downloadResume', { detail: { language } });
    window.dispatchEvent(event);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-darker-gray via-nordic-gray to-darker-gray">
      {/* Animated Background - Darker Linear style */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 106, 210, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 106, 210, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'grid-move 25s linear infinite'
          }}
        />
        <div 
          className="absolute top-1/3 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(94, 106, 210, 0.15) 0%, transparent 70%)',
            animation: 'glow-pulse 6s ease-in-out infinite alternate'
          }}
        />
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
                  target={2100} 
                  className="text-3xl lg:text-4xl font-bold text-dark-text"
                />
                <div className="text-sm text-light-gray mt-1">{t.stats.stars}</div>
              </div>
              <div className="text-center lg:text-left">
                <CounterAnimation 
                  target={12} 
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

          {/* Interactive Visual */}
          <div 
            className={`animate-fade-left delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transition: 'all 0.6s ease-out 0.6s' }}
          >
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
