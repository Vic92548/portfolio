
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
        email: 'vchanet@pm.me',
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
      console.log('Received download event:', event.detail);
      
      const { language: lang, stats } = event.detail || {};
      if (!lang || !['en', 'fr', 'es'].includes(lang)) {
        console.error('Invalid language:', lang);
        return;
      }

      console.log('Generating resume with stats:', { stats });
      
      const content = generateResumeContent(lang);
      
      // Always use the stats passed from the HeroSection if available
      if (stats) {
        console.log('Using stats from HeroSection:', {
          projects: stats.projectCount,
          downloads: stats.totalDownloads,
          stars: stats.gitHubStars
        });
        
        content.stats = {
          ...content.stats,
          totalProjects: stats.projectCount || 0,
          downloads: stats.totalDownloads || 0,
          stars: stats.gitHubStars || 0
        };
      } else {
        console.warn('No stats provided from HeroSection, using defaults');
      }
      
      const html = generateResumeHTML(content, lang);
      printResume(html);
    };

    window.addEventListener('downloadResume', handleDownloadResume as EventListener);

    return () => {
      window.removeEventListener('downloadResume', handleDownloadResume as EventListener);
    };
  }, []);
};
