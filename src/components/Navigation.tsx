
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'fr' | 'es';
  setLanguage: (lang: 'en' | 'fr' | 'es') => void;
}

const Navigation = ({ language, setLanguage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const translations = {
    en: {
      about: 'About',
      work: 'Work',
      writing: 'Writing',
      contact: 'Contact',
      languages: { en: 'English', fr: 'Français', es: 'Español' }
    },
    fr: {
      about: 'À propos',
      work: 'Travaux',
      writing: 'Écriture',
      contact: 'Contact',
      languages: { en: 'English', fr: 'Français', es: 'Español' }
    },
    es: {
      about: 'Acerca',
      work: 'Trabajo',
      writing: 'Escritura',
      contact: 'Contacto',
      languages: { en: 'English', fr: 'Français', es: 'Español' }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="w-9 h-9 bg-gradient-to-br from-magic-blue to-magic-blue/80 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">VC</span>
          </div>
          <span className="font-semibold text-lg">Victor Chanet</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex nav-menu">
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
          >
            {t.work}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            {t.contact}
          </button>

          {/* Language Selector */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="uppercase text-xs font-semibold">
                {language}
              </span>
            </button>
            
            <div className="absolute top-full right-0 mt-2 w-36 bg-background border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm">
              {Object.entries(t.languages).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code as 'en' | 'fr' | 'es')}
                  className={`block w-full text-left px-4 py-3 text-sm hover:bg-muted first:rounded-t-xl last:rounded-b-xl transition-colors ${
                    language === code ? 'bg-muted font-medium text-magic-blue' : ''
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.work}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.contact}
            </button>
            
            <div className="pt-3 border-t border-border">
              <div className="flex gap-2">
                {Object.entries(t.languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(code as 'en' | 'fr' | 'es')}
                    className={`px-3 py-2 text-xs rounded-lg transition-colors ${
                      language === code 
                        ? 'bg-magic-blue text-white' 
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
