"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Redux", "Tailwind", "CSS3", "Jest"],
  },
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Rust", "Solidity"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    name: "Web3",
    skills: ["Wagmi", "Viem", "Ethers.js", "Web3.js"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

const skillLogos: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Rust: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  Solidity: "https://cryptologos.cc/logos/solidity-solidity-logo.svg?v=025",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "CI/CD":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Ethers.js": "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
  "Web3.js": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  Wagmi: "https://avatars.githubusercontent.com/u/101392018?s=200&v=4",
  Viem: "https://avatars.githubusercontent.com/u/121736150?s=200&v=4",
};

export default function SkillsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeLogos, setActiveLogos] = useState<number[]>([]);
  const currentSkills = skillCategories[selectedIndex].skills;

  useEffect(() => {
    setActiveLogos(new Array(currentSkills.length).fill(0));
    let i = 0;
    const interval = setInterval(() => {
      setActiveLogos((prev) => {
        const next = [...prev];
        next[i % currentSkills.length] =
          next[i % currentSkills.length] === 1 ? 0 : 1;
        return next;
      });
      i++;
    }, 800);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black min-h-screen flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Technical Skills
      </motion.h2>

      <div className="relative w-full mb-12 overflow-x-auto scrollbar-hide">
        <div className="relative flex justify-start sm:justify-center gap-6  min-w-max px-4 scroll-smooth snap-x">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={(e) => {
                setSelectedIndex(index);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={`relative pb-3 snap-center text-sm font-medium uppercase tracking-wide whitespace-nowrap transition-all h-12 ${
                selectedIndex === index
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {category.name}
              {selectedIndex === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive flex-based skill grid */}
      <div className="p-px">
        <div className="flex flex-wrap justify-center">
          {currentSkills.map((skill, i) => {
            const showLogo = activeLogos[i] === 1;
            return (
              <div
                key={skill}
                className=" h-32 w-[50%] sm:w-[33.33%] md:w-[25%] lg:w-[20%] border border-neutral-800 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showLogo ? `${skill}-logo` : `${skill}-text`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center"
                  >
                    {showLogo && skillLogos[skill] ? (
                      <img
                        src={skillLogos[skill]}
                        alt={skill}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <span className="text-white font-medium text-center text-sm px-2">
                        {skill}
                      </span>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
