
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ResumeContent {
  name: string;
  title: string;
  contact: {
    email: string;
    website: string;
    github: string;
    linkedin: string;
    steam?: string;
  };
  summary: string;
  experience: {
    title: string;
    company: string;
    period: string;
    achievements: string[];
    technologies?: string[];
  }[];
  education: EducationItem[];
  skills: {
    [category: string]: string[];
  };
  projects: {
    name: string;
    description: string;
    tech: string;
    featured: boolean;
    links?: { live?: string; github?: string; demo?: string; steam?: string; };
  }[];
  stats: {
    totalProjects: number;
    downloads: number;
    stars: number;
  };
}

export const generateResumeHTML = (content: ResumeContent, language: 'en' | 'fr' | 'es'): string => {
    const translations = {
      en: {
        summary: 'Summary',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills & Technologies',
        projects: 'Projects',
        techStack: 'Tech Stack',
        stats: 'Key Metrics',
        baccalaureate: 'Baccalauréat Scientifique (High School Diploma)',
        institution: 'High School',
        graduationYear: '2018'
      },
      fr: {
        summary: 'Résumé',
        experience: 'Expérience',
        education: 'Formation',
        skills: 'Compétences & Technologies',
        projects: 'Projets',
        techStack: 'Stack technique',
        stats: 'Métriques clés',
        baccalaureate: 'Baccalauréat Scientifique',
        institution: 'Lycée',
        graduationYear: '2018'
      },
      es: {
        summary: 'Resumen',
        experience: 'Experiencia',
        education: 'Educación',
        skills: 'Habilidades y Tecnologías',
        projects: 'Proyectos',
        techStack: 'Stack tecnológico',
        stats: 'Métricas clave',
        baccalaureate: 'Bachillerato Científico',
        institution: 'Instituto',
        graduationYear: '2018'
      }
    };

    const t = translations[language];

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
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f0f0f0;
          }
          .experience-item:last-child {
            border-bottom: none;
          }
          .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 5px;
          }
          .job-title {
            font-size: 18px;
            font-weight: 600;
            color: #222326;
            margin: 0;
          }
          .company {
            font-size: 16px;
            color: #5E6AD2;
            font-weight: 500;
          }
          .period {
            font-size: 14px;
            color: #8a8f98;
            font-style: italic;
          }
          .technologies {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 10px 0 8px 0;
          }
          .tech-tag {
            background: #f0f4ff;
            color: #5E6AD2;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            border: 1px solid #e0e5ff;
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
            color: #5E6AD2;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #E1E3E8;
            text-decoration: none;
            cursor: pointer;
          }
          .skill-tag:hover {
            background: #5E6AD2;
            color: white;
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
            color: #666;
            font-size: 14px;
            margin-top: 8px;
          }
          .project-links {
            margin-top: 10px;
            display: flex;
            gap: 15px;
          }
          .project-links a {
            color: #5E6AD2;
            text-decoration: none;
            font-weight: 500;
            font-size: 13px;
          }
          .project-links a:hover {
            text-decoration: underline;
          }
          .featured-badge {
            display: inline-block;
            background-color: #4a6bff;
            color: white;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 4px;
            margin-left: 8px;
            font-weight: 500;
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
            ${content.contact.steam ? `<a href="${content.contact.steam}">Steam</a>` : ''}
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
              <div class="stat-number">${content.stats.stars}</div>
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
              <div class="job-header">
                <div>
                  <div class="job-title">${exp.title}</div>
                  <div class="company">${exp.company}</div>
                </div>
                <div class="period">${exp.period}</div>
              </div>
              ${exp.technologies && exp.technologies.length > 0 ? `
                <div class="technologies">
                  ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
              ` : ''}
              <ul class="achievements">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">${t.education}</h2>
          <div class="experience-item">
            <div class="job-header">
              <div>
                <div class="job-title">${t.baccalaureate}</div>
                <div class="company">${t.institution}</div>
              </div>
              <div class="period">${t.graduationYear}</div>
            </div>
            <p>${language === 'en' ? 
              'Baccalauréat Scientifique (Scientific Baccalaureate) - Specialized in Computer Science' :
              language === 'fr' ? 
              'Baccalauréat Scientifique - Spécialité Sciences de l\'Informatique' :
              'Bachillerato Científico - Especialidad Informática'}</p>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">${t.skills}</h2>
          <div class="skills-grid">
            ${Object.entries(content.skills).map(([category, skills]) => `
              <div class="skill-category">
                <div class="skill-category-title">${category}</div>
                <div class="skill-tags">
                  ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
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
              </div>
              <div class="project-description">${project.description}</div>
              <div class="project-tech">${t.techStack}: ${project.tech}</div>
              ${project.links && (project.links.github || project.links.live || project.links.demo || project.links.steam) ? `
                <div class="project-links">
                  ${project.links.github ? `<a href="${project.links.github}" target="_blank">GitHub</a>` : ''}
                  ${project.links.live ? `<a href="${project.links.live}" target="_blank">Live Site</a>` : ''}
                  ${project.links.demo ? `<a href="${project.links.demo}" target="_blank">Demo</a>` : ''}
                  ${project.links.steam ? `<a href="${project.links.steam}" target="_blank">Steam</a>` : ''}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `;
    return htmlContent;
};
