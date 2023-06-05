import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll'; 
import Welcome from './components/Welcome';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const [showComponents, setShowComponents] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (showComponents) {
    return (
      <div className="App">
        <Element name="home">   {/* Added Element component */}
          <Home />
        </Element>
        {showHeader ? <Header className='fade-in' /> : <Header className='fade-out' />}

        <Element name="about">  {/* Added Element component */}
          <About />
        </Element>
        <Skills />
        <Element name="projects"> {/* Added Element component */}
          <Projects />
        </Element>
        <Contact />
      </div>
    );
  } else {
    return <Welcome setShowComponents={setShowComponents} />;
  }
}

export default App;