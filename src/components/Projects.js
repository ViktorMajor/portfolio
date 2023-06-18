import React from "react";
import "../styles/Projects.css";
import careerGuidance from '../media/career.guidance.png';

const Projects = () => {
  
  const handleDemoClick0 = () => {
    // A demó URL-jét cseréld le a GitHub Pages projekt URL-jére
    window.open("https://career-test-fujtrwpb3-viktormajor.vercel.app/", "_blank");  
  };

  const handleCodeClick0 = () => {
    // A kód tárhely URL-jét cseréld le a GitHub projektoldal URL-jére
    window.open("https://github.com/viktormajor/career-test", "_blank"); 
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
    </div>
  );
};

export default Projects;
