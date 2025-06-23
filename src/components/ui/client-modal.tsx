import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Button } from './button';
import { X } from 'lucide-react';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: string;
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

export function ClientModal({ isOpen, onClose, title, description, content, language }: ClientModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3 className="text-lg font-medium mb-3">{translations.howIHelped[language]}</h3>
          <p className="text-muted-foreground">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
