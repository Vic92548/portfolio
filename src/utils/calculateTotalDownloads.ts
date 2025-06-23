import { Project } from '@/types/cv';

/**
 * Calculates the total downloads from all projects
 * @param projects Array of projects
 * @returns Total number of downloads from both NPM and Steam projects
 */
export function calculateTotalDownloads(projects: Project[]): number {
  return projects.reduce((total, project) => {
    // Add Steam downloads if available
    if (project.downloads) {
      total += project.downloads;
    }
    
    // Add NPM downloads if available
    if (project.npmDownloads) {
      total += project.npmDownloads;
    }
    
    return total;
  }, 0);
}
