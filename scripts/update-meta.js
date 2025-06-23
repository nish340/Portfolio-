import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const META_FILE_PATH = path.resolve(__dirname, '../src/lib/meta.json');
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Read the current meta.json file
const metaData = JSON.parse(fs.readFileSync(META_FILE_PATH, 'utf8'));

// Add additional keywords for better SEO
const additionalKeywords = [
  'hire web developer',
  'freelance developer',
  'remote developer',
  'JavaScript expert',
  'TypeScript expert',
  'React developer Chandigarh',
  'Node.js developer India',
  'full stack developer near me',
  'web application development services',
  'custom web development',
  'responsive website development',
  'progressive web app development',
  'SaaS application development',
  'API integration services',
  'database design and development',
  'UI/UX development',
  'web performance optimization',
  'SEO-friendly web development',
  'secure web application development',
  'scalable web architecture',
  'cloud deployment services',
  'DevOps automation',
  'AI integration services',
  'chatbot development',
  'e-commerce development',
  'payment gateway integration',
  'authentication system development',
  'real-time application development',
  'web application maintenance',
  'code refactoring services',
  'legacy code modernization',
  'technical consultation',
  'web development project management',
  'agile development methodology',
  'web accessibility compliance',
  'cross-browser compatibility',
  'mobile-first development',
  'serverless architecture',
  'microservices development',
  'full stack MVP development',
  'startup technology partner',
  'enterprise web solutions',
  'business process automation',
  'digital transformation services',
  'web application testing',
  'quality assurance services',
  'continuous integration setup',
  'continuous deployment pipeline',
  'code review services',
  'technical documentation',
  'API documentation',
  'web security audit'
];

// Update the global keywords
metaData.global.defaultKeywords = `${metaData.global.defaultKeywords}, ${additionalKeywords.join(', ')}`;

// Update the services page keywords
metaData.pages.services.keywords = `${metaData.pages.services.keywords}, ${additionalKeywords.join(', ')}`;

// Write the updated meta.json file
fs.writeFileSync(META_FILE_PATH, JSON.stringify(metaData, null, 2));
console.log(`Meta data updated at ${META_FILE_PATH}`);

// Update sitemap dates for all sitemap files
const sitemapFiles = [
  '../public/sitemap.main.xml',
  '../public/sitemap.blog.xml',
  '../public/sitemap.images.xml'
];

sitemapFiles.forEach(sitemapFile => {
  const sitemapPath = path.resolve(__dirname, sitemapFile);
  if (fs.existsSync(sitemapPath)) {
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');
    sitemap = sitemap.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${CURRENT_DATE}</lastmod>`);
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`Sitemap updated at ${sitemapPath}`);
  }
});

// Update sitemap.index.xml with current date
const sitemapIndexPath = path.resolve(__dirname, '../public/sitemap.index.xml');
if (fs.existsSync(sitemapIndexPath)) {
  let sitemapIndex = fs.readFileSync(sitemapIndexPath, 'utf8');
  sitemapIndex = sitemapIndex.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${CURRENT_DATE}</lastmod>`);
  fs.writeFileSync(sitemapIndexPath, sitemapIndex);
  console.log(`Sitemap index updated at ${sitemapIndexPath}`);
}