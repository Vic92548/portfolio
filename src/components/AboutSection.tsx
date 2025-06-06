
import { Code, Database, Globe, Zap } from 'lucide-react';

interface AboutSectionProps {
  language: 'en' | 'fr' | 'es';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const translations = {
    en: {
      title: "About Me",
      subtitle: "Building digital experiences with purpose and precision",
      description: "I'm a full-stack engineer with over 8 years of experience creating scalable web applications and developer tools. My passion lies in crafting elegant solutions that solve real-world problems and enhance user experiences.",
      skills: [
        {
          icon: Code,
          title: "Frontend Development",
          description: "React, TypeScript, Next.js, and modern CSS frameworks"
        },
        {
          icon: Database,
          title: "Backend Development", 
          description: "Node.js, Python, PostgreSQL, and cloud architecture"
        },
        {
          icon: Globe,
          title: "Full-Stack Solutions",
          description: "End-to-end development from concept to deployment"
        },
        {
          icon: Zap,
          title: "Performance Optimization",
          description: "Scalable systems handling hundreds of thousands of users"
        }
      ]
    },
    fr: {
      title: "À propos de moi",
      subtitle: "Créer des expériences numériques avec purpose et précision",
      description: "Je suis un ingénieur full-stack avec plus de 8 ans d'expérience dans la création d'applications web évolutives et d'outils de développement. Ma passion réside dans l'élaboration de solutions élégantes qui résolvent des problèmes du monde réel et améliorent les expériences utilisateur.",
      skills: [
        {
          icon: Code,
          title: "Développement Frontend",
          description: "React, TypeScript, Next.js et frameworks CSS modernes"
        },
        {
          icon: Database,
          title: "Développement Backend",
          description: "Node.js, Python, PostgreSQL et architecture cloud"
        },
        {
          icon: Globe,
          title: "Solutions Full-Stack",
          description: "Développement de bout en bout du concept au déploiement"
        },
        {
          icon: Zap,
          title: "Optimisation des performances",
          description: "Systèmes évolutifs gérant des centaines de milliers d'utilisateurs"
        }
      ]
    },
    es: {
      title: "Acerca de mí",
      subtitle: "Construyendo experiencias digitales con propósito y precisión",
      description: "Soy un ingeniero full-stack con más de 8 años de experiencia creando aplicaciones web escalables y herramientas de desarrollo. Mi pasión radica en crear soluciones elegantes que resuelvan problemas del mundo real y mejoren las experiencias de usuario.",
      skills: [
        {
          icon: Code,
          title: "Desarrollo Frontend",
          description: "React, TypeScript, Next.js y frameworks CSS modernos"
        },
        {
          icon: Database,
          title: "Desarrollo Backend",
          description: "Node.js, Python, PostgreSQL y arquitectura en la nube"
        },
        {
          icon: Globe,
          title: "Soluciones Full-Stack",
          description: "Desarrollo integral desde el concepto hasta el despliegue"
        },
        {
          icon: Zap,
          title: "Optimización de rendimiento",
          description: "Sistemas escalables que manejan cientos de miles de usuarios"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Description */}
          <div className="animate-fade-in delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-background border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background border border-border rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
