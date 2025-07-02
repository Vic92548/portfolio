import { CVData, Language, LocalizedString, Project, ProjectBase } from '@/types/cv';
import { projects } from '@/data/projects';
import { user } from '@/data/user';
import { getLocalizedString } from '@/utils/localization';

// Import any other data sources you might have

class CVService {
  private cvData: CVData;
  private language: Language = 'en';
  private static instance: CVService;

  private constructor() {
    // Initialize with default data
    this.cvData = this.getDefaultData();
  }

  public static getInstance(): CVService {
    if (!CVService.instance) {
      CVService.instance = new CVService();
    }
    return CVService.instance;
  }

  public setLanguage(language: Language): void {
    this.language = language;
  }

  public async initialize(): Promise<void> {
    try {
      // Fetch any dynamic data here (e.g., GitHub stars, etc.)
      await this.fetchDynamicData();
    } catch (error) {
      console.error('Failed to initialize CV service:', error);
    }
  }

  private async fetchDynamicData(): Promise<void> {
    try {
      // Fetch GitHub stars for projects with GitHub links
      const githubStars = await this.fetchGitHubStars();
      console.log('Fetched GitHub stars:', githubStars);
    } catch (error) {
      console.error('Error fetching GitHub stars:', error);
    }
  }

  private async fetchGitHubStars(): Promise<number> {
    try {
      const githubProjects = this.cvData.projects.filter(p => p.links?.github?.includes('github.com'));
      if (githubProjects.length === 0) return 0;
      
      // In a real implementation, you would make API calls to GitHub here
      // For now, we'll just return a mock value
      return 42; // Mock value for demonstration
    } catch (error) {
      console.error('Error in fetchGitHubStars:', error);
      return 0;
    }
  }

  public getPersonalInfo() {
    return this.cvData.personalInfo;
  }

  public getSkills() {
    return this.cvData.skills;
  }

  public getExperience() {
    return this.cvData.experience;
  }

  public getEducation() {
    return this.cvData.education;
  }

  public getProjects(): Project[] {
    return this.cvData.projects;
  }

  public getFeaturedProjects(): Project[] {
    return this.cvData.projects.filter(project => project.featured);
  }

  public getLanguages() {
    return this.cvData.languages;
  }

  public getLocalizedString(string: LocalizedString | string | undefined): string {
    return getLocalizedString(string, this.language);
  }

  public getStats() {
    return {
      projectCount: this.cvData.projects.length,
      // Add any other stats you want to track
    };
  }

  private getDefaultData(): CVData {
    // This is just a template - you should replace with your actual data
    return {
      personalInfo: {
        name: user.name,
        title: user.title,
        email: user.email,
        phone: user.phone,
        location: user.location,
        website: user.website,
        github: user.social.github,
        linkedin: user.social.linkedin,
        steam: user.social.steam,
        summary: user.summary
      },
      skills: [
        { name: 'TypeScript', category: 'languages', level: 5 },
        { name: 'JavaScript', category: 'languages', level: 5 },
        { name: 'Python', category: 'languages', level: 4 },
        { name: 'C#', category: 'languages', level: 4 },
        { name: 'Java', category: 'languages', level: 3 },
        { name: 'React', category: 'frontend', level: 5 },
        { name: 'Node.js', category: 'backend', level: 5 },
        { name: 'Next.js', category: 'frontend', level: 4 },
        { name: 'Express', category: 'backend', level: 4 },
        { name: 'Django', category: 'backend', level: 3 },
        { name: 'Git', category: 'tools', level: 5 },
        { name: 'Docker', category: 'devops', level: 4 },
        { name: 'AWS', category: 'devops', level: 3 },
        { name: 'PostgreSQL', category: 'tools', level: 4 },
        { name: 'MongoDB', category: 'tools', level: 4 }
      ],
      experience: [],
      education: [],
      projects: projects.map(project => ({
        ...project,
        links: {
          github: project.links?.github || '',
          demo: project.links?.demo || '',
          ...project.links
        },
        role: (project as any).role || 'Creator & Developer',
        responsibilities: (project as any).responsibilities || {
          en: ['Project development and maintenance'],
          fr: ['Développement et maintenance du projet'],
          es: ['Desarrollo y mantenimiento del proyecto']
        },
        featured: project.featured || false
      } as Project)),
      languages: [
        {
          name: 'English',
          level: {
            en: 'Native or bilingual proficiency',
            fr: 'Natif ou bilingue',
            es: 'Nativo o bilingüe'
          },
          proficiency: 5
        },
        // Add other languages
      ],
      meta: {
        lastUpdated: new Date().toISOString(),
        version: '1.0.0'
      }
    };
  }
}

export const cvService = CVService.getInstance();
