'use client';

import { useEffect } from 'react';
import { getNpmDownloads, extractNpmPackageName } from '@/utils/npmStats';

export function TestNpmBadge() {
  useEffect(() => {
    const testNpm = async () => {
      console.log('=== Starting NPM Badge Test ===');
      
      // Test package name extraction
      const testUrl = 'https://www.npmjs.com/package/buckshotplusplus';
      console.log('Testing URL:', testUrl);
      
      const packageName = extractNpmPackageName(testUrl);
      console.log('Extracted package name:', packageName);
      
      if (packageName) {
        console.log('Fetching download stats...');
        try {
          const downloads = await getNpmDownloads(packageName);
          console.log('Download count:', downloads);
        } catch (error) {
          console.error('Error fetching downloads:', error);
        }
      }
      
      console.log('=== End NPM Badge Test ===');
    };
    
    testNpm();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg z-50">
      <div className="font-medium text-blue-800 dark:text-blue-200">NPM Test</div>
      <div className="text-sm text-blue-700 dark:text-blue-300">Check browser console for test results</div>
    </div>
  );
}
