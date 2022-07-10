import React from "react";
import "./Experience.css";
import { experience } from "../../data/portfolio";
import ReactMarkdown from "react-markdown";
const Experience = () => {
  const { title, experiences } = experience;
  return (
    <section className="experience">
      <h1>{title}</h1>
      <div className="experience-container-grid">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="job-title-duration-section">
              <h2 className="job-title">
                {experience.title} - <span>{experience.company}</span>
              </h2>
              <p className="duration">{experience.duration}</p>
            </div>
            <ReactMarkdown className="experience-description">
              {experience.description}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
