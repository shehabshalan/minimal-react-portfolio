import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import "./About.css";
const About = () => {
  return (
    <section className="about">
      <h1>Hi 👋 , I am Shehab Shalan</h1>
      <p>
        I am a web developer currently pursuing a master's degree. I have worked
        as a frontend developer for over a year. I have also worked on personal
        projects involving mainly MERN stack. I have done mostly frontend
        development, but I am also interested in backend development. I am
        always open to new challenges.
      </p>
      <div className="about-links">
        <a href="#">
          <FaGithub className="icon" size={30} />
        </a>
        <a href="#">
          <FaLinkedinIn className="icon" size={30} />
        </a>
        <div className="btn">
          <a href="#">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
