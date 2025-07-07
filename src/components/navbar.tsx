"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LuMenu, LuX, LuMusic } from "react-icons/lu";
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
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Play audio when sound is unlocked and isSoundOn is true
  useEffect(() => {
    if (soundUnlocked && audioRef.current && isSoundOn) {
      audioRef.current.play();
    } else if (audioRef.current && !isSoundOn) {
      audioRef.current.pause();
    }
  }, [soundUnlocked, isSoundOn]);

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Glassmorphic Floating Enable Sound Card */}
      {!soundUnlocked && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 shadow-lg flex items-center justify-center group border-2 border-white/30 hover:scale-110 transition-transform"
          style={{ boxShadow: "0 2px 12px rgba(80,0,120,0.18)" }}
          onClick={async () => {
            if (audioRef.current) {
              try {
                await audioRef.current.play();
                setSoundUnlocked(true);
              } catch {}
            }
          }}
          aria-label="Enable sound"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className="text-white animate-spin-slow">
            <LuMusic size={22} />
          </span>
          {/* Tooltip */}
          {showTooltip && (
            <span className="absolute right-14 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-90 pointer-events-none whitespace-nowrap">
              Enable Music
            </span>
          )}
        </motion.button>
      )}

      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold tracking-tighter">
            <span className="text-white">K</span>
            <span className="text-neutral-400">S</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Sound Button */}
            <button
              className="ml-4 text-white"
              onClick={() => setIsSoundOn((prev) => !prev)}
              aria-label={isSoundOn ? "Mute sound" : "Play sound"}
            >
              {isSoundOn ? "🔊 Sound On" : "🔇 Sound Off"}
            </button>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-5 right-6 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <LuX size={24} />
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
                      className="text-neutral-400 hover:text-white transition-colors duration-300 text-2xl uppercase tracking-widest"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              {/* Sound Button in Mobile Nav */}
              <button
                className="mt-8 text-white font-brut"
                onClick={() => setIsSoundOn((prev) => !prev)}
                aria-label={isSoundOn ? "Mute sound" : "Play sound"}
              >
                {isSoundOn ? "🔊 Sound On" : "🔇 Sound Off"}
              </button>
              <button
                className="mt-4"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
