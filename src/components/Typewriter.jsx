import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, speed = 100, delay = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const delayTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [charIndex, textIndex, texts, speed, delay]);

  return <span className="typewriter-text">{displayedText}|</span>;
};

export default Typewriter;
