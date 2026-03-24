
import { Mail, Calendar, Linkedin } from 'lucide-react';
import { cvService } from '@/services/cvService';
import { getLocalizedString } from '@/utils/localization';

interface ContactSectionProps {
  language: 'en' | 'fr' | 'es';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const translations = {
    en: {
      title: "Let's Ship Something",
      subtitle: "Tell me your vision. I'll handle the rest.",
      description: "I work fast, autonomously, and deliver polished products. Whether it's a web platform, a game, or a tool, you get results without the overhead.",
      email: "Get in Touch",
      schedule: "Schedule a Call",
      linkedin: "Connect on LinkedIn",
      availability: "Currently available for new projects"
    },
    fr: {
      title: "Livrons quelque chose",
      subtitle: "Dites-moi votre vision. Je m'occupe du reste.",
      description: "Je travaille vite, en autonomie, et je livre des produits finis. Que ce soit une plateforme web, un jeu ou un outil, vous obtenez des résultats sans la complexité.",
      email: "Contactez-moi",
      schedule: "Planifier un appel",
      linkedin: "Me contacter sur LinkedIn",
      availability: "Actuellement disponible pour de nouveaux projets"
    },
    es: {
      title: "Creemos algo juntos",
      subtitle: "Dime tu visión. Yo me encargo del resto.",
      description: "Trabajo rápido, de forma autónoma, y entrego productos terminados. Ya sea una plataforma web, un juego o una herramienta, obtienes resultados sin la complejidad.",
      email: "Ponte en contacto",
      schedule: "Programar una llamada",
      linkedin: "Conectar en LinkedIn",
      availability: "Actualmente disponible para nuevos proyectos"
    }
  };

  const t = translations[language];
  const personalInfo = cvService.getPersonalInfo();

  return (
    <section id="contact" className="py-28 bg-nordic-gray/20 dark:bg-border-dark/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-magic-blue/10 text-magic-blue rounded-full text-sm font-medium mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-magic-blue rounded-full animate-pulse" />
              {t.availability}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in delay-100">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in delay-200">
              {t.subtitle}
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
              {t.description}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-center animate-fade-in delay-400">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-500"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <Mail className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.email}</div>
                    <div className="text-sm text-muted-foreground">{personalInfo.email}</div>
                  </div>
                </a>

                <a 
                  href={personalInfo.booking?.url || '#'}
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-600"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <Calendar className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.schedule}</div>
                    <div className="text-sm text-muted-foreground">{getLocalizedString(personalInfo.booking?.time, language)}</div>
                  </div>
                </a>

                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-700"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <Linkedin className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.linkedin}</div>
                    <div className="text-sm text-muted-foreground">Connect with me</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
