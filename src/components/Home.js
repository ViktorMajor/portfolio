import React, { useState, useEffect } from "react";
import Typist from "react-text-typist";
import { Link } from "react-scroll";
import "../styles/Home.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="home-container">
      <div className="intro-text">
        <p>Hi! I am </p>
        <Typist
          sentences={[
            " Viktor Major!",
            " a frontend developer.",
            " studying psychology.",
            " aiming to create stunning websites.",
          ]}
          typingSpeed={150}
          deletingSpeed={50}
          pauseTime={1500}
          startDelay={0}
          cursorDelay={0}
          showCursor={true}
          cursorColor="#E0E7E9"
          cursorBlinkSpeed="700"
          cursorSmooth={false}
          className="myTypist"
          cursorClassName="myCursor"
          style={{ fontSize: "2.5rem", color: "#E0E7E9" }}
          defaultText="Starting..."
    
        />
      </div>

      <div className="button-container">
        <Link to="about" smooth={true} duration={500} offset={-55}>
          <button>About me</button>
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-55}>
          <button>My projects</button>
        </Link>
      </div>

      {isScrolled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
        >
          <g
            strokeWidth="4"
            stroke="#a3c6c4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="matrix(1,0,0,1,-12,0)"
          >
            <path
              d="M268.7515678405762 279Q118.75156784057617 500 389.7515678405762 400Q704.7515678405762 266 510.7515678405762 521 "
              markerEnd="url(#SvgjsMarker3276)"
            ></path>
          </g>
          <defs>
            <marker
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              viewBox="0 0 10 10"
              orient="auto"
              id="SvgjsMarker3276"
            >
              <polyline
                points="0,5 5,2.5 0,0"
                fill="none"
                strokeWidth="1.6666666666666667"
                stroke="#a3c6c4"
                strokeLinecap="round"
                transform="matrix(1,0,0,1,1.6666666666666667,2.5)"
                strokeLinejoin="round"
              ></polyline>
            </marker>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Home;
