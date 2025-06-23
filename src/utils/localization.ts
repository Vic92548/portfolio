import { Language } from '@/types/cv';

export const getLocalizedString = (
  string: { [key in Language]?: string } | string | undefined,
  language: Language = 'en'
): string => {
  if (!string) return '';
  if (typeof string === 'string') return string;
  return string[language] || string.en || '';
};

export const getLocalizedArray = <T>(
  items: T[],
  field: keyof T,
  language: Language
): string[] => {
  return items
    .map(item => {
      const value = item[field];
      if (typeof value === 'object' && value !== null) {
        return getLocalizedString(value as any, language);
      }
      return String(value);
    })
    .filter(Boolean);
};
