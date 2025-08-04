"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Hero() {
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [soundUnlocked, setSoundUnlocked] = useState(false);
  const [showSoundToast, setShowSoundToast] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleEnableSound = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setSoundUnlocked(true);
      setIsSoundOn(true);
      setShowSoundToast(false);
    } catch (err) {
      console.error("Playback failed:", err);
    }
  }, []);

  const handleToggleSound = useCallback(async () => {
    if (!soundUnlocked) {
      await handleEnableSound();
    } else {
      setIsSoundOn((prev) => !prev);
    }
  }, [soundUnlocked, handleEnableSound]);

  useEffect(() => {
    if (audioRef.current && soundUnlocked) {
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
  }, [isSoundOn, soundUnlocked]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSoundToast(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const soundIcon = isSoundOn && soundUnlocked ? "🔊" : "🔇";

  if (!hasMounted) return null;

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
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
      <div
        className={`min-h-screen text-white relative overflow-hidden transition-colors duration-300 font-[ArizonaFlare,Georgia,serif] ${
          menuOpen
            ? "bg-black"
            : "bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
        }`}
      >
        <header className="flex justify-between items-center px-6 pt-6 text-sm z-50 relative">
          <button
            className="relative w-6 h-6 flex flex-col justify-center items-center group z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {/* Top Line */}
            <motion.span
              className="block h-0.5 w-6 bg-white rounded-sm absolute"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 0 : -6,
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom Line */}
            <motion.span
              className="block h-0.5 w-6 bg-white rounded-sm absolute"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <h1 className="text-xl md:text-2xl font-normal tracking-wide font-mabry">
            KANWAR SINGH
          </h1>

          <div className="flex items-center gap-6">
            <Link
              href="#contact"
              className="hidden font-mabry md:block text-white/80 hover:text-white !text-2xl"
            >
              Contact
            </Link>
            <button
              className="text-white/80 hover:text-white text-sm flex items-center gap-1"
              onClick={handleToggleSound}
            >
              <span className="inline md:hidden">{soundIcon}</span>
              <span className="hidden md:block font-mabry">
                {soundIcon} {isSoundOn ? "Sound On" : "Sound Off"}
              </span>
            </button>
          </div>
        </header>
        {!menuOpen && (
          <main className="flex flex-col md:flex-row justify-end md:justify-between md:items-center h-[calc(100vh-80px)] px-2 md:px-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <h2 className="text-5xl md:text-7xl leading-tight font-mabry">
                <span className="block italic">MULTI-</span>
                <span className="block italic">DISCIPLINARY</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-right"
            >
              <h2 className="text-5xl md:text-7xl leading-tight font-mabry sm:pt-96 italic">
                <span className="block">SOFTWARE</span>
                <span className="block md:mt-4">ENGINEER</span>
              </h2>
            </motion.div>
          </main>
        )}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 text-white px-6 py-8 pt-28"
            >
              <nav className="space-y-4 text-3xl md:text-5xl font-normal font-mabry italic flex flex-col">
                {["work", "notes", "services", "profile", "lab", "contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`#${item}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.toUpperCase()}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
