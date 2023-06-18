import "../styles/Header.css";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";


const Header = ({ className }) => {


  return (
    <header id="header" className={className}>
      <nav>
        <div className="social-container">
          <p>Follow us on</p>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/viktormajor/"
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
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-55}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-55} >
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-55}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-55}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-55}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
