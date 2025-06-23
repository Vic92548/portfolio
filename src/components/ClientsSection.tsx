import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ClientModal } from '@/components/ui/client-modal';

interface Client {
  name: string;
  description: Record<'en' | 'fr' | 'es', string>;
  logo: string;
  url: string;
  contribution: Record<'en' | 'fr' | 'es', string>;
  role: string;
  duration: string;
  technologies: string[];
}

interface Translations {
  title: Record<'en' | 'fr' | 'es', string>;
  description: Record<'en' | 'fr' | 'es', string>;
  visitWebsite: Record<'en' | 'fr' | 'es', string>;
  howIHelped: Record<'en' | 'fr' | 'es', string>;
  role: Record<'en' | 'fr' | 'es', string>;
  duration: Record<'en' | 'fr' | 'es', string>;
  technologies: Record<'en' | 'fr' | 'es', string>;
}

interface ClientsSectionProps {
  language: 'en' | 'fr' | 'es';
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ language }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clients: Client[] = [
    {
      name: 'Kakiyo',
      description: {
        en: 'AI-powered LinkedIn automation platform that autonomously handles personalized conversations, qualifies prospects, and books meetings at scale.',
        fr: 'Plateforme d\'automatisation LinkedIn alimentée par l\'IA qui gère de manière autonome les conversations personnalisées, qualifie les prospects et planifie des réunions à grande échelle.',
        es: 'Plataforma de automatización de LinkedIn impulsada por IA que maneja conversaciones personalizadas, califica prospectos y programa reuniones de forma autónoma a gran escala.'
      },
      logo: 'https://kakiyo.ai/favicon.ico',
      url: 'https://kakiyo.ai',
      contribution: {
        en: 'Set up automation and processes to help build their product faster and in a more scalable way. Implemented efficient workflows and systems to enhance their development pipeline and operational efficiency.',
        fr: 'Mise en place de l\'automatisation et des processus pour accélérer le développement de leur produit de manière plus évolutive. Implémentation de flux de travail et de systèmes efficaces pour améliorer leur pipeline de développement et leur efficacité opérationnelle.',
        es: 'Configuración de automatización y procesos para ayudar a construir su producto de manera más rápida y escalable. Implementación de flujos de trabajo y sistemas eficientes para mejorar su canalización de desarrollo y eficiencia operativa.'
      },
      role: 'Automation & Process Consultant',
      duration: '2024 - Present',
      technologies: ['Process Automation', 'Workflow Optimization', 'Scalable Architecture', 'AI Integration']
    },
    {
      name: 'JUNIA',
      description: {
        en: 'Engineering school bringing together HEI, ISA and ISEN programs on its campuses in Lille, Bordeaux and Châteauroux.',
        fr: 'École d\'ingénieurs regroupant les programmes HEI, ISA et ISEN sur ses campus de Lille, Bordeaux et Châteauroux.',
        es: 'Escuela de ingeniería que reúne los programas HEI, ISA e ISEN en sus campus de Lille, Burdeos y Châteauroux.'
      },
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhqNoNfQywM0DUg7Y4r63wfoUQLnsNdHjTA&s',
      url: 'https://www.junia.com',
      contribution: {
        en: 'Computer Science Teacher for first-year students, specializing in C programming. Delivered comprehensive lectures and practical sessions to help students master fundamental programming concepts and develop strong problem-solving skills.',
        fr: 'Enseignant en informatique pour les étudiants de première année, spécialisé en programmation C. J\'ai dispensé des cours magistraux et des travaux pratiques pour aider les étudiants à maîtriser les concepts fondamentaux de la programmation et à développer de solides compétences en résolution de problèmes.',
        es: 'Profesor de Informática para estudiantes de primer año, especializado en programación en C. Impartí clases teóricas y prácticas para ayudar a los estudiantes a dominar los conceptos fundamentales de programación y desarrollar fuertes habilidades de resolución de problemas.'
      },
      role: 'Computer Science Teacher',
      duration: '2023 - Present',
      technologies: ['C Programming', 'Algorithms', 'Data Structures', 'Problem Solving']
    },
    // Add more clients here as needed
  ];

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

  const openModal = (client: Client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="clients" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">{translations.title[language]}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-white p-2 mr-4 border border-border/20">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-12 max-w-[3rem] object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {client.description[language]}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="font-medium w-20 text-muted-foreground">{translations.duration[language]}:</span>
                    <span>{client.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {client.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-muted rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

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
            title={selectedClient.name}
            description={`${translations.role[language]}: ${selectedClient.role} • ${translations.duration[language]}: ${selectedClient.duration}`}
            content={selectedClient.contribution[language]}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientsSection;
