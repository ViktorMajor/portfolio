import React from 'react';
import '../styles/Skills.css';
import htmlIcon from '../media/html-5.png';
import cssIcon from '../media/css-3.png';
import jsIcon from '../media/js.png';
import reactIcon from '../media/react.png';
import bootstrapIcon from '../media/bootstrap.png';
import githubIcon from '../media/github.png';
import webpackIcon from '../media/webpack.png';
import canvaIcon from '../media/canva.png';
import npmIcon from '../media/npm.png';

const Skills = () => {
  return(
    <div className="skills-container">
      <h1>My Skills</h1>
      <h2>Languages</h2>
      <ul className="skills-list">
        <li><img src={htmlIcon} className="icon" alt="HTML"/>HTML</li>
        <li><img src={cssIcon} className="icon" alt="CSS"/>CSS</li>
        <li><img src={jsIcon} className="icon" alt="JavaScript"/>JavaScript</li>
      </ul>
      <h2>Frameworks</h2>
      <ul className="skills-list">
        <li><img src={reactIcon} className="icon" alt="React"/>React</li>
        <li><img src={bootstrapIcon} className="icon" alt="Bootstrap"/>Bootstrap</li>
      </ul>
      <h2>Technologies</h2>
      <ul className="skills-list">
        <li><img src={githubIcon} className="icon" alt="GitHub"/>GitHub</li>
        <li><img src={webpackIcon} className="icon" alt="Webpack"/>Webpack</li>
        <li><img src={npmIcon} className="icon" alt="Npm"/>Npm</li>
      </ul>
    </div>
  )
}

export default Skills;
