import React from "react";
import "./Skills.css";
import html from "../../assets/Home/HTMLlogo.svg";
import css from "../../assets/Home/CSSlogo.png";
import js from "../../assets/Home/JSlogo.png";
import react from "../../assets/Home/REACTlogo.png";
import mongoDB from "../../assets/Home/MONGOlogo.png";
import cpp from "../../assets/Home/C++logo.png";
import sql from "../../assets/Home/SQLlogo.png";
import c from "../../assets/Home/Clogo.png";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list-container">
        <div  className="lang container-html" data-aos="zoom-out">
          <img src={html} alt="Loading..." />
        </div>
        <div className="lang container-css" data-aos="zoom-out">
          <img src={css} alt="Loading..." />
        </div>
        <div className="lang container-js" data-aos="zoom-out">
          <img src={js} alt="Loading..." />
        </div>
        <div className="lang container-react" data-aos="zoom-outt">
          <img src={react} alt="Loading..." />
        </div>

        <div className="lang container-mongodb" data-aos="zoom-out">
          <img src={mongoDB} alt="Loading..." />
        </div>

        <div className="lang container-sql" data-aos="zoom-out">
          <img src={sql} alt="Loading..." />
        </div>

        <div className="lang container-c" data-aos="zoom-out">
          <img src={c} alt="Loading..." />
        </div>

        <div className="lang container-cpp" data-aos="zoom-out">
          <img src={cpp} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Skills;
