// components/TypingHeadline.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TypingHeadline() {
  const words = ['MkwelaTech', 'Digital Solutions'];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(75);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, words, wordIndex, speed]);

  // Wrap "Tech" in orange for the first word
  const formattedText = text === 'MkwelaTech' 
    ? (
      <>
        Mkwela<span className="text-[#FFA500]">Tech</span>
      </>
    )
    : text;

  return (
    <motion.h1
      animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
    >
      {formattedText}
    </motion.h1>
  );
}