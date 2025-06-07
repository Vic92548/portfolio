
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  language: 'en' | 'fr' | 'es';
}

const ContactForm = ({ language }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const translations = {
    en: {
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
      success: "Message sent successfully!",
      successDescription: "Thank you for reaching out. I'll get back to you soon.",
      error: "Failed to send message",
      errorDescription: "Please try again or contact me directly via email.",
      validation: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email",
        messageRequired: "Message is required"
      }
    },
    fr: {
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
      success: "Message envoyé avec succès !",
      successDescription: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
      error: "Échec de l'envoi du message",
      errorDescription: "Veuillez réessayer ou me contacter directement par email.",
      validation: {
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "Veuillez entrer un email valide",
        messageRequired: "Le message est requis"
      }
    },
    es: {
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
      success: "¡Mensaje enviado exitosamente!",
      successDescription: "Gracias por contactarme. Te responderé pronto.",
      error: "Error al enviar mensaje",
      errorDescription: "Por favor intenta de nuevo o contáctame directamente por email.",
      validation: {
        nameRequired: "El nombre es requerido",
        emailRequired: "El email es requerido",
        emailInvalid: "Por favor ingresa un email válido",
        messageRequired: "El mensaje es requerido"
      }
    }
  };

  const t = translations[language];

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: t.validation.nameRequired,
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: t.validation.emailRequired,
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t.validation.emailInvalid,
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: t.validation.messageRequired,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      toast({
        title: t.success,
        description: t.successDescription,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t.error,
        description: t.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-3">{t.form.name}</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-magic-blue focus:border-transparent transition-all bg-background"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-3">{t.form.email}</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-magic-blue focus:border-transparent transition-all bg-background"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">{t.form.project}</label>
        <select 
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-magic-blue focus:border-transparent transition-all bg-background"
        >
          <option value="">{t.form.projectTypes.web}</option>
          <option value="mobile">{t.form.projectTypes.mobile}</option>
          <option value="api">{t.form.projectTypes.api}</option>
          <option value="consulting">{t.form.projectTypes.consulting}</option>
          <option value="other">{t.form.projectTypes.other}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">{t.form.message}</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-magic-blue focus:border-transparent transition-all resize-none bg-background"
          placeholder={t.form.message}
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn btn-primary w-full btn-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : t.form.send}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ContactForm;
