"use client";

import React, { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 50 }: { text: string, speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="typewriter-cursor"></span>
    </span>
  );
}
