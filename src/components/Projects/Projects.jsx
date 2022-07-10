import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
import { projects } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
const Projects = () => {
  const { title, personalProjects } = projects;
  return (
    <section className="projects" id="projects">
      <h1>{title}</h1>
      <div className="container-grid">
        {personalProjects.map((project, index) => (
          <article className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technology-stack">
              {project.technologies.map((tech, index) => (
                <span className={`${getColorClass(tech)}`} key={index}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank">
                <FaGithub className="icon" size={30} />
              </a>
              <a href={project.demo} target="_blank">
                <FaExternalLinkAlt className="icon" size={30} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
