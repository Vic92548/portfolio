import { useEffect, useState, useMemo, useCallback } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import CounterAnimation from '@/components/CounterAnimation';
import { useCV } from '@/hooks/useCV';
import { fetchGitHubStars } from '@/services/githubService';
import { calculateTotalDownloads } from '@/utils/calculateTotalDownloads';
import { hero } from '@/data/hero'; // Import hero data

interface HeroSectionProps {
  language: 'en' | 'fr' | 'es';
}

// Custom hook for hero section logic
const useHeroSection = (language: 'en' | 'fr' | 'es') => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [gitHubStars, setGitHubStars] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const { data: cvData, loading, error } = useCV(language);

  const { projectCount, totalDownloads } = useMemo(() => {
    if (!cvData?.projects) return { projectCount: 0, totalDownloads: 0 };
    return {
      projectCount: cvData.projects.length,
      totalDownloads: calculateTotalDownloads(cvData.projects),
    };
  }, [cvData]);

  // Get translations directly from the hero data file
  const t = useMemo(() => hero[language] || hero.en, [language]);
  const features = t.features || [];
  const featuresCount = features.length || 0;

  useEffect(() => {
    setIsVisible(true);

    let interval: NodeJS.Timeout | undefined;
    if (featuresCount > 1) {
      interval = setInterval(() => {
        setActiveCard(prev => (prev + 1) % featuresCount);
      }, 5000);
    }

    const fetchStars = async () => {
      if (cvData?.projects?.length) {
        try {
          const stars = await fetchGitHubStars(cvData.projects);
          setGitHubStars(stars);
        } catch (err) {
          console.error('Failed to fetch GitHub stars:', err);
        }
      }
    };

    fetchStars();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [featuresCount, cvData?.projects]);

  const handleDownloadResume = useCallback(async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      if (loading) {
        await new Promise<void>(resolve => {
          const checkData = () => {
            if (!loading) resolve();
            else setTimeout(checkData, 100);
          };
          checkData();
        });
      }

      if (error) {
        console.error('Cannot download resume due to error:', error);
        return;
      }

      if (!cvData?.projects) {
        console.error('Projects data not available');
        return;
      }

      const currentProjectCount = cvData.projects.length;
      const currentTotalDownloads = calculateTotalDownloads(cvData.projects);
      const currentStars = gitHubStars;

      window.dispatchEvent(new CustomEvent('downloadResume', {
        detail: {
          language,
          stats: {
            projectCount: currentProjectCount,
            totalDownloads: currentTotalDownloads,
            gitHubStars: currentStars,
          },
        },
      }));
    } catch (err) {
      console.error('Error during resume download:', err);
    } finally {
      setIsDownloading(false);
    }
  }, [language, loading, error, cvData, gitHubStars, isDownloading]);

  const scrollToWork = useCallback(() => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return {
    isVisible,
    activeCard,
    gitHubStars,
    loading,
    error,
    projectCount,
    totalDownloads,
    features,
    featuresCount,
    t,
    scrollToWork,
    handleDownloadResume,
    isDownloading,
  };
};

// Main Component
const HeroSection = ({ language }: HeroSectionProps) => {
  const {
    isVisible,
    activeCard,
    gitHubStars,
    loading,
    error,
    projectCount,
    totalDownloads,
    features,
    featuresCount,
    t,
    scrollToWork,
    handleDownloadResume,
    isDownloading,
  } = useHeroSection(language);

  if (loading) return <div className="flex items-center justify-center min-h-[60vh]">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">Error loading CV data</div>;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-darker-gray via-nordic-gray to-darker-gray">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(94, 106, 210, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 30s linear infinite',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-magic-blue/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-magic-blue/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-magic-blue/30 rounded-full blur-lg animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-3 px-4 py-2 bg-border-dark/80 border border-border-dark rounded-full text-sm font-medium text-dark-text mb-8 animate-fade-in delay-100 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.1s' }}
            >
              <div className="w-2 h-2 bg-magic-blue rounded-full animate-pulse" />
              {t.badge}
            </div>

            <h1
              className={`text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in delay-200 text-dark-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.2s' }}
            >
              {t.title}
              <br />
              <span className="bg-gradient-to-r from-magic-blue to-magic-blue/80 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>

            <p
              className={`text-xl lg:text-xl text-light-gray mb-10 leading-relaxed max-w-2xl lg:max-w-none animate-fade-in delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.3s' }}
            >
              {t.subtitle}
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mb-10 animate-fade-in delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.4s' }}
            >
              <div className="text-center lg:text-left">
                <CounterAnimation target={totalDownloads} className="text-3xl lg:text-4xl font-bold text-dark-text" />
                <div className="text-sm text-light-gray mt-1">{t.stats.downloads}</div>
              </div>
              <div className="text-center lg:text-left">
                <CounterAnimation target={gitHubStars || 2100} className="text-3xl lg:text-4xl font-bold text-dark-text" />
                <div className="text-sm text-light-gray mt-1">{t.stats.stars}</div>
              </div>
              <div className="text-center lg:text-left">
                <CounterAnimation target={projectCount} className="text-3xl lg:text-4xl font-bold text-dark-text" />
                <div className="text-sm text-light-gray mt-1">{t.stats.products}</div>
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transition: 'all 0.6s ease-out 0.5s' }}
            >
              <button onClick={scrollToWork} className="btn btn-primary btn-lg group shadow-lg">
                {t.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadResume}
                className={`btn btn-secondary btn-lg group relative ${isDownloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    </div>
                    <span className="invisible">{t.ctaSecondary}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    {t.ctaSecondary}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Content (Feature Cards) */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            {features.map((feature, index) => {
              const isActive = index === activeCard;
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`absolute w-full p-8 bg-border-dark/50 border border-border-dark rounded-xl shadow-lg backdrop-blur-md transition-all duration-700 ease-in-out ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-dark-gray rounded-lg border border-border-dark">
                      <Icon className="w-6 h-6 text-magic-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-text">{feature.title}</h3>
                      <p className="text-light-gray">{feature.desc}</p>
                    </div>
                  </div>
                  <div className="relative w-full h-1 bg-dark-gray/50 rounded-full overflow-hidden mt-6">
                    <div
                      className="absolute top-0 left-0 h-full bg-magic-blue"
                      style={{
                        width: `${isActive ? '100%' : '0%'}`,
                        transition: `${isActive ? 'width 5s linear' : 'none'}`,
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Progress indicator */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeCard === index ? 'w-8 bg-magic-blue' : 'w-2 bg-border-dark'
                  }`}
                />
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-magic-blue/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-magic-blue/30 rounded-full blur-lg animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
