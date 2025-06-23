import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'https://nishchay.online';
const API_BASE_URL = 'https://admin.nishchay.online/api';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

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
    
    return blogs.filter(blog => blog.status === 'published' && !blog.hidden);
  } catch (error) {
    console.warn('Error fetching blogs:', error.message);
    return [];
  }
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

// Write blog sitemap to file
async function writeBlogSitemap() {
  console.log('Generating blog sitemap...');
  const blogPosts = await fetchBlogPosts();
  console.log(`Found ${blogPosts.length} published blog posts`);
  
  if (blogPosts.length === 0) {
    console.log('No blog posts found, skipping blog sitemap generation');
    return;
  }
  
  const sitemap = generateBlogSitemap(blogPosts);
  const outputPath = path.resolve(__dirname, '../public/sitemap.blog.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Blog sitemap generated with ${blogPosts.length} URLs at ${outputPath}`);
}

// Execute
writeBlogSitemap().catch(console.error);