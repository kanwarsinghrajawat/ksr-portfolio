"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind", "CSS3", "Jest"],
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
    skills: ["Node.js", "Express.js"],
  },
  {
    name: "Web3",
    skills: ["Wagmi", "Viem", "Etherjs", "Web3js"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
  },
];

export default function SkillsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black min-h-screen flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Technical Skills
      </motion.h2>

      {/* Tab buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.name}
            onClick={() => setSelectedIndex(index)}
            className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
              selectedIndex === index
                ? "bg-white text-black shadow-lg"
                : "text-white border border-white/30 hover:bg-white/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillCategories[selectedIndex].skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <motion.div
              className="h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-xl font-medium text-center text-white">
                {skill}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
