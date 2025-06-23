'use client';

import { useState, useEffect } from 'react';
import { getNpmDownloads, extractNpmPackageName } from '@/utils/npmStats';
import { ExternalLink } from 'lucide-react';
import { formatNumber } from '@/utils/formatNumber';

interface NpmBadgeProps {
  npmUrl: string;
  className?: string;
}

export function NpmBadge({ npmUrl, className = '' }: NpmBadgeProps) {
  const [downloads, setDownloads] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [packageName, setPackageName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!npmUrl) {
        setError('No NPM URL');
        setLoading(false);
        return;
      }

      try {
        const pkgName = extractNpmPackageName(npmUrl);
        setPackageName(pkgName);
        
        if (!pkgName) {
          throw new Error('Could not extract package name from URL');
        }
        
        const count = await getNpmDownloads(pkgName);
        
        if (count !== null) {
          setDownloads(count);
        } else {
          throw new Error('Failed to fetch download count');
        }
      } catch (err) {
        setError('Unable to load stats');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [npmUrl]);

  if (loading) {
    return (
      <div className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2 animate-pulse"></div>
        <span>Loading stats...</span>
      </div>
    );
  }

  if (error || !downloads || !packageName) {
    return null;
  }
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(npmUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <a
      href={npmUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-3 py-1.5 rounded-full bg-white/70 dark:bg-black/50 text-xs text-gray-700 dark:text-gray-200 border border-white/30 dark:border-gray-700/50 shadow-lg backdrop-blur-sm hover:bg-white/90 dark:hover:bg-black/70 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="text-npm-red font-bold mr-1.5">npm</span>
      <span className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></span>
      <span className="font-medium text-xs">{formatNumber(downloads)}</span>
      <span className="text-gray-500 dark:text-gray-400 text-xxs ml-1">downloads</span>
    </a>
  );
}
