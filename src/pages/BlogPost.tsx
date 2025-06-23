import { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogApi, Blog } from '../services/blogApi';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        const blogData = await blogApi.getBlogBySlug(slug);
        if (blogData && blogData.status === 'published' && !blogData.hidden) {
          setBlog(blogData);
        } else {
          setError('Blog post not found or not available');
        }
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div className="loading-spinner">Loading blog post...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2>Blog Post Not Found</h2>
            <p>{error || 'The blog post you are looking for does not exist.'}</p>
            <Link to="/blog" className="read-more">← Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Helmet>
        <title>{blog.seo.metaTitle || blog.title} - Nishchay Sharma</title>
        <meta name="description" content={blog.seo.metaDescription || blog.excerpt || blog.body.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta name="keywords" content={blog.seo.keywords.join(', ') || blog.tags.join(', ')} />
        <meta name="author" content={blog.author} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt || blog.body.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.coverImage?.url} />
        <meta property="article:author" content={blog.author} />
        <meta property="article:published_time" content={blog.createdAt} />
        <meta property="article:tag" content={blog.tags.join(', ')} />
        <link rel="canonical" href={window.location.href.split('?')[0]} />
      </Helmet>
      
      <div className="container">
        <div className="blog-post-container">

          {/* Cover Image */}
          {blog.coverImage?.url && (
            <div className="blog-post-cover">
              <img 
                src={blog.coverImage.url} 
                alt={blog.coverImage.alt || blog.title}
                className="blog-post-image"
              />
            </div>
          )}

          {/* Blog Header */}
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-date">
                {new Date(blog.createdAt || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="blog-read-time">{blog.meta.readTime} min read</span>
            </div>
            
            <h1 className="blog-post-title">{blog.title}</h1>
            
            {blog.excerpt && (
              <p className="blog-post-excerpt">{blog.excerpt}</p>
            )}
            
            <div className="blog-post-author">
              <span>By {blog.author}</span>
              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="blog-tags-inline">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag-inline">#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Blog Content */}
          <article className="blog-post-content">
            <div 
              className="blog-content-html"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </article>

          {/* Blog Footer */}
          <footer className="blog-post-footer">
            <div className="blog-post-share">
              <h4>Share this post</h4>
              <div className="share-buttons">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button twitter"
                >
                  Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button linkedin"
                >
                  LinkedIn
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
            
            <div className="blog-post-nav-footer">
              <Link to="/blog" className="read-more">← Back to All Posts</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;