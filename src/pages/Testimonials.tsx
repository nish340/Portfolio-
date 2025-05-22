import { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      quote: 'Working with John was an exceptional experience. His attention to detail and creative problem-solving skills helped us launch our platform months ahead of schedule. I highly recommend his services for any web development project.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      quote: 'John is an exceptional developer who delivers quality work on time. His coding skills and modern design approach helped transform our outdated website into a user-friendly, responsive platform that our customers love.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'GrowthLab',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      quote: 'John has a unique ability to combine stunning visual design with clean functionality. Our e-commerce conversion rates increased by 45% after implementing his recommendations and redesign. His work speaks for itself.',
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'CTO',
      company: 'DataSphere',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      quote: "I've worked with many developers over my 15-year career, and John stands out for his technical expertise and collaborative approach. He's not just a coder - he's a problem solver who understands business objectives.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-page">
      <header className="page-header">
        <div className="container">
          <h1>Testimonials</h1>
          <p>What clients and colleagues say about my work</p>
        </div>
      </header>

      <section className="testimonials-section section">
        <div className="container">
          <div className="testimonial-slider">
            <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous testimonial">
              &larr;
            </button>
            
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="quote-mark">"</div>
                    <p className="quote-text">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="author-info">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.position} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-arrow next" onClick={nextSlide} aria-label="Next testimonial">
              &rarr;
            </button>
          </div>
          
          <div className="slider-indicators">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's create something amazing for your business</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;