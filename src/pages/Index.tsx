import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResumeGenerator from "@/components/ResumeGenerator";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'fr' | 'es'>('en');

  useEffect(() => {
    // Animation observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = element.dataset.delay || '0';
          
          setTimeout(() => {
            if (element.classList.contains('animate-fade-in')) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            } else if (element.classList.contains('animate-fade-left')) {
              element.style.opacity = '1';
              element.style.transform = 'translateX(0)';
            } else if (element.classList.contains('animate-scale-in')) {
              element.style.opacity = '1';
              element.style.transform = 'scale(1)';
            }
          }, parseInt(delay));
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-fade-left, .animate-scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <WorkSection language={language} />
      <ContactSection language={language} />
      <ResumeGenerator />
    </div>
  );
};

export default Index;
