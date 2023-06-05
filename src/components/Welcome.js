import React, { useState, useEffect } from 'react';
import '../styles/Welcome.css';

const greetings = [
  'Welkom!',
  'Hola!', // spanyol
  'Ciao!', // olasz
 
  'こんにちは!', // japán
  'Powitanie!', // kínai
  'Hello!', // angol
  'I welcome you!',
  'Ich begrüße Sie!', // német
  'Accueillir!', // francia
  'Üdvözlöm!' // magyar
];

function Welcome({ setShowComponents }) {
  const [counter, setCounter] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === greetings.length - 1) {
          clearInterval(timer);
          setShowButton(true);
        } else {
          return prevCounter + 1;
        }
      });
    }, 350);
  }, []);

  return (
    <div className='welcome-container' >
      <h1>{greetings[counter]}</h1>
      {showButton && <button onClick={() => setShowComponents(true)}>Get to know me</button>}
    </div>
  );
}

export default Welcome;
