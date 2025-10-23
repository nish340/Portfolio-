import { useState, useEffect } from 'react';
import { resume } from '../assets/image';
import AdSense from '../components/AdSense';
import './About.css';

const About = () => {
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateSkills(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        // Healthcare IT Expertise
        { name: "HIPAA Compliance", level: 95 },
        { name: "HL7 FHIR", level: 90 },
        { name: "HL7 v2", level: 85 },
        { name: "Healthcare Interoperability", level: 90 },
        { name: "SMART on FHIR", level: 85 },
        { name: "EHR/EMR Systems", level: 90 },
        { name: "Practice Management", level: 85 },
        { name: "Telehealth Services", level: 80 },
        { name: "Medical Billing Software", level: 85 },
        { name: "Healthcare APIs", level: 90 },
        
        // Core Development Skills
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 95 },
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        
        // Cloud & DevOps
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Docker", level: 75 },
        { name: "GitHub Actions", level: 80 },
        
        // Emerging Technologies
        { name: "Blockchain", level: 70 },
        { name: "Web3", level: 65 },
        { name: "SEO Optimization", level: 85 },
        { name: "Site Performance", level: 90 },
        
        // General Skills
        { name: "REST APIs", level: 95 },
        { name: "System Architecture", level: 85 },
        { name: "Third Party Integrations", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Clean Code Practices", level: 90 },
    ];

    return (
        <div className="about-page">
            <header className="page-header">
                <div className="container">
                    <h1>About Me</h1>
                    <p>Get to know me and my skills</p>
                </div>
            </header>

            <section className="about-section section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="https://img.freepik.com/free-vector/elegant-businessman-using-laptop-character_18591-82588.jpg" alt="Nishchay Sharma" />
                        </div>
                        <div className="about-info">
                            <h2 className="section-title">About Me</h2>
                            <p>Hi, I’m <strong>Nishchay Sharma</strong> — a Healthcare IT Full Stack Developer based in Chandigarh, India, with 3+ years of specialized experience in healthcare technology solutions crafting fast, scalable, and user-first web applications.</p>
                            <p>My core expertise lies in building HIPAA-compliant healthcare platforms, EHR/EMR systems, medical practice management solutions, and healthcare interoperability systems. I specialize in HL7 FHIR integration, SMART on FHIR applications, telehealth services, and secure medical billing software. My work is all about clean architecture, seamless APIs, and interfaces users actually enjoy.</p>
                            <p>I hold a Master's in Computer Science and have a passion for writing code that solves real-world problems. When I’m not building something new, I’m usually exploring tools, sharpening my skills, or helping others learn through collaboration.</p>

                            <div className="personal-info">
                                <div className="info-item">
                                    <span className="info-label">Name:</span>
                                    <span className="info-value">Nishchay Sharma</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Email:</span>
                                    <span className="info-value">nishchay340@gmail.com</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Location:</span>
                                    <span className="info-value">Chandigarh, India</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Experience:</span>
                                    <span className="info-value">3+ Years Healthcare IT</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Availability:</span>
                                    <span className="info-value">Freelance & Full-Time</span>
                                </div>
                            </div>

                            <a href={resume} className="btn btn-primary" download="nishchay-sharma-resume.pdf">📄 Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills-section section">
                <div className="container">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-progress"
                                        style={{
                                            width: animateSkills ? `${skill.level}%` : '0%',
                                            transitionDelay: `${index * 0.1}s`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;