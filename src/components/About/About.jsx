import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { about } from "../../data/portfolio";
import "./About.css";
const About = () => {
  const { title, description } = about;
  return (
    <section className="about">
      <h1>{title}</h1>
      <p>{description}</p>
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
