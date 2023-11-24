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
          <h1>
            Empowering My Career: The Strategic Impact of Pursuing
            Certifications
          </h1>
          <p>
            I pursued certifications as a deliberate step to enrich my
            professional journey. These certifications serve as verifiable
            milestones, attesting to my commitment to excellence and continuous
            learning in my chosen field. Beyond showcasing my expertise and
            skill set, they embody my dedication to staying at the forefront of
            industry advancements.
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
            <h2>Certifications</h2>
            <ul>
              <li>HTML and CSS in depth by META</li>
              <li>Intro to Git and Github by Google</li>
              <li>
                Machine Learning Specialization by DeepLearning.AI,Stanford CVD
              </li>
              <li> Google CyberSecurity Specialization</li>
              <li>Scrum Foundation Professional Certificate</li>
              <li>Cluster Analysis in Python</li>
              <li> Exploring and Analyzing Data in Python</li>
              <li>
                Unsupervised Learning, Recommender Systems by DeepLearning.AI,
                Stanford CVD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
