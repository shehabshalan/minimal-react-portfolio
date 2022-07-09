import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="container-grid">
        <div className="project-card">
          <h3 className="project-title">Online Video Sharing App</h3>
          <p className="project-description">
            The app allows users to register/log in, upload a video with a
            thumbnail and stream it back with the ability to leave comments.
            Comments can be toggled on and off by the user.
          </p>
          <div className="technology">
            <p>#React #Strapi #Node #Express #MongoDB</p>
          </div>
          <div className="project-links">
            <a href="#">
              <FaGithub className="icon" size={30} />
            </a>
            <a href="#">
              <FaExternalLinkAlt className="icon" size={30} />
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">Blog Site</h3>
          <p className="project-description">
            The blog site app utilizes Strapi (a headless CMS) which acts as a
            backend where all blogs are persisted and managed, and React is used
            on the client side to render blogs.
          </p>
          <div className="technology">
            <p>#React #Strapi #Node #Express #MongoDB</p>
          </div>
          <div className="project-links">
            <a href="#">
              <FaGithub className="icon" size={30} />
            </a>
            <a href="#">
              <FaExternalLinkAlt className="icon" size={30} />
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3 className="project-title">Online Video Sharing App</h3>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius
            vitae sunt odio est quas ullam dolorem, maiores facilis fugit
            voluptatum aut aspernatur, omnis sequi nisi possimus placeat facere
            ut!
          </p>
          <div className="technology">
            <p>#React #Strapi #Node #Express #MongoDB</p>
          </div>
          <div className="project-links">
            <a href="#">
              <FaGithub className="icon" size={30} />
            </a>
            <a href="#">
              <FaExternalLinkAlt className="icon" size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
