import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface GitHubStarsProps {
  repo: string; // Format: 'owner/repo'
  className?: string;
}

const GitHubStars = ({ repo, className = '' }: GitHubStarsProps) => {
  const [stars, setStars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (!response.ok) {
          throw new Error('Failed to fetch repository data');
        }
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (err) {
        console.error('Error fetching GitHub stars:', err);
        setError('Failed to load stars');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStars();
  }, [repo]);

  if (isLoading) {
    return (
      <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
        <Star className="w-3.5 h-3.5 text-muted-foreground/70" />
        <span>...</span>
      </div>
    );
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  return (
    <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
      <Star className="w-3.5 h-3.5 text-muted-foreground/70" fill="currentColor" />
      <span>{stars?.toLocaleString()}</span>
    </div>
  );
};

export default GitHubStars;
