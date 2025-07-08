import React from "react";
import projects from "../data/projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">All Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span className="tech-item" key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
