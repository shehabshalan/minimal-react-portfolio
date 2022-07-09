import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-container-grid">
        <div className="skills-card">
          <h3 className="skills-title">Languages & Frameworks</h3>
          <p className="skills-stack">#React #Strapi #Node #Express #MongoDB</p>
        </div>
        <div className="skills-card">
          <h3 className="skills-title">Databases</h3>
          <p className="skills-stack">#React #Strapi #Node #Express #MongoDB</p>
        </div>
        <div className="skills-card">
          <h3 className="skills-title">Others</h3>
          <p className="skills-stack">#React #Strapi #Node #Express #MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
