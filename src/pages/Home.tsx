import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { projects, galleryImages } from '../lib/projectData';
import './Home.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Home = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  // Get featured projects (first two)
  const featuredProjects = projects.slice(0, 2);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !form.current) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_3mozd7k', 
        'template_rcillnq',
        form.current,
        'dht3uhiaUkV4QQXl1'
      );
      
      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.',
        });
        
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was a problem sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-page">
      {/* <div className="chat-icon">
        <Link to="/chat" aria-label="Open chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm-1-14h2v7h-2zm0 8h2v2h-2z" />
          </svg>
        </Link>
      </div> */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <h1>Hi, I'm <span className="highlight">Nishchay Sharma</span></h1>
            <h2>Full Stack Developer</h2>
            <p>Who turns ideas into interactive digital experiences. From backend logic to frontend finesse, I build web solutions that are fast, reliable, and user-friendly.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Hire Me</Link>
              <Link to="/projects" className="btn btn-outline">View Projects</Link>
            </div>
          </div>
          <div className="hero-image slide-up">
            <div className="image-container">
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <div className="featured-project slide-up" style={{animationDelay: `${0.2 + index * 0.2}s`}} key={project.id}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/projects" className="btn btn-outline">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>Hi, I'm <strong>Nishchay Sharma</strong> — a Full Stack Developer based in Chandigarh, India, with 2.5+ years of experience crafting fast, scalable, and user-first web applications.</p>
            <p>I specialize in the MERN and MEAN stacks, and have built everything from healthcare platforms and CRMs to crypto exchanges and e-commerce apps. My work is all about clean architecture, seamless APIs, and interfaces users actually enjoy.</p>
            <Link to="/about" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="gallery-preview section">
        <div className="container">
          <h2 className="section-title">Project Gallery</h2>
          <div className="gallery-preview-content">
            <p>Browse through screenshots of my recent projects. From user interfaces to admin dashboards, see the visual aspects of my development work.</p>
            <div className="gallery-preview-grid">
              {/* Select one image from each of four different projects */}
              <div className="gallery-preview-item">
                <img src={galleryImages.find(img => img.project === 'Probill EHR & RCM')?.src} alt="Probill EHR & RCM" />
                <div className="gallery-preview-overlay">
                  <div className="gallery-preview-project">Probill EHR & RCM</div>
                </div>
              </div>
              <div className="gallery-preview-item">
                <img src={galleryImages.find(img => img.project === 'ChocolateBliss')?.src} alt="ChocolateBliss" />
                <div className="gallery-preview-overlay">
                  <div className="gallery-preview-project">ChocolateBliss</div>
                </div>
              </div>
              <div className="gallery-preview-item">
                <img src={galleryImages.find(img => img.project === 'NextGen Exchange')?.src} alt="NextGen Exchange" />
                <div className="gallery-preview-overlay">
                  <div className="gallery-preview-project">NextGen Exchange</div>
                </div>
              </div>
              <div className="gallery-preview-item">
                <img src={galleryImages.find(img => img.project === 'EventNest')?.src} alt="EventNest" />
                <div className="gallery-preview-overlay">
                  <div className="gallery-preview-project">EventNest</div>
                </div>
              </div>
            </div>
            <div className="gallery-preview-link">
              <Link to="/gallery" className="btn btn-primary">View Full Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-preview section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-preview-grid">
            <div className="contact-preview-info">
              <p>Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you as soon as possible.</p>
              <div className="contact-preview-details">
                <div className="contact-preview-item">
                  <strong>Email:</strong> nishchay340@gmail.com
                </div>
                <div className="contact-preview-item">
                  <strong>Location:</strong> Chandigarh, India
                </div>
                <div className="contact-preview-item">
                  <strong>Availability:</strong> Freelance & Full-Time
                </div>
              </div>
            </div>
            
            <div className="contact-preview-form-container">
              {submitStatus && (
                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={form} className="contact-preview-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;