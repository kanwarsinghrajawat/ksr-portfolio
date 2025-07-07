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
      isSoundOn ? audioRef.current.play() : audioRef.current.pause();
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
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <AnimatePresence>
        {showSoundToast && (
          <motion.div
            className="fixed bottom-6 left-6 z-[100] backdrop-blur-md bg-black/80 text-white px-6 py-4 rounded-xl shadow-lg border border-[#FF4D00] w-[320px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg font-semibold mb-1">Enable Sound</h2>
            <p className="text-sm text-gray-300 mb-4">
              For the best experience, please turn on sound 🎵
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="bg-[#FF4D00] hover:bg-[#e94400] text-white"
                onClick={handleEnableSound}
              >
                Enable
              </button>
              <button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => setShowSoundToast(false)}
              >
                Skip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <span className="text-[#FF4D00]">S</span>
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
            <button
              className="text-white hover:text-[#FF4D00] text-sm font-medium"
              onClick={handleToggleSound}
            >
              {isSoundOn && soundUnlocked ? "🔊 Sound On" : "🔇 Sound Off"}
            </button>
            <button
              className="text-white hover:text-[#FF4D00]"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <LuSun size={18} /> : <LuMoon size={18} />}
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
              <button
                className="mt-8 text-white font-medium"
                onClick={handleToggleSound}
              >
                {isSoundOn && soundUnlocked ? "🔊 Sound On" : "🔇 Sound Off"}
              </button>
              <button
                className="mt-4"
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
