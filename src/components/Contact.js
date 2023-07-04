import React from "react";
import "../styles/Contact.css";

const handleResumeClick = () => {
  window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank");
};

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-card">
        <h1 className="contact-header">Contact Me</h1>
        <div className="contact-info">
          <p>
            <strong>Email:</strong> majorviktor95@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +36 30 84 999 84
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/viktor-major-559b2a250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viktor Major
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>
            <a
              href="https://github.com/viktormajor"
              target="_blank"
              rel="noopener noreferrer"
            >
              viktormajor
            </a>
          </p>

          <button className="resume-button" onClick={handleResumeClick}>
            Dowvload my resume!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
