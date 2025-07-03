
import { Code, Database, Globe, Zap } from 'lucide-react';
import { extractWebsiteData } from '@/utils/dataExtractor';
import { about } from '@/data/about';

interface AboutSectionProps {
  language: 'en' | 'fr' | 'es';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  // Extract data to get actual project count
  const { projectCount } = extractWebsiteData(language);

  const translations = {
    en: about.en,
    fr: about.fr,
    es: about.es
  };

  const t = translations[language];

  return (
    <section id="about" className="py-28 bg-nordic-gray/30 dark:bg-border-dark/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in delay-100">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Description */}
          <div className="animate-fade-in delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {t.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {t.stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-6 bg-background border border-border rounded-2xl shadow-sm">
                  <div className="text-3xl font-bold text-magic-blue mb-2">
                    {index === 0 ? stat.value : `${projectCount}+`}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in group`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-magic-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-magic-blue/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-magic-blue" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
