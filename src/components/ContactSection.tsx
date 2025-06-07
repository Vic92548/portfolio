
import { Mail, Calendar, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactSectionProps {
  language: 'en' | 'fr' | 'es';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const translations = {
    en: {
      title: "Let's Work Together",
      subtitle: "Ready to bring your next project to life? I'd love to hear about it.",
      description: "Whether you're looking to build a new product, scale an existing platform, or need technical consulting, I'm here to help turn your vision into reality.",
      email: "Get in Touch",
      schedule: "Schedule a Call",
      discord: "Join Discord",
      availability: "Currently available for new projects"
    },
    fr: {
      title: "Travaillons ensemble",
      subtitle: "Prêt à donner vie à votre prochain projet ? J'aimerais en entendre parler.",
      description: "Que vous cherchiez à créer un nouveau produit, faire évoluer une plateforme existante ou ayez besoin de conseil technique, je suis là pour aider à transformer votre vision en réalité.",
      email: "Contactez-moi",
      schedule: "Planifier un appel",
      discord: "Rejoindre Discord",
      availability: "Actuellement disponible pour de nouveaux projets"
    },
    es: {
      title: "Trabajemos juntos",
      subtitle: "¿Listo para dar vida a tu próximo proyecto? Me encantaría escuchar sobre él.",
      description: "Ya sea que busques construir un nuevo producto, escalar una plataforma existente o necesites consultoría técnica, estoy aquí para ayudar a convertir tu visión en realidad.",
      email: "Ponte en contacto",
      schedule: "Programar una llamada",
      discord: "Únete a Discord",
      availability: "Actualmente disponible para nuevos proyectos"
    }
  };

  const t = translations[language];

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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Options */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 animate-fade-in delay-400">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:victor@example.com"
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-500"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <Mail className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.email}</div>
                    <div className="text-sm text-muted-foreground">victor@example.com</div>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-600"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <Calendar className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.schedule}</div>
                    <div className="text-sm text-muted-foreground">30-minute strategy session</div>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-in delay-700"
                >
                  <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-magic-blue/20 transition-colors">
                    <MessageCircle className="w-7 h-7 text-magic-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{t.discord}</div>
                    <div className="text-sm text-muted-foreground">Quick questions & community</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in delay-800">
              <ContactForm language={language} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
