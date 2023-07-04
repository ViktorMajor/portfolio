import "../styles/Header.css";
import React from "react";
import homeIcon from "../media/home.png";
import aboutIcon from "../media/about.png";
import skillsIcon from "../media/skills.png";
import projectsIcon from "../media/projects.png";
import contactIcon from "../media/contact.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = ({ className }) => {
  return (
    <header id="header" className={className}>
      <nav>
        <div className="social-container">
          <div className="vertical-text">
            {Array.from("Follow me on").map((letter, i) => (
              <div key={i} className="letter">
                {letter === " " ? "\u00A0" : letter}
              </div>
            ))}
          </div>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/viktor-major-559b2a250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="1.5em" />
          </a>
          <a
            className="social-icon"
            href="https://github.com/viktormajor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="1.5em" />
          </a>
        </div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-55}>
              <img src={homeIcon} className="icon" alt="Home" />
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-55}>
              <img src={aboutIcon} className="icon" alt="About" />
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-55}>
              <img src={skillsIcon} className="icon" alt="Skills" />
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-55}>
              <img src={projectsIcon} className="icon" alt="Projects" />
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-55}>
              <img src={contactIcon} className="icon" alt="Contact" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
