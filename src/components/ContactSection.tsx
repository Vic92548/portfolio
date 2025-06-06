
import { Mail, Calendar, MessageCircle, Send } from 'lucide-react';

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
      form: {
        name: "Name",
        email: "Email",
        project: "Project Type",
        message: "Tell me about your project",
        send: "Send Message",
        projectTypes: {
          web: "Web Application",
          mobile: "Mobile App",
          api: "API Development",
          consulting: "Technical Consulting",
          other: "Other"
        }
      },
      availability: "Currently available for new projects"
    },
    fr: {
      title: "Travaillons ensemble",
      subtitle: "Prêt à donner vie à votre prochain projet ? J'aimerais en entendre parler.",
      description: "Que vous cherchiez à créer un nouveau produit, faire évoluer une plateforme existante ou ayez besoin de conseil technique, je suis là pour aider à transformer votre vision en réalité.",
      email: "Contactez-moi",
      schedule: "Planifier un appel",
      discord: "Rejoindre Discord",
      form: {
        name: "Nom",
        email: "Email",
        project: "Type de projet",
        message: "Parlez-moi de votre projet",
        send: "Envoyer le message",
        projectTypes: {
          web: "Application Web",
          mobile: "Application Mobile",
          api: "Développement API",
          consulting: "Conseil Technique",
          other: "Autre"
        }
      },
      availability: "Actuellement disponible pour de nouveaux projets"
    },
    es: {
      title: "Trabajemos juntos",
      subtitle: "¿Listo para dar vida a tu próximo proyecto? Me encantaría escuchar sobre él.",
      description: "Ya sea que busques construir un nuevo producto, escalar una plataforma existente o necesites consultoría técnica, estoy aquí para ayudar a convertir tu visión en realidad.",
      email: "Ponte en contacto",
      schedule: "Programar una llamada",
      discord: "Únete a Discord",
      form: {
        name: "Nombre",
        email: "Email",
        project: "Tipo de proyecto",
        message: "Cuéntame sobre tu proyecto",
        send: "Enviar mensaje",
        projectTypes: {
          web: "Aplicación Web",
          mobile: "Aplicación Móvil",
          api: "Desarrollo de API",
          consulting: "Consultoría Técnica",
          other: "Otro"
        }
      },
      availability: "Actualmente disponible para nuevos proyectos"
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-vc-success-500/10 text-vc-success-500 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-vc-success-500 rounded-full animate-pulse" />
              {t.availability}
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in delay-100">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-4 animate-fade-in delay-200">
              {t.subtitle}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-300">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 animate-fade-in delay-400">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:victor@example.com"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 group animate-fade-in delay-500"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{t.email}</div>
                    <div className="text-sm text-muted-foreground">victor@example.com</div>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 group animate-fade-in delay-600"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{t.schedule}</div>
                    <div className="text-sm text-muted-foreground">30-minute strategy session</div>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 group animate-fade-in delay-700"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{t.discord}</div>
                    <div className="text-sm text-muted-foreground">Quick questions & community</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in delay-800">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.project}</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">{t.form.projectTypes.web}</option>
                    <option value="mobile">{t.form.projectTypes.mobile}</option>
                    <option value="api">{t.form.projectTypes.api}</option>
                    <option value="consulting">{t.form.projectTypes.consulting}</option>
                    <option value="other">{t.form.projectTypes.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.form.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={t.form.message}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  {t.form.send}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
