import { useState } from 'react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with React Development',
      excerpt: 'Learn the fundamentals of React and how to build your first application with this powerful JavaScript library.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Development',
      author: 'Nishchay Sharma',
      date: 'June 15, 2023',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Responsive Design Best Practices',
      excerpt: 'Discover the essential techniques for creating websites that look great on any device.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Design',
      author: 'Nishchay Sharma',
      date: 'July 22, 2023',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Optimizing Website Performance',
      excerpt: 'Learn how to improve your website speed and performance for better user experience and SEO rankings.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Performance',
      author: 'Nishchay Sharma',
      date: 'August 10, 2023',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Introduction to TypeScript',
      excerpt: 'Discover how TypeScript can improve your JavaScript development with static typing and advanced features.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Development',
      author: 'Nishchay Sharma',
      date: 'September 5, 2023',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Modern CSS Techniques',
      excerpt: 'Explore the latest CSS features and techniques that can transform your web design approach.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Design',
      author: 'Nishchay Sharma',
      date: 'October 18, 2023',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Building Accessible Web Applications',
      excerpt: 'Learn how to make your web applications accessible to all users, including those with disabilities.',
      content: 'Full article content here...',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Accessibility',
      author: 'Nishchay Sharma',
      date: 'November 30, 2023',
      readTime: '8 min read',
    },
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

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

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-author">By {post.author}</span>
                    <a href={`/blog/${post.id}`} className="read-more">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;