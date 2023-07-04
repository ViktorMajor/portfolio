import React from "react";
import "../styles/Projects.css";
import careerGuidance from '../media/career.guidance.png';
import gameoflife from '../media/gameoflife.png';

const Projects = () => {
  
  //Career guidance website links
  const handleDemoClick0 = () => {
    window.open("https://career-test-fujtrwpb3-viktormajor.vercel.app/", "_blank");  
  };
  const handleCodeClick0 = () => {
    window.open("https://github.com/viktormajor/career-test", "_blank"); 
  };
  //Conway's Game of Life links
  const handleDemoClick1 = () => {
    window.open("https://viktormajor.github.io/GameOfLife/", "_blank");  
  };
  const handleCodeClick1 = () => {
    window.open("https://github.com/ViktorMajor/GameOfLife", "_blank"); 
  };

  return (
    <div className="projects-container">
      <h1>My projects</h1>
      <div className="project-card">
      <h2>Career guidance website</h2>
        <img className="project-image" src={careerGuidance} alt="Career guidance" />
        <div className="project-content">
          
          <p>
          This application consists of two main modules: 'Big Five' personality test and 'Skills' test, presented as interactive forms. Based on user responses, the server-side logic computes the test results, which are displayed in a user profile. The application features a responsive design implemented in CSS, adapting to different screen sizes. The frontend, developed in React.js, makes calls to the server during test completion and results retrieval.
          </p>
          <div className="project-buttons">
            <button className="demo-button" onClick={handleDemoClick0}>Demo</button>
            <button className="code-button" onClick={handleCodeClick0}>Code</button>
          </div>
        </div>
      </div>
      <div className="project-card">
      <h2>Conway's Game of Life</h2>
        <img className="project-image" src={gameoflife} alt="Game of Life" />
        <div className="project-content">
          
          <p>
          This is an implementation of Conway's Game of Life written in JavaScript.          </p>
          <div className="project-buttons">
            <button className="demo-button" onClick={handleDemoClick1}>Demo</button>
            <button className="code-button" onClick={handleCodeClick1}>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
