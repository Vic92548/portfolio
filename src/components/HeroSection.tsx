
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
      ctaSecondary: "Get in Touch",
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
      ctaSecondary: "Contactez-moi",
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
      ctaSecondary: "Contáctame",
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-vc-primary-50 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        <div 
          className="absolute top-1/4 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            animation: 'glow-pulse 4s ease-in-out infinite alternate'
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-background/80 border border-border rounded-full text-sm font-medium text-muted-foreground mb-8 animate-fade-in delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.1s' }}
            >
              <div className="w-2 h-2 bg-vc-success-500 rounded-full animate-pulse" />
              {t.badge}
            </div>

            {/* Title */}
            <h1 
              className={`text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.2s' }}
            >
              {t.title}
              <br />
              <span className="bg-gradient-to-r from-vc-primary-600 to-vc-primary-400 bg-clip-text text-transparent">
                <TypingAnimation 
                  words={t.titleHighlight}
                  className="inline-block"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.3s' }}
            >
              {t.subtitle}
            </p>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 mb-8 animate-fade-in delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.4s' }}
            >
              <div className="text-center">
                <CounterAnimation 
                  target={150000} 
                  className="text-2xl lg:text-3xl font-bold text-foreground"
                />
                <div className="text-sm text-muted-foreground">{t.stats.downloads}</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  target={2100} 
                  className="text-2xl lg:text-3xl font-bold text-foreground"
                />
                <div className="text-sm text-muted-foreground">{t.stats.stars}</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  target={12} 
                  className="text-2xl lg:text-3xl font-bold text-foreground"
                />
                <div className="text-sm text-muted-foreground">{t.stats.products}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.5s' }}
            >
              <button onClick={scrollToWork} className="btn btn-primary btn-lg group">
                {t.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToContact} className="btn btn-secondary btn-lg">
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
