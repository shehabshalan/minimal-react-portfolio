import React from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
const Skills = () => {
  const { title, mySkills } = skills;
  return (
    <section className="skills" id="skills">
      <h1>{title}</h1>
      <div className="skills-container-grid">
        {mySkills.map((skill, index) => (
          <div className="skills-card" key={index}>
            <h3 className="skills-title">{skill.title}</h3>
            <p className="skills-stack">{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
