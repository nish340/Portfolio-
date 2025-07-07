import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogApi, Blog, BlogResponse } from '../services/blogApi';
import { generateBlogListSEO } from '../lib/blogSeo';
import './Blog.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({ page: 1, limit: 6, total: 0, pages: 1 });

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response: BlogResponse = await blogApi.getAllBlogs(currentPage, 6);
        // Only show published and non-hidden blogs
        const publishedBlogs = response.data.filter(blog => blog.status === 'published' && !blog.hidden);
        setBlogs(publishedBlogs);
        setPagination(response.pagination);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];
  const filteredBlogs = filter === 'All' ? blogs : blogs.filter(blog => blog.category === filter);
  const showCategories = blogs.length > 0;

  if (loading) {
    return (
      <div className="blog-page">
        <header className="page-header">
          <div className="container">
            <h1>My Blog</h1>
            <p>Thoughts, ideas, and resources</p>
          </div>
        </header>
        <section className="blog-section section">
          <div className="container">
            <div className="blog-loading">
              <div className="loading-dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p>Loading amazing content...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const blogListSEO = generateBlogListSEO();

  return (
    <div className="blog-page">
      <Helmet>
        <title>Blog - Nishchay Sharma | Web Development Insights & Tutorials</title>
        <meta name="description" content="Explore web development tutorials, JavaScript tips, React guides, and programming insights by Nishchay Sharma. Stay updated with the latest in tech." />
        <meta name="keywords" content="web development, JavaScript, React, programming, tutorials, Nishchay Sharma, blog, tech insights" />
        <meta property="og:title" content="Blog - Nishchay Sharma" />
        <meta property="og:description" content="Web development tutorials and programming insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nishchaysharma.in/blog" />
        <meta property="og:image" content="https://nishchaysharma.in/placeholder.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Nishchay Sharma" />
        <meta name="twitter:description" content="Web development tutorials and programming insights" />
        <link rel="canonical" href="https://nishchaysharma.in/blog" />
        
        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify(blogListSEO.structuredData)}
        </script>
      </Helmet>
      
      <header className="page-header">
        <div className="container">
          <h1>My Blog</h1>
          <p>Thoughts, ideas, and resources</p>
        </div>
      </header>

      <section className="blog-section section">
        <div className="container">
          {showCategories && (
            <div className="filter-container">
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`filter-button ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {filteredBlogs.length === 0 ? (
            <div className="no-blogs">
              <div className="no-blogs-content">
                <h3>Coming Soon! 🚀</h3>
                <p>Stay tuned for amazing content</p>
                <div className="coming-soon-animation">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredBlogs.map((blog) => (
                <Link 
                  to={`/blog/${blog.slug}?id=${blog._id || blog.id}`} 
                  className="blog-card-link" 
                  key={blog._id || blog.id}
                >
                  <div className="blog-card">
                <div 
                  className="blog-image" 
                  style={{ 
                    backgroundImage: `url(${blog.coverImage?.url || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'})` 
                  }}
                >
                  <div className="blog-category">{blog.category}</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-date">
                      {new Date(blog.createdAt || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="blog-read-time">{blog.meta.readTime} min read</span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt || blog.body.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}</p>
                  {/* Tags */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-tags-preview">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="blog-tag-small">{tag}</span>
                      ))}
                      {blog.tags.length > 3 && <span className="blog-tag-more">+{blog.tags.length - 3}</span>}
                    </div>
                  )}
                  
                    <div className="blog-footer">
                      <span className="blog-author">By {blog.author}</span>
                      <span className="read-more">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              
              <div className="pagination-numbers">
                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.pages))}
                disabled={currentPage === pagination.pages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;