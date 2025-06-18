import { Helmet } from 'react-helmet-async';
import { getPageMeta, generateStructuredData } from '../lib/seo';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, any>;
  pageName?: string;
}

const SEOHelmet = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  pageName,
}: SEOHelmetProps) => {
  
  // If pageName is provided, use metadata from meta.json
  let meta = {};
  if (pageName) {
    meta = getPageMeta(pageName as any);
    title = title || meta['title'];
    description = description || meta['description'];
    keywords = keywords || meta['keywords'];
    canonicalUrl = canonicalUrl || meta['canonicalUrl'];
    ogImage = ogImage || meta['ogImage'];
    ogType = ogType || meta['ogType'];
    twitterCard = twitterCard || meta['twitterCard'];
    
    if (!structuredData) {
      structuredData = generateStructuredData(pageName as any);
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;