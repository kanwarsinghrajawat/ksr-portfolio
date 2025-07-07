"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React.js/Next.js",
      "React Native",
      "Redux",
      "Tailwind",
      "CSS/SCSS/CSS3",
      "Jest",
    ],
  },
  {
    name: "Programming",
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
    name: "Others",
    skills: ["DSA", "GIT", "Github/Gitlab", "CI/CD"],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-16 tracking-tighter text-center">
            <span className="text-white">TECHNICAL</span>{" "}
            <span className="text-neutral-400">SKILLS</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
                  activeCategory === index
                    ? "bg-white text-black"
                    : "bg-transparent text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="relative">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`${
                  activeCategory === categoryIndex ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="border border-neutral-800 p-4 flex items-center justify-center text-center"
                    >
                      <span className="text-neutral-400 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
