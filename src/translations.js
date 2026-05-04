/**
 * Facebook Auto See More - Translations
 * 
 * To add a new language:
 * 1. Add its ISO code (e.g., 'es') as a key. if there are more than 2 countries using the same words, they will be connected using underscores (e.g., 'br_pt').
 * 2. Add the "See more" phrases used by Facebook in that language as an array.
 */

const TRANSLATIONS = {
  en: ['See more', 'See More'],
  // Future expansion example:
  es: ['Ver más'],
  br_pt: ['Ver mais'],
  so: ['Wax badan arag'],
  tw: ['查看更多'],
  vi: ['Xem thêm'],
  za: ['Wys meer'],
};

/**
 * A flattened array of all supported "See more" phrases.
 * This allows the extension to work across multiple languages 
 * simultaneously without needing to detect the user's locale.
 */
const SEE_MORE_VARIANTS = new Set(Object.values(TRANSLATIONS).flat());
