import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import react1 from "../Assets/pexels-cup-of-couple-6177677.jpg";
import react2 from "../Assets/pexels-toni-cuenca-585752.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>My Education Journey</h1>
          <p>
            I have pursued a comprehensive educational journey, starting with my
            O and A-level studies, where I graduated from A-levels with
            outstanding achievements, securing three A grades. My dedication to
            academic excellence has been a consistent theme throughout my
            educational endeavors. Beyond academics, I have cultivated a passion
            for strategic thinking and physical fitness. As a side hobby, I
            actively engage in playing chess, honing my skills in strategy,
            critical thinking, and decision-making. Additionally, I enjoy the
            dynamic and team-oriented nature of cricket, contributing to both my
            physical well-being and teamwork abilities. Currently, I am
            continuing my educational pursuit at Fast NUCES, where I am enrolled
            in a program that offers a diverse range of courses.
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={react1} className="img" alt="nino" />
            </div>
            <div className="img-stack bottom">
              <img src={react2} className="img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div className="  certifications" style={{ color: "white" }}>
            <h2>Courses Which I have studied in FAST NUCES include</h2>
            <ul>
              <li>Programming Fundamentals</li>
              <li>Data Structures and Algorithms</li>
              <li>Computer Networks</li>
              <li>Data Science</li>
              <li>Artificial Intelligence</li>
              <li>Database Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
