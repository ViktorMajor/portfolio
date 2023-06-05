import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My </h1>
      <div className="project-card">
        <video className="video-background" autoPlay loop muted>
          <source src="project1.mp4" type="video/mp4" />
        </video>
        <div className="project-content">
          <h2>Project 1</h2>
          <p>Project 1 description...</p>
          <div className="project-buttons">
            <button className="demo-button">Demo</button>
            <button className="code-button">Code</button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <video className="video-background" autoPlay loop muted>
          <source src="project1.mp4" type="video/mp4" />
        </video>
        <div className="project-content">
          <h2>Project 2</h2>
          <p>Project 2 description...</p>
          <div className="project-buttons">
            <button className="demo-button">Demo</button>
            <button className="code-button">Code</button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <video className="video-background" autoPlay loop muted>
          <source src="project1.mp4" type="video/mp4" />
        </video>
        <div className="project-content">
          <h2>Project 3</h2>
          <p>Project 3 description...</p>
          <div className="project-buttons">
            <button className="demo-button">Demo</button>
            <button className="code-button">Code</button>
          </div>
        </div>
      </div>
      {/* Add more project cards as needed... */}
    </div>
  );
};

export default Projects;
