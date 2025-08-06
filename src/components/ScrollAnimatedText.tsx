"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollAnimatedTextProps {
  text: string;
}

const ScrollAnimatedText = ({ text }: ScrollAnimatedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimatedOnScroll, setHasAnimatedOnScroll] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const soundStopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/decoding.mp3");
    audioRef.current.volume = 0.4;
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.warn("Audio play blocked:", e);
      });

      // Stop sound after short delay
      if (soundStopTimeoutRef.current) {
        clearTimeout(soundStopTimeoutRef.current);
      }
      soundStopTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 1000);
    }
  };

  const startScrambleAnimation = () => {
    setDisplayText(text);
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

  const triggerEffect = () => {
    playSound();
    startScrambleAnimation();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedOnScroll) {
          triggerEffect();
          setHasAnimatedOnScroll(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimatedOnScroll]);

  return (
    <motion.span
      ref={elementRef}
      onMouseEnter={triggerEffect}
      className="inline-block cursor-pointer text-4xl md:text-6xl font-black italic font-mabry tracking-tight px-2 py-1 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
    >
      {displayText}
    </motion.span>
  );
};

export default ScrollAnimatedText;
