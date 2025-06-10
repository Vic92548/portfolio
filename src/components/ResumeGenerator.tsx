
import { useEffect } from 'react';
import { extractWebsiteData, generateExperience } from '../utils/dataExtractor';

interface ResumeGeneratorProps {
  language: 'en' | 'fr' | 'es';
}

const ResumeGenerator = ({ language }: ResumeGeneratorProps) => {
  const generateResumeContent = (lang: 'en' | 'fr' | 'es') => {
    // Extract dynamic data from website components
    const websiteData = extractWebsiteData(lang);
    const experience = generateExperience(lang, websiteData.projectCount);

    const content = {
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
      skills: {
        frontend: websiteData.skills.frontend,
        backend: websiteData.skills.backend,
        cloud: websiteData.skills.cloud,
        tools: websiteData.skills.tools
      },
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

  const generatePDF = (content: any) => {
    const translations = {
      en: {
        summary: 'Summary',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Featured Projects',
        techStack: 'Tech Stack',
        stats: 'Key Metrics'
      },
      fr: {
        summary: 'Résumé',
        experience: 'Expérience',
        skills: 'Compétences',
        projects: 'Projets en vedette',
        techStack: 'Stack technique',
        stats: 'Métriques clés'
      },
      es: {
        summary: 'Resumen',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos destacados',
        techStack: 'Stack tecnológico',
        stats: 'Métricas clave'
      }
    };

    const t = translations[language];

    // Create HTML content for the resume
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${content.name} - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #222326;
            background: #FFFFFF;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #5E6AD2;
          }
          .name {
            font-size: 32px;
            font-weight: 800;
            color: #222326;
            margin-bottom: 8px;
          }
          .title {
            font-size: 18px;
            color: #5E6AD2;
            font-weight: 600;
            margin-bottom: 15px;
          }
          .contact {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 15px;
            flex-wrap: wrap;
          }
          .contact a {
            color: #8a8f98;
            text-decoration: none;
            font-size: 14px;
          }
          .stats-section {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
            padding: 15px;
            background: #F4F5F8;
            border-radius: 8px;
          }
          .stat-item {
            text-align: center;
          }
          .stat-number {
            font-size: 24px;
            font-weight: 700;
            color: #5E6AD2;
          }
          .stat-label {
            font-size: 12px;
            color: #8a8f98;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #222326;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .summary {
            font-size: 16px;
            color: #8a8f98;
            line-height: 1.7;
          }
          .experience-item {
            margin-bottom: 25px;
          }
          .job-title {
            font-size: 18px;
            font-weight: 600;
            color: #222326;
          }
          .company {
            font-size: 16px;
            color: #5E6AD2;
            font-weight: 500;
          }
          .period {
            font-size: 14px;
            color: #8a8f98;
            margin-bottom: 10px;
          }
          .achievements {
            list-style: none;
          }
          .achievements li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 5px;
            color: #8a8f98;
          }
          .achievements li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #5E6AD2;
            font-weight: bold;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .skill-category {
            margin-bottom: 15px;
          }
          .skill-category-title {
            font-weight: 600;
            color: #222326;
            margin-bottom: 8px;
            text-transform: capitalize;
          }
          .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .skill-tag {
            background: #F4F5F8;
            color: #222326;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #E1E3E8;
          }
          .project-item {
            margin-bottom: 15px;
            padding: 15px;
            border: 1px solid #E1E3E8;
            border-radius: 8px;
            background: #F4F5F8;
          }
          .project-name {
            font-weight: 600;
            color: #5E6AD2;
            margin-bottom: 5px;
          }
          .project-description {
            color: #8a8f98;
            font-size: 14px;
            margin-bottom: 8px;
          }
          .project-tech {
            font-size: 12px;
            color: #222326;
            font-weight: 500;
          }
          .featured-badge {
            display: inline-block;
            background: #5E6AD2;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 10px;
            margin-left: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="name">${content.name}</h1>
          <p class="title">${content.title}</p>
          <div class="contact">
            <a href="mailto:${content.contact.email}">${content.contact.email}</a>
            <a href="${content.contact.website}">${content.contact.website}</a>
            <a href="${content.contact.github}">GitHub</a>
            <a href="${content.contact.linkedin}">LinkedIn</a>
          </div>
          <div class="stats-section">
            <div class="stat-item">
              <div class="stat-number">${content.stats.totalProjects}</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${(content.stats.downloads / 1000).toFixed(0)}K+</div>
              <div class="stat-label">Downloads</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">${(content.stats.stars / 1000).toFixed(1)}K+</div>
              <div class="stat-label">GitHub Stars</div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">${t.summary}</h2>
          <p class="summary">${content.summary}</p>
        </div>

        <div class="section">
          <h2 class="section-title">${t.experience}</h2>
          ${content.experience.map(exp => `
            <div class="experience-item">
              <div class="job-title">${exp.title}</div>
              <div class="company">${exp.company}</div>
              <div class="period">${exp.period}</div>
              <ul class="achievements">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">${t.skills}</h2>
          <div class="skills-grid">
            ${Object.entries(content.skills).filter(([_, skills]) => Array.isArray(skills) && skills.length > 0).map(([category, skills]) => `
              <div class="skill-category">
                <div class="skill-category-title">${category}</div>
                <div class="skill-tags">
                  ${(skills as string[]).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">${t.projects}</h2>
          ${content.projects.map(project => `
            <div class="project-item">
              <div class="project-name">
                ${project.name}
                ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
              </div>
              <div class="project-description">${project.description}</div>
              <div class="project-tech">${t.techStack}: ${project.tech}</div>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;

    // Create a new window to generate PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load then trigger print
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  useEffect(() => {
    const handleDownloadResume = (event: CustomEvent) => {
      const { language: lang } = event.detail;
      const content = generateResumeContent(lang);
      generatePDF(content);
    };

    window.addEventListener('downloadResume', handleDownloadResume as EventListener);

    return () => {
      window.removeEventListener('downloadResume', handleDownloadResume as EventListener);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ResumeGenerator;
