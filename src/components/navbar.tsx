"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LuMenu, LuX, LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [soundUnlocked, setSoundUnlocked] = useState(false);
  const [showSoundToast, setShowSoundToast] = useState(true);
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (soundUnlocked && audioRef.current) {
      if (audioRef.current) {
        if (isSoundOn) {
          audioRef.current
            .play()
            .catch((err) => console.error("Playback failed:", err));
        } else {
          audioRef.current.pause();
        }
      }
    }
  }, [soundUnlocked, isSoundOn]);

  const handleEnableSound = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setSoundUnlocked(true);
        setIsSoundOn(true);
        setShowSoundToast(false);
      } catch (err) {
        console.error("Playback failed:", err);
      }
    }
  };

  const handleToggleSound = async () => {
    if (!soundUnlocked) {
      await handleEnableSound();
    } else {
      setIsSoundOn((prev) => !prev);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSoundToast(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* SOUND TOAST */}
      <AnimatePresence>
        {showSoundToast && (
          <motion.div
            className="fixed bottom-6 left-6 z-[100] backdrop-blur-md bg-background border border-primary text-foreground px-6 py-4 rounded-xl shadow-xl w-[320px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg font-semibold mb-1 font-orbitron">
              Enable Sound
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              For the best experience, please turn on sound 🎵
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-1 rounded font-bold"
                onClick={handleEnableSound}
              >
                Enable
              </button>
              <button
                className="bg-foreground text-background hover:bg-muted px-4 py-1 rounded"
                onClick={() => setShowSoundToast(false)}
              >
                Skip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 border-b border-primary bg-background/80 backdrop-blur-md transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="#home"
            className="text-3xl font-orbitron font-bold tracking-wider flex items-center gap-1 text-primary hover:shadow-neon transition duration-300"
          >
            <span>K</span>
            <span>S</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="uppercase text-sm font-orbitron text-muted-foreground hover:text-primary transition-all duration-200 tracking-widest"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <button
              className="text-foreground hover:text-primary text-sm font-orbitron"
              onClick={handleToggleSound}
            >
              {isSoundOn && soundUnlocked ? "🔊 Sound On" : "🔇 Sound Off"}
            </button>

            <button
              className="text-foreground hover:text-primary"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
            </button>
          </nav>

          {/* MOBILE TOGGLE */}
          <motion.button
            className="md:hidden text-primary hover:scale-125 transition-transform"
            whileTap={{ rotate: 90 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background backdrop-blur-2xl z-50 flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="absolute top-5 right-6 text-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <LuX size={28} />
            </button>

            <nav>
              <ul className="flex flex-col space-y-8 items-center">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-2xl font-orbitron uppercase tracking-widest"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <button
                className="mt-8 text-foreground font-orbitron hover:text-primary"
                onClick={handleToggleSound}
              >
                {isSoundOn && soundUnlocked ? "🔊 Sound On" : "🔇 Sound Off"}
              </button>
              <button
                className="mt-4 text-foreground hover:text-primary"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
