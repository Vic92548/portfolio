export type Language = 'en' | 'fr' | 'es';

export interface LocalizedString {
  en: string;
  fr: string;
  es: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages';
  level: number; // 1-5
  icon?: string;
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: LocalizedString;
  startDate: string;
  endDate: string | 'Present';
  description: LocalizedString;
  technologies: string[];
  highlights: LocalizedString[];
}

export interface Education {
  degree: string;
  institution: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface ProjectBase {
  id: string;
  title: string;
  description: LocalizedString;
  tech: string[];
  category: string;
  featured: boolean;
  status: 'active' | 'inactive' | 'archived';
  image: string;
  video?: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
    [key: string]: string | undefined; // Allow additional string properties
  };
  role?: string;
  downloads?: number; // Manual download count for games
  npmDownloads?: number; // Will be populated at runtime
  responsibilities?: {
    en: string[];
    fr: string[];
    es: string[];
    [key: string]: string[]; // Allow additional languages
  };
}

export interface Project extends ProjectBase {
  // All properties are now in ProjectBase
}

export interface CVData {
  personalInfo: {
    name: string;
    title: LocalizedString;
    email: string;
    phone: string;
    location: LocalizedString;
    website: string;
    github: string;
    linkedin: string;
    summary: LocalizedString;
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  languages: Array<{
    name: string;
    level: LocalizedString;
    proficiency: number; // 1-5
  }>;
  meta: {
    lastUpdated: string;
    version: string;
  };
}
