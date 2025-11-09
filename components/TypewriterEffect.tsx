'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  speed?: number;
}

export function TypewriterEffect({ text, delay = 0, speed = 50 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, speed, text]);

  return (
    <span className="font-mono">
      {displayedText}
      {currentIndex <= text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}