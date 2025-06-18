import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://nishchay.online';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Define your routes and their priorities
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/testimonials', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

// Generate sitemap XML content
function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
  
  // Update sitemap-index.xml with current date
  const sitemapIndexPath = path.resolve(__dirname, '../public/sitemap-index.xml');
  let sitemapIndex = fs.readFileSync(sitemapIndexPath, 'utf8');
  sitemapIndex = sitemapIndex.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${CURRENT_DATE}</lastmod>`);
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  console.log(`Sitemap index updated at ${sitemapIndexPath}`);
}

// Execute
writeSitemap();