import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ClientModal } from '@/components/ui/client-modal';
import SkillTag from './SkillTag';
import { workExperience, WorkExperience } from '@/data/workExperience';

// Using WorkExperience interface from workExperience.ts

interface Translations {
  title: Record<'en' | 'fr' | 'es', string>;
  description: Record<'en' | 'fr' | 'es', string>;
  visitWebsite: Record<'en' | 'fr' | 'es', string>;
  howIHelped: Record<'en' | 'fr' | 'es', string>;
  role: Record<'en' | 'fr' | 'es', string>;
  duration: Record<'en' | 'fr' | 'es', string>;
  technologies: Record<'en' | 'fr' | 'es', string>;
}

interface WorkSectionProps {
  language: 'en' | 'fr' | 'es';
}

export const formatDate = (date: Date | 'Present', language: 'en' | 'fr' | 'es'): string => {
  if (date === 'Present') {
    return language === 'fr' ? 'Présent' : language === 'es' ? 'Presente' : 'Present';
  }
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${year}`;
};

const WorkSection: React.FC<WorkSectionProps> = ({ language }) => {
  const [selectedClient, setSelectedClient] = useState<WorkExperience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSkillWithUrl = (techName: string) => {
    // This is a simplified version - you might want to map your technologies to actual URLs
    return {
      name: techName,
      url: `https://www.google.com/search?q=${encodeURIComponent(techName)}`
    };
  };

  const clients = workExperience;

  const translations: Translations = {
    title: {
      en: 'Who I\'ve Worked With',
      fr: 'Avec qui j\'ai travaillé',
      es: 'Con quién he trabajado',
    },
    description: {
      en: 'I\'ve had the privilege to collaborate with amazing companies and organizations.',
      fr: 'J\'ai eu le privilège de collaborer avec des entreprises et organisations exceptionnelles.',
      es: 'He tenido el privilegio de colaborar con empresas y organizaciones increíbles.',
    },
    visitWebsite: {
      en: 'Visit Website',
      fr: 'Visiter le site',
      es: 'Visitar sitio web',
    },
    howIHelped: {
      en: 'How I Helped',
      fr: 'Comment j\'ai aidé',
      es: 'Cómo ayudé',
    },
    role: {
      en: 'Role',
      fr: 'Rôle',
      es: 'Rol',
    },
    duration: {
      en: 'Duration',
      fr: 'Durée',
      es: 'Duración',
    },
    technologies: {
      en: 'Technologies',
      fr: 'Technologies',
      es: 'Tecnologías',
    },
  };

  const openModal = (client: WorkExperience) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="work" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">
            {translations.title[language]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {translations.description[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-white border border-border/20 overflow-hidden mr-4">
                    <div className="relative w-full h-full">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-foreground truncate">{client.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{client.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {client.description[language]}
                </p>

                <div className="flex space-x-3 mt-auto pt-4 border-t border-border/20">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="relative flex-1 overflow-hidden group/button"
                    onClick={() => openModal(client)}
                  >
                    <span className="inline-flex items-center justify-center w-full transition-transform duration-300 group-hover/button:-translate-x-2">
                      {translations.howIHelped[language]}
                    </span>
                    <ArrowUpRight className="absolute right-3 h-3.5 w-3.5 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 translate-x-2 transition-all duration-300" />
                  </Button>
                  
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span>{translations.visitWebsite[language]}</span>
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedClient && (
          <ClientModal
            isOpen={isModalOpen}
            onClose={closeModal}
            client={selectedClient}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkSection;
