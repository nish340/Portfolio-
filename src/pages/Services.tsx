import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import AdSense from '../components/AdSense';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <SEOHelmet pageName="services" />

      <section className="services-hero">
        <div className="container">
          <h1>Full Stack Development Services</h1>
          <p className="services-subtitle">End-to-end web development solutions for startups, businesses, and innovative projects worldwide</p>
          <div className="services-cta">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            <Link to="/projects" className="btn btn-outline">View My Work</Link>
          </div>
        </div>
      </section>
      {/* 
      <section className="services-locations section">
        <div className="container">
          <div className="locations-wrapper">
            <p>Serving clients in <strong>Chandigarh</strong>, <strong>India</strong>, <strong>USA</strong>, <strong>UK</strong>, <strong>Canada</strong>, <strong>Australia</strong> and worldwide</p>
          </div>
        </div>
      </section> */}

      <section className="services-overview section">
        <div className="container">
          <h2 className="section-title">How I Can Help Your Business</h2>
          <p className="section-description">
            I deliver high-quality, scalable web applications using <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and
            <strong> MEAN stack</strong> (MongoDB, Express, Angular, Node.js) that help businesses grow and succeed in the digital landscape.
            With expertise in modern JavaScript/TypeScript frameworks and a focus on performance, I create solutions that are both
            technically excellent and user-friendly.
          </p>
        </div>
      </section>

      <section className="tech-stack section">
        <div className="container">
          <h2 className="section-title">Technologies I Work With</h2>
          {/* <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Angular</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">NestJS</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">GraphQL</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">Tailwind CSS</span>
            <span className="tech-tag">Material UI</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">Vercel</span>
            <span className="tech-tag">CI/CD</span>
            <span className="tech-tag">OpenAI</span>
          </div> */}
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="service-card">
            <div className="service-icon frontend-icon"></div>
            <div className="service-content">
              <h2>Frontend Development with React</h2>
              <p>
                Creating responsive, interactive, and high-performance user interfaces using React, Angular, and modern frontend technologies.
              </p>
              <ul className="service-features">
                <li>Performance-optimized React and Angular applications</li>
                <li>State management with Redux, Context API, or Zustand</li>
                <li>Responsive UI with Tailwind CSS, Material UI, and Bootstrap</li>
                <li>Interactive data visualizations and dashboards</li>
                <li>Accessibility-compliant interfaces (WCAG)</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Hire Me for Frontend</Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon backend-icon"></div>
            <div className="service-content">
              <h2>Backend API Development</h2>
              <p>
                Building robust, secure, and scalable backend services using Node.js, Express, and NestJS to power your applications.
              </p>
              <ul className="service-features">
                <li>RESTful API design and implementation</li>
                <li>GraphQL API development</li>
                <li>Authentication and authorization systems</li>
                <li>Database design and optimization (MongoDB, PostgreSQL)</li>
                <li>Microservices architecture</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Hire Me for Backend</Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon fullstack-icon"></div>
            <div className="service-content">
              <h2>Full-Stack MVP Development</h2>
              <p>
                Turning your startup idea into a working Minimum Viable Product with clean code and scalable architecture using MERN or MEAN stack.
              </p>
              <ul className="service-features">
                <li>End-to-end application development</li>
                <li>SaaS platform development</li>
                <li>Startup-ready MVPs with essential features</li>
                <li>Scalable architecture for future growth</li>
                <li>Technical consultation and planning</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Let's Build Your MVP</Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon devops-icon"></div>
            <div className="service-content">
              <h2>DevOps & Deployment</h2>
              <p>
                Setting up efficient deployment pipelines and infrastructure to ensure your application runs smoothly in production.
              </p>
              <ul className="service-features">
                <li>Docker containerization</li>
                <li>CI/CD pipeline setup</li>
                <li>AWS cloud infrastructure</li>
                <li>Vercel and Netlify deployments</li>
                <li>Performance monitoring and optimization</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get DevOps Help</Link>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon ai-icon"></div>
            <div className="service-content">
              <h2>AI Integration Services</h2>
              <p>
                Enhancing your applications with artificial intelligence capabilities through OpenAI and other AI service integrations.
              </p>
              <ul className="service-features">
                <li>ChatGPT-powered conversational interfaces</li>
                <li>OpenAI API integration</li>
                <li>AI-powered content generation</li>
                <li>Intelligent search and recommendations</li>
                <li>Custom AI solutions for your business needs</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Add AI to Your App</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-process section">
        <div className="container">
          <h2 className="section-title">My Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>Understanding your requirements, goals, and business needs to create a detailed project roadmap.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Design & Architecture</h3>
              <p>Creating technical architecture and UI/UX designs that align with your vision and technical requirements.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Development</h3>
              <p>Building your application with clean, maintainable code following industry best practices.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing to ensure your application is bug-free, secure, and performs well under load.</p>
            </div>
            <div className="process-step">
              <div className="process-number">5</div>
              <h3>Deployment & Support</h3>
              <p>Launching your application and providing ongoing maintenance and support as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="services-locations-detail section">
        <div className="container">
          <h2 className="section-title">Serving Clients Worldwide</h2>
          <div className="locations-grid">
            <div className="location-item">
              <h3>India</h3>
              <p>Based in Chandigarh, providing services across Punjab, Delhi, Mumbai, Bangalore, and all major cities in India.</p>
            </div>
            <div className="location-item">
              <h3>United States</h3>
              <p>Remote services for clients in New York, San Francisco, Chicago, Los Angeles, and across the USA.</p>
            </div>
            <div className="location-item">
              <h3>United Kingdom</h3>
              <p>Supporting businesses in London, Manchester, Edinburgh, and throughout the UK.</p>
            </div>
            <div className="location-item">
              <h3>Canada</h3>
              <p>Remote development services for Toronto, Vancouver, Montreal, and other Canadian cities.</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="services-cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's discuss how I can help bring your project to life with modern web technologies.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/projects" className="btn btn-outline">See My Work</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-faq section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What technologies do you specialize in?</h3>
              <p>I specialize in JavaScript/TypeScript ecosystems, particularly React, Angular, Node.js, Express, and NestJS. I work with both MERN stack (MongoDB, Express, React, Node.js) and MEAN stack (MongoDB, Express, Angular, Node.js), along with PostgreSQL, AWS, Docker, and various modern web technologies.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it typically take to build an MVP?</h3>
              <p>The timeline varies based on complexity, but most MVPs can be developed within 4-12 weeks. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer ongoing maintenance and support?</h3>
              <p>Yes, I offer flexible maintenance and support packages to ensure your application continues to run smoothly after launch. This can include bug fixes, performance optimizations, and feature enhancements.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle project communication?</h3>
              <p>I maintain regular communication through your preferred channels (Slack, email, etc.) with weekly progress updates and milestone reviews to ensure the project stays on track.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with my existing development team?</h3>
              <p>Absolutely! I'm comfortable working alongside your in-house team or other contractors, providing expertise where needed while integrating smoothly into your existing workflow.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with clients outside of India?</h3>
              <p>Yes, I work with clients globally, including the USA, UK, Canada, Australia, and Europe. Remote collaboration is seamless with regular communication and flexible scheduling to accommodate different time zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden SEO Keywords Section - Visible to search engines but not to users */}
      <div className="seo-keywords-hidden">
        <p>
          Full Stack Developer Chandigarh India Punjab Delhi Mumbai Bangalore Hyderabad Chennai Kolkata Pune Ahmedabad Jaipur
          React Developer Angular Developer Node.js Developer Express Developer NestJS Developer Next.js Developer MongoDB Developer
          PostgreSQL Developer TypeScript Developer JavaScript Developer Redux Developer GraphQL Developer REST API Developer
          Tailwind CSS Developer Material UI Developer Docker Developer AWS Developer Vercel Developer CI/CD Developer OpenAI Developer
          MERN Stack Developer MEAN Stack Developer Web Application Developer Mobile App Developer SaaS Developer DevOps Engineer
          Frontend Developer Backend Developer Full Stack Engineer JavaScript Expert TypeScript Expert React Expert Angular Expert
          Node.js Expert Express Expert NestJS Expert MongoDB Expert PostgreSQL Expert AWS Expert Docker Expert
          New York San Francisco Chicago Los Angeles Boston Seattle Austin Dallas Houston Miami Atlanta Washington DC Denver Phoenix
          London Manchester Birmingham Edinburgh Glasgow Liverpool Leeds Bristol Sheffield Newcastle Cardiff Belfast
          Toronto Vancouver Montreal Calgary Ottawa Edmonton Quebec Winnipeg Halifax Victoria
          Sydney Melbourne Brisbane Perth Adelaide Canberra Gold Coast Newcastle Hobart Darwin
          Berlin Munich Frankfurt Hamburg Cologne Düsseldorf Stuttgart Nuremberg Leipzig Dresden
          Paris Lyon Marseille Toulouse Nice Nantes Strasbourg Bordeaux Lille Montpellier
          Amsterdam Rotterdam The Hague Utrecht Eindhoven Groningen Tilburg Almere Breda Nijmegen
          Remote Developer Freelance Developer Contract Developer Part-time Developer Full-time Developer
          E-commerce Developer Healthcare Developer Fintech Developer Edtech Developer Real Estate Developer
          Startup Developer Enterprise Solutions Corporate Applications Small Business Solutions
          API Development Database Design UI/UX Development Frontend Architecture Backend Architecture System Design
          Authentication Systems Payment Integration Third-party API Integration Cloud Deployment Serverless Architecture
          Performance Optimization Code Refactoring Legacy Code Modernization Technical Consultation Project Management
          Agile Development Scrum Methodology Kanban Process DevOps Practices CI/CD Pipeline Git Workflow
          React Native Mobile Development Progressive Web Apps Responsive Design Cross-browser Compatibility
          SEO Optimization Web Accessibility WCAG Compliance ADA Compliance Security Best Practices
          Data Visualization Interactive Dashboards Admin Panels User Management Systems CRM Development
          Content Management Systems E-commerce Platforms Payment Gateways Subscription Models
          Real-time Applications WebSockets Server-sent Events Push Notifications
          AI Integration Machine Learning Natural Language Processing Computer Vision Chatbot Development
          Voice Interfaces Recommendation Systems Predictive Analytics Data Processing
          Software Consulting Digital Transformation Cloud Migration SaaS Product Development MVP Launch
          API Integration Payment Gateway Integration Stripe PayPal Razorpay Braintree
          Firebase Developer Google Cloud Platform Azure Developer Heroku Deployment Netlify Deployment
          Microservices Architecture Monorepo Management Code Splitting Lazy Loading SSR SSG
          Headless CMS Sanity Contentful Strapi Prismic WordPress Integration
          Shopify Developer WooCommerce Magento BigCommerce E-commerce Integration
          Jira Trello Asana Slack Communication Zoom Teams Google Meet
          Test Automation Unit Testing Integration Testing Cypress Jest Mocha Chai
          Linting Prettier ESLint Code Quality Code Reviews Continuous Integration
          Internationalization Localization RTL Support Multi-language Apps
          GDPR Compliance Data Privacy Security Audits Penetration Testing
          Blockchain Integration Web3 Ethereum Smart Contracts NFT Marketplace
          IoT Application Development Embedded Systems Edge Computing
          Data Engineering ETL Pipelines Data Warehousing Big Data Analytics
          Custom Software Development Business Automation Workflow Automation
          Portfolio Website Personal Branding Resume Website Landing Page Design
          Svelte Developer Vue.js Developer Remix Developer Astro Developer Qwik Developer
          Rust Developer Go Developer Python Developer Java Developer .NET Developer
          Kubernetes Expert Jenkins Expert Terraform Expert Ansible Expert
          Web3 Developer Solidity Developer Smart Contract Developer DApp Developer
          AI/ML Engineer Data Scientist Computer Vision Engineer NLP Engineer
          Cloud Architect Solutions Architect Technical Architect Enterprise Architect
          Site Reliability Engineer Platform Engineer Infrastructure Engineer
          Mobile Developer iOS Developer Android Developer Flutter Developer
          UI Designer UX Designer Product Designer Web Designer
          Technical Writer Documentation Specialist API Documentation
          Scrum Master Product Owner Project Manager Technical Lead
          Code Mentor Technical Trainer Developer Advocate
          Quality Assurance Engineer QA Automation Engineer Performance Engineer
          Security Engineer Penetration Tester Cybersecurity Expert
          Database Administrator System Administrator Network Engineer
          Business Analyst Requirements Analyst Process Analyst
          Digital Marketing SEO Specialist Analytics Expert
          Growth Hacker Conversion Optimizer A/B Testing Expert Hire web developer
          Remote web developer San Francisco New York City Seattle Austin Los Angeles
          Bengaluru Hyderabad Pune Mumbai Chennai London Manchester Berlin Munich Paris
          Amsterdam Toronto Vancouver Tel Aviv Singapore Tokyo Seoul Sydney Melbourne
          Dubai São Paulo Buenos Aires Cape Town Nairobi Upwork Linkedin Google Yahoo 
          Freelancer Remote Best Highest Rating Skilled  </p>
      </div>
    </div>
  );
};

export default Services;