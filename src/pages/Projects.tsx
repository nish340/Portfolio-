import { useState } from 'react';
import { projects } from '../lib/projectData';
import AdSense from '../components/AdSense';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="container">
          <h1>My Projects</h1>
          <p>A collection of my recent work</p>
        </div>
      </header>

      <AdSense adSlot="6789012345" className="my-1" />
      
      <section className="projects-section section">
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

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;