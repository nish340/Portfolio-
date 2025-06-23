import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://nishchay.online';
const API_BASE_URL = 'https://admin.nishchay.online/api';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define your static routes and their priorities
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/testimonials', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

// Fetch blog posts from API
async function fetchBlogPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      console.warn('Failed to fetch blogs from API');
      return [];
    }
    const data = await response.json();
    const blogs = data.data || [];
    
    // Filter only published and non-hidden blogs
    return blogs.filter(blog => blog.status === 'published' && !blog.hidden);
  } catch (error) {
    console.warn('Error fetching blogs:', error.message);
    return [];
  }
}

// Generate blog routes from fetched posts
function generateBlogRoutes(blogPosts) {
  return blogPosts.map(blog => ({
    path: `/blog/${blog.slug}`,
    lastmod: blog.updatedAt ? new Date(blog.updatedAt).toISOString().split('T')[0] : CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.6'
  }));
}

// Generate sitemap XML content
function generateSitemap(allRoutes) {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  allRoutes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${route.lastmod || CURRENT_DATE}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

// Generate blog sitemap XML content
function generateBlogSitemap(blogPosts) {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  blogPosts.forEach(blog => {
    const lastmod = blog.updatedAt ? new Date(blog.updatedAt).toISOString().split('T')[0] : CURRENT_DATE;
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}/blog/${blog.slug}</loc>\n`;
    sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemap += '    <changefreq>monthly</changefreq>\n';
    sitemap += '    <priority>0.6</priority>\n';
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

// Write sitemap to file
async function writeSitemap() {
  console.log('Fetching blog posts...');
  const blogPosts = await fetchBlogPosts();
  console.log(`Found ${blogPosts.length} published blog posts`);
  
  // Generate main sitemap (static pages only)
  const mainSitemap = generateSitemap(staticRoutes);
  const mainOutputPath = path.resolve(__dirname, '../public/sitemap.main.xml');
  fs.writeFileSync(mainOutputPath, mainSitemap);
  console.log(`Main sitemap generated with ${staticRoutes.length} static pages at ${mainOutputPath}`);
  
  // Generate blog sitemap if there are blog posts
  if (blogPosts.length > 0) {
    const blogSitemap = generateBlogSitemap(blogPosts);
    const blogOutputPath = path.resolve(__dirname, '../public/sitemap.blog.xml');
    fs.writeFileSync(blogOutputPath, blogSitemap);
    console.log(`Blog sitemap generated with ${blogPosts.length} blog posts at ${blogOutputPath}`);
  }
  
  // Update sitemap.index.xml with current date
  const sitemapIndexPath = path.resolve(__dirname, '../public/sitemap.index.xml');
  let sitemapIndex = fs.readFileSync(sitemapIndexPath, 'utf8');
  sitemapIndex = sitemapIndex.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${CURRENT_DATE}</lastmod>`);
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  console.log(`Sitemap index updated at ${sitemapIndexPath}`);
  
  console.log(`\nTotal URLs in sitemaps: ${staticRoutes.length + blogPosts.length}`);
}

// Execute
writeSitemap().catch(console.error);