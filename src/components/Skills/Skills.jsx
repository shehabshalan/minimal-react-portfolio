import React from "react";
import "./Skills.css";
import { skills } from "../../data/portfolio";
import getColorClass from "../../utils/getColorClass";
const Skills = () => {
  const { title, mySkills } = skills;
  return (
    <section className="skills" id="skills">
      <h1>{title}</h1>
      <div className="skills-container-grid">
        {mySkills.map((skill, index) => (
          <article className="skills-card" key={index}>
            <h3 className="skills-title">{skill.title}</h3>
            <div className="skills-stack">
              {skill.skills.map((skill, index) => (
                <span className={`${getColorClass(skill)}`} key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
