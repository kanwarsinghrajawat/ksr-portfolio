"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundStopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/decoding.mp3");
    audioRef.current.volume = 0.4;
  }, []);

  const handleHoverStart = () => {
    // Clear stop timeout if hovering again
    if (soundStopTimeoutRef.current) {
      clearTimeout(soundStopTimeoutRef.current);
      soundStopTimeoutRef.current = null;
    }

    // Reset text
    setDisplayText(text);

    // Start sound immediately
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => console.error("Sound error:", e));
    }

    // Start text scramble
    let frame = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, i) => {
          if (i < frame) return char;
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      setDisplayText(scrambled);

      if (frame >= text.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }

      frame++;
    }, 100);
  };

  const handleHoverEnd = () => {
    // Reset text
    setDisplayText(text);

    // Clear animation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Set a timeout to stop sound after 2s
    if (soundStopTimeoutRef.current) {
      clearTimeout(soundStopTimeoutRef.current);
    }

    soundStopTimeoutRef.current = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 2000);
  };

  return (
    <motion.span
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="inline-block cursor-pointer text-4xl md:text-6xl font-black italic font-mabry tracking-tight px-2 py-1 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
    >
      {displayText}
    </motion.span>
  );
};

export default AnimatedText;
