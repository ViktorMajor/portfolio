import "../styles/Header.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = ({ className }) => {
  return (
    <header id="header" className={className}>
      <nav>
      
        <div className="social-container">
          <p>Follow us on -</p>
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
          <a
            className="social-icon"
            href="mailto:viktormajor@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail size="1.5em" />
          </a>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
