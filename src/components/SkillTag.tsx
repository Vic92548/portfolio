
import { ExternalLink } from 'lucide-react';

interface SkillTagProps {
  skill: {
    name: string;
    url: string;
  };
  className?: string;
}

const SkillTag = ({ skill, className = '' }: SkillTagProps) => {
  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 px-3 py-1 text-xs bg-nordic-gray/10 dark:bg-border-dark/30 text-muted-foreground rounded-lg border border-border/30 hover:border-magic-blue/30 hover:text-magic-blue hover:bg-magic-blue/5 transition-all duration-200 ${className}`}
    >
      <span>{skill.name}</span>
      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </a>
  );
};

export default SkillTag;
