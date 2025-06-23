interface Project {
  id: string;
  links: {
    github?: string;
  };
}

export const fetchGitHubStars = async (projects: Project[]): Promise<number> => {
  try {
    // Filter projects with GitHub links
    const githubProjects = projects.filter(project => 
      project.links?.github?.includes('github.com')
    );

    // Extract owner/repo from GitHub URLs
    const repoPromises = githubProjects.map(async (project) => {
      if (!project.links.github) return 0;
      
      try {
        // Extract owner and repo from GitHub URL
        const match = project.links.github.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return 0;
        
        const [, owner, repo] = match;
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
          console.error(`Failed to fetch GitHub data for ${owner}/${repo}`);
          return 0;
        }
        
        const data = await response.json();
        return data.stargazers_count || 0;
      } catch (error) {
        console.error(`Error fetching GitHub stars for ${project.id}:`, error);
        return 0;
      }
    });

    // Sum up all stars
    const stars = await Promise.all(repoPromises);
    return stars.reduce((sum, count) => sum + count, 0);
  } catch (error) {
    console.error('Error in fetchGitHubStars:', error);
    return 0;
  }
};
