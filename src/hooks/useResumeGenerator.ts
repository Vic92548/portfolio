
import { useEffect } from 'react';
import { extractWebsiteData, generateExperience } from '../utils/dataExtractor';
import { generateResumeHTML, type ResumeContent } from '../utils/resumeTemplate';
import { printResume } from '../utils/pdfGenerator';

const generateResumeContent = (lang: 'en' | 'fr' | 'es'): ResumeContent => {
    const websiteData = extractWebsiteData(lang);
    const experience = generateExperience(lang, websiteData.projectCount);

    // Format skills data for the resume
    const skillsByCategory: Record<string, string[]> = {};
    
    // Convert the skills object to the format expected by the resume template
    Object.entries(websiteData.skills).forEach(([category, skills]) => {
      skillsByCategory[category] = skills.map((skill: { name: string }) => skill.name);
    });

    const content: ResumeContent = {
      name: websiteData.heroData.name,
      title: websiteData.heroData.title[lang],
      contact: {
        email: 'victor@chanet.dev',
        website: 'https://victorchanet.dev',
        github: 'https://github.com/victorchanet',
        linkedin: 'https://linkedin.com/in/victorchanet'
      },
      summary: websiteData.heroData.description[lang],
      experience: experience,
      skills: skillsByCategory,
      projects: websiteData.projects.map(project => ({
        name: project.title,
        description: project.description[lang],
        tech: project.tech.join(', '),
        featured: project.featured
      })),
      stats: {
        totalProjects: websiteData.projectCount,
        downloads: websiteData.heroData.stats.downloads,
        stars: websiteData.heroData.stats.stars
      }
    };

    return content;
};

export const useResumeGenerator = () => {
  useEffect(() => {
    const handleDownloadResume = (event: CustomEvent) => {
      const { language: lang } = event.detail;
      if (!lang || !['en', 'fr', 'es'].includes(lang)) return;

      const content = generateResumeContent(lang);
      const html = generateResumeHTML(content, lang);
      printResume(html);
    };

    window.addEventListener('downloadResume', handleDownloadResume as EventListener);

    return () => {
      window.removeEventListener('downloadResume', handleDownloadResume as EventListener);
    };
  }, []);
};
