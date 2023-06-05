import React from "react";
import "../styles/About.css";
import ProfilImage from "../media/bg5.png";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <div className="text-img">
        <div className="img-container">
          <img src={ProfilImage} alt="profil"></img>
        </div>

        <div className="first-text">
          <h2>Experience</h2>
          <p>
            From an early age, both sciences and human thinking intrigued
            me. My psychology studies and my current job at a non-profit
            organization, where I organize cultural and psychological programs,
            have endowed me with a unique blend of soft skills. This includes
            high emotional and verbal intelligence, assertive communication,
            conflict management skills, curiosity, perseverance, and excellent
            teamwork capabilities. I have applied these skills in my previous
            roles which included mentoring and teaching, as well as operating a
            telephone helpline.
          </p>

          <p>
            Though I have yet to work on a project that integrates my psychology
            knowledge directly with technology, I am captivated by the prospect
            of delving into language-based AI to create self-improvement
            applications. My long-term goal is to transition my psychological
            expertise into the IT field, ultimately becoming a professional
            front-end developer crafting impactful applications.
          </p>
        </div>
      </div>

      <h2>Interests</h2>
      <p>
        My interest in scientific and religious philosophy drives me to
        understand the underlying principles and logic of everyday life
        processes. I have a particular affinity for communication theories and
        psychoanalytic theories, especially those of existential psychology.
        These interests inspire me to constantly look for new opportunities to
        contribute to societal progress through the incredible fusion of
        psychology and computer science.
      </p>
    </div>
  );
};
export default About;
