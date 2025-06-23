/**
 * Formats a number with K, M, B, etc. suffixes
 * @param num The number to format
 * @param digits Number of decimal places to show (default: 1)
 * @returns Formatted string (e.g., 1.5K, 2.3M, 4B)
 */
export function formatNumber(num: number, digits: number = 1): string {
  if (num < 1000) return num.toString();
  
  const units = ['K', 'M', 'B', 'T'];
  const unitIndex = Math.floor(Math.log10(num) / 3) - 1;
  const unit = units[unitIndex];
  
  if (!unit) return num.toExponential(digits);
  
  const scaled = num / Math.pow(1000, unitIndex + 1);
  const formatted = scaled.toFixed(digits);
  
  // Remove trailing .0 if there are no decimal places
  return formatted.endsWith('.0') 
    ? formatted.slice(0, -2) + unit 
    : formatted + unit;
}
