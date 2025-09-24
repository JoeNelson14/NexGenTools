import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import headerImage from '../assets/header.jpg';

function Home() {
  const [inputText, setInputText] = useState('Technology Brought To The Automotive World'); // Example state usage

  const [animatedWords, setAnimatedWords] = useState([]);

  const timeouts = []; // Array to store timeouts for cleanup

  useEffect(() => {
    const words = inputText.split(' '); // Split the text into words
    setAnimatedWords([]);  // Set the words to state for rendering

    words.forEach((word, index) => {
      const timeoutId = setTimeout(() => {
        setAnimatedWords(prev => [...prev, { word, id: `${word}-${index}` }]); // Add each word to the animatedWords state
      }, index * 300); // Delay each word by 500ms
      timeouts.push(timeoutId); // Store the timeout ID for cleanup
    });

    return () => {
      timeouts.forEach(clearTimeout); // Clear all timeouts on component unmount
      setAnimatedWords([]); // Clear the animated words when the component unmounts
   }
  }, [inputText]);

  return (
    <section className="home">
      <h1 id='hero-text' className='hero-text'>{animatedWords.map((wordObj, index) => (
        <span key={wordObj.id} className={`hero-word hero-word-${index}`}>
          {wordObj.word}
          {index < animatedWords.length - 1 && <br />} {/* Add line break after each word except the last one */}
        </span>
      ))}
      </h1>
      <img src={headerImage} alt="Hero" className="hero-image" />
    </section>
  );
}

export default Home;