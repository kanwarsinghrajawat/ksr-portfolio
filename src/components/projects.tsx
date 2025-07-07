"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LuExternalLink, LuGithub, LuVideo } from "react-icons/lu";

import Link from "next/link";

const projects = [
  {
    title: "Employee Management System",
    description:
      "A comprehensive system for managing employee data, attendance, and performance.",
    techStack:
      "Nextjs, Java, Postgrese, Tailwind, Typescript, HeadlessUI, TanstackQuery, Redux",
    liveLink: "https://example.com/employee-management",
    githubLink: "https://github.com/example/employee-management",
    videoLink: "https://example.com/video",
  },
  {
    title: "DeFi App (Web3)",
    description:
      "A decentralized finance application allowing users to manage crypto assets.",
    techStack: "Nextjs, typescript, redux, express, tailwind",
    liveLink: "https://example.com/defi-app",
    githubLink: "https://github.com/example/defi-app",
    videoLink: "https://example.com/video",
  },
  {
    title: "Voice Game",
    description:
      "An interactive game controlled by voice commands using web sockets and context API.",
    techStack: "Reactjs, web sockets, contextApi",
    liveLink: "https://example.com/voice-game",
    githubLink: "https://github.com/example/voice-game",
    videoLink: "https://example.com/video",
  },
  {
    title: "Chat-bot Builder",
    description:
      "A platform for creating and customizing chatbots without coding knowledge.",
    techStack: "Reactjs, Tailwindcss, ReactFlow",
    liveLink: "https://example.com/chatbot-builder",
    githubLink: "https://github.com/example/chatbot-builder",
    videoLink: "https://example.com/video",
  },
  {
    title: "Video Application",
    description:
      "A video streaming platform with custom controls and features.",
    techStack: "Reactjs, Tailwindcss, Redux",
    liveLink: "https://example.com/video-app",
    githubLink: "https://github.com/example/video-app",
    videoLink: "https://example.com/video",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description:
      "A comprehensive dashboard for tracking e-commerce metrics and performance.",
    techStack: "Reactjs, Redux Toolkit, Tailwind CSS",
    liveLink: "https://example.com/ecommerce-analytics",
    githubLink: "https://github.com/example/ecommerce-analytics",
    videoLink: "https://example.com/video",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-16 tracking-tighter text-center">
            <span className="text-white">PERSONAL</span>{" "}
            <span className="text-neutral-400">PROJECTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-full border border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 p-6 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs uppercase tracking-wider text-neutral-600 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack
                          .split(", ")
                          .slice(0, 3)
                          .map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.techStack.split(", ").length > 3 && (
                          <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-sm">
                            +{project.techStack.split(", ").length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-auto">
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <LuExternalLink className="w-4 h-4" />
                          <span className="sr-only">Live Demo</span>
                        </Link>
                      )}
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <LuGithub className="w-4 h-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      )}
                      {project.videoLink && (
                        <Link
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                          <LuVideo className="w-4 h-4" />
                          <span className="sr-only">Video</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 border border-white/20 pointer-events-none"
                    layoutId="projectHighlight"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
