import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Nishchay Sharma</Link>
            <p className="footer-tagline">Full Stack Developer</p>
            <div className="footer-social">
              <a href="https://github.com/nish340" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="social-icon github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nishchay-sharma-64b0661b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="social-icon linkedin"></i>
              </a>
              <a href="https://x.com/Nishchay" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="social-icon twitter"></i>
              </a>
              <a href="https://www.npmjs.com/~nish34" target="_blank" rel="noopener noreferrer" aria-label="NPM Profile">
                <i className="social-icon npm"></i>
              </a>
              <a href="https://medium.com/@nishchay340" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <i className="social-icon medium"></i>
              </a>
              <a href="mailto:nishchay340@gmail.com" aria-label="Email">
                <i className="social-icon email"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
            
            <div className="footer-links-column">
              <h4>Resources</h4>
              <Link to="/blog">Blog</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <Link to="/contact">Get in Touch</Link>
              <a href="mailto:nishchay340@gmail.com">Email Me</a>
              <p>Chandigarh, India</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nishchay Sharma. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;