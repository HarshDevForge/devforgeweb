import React, { useEffect, useState } from 'react';
import '../Style/HeroSection.css';

const phrases = ['Success', 'Victory'];

const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenPhrases = 2000;

function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);



  return (
    <div className="hero-container">
       <div className="hero-content">
        <h1>
          Pushing Boundaries
        </h1>
        <h1>
          Creating <span className="highlight">{text}</span>
        </h1>
        <p>
          We push the limits of innovation and excellence, driving success for our clients at every turn.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
