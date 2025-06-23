import { useEffect, useState } from 'react';
import { CVData, Language } from '@/types/cv';
import { cvService } from '@/services/cvService';

export const useCV = (initialLanguage: Language = 'en') => {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const init = async () => {
      try {
        cvService.setLanguage(language);
        await cvService.initialize();
        
        // Get all data from the service
        const [personalInfo, skills, experience, education, projects] = await Promise.all([
          cvService.getPersonalInfo(),
          cvService.getSkills(),
          cvService.getExperience(),
          cvService.getEducation(),
          cvService.getProjects()
        ]);
        
        const cvData: CVData = {
          personalInfo,
          skills,
          experience,
          education,
          projects,
          languages: cvService.getLanguages(),
          meta: {
            lastUpdated: new Date().toISOString(),
            version: '1.0.0'
          }
        };
        
        setCvData(cvData);
      } catch (err) {
        console.error('Error loading CV data:', err);
        setError(err instanceof Error ? err : new Error('Failed to load CV data'));
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    cvService.setLanguage(newLanguage);
  };

  return {
    data: cvData,
    loading,
    error,
    language,
    changeLanguage,
    // Add helper methods to get specific data
    getLocalizedString: (string: { [key in Language]?: string }) => 
      string[language] || string.en || ''
  };
};
