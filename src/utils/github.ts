interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
}

export const fetchRepoStars = async (owner: string, repo: string): Promise<number> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Repository ${owner}/${repo} not found`);
        return 0;
      }
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    
    const repoData: GitHubRepo = await response.json();
    return repoData.stargazers_count;
  } catch (error) {
    console.error(`Error fetching stars for ${owner}/${repo}:`, error);
    return 0;
  }
};

interface Project {
  links: {
    github?: string;
    live?: string;
  };
}

export const fetchAllProjectStars = async (projects: Project[]): Promise<number> => {
  try {
    // Extract owner/repo from GitHub URLs
    const repoPromises = projects
      .filter(project => project.links?.github && project.links.github.includes('github.com'))
      .map(async (project) => {
        try {
          // Extract owner and repo from GitHub URL
          const match = project.links.github.match(/github\.com\/([^/]+)\/([^/]+)/);
          if (!match) return 0;
          
          const [_, owner, repo] = match;
          // Remove .git if present
          const cleanRepo = repo.endsWith('.git') ? repo.slice(0, -4) : repo;
          
          return fetchRepoStars(owner, cleanRepo);
        } catch (error) {
          console.error(`Error processing project ${project.links.github}:`, error);
          return 0;
        }
      });

    const stars = await Promise.all(repoPromises);
    return stars.reduce((sum, count) => sum + count, 0);
  } catch (error) {
    console.error('Error fetching project stars:', error);
    return 0;
  }
};
