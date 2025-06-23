import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Button } from './button';
import { WorkExperience } from '@/data/workExperience';
import { X } from 'lucide-react';
import { formatDate } from '@/components/WorkSection';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: WorkExperience;
  language: 'en' | 'fr' | 'es';
}

const translations = {
  close: {
    en: 'Close',
    fr: 'Fermer',
    es: 'Cerrar',
  },
  howIHelped: {
    en: 'How I Helped',
    fr: 'Comment j\'ai aidé',
    es: 'Cómo ayudé',
  }
};

export function ClientModal({ isOpen, onClose, client, language }: ClientModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{client.name}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col space-y-1">
              <span>{client.role}</span>
              <span>
                {formatDate(client.startDate, language)} - {formatDate(client.endDate, language)}
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3 className="text-lg font-medium mb-3">{translations.howIHelped[language]}</h3>
          <p className="text-muted-foreground">
            {typeof client.contribution === 'string' 
              ? client.contribution 
              : client.contribution[language]}
          </p>
          
          {client.technologies && client.technologies.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">
                {language === 'fr' ? 'Technologies' : language === 'es' ? 'Tecnologías' : 'Technologies'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {client.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
