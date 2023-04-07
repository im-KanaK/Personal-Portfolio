import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="project-list-container">
        <div className="project-one" data-aos="flip-left">
          <h2>PERSONAL PORTFOLIO WEBSITE</h2>
          <a href="https://kanakd-portfolio.netlify.app/">
            <button>VISIT MY WEBSITE</button>
          </a>
        </div>
        <div className="project-two" data-aos="flip-right">
        <h2>STACK OVERFLOW CLONE</h2>
          <a href="https://stackoverflow-kanak.netlify.app/">
            <button>VISIT MY WEBSITE</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
