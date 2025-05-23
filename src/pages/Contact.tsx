import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
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
    
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //   newErrors.email = 'Email is not valid';
    // }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 1) {
      newErrors.message = 'Message must be at least 1 characters';
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
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
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
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Let's work together on your next project</p>
        </div>
      </header>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p>I'm currently available for <strong>freelance projects</strong> and <strong>full-time positions</strong>. Whether you need a complete web application, a feature enhancement, or technical consultation, I'm ready to help bring your ideas to life.</p>
              
              <div className="availability-notice">
                <h3>Current Availability</h3>
                <p>✓ Open for freelance projects<br />
                ✓ Available for full-time opportunities<br />
                ✓ Remote or on-site in Chandigarh, India</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon email-icon"></div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:nishchay340@gmail.com">nishchay340@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon phone-icon"></div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+918580800643">+91 85808 00643</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon location-icon"></div>
                  <div>
                    <h3>Location</h3>
                    <p>Chandigarh, India</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/nish340" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div className="social-icon github"></div>
                  </a>
                  <a href="https://www.linkedin.com/in/nishchay-sharma-64b0661b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="social-icon linkedin"></div>
                  </a>
                  <a href="https://x.com/52Nishchay" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <div className="social-icon twitter"></div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              {submitStatus && (
                <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
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

export default Contact;