import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import "../styles/Home.css";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Viktor Major!",
        "a frontend developer.",
        "studying psychology.",
        "aiming to create stunning websites.",
      ],
      startDelay: 0,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
      contentType: 'text'
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div className="intro-text">
        <p>Hi! I am&nbsp;</p>
        <span style={{ fontSize: "1.5rem", color: "#E0E7E9" }} ref={el}></span>
      </div>

      <div className="button-container">
        <Link to="about" smooth={true} duration={500} offset={-55}>
          <button>About me</button>
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-55}>
          <button>My projects</button>
        </Link>
      </div>

    
    </div>
  );
};

export default Home;
