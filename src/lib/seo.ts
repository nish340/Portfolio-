import metaData from './meta.json';

type PageKey = keyof typeof metaData.pages;

/**
 * Get SEO metadata for a specific page
 * @param page - The page key from meta.json
 * @returns Object containing title, description, and keywords
 */
export function getPageMeta(page: PageKey) {
  const pageMeta = metaData.pages[page];
  const globalMeta = metaData.global;
  
  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: `${pageMeta.keywords}, ${globalMeta.defaultKeywords}`,
    canonicalUrl: `${globalMeta.siteUrl}/${page === 'home' ? '' : page}`,
    ogImage: globalMeta.defaultImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  };
}

/**
 * Generate structured data for a page
 * @param page - The page key from meta.json
 * @returns JSON-LD structured data object
 */
export function generateStructuredData(page: PageKey) {
  const pageMeta = metaData.pages[page];
  const globalMeta = metaData.global;
  
  // Basic WebPage structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${globalMeta.siteUrl}/${page === 'home' ? '' : page}#webpage`,
    'url': `${globalMeta.siteUrl}/${page === 'home' ? '' : page}`,
    'name': pageMeta.title,
    'description': pageMeta.description,
    'isPartOf': {
      '@id': `${globalMeta.siteUrl}/#website`
    },
    'inLanguage': 'en-US',
  };
  
  return structuredData;
}

export default {
  getPageMeta,
  generateStructuredData,
};