import { Blog } from '../services/blogApi';

export const generateBlogSEO = (blog: Blog, baseUrl: string = 'https://nishchaysharma.in') => {
  const canonicalUrl = `${baseUrl}/blog/${blog.slug}`;
  const title = blog.seo?.metaTitle || blog.title;
  const description = blog.seo?.metaDescription || blog.excerpt || blog.body.replace(/<[^>]*>/g, '').substring(0, 160);
  const keywords = blog.seo?.keywords?.length ? blog.seo.keywords.join(', ') : blog.tags.join(', ');
  const imageUrl = blog.coverImage?.url || `${baseUrl}/placeholder.svg`;

  return {
    title: `${title} - Nishchay Sharma`,
    description,
    keywords,
    canonicalUrl,
    imageUrl,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      'headline': title,
      'description': description,
      'image': {
        '@type': 'ImageObject',
        'url': imageUrl,
        'width': 1200,
        'height': 630
      },
      'author': {
        '@type': 'Person',
        'name': blog.author,
        'url': baseUrl,
        'sameAs': [
          'https://github.com/nishchay-sharma',
          'https://linkedin.com/in/nishchay-sharma'
        ]
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Nishchay Sharma',
        'url': baseUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/src/assets/logo.png`
        }
      },
      'datePublished': blog.createdAt,
      'dateModified': blog.updatedAt || blog.createdAt,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      'keywords': keywords,
      'articleSection': blog.category,
      'url': canonicalUrl,
      'wordCount': blog.body.replace(/<[^>]*>/g, '').split(' ').length,
      'timeRequired': `PT${blog.meta?.readTime || 5}M`,
      'inLanguage': 'en-US'
    }
  };
};

export const generateBlogListSEO = (baseUrl: string = 'https://nishchaysharma.in') => {
  return {
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${baseUrl}/blog#blog`,
      'url': `${baseUrl}/blog`,
      'name': 'Nishchay Sharma Blog',
      'description': 'Technical blog about web development, React, Node.js, and modern programming practices',
      'author': {
        '@type': 'Person',
        'name': 'Nishchay Sharma',
        'url': baseUrl
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Nishchay Sharma',
        'url': baseUrl
      },
      'inLanguage': 'en-US'
    }
  };
};