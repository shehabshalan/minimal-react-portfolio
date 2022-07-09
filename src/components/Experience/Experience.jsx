import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <div className="experience-container-grid">
        <div className="experience-card">
          <div className="job-title-duration-section">
            <h2 className="job-title">
              Frondend Developer - <span>Trusted KYB Limited</span>
            </h2>
            <p className="duration">03/2021 - 06/2022</p>
          </div>
          <p className="experience-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            neque obcaecati praesentium perferendis magnam dignissimos cum quasi
            dolore ducimus esse delectus modi corrupti soluta, minus assumenda
            tempora sed! Consequatur, distinctio. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eligendi, rem reiciendis! Cumque
            neque commodi aliquam facere dolorem magnam assumenda voluptate
            facilis, illum omnis perspiciatis fuga, totam corporis veritatis
            maiores voluptatem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
