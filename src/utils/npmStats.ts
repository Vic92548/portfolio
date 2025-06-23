interface NpmPackageStats {
  downloads: number;
  package: string;
  start: string;
  end: string;
  period: string;
}

export async function getNpmDownloads(packageName: string): Promise<number | null> {
  try {
    // Using 2000-01-01 as the start date to get all-time downloads
    // The NPM API will automatically adjust to the package's publish date if it's newer
    const url = `https://api.npmjs.org/downloads/point/2000-01-01:${new Date().toISOString().split('T')[0]}/${packageName}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      return null;
    }
    
    const data: NpmPackageStats = await response.json();
    
    if (data && typeof data.downloads === 'number') {
      return data.downloads;
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export function extractNpmPackageName(npmUrl: string): string | null {
  if (!npmUrl) {
    return null;
  }
  
  // If it doesn't look like a URL, assume it's already a package name
  if (!npmUrl.includes('://')) {
    return npmUrl;
  }
  
  // Extract from URL
  const match = npmUrl.match(
    /(?:https?:\/\/)?(?:www\.)?npmjs\.com\/package(?:\/v\/|\/)?([^/]+\/[^/]+|@[^/]+\/[^/]+|[^/]+)(?:\/|$)/i
  );
  
  return match?.[1] || null;
}
