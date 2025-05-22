import { useState, useEffect } from 'react';
import { resume } from '../assets/image';
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
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "NestJS", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSql", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS/SCSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "AWS S3", level: 70 },
        { name: "REST APIs", level: 90 },
        { name: "AWS EC2", level: 60 },
        { name: "Third Pary Integrations", level: 90 },
        { name: "System Architecture", level: 75 },
        { name: "Software Design Patterns", level: 70 },
        { name: "Problem Solving", level: 85 },
        { name: "API Design & Documentation", level: 80 },
        { name: "Performance Optimization", level: 75 },
        { name: "Debugging & Troubleshooting", level: 90 },
        { name: "Clean Code Practices", level: 85 },

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
                            <p>Hi, I’m <strong>Nishchay Sharma</strong> — a Full Stack Developer based in Chandigarh, India, with 2.5+ years of experience crafting fast, scalable, and user-first web applications.</p>
                            <p>I specialize in the MERN and MEAN stacks, and have built everything from healthcare platforms and CRMs to crypto exchanges and e-commerce apps. My work is all about clean architecture, seamless APIs, and interfaces users actually enjoy.</p>
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