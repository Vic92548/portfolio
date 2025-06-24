
import { Code, Database, Globe, Zap } from 'lucide-react';
import { extractWebsiteData } from '@/utils/dataExtractor';

interface AboutSectionProps {
  language: 'en' | 'fr' | 'es';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  // Extract data to get actual project count
  const { projectCount } = extractWebsiteData(language);

  const translations = {
    en: {
      title: "About Me",
      subtitle: "Crafting exceptional digital experiences through code",
      description: "I'm a versatile full-stack engineer and game developer with a passion for building scalable applications and immersive gaming experiences. With a strong foundation in both web technologies and game development, I specialize in creating high-performance solutions that push technical boundaries while delivering exceptional user experiences.",
      skills: [
        {
          icon: Code,
          title: "Full-Stack Development",
          description: "Next.js, TypeScript, Node.js, and modern web technologies"
        },
        {
          icon: Database,
          title: "Game Development", 
          description: "Unreal Engine, C++, Lua, and game system architecture"
        },
        {
          icon: Globe,
          title: "Technical Leadership",
          description: "Mentoring teams and establishing development best practices"
        },
        {
          icon: Zap,
          title: "Performance & Scale",
          description: "Optimizing applications for thousands of concurrent users"
        }
      ]
    },
    fr: {
      title: "À propos de moi",
      subtitle: "Création d'expériences numériques exceptionnelles à travers le code",
      description: "Je suis un ingénieur full-stack et développeur de jeux polyvalent, passionné par la création d'applications évolutives et d'expériences de jeu immersives. Fort d'une solide expérience dans les technologies web et le développement de jeux, je me spécialise dans la création de solutions hautes performances qui repoussent les limites techniques tout en offrant des expériences utilisateur exceptionnelles.",
      skills: [
        {
          icon: Code,
          title: "Développement Full-Stack",
          description: "Next.js, TypeScript, Node.js et technologies web modernes"
        },
        {
          icon: Database,
          title: "Développement de Jeux",
          description: "Unreal Engine, C++, Lua et architecture de systèmes de jeu"
        },
        {
          icon: Globe,
          title: "Leadership Technique",
          description: "Encadrement d'équipes et établissement de bonnes pratiques"
        },
        {
          icon: Zap,
          title: "Performance et Évolutivité",
          description: "Optimisation d'applications pour des milliers d'utilisateurs"
        }
      ]
    },
    es: {
      title: "Acerca de mí",
      subtitle: "Creando experiencias digitales excepcionales a través del código",
      description: "Soy un ingeniero full-stack y desarrollador de videojuegos versátil, apasionado por crear aplicaciones escalables y experiencias de juego inmersivas. Con una sólida base en tecnologías web y desarrollo de juegos, me especializo en crear soluciones de alto rendimiento que superan los límites técnicos mientras ofrecen experiencias de usuario excepcionales.",
      skills: [
        {
          icon: Code,
          title: "Desarrollo Full-Stack",
          description: "Next.js, TypeScript, Node.js y tecnologías web modernas"
        },
        {
          icon: Database,
          title: "Desarrollo de Videojuegos",
          description: "Unreal Engine, C++, Lua y arquitectura de sistemas de juego"
        },
        {
          icon: Globe,
          title: "Liderazgo Técnico",
          description: "Mentoría de equipos y establecimiento de mejores prácticas"
        },
        {
          icon: Zap,
          title: "Rendimiento y Escalabilidad",
          description: "Optimización de aplicaciones para miles de usuarios"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-28 bg-nordic-gray/30 dark:bg-border-dark/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Description */}
          <div className="animate-fade-in delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-background border border-border rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-magic-blue mb-2">11+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-magic-blue mb-2">{projectCount}+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in group`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-magic-blue/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-magic-blue" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
