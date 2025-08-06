"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import ScrollAnimatedText from "./ScrollAnimatedText";

const projects = [
  {
    title: "Voice Game",
    description: "Voice-controlled game using WebSockets.",
    techStack: ["React", "WebSockets", "ContextAPI"],
    videoSrc: "/14.mp4",
    size: "lg:col-span-2",
    github: "https://github.com/kanwarsinghrajawat/VoiceGameAi",
    liveLink: "https://voice-game-ai.vercel.app/",
  },
  {
    title: "ATS",
    description: "Analytics dashboard for ecommerce stores.",
    techStack: ["React", "Redux Toolkit", "Tailwind"],
    videoSrc: "/11.mp4",
    size: "lg:col-span-1",
    github: " https://github.com/kanwarsinghrajawat/ats-ai",
    liveLink: "https://ats-ek8xxb39m-kanwar-singhs-projects.vercel.app/",
  },
  {
    title: "Chat Bot Builder",
    description: "Real-time team communication with channels and DMs.",
    techStack: ["Socket.io", "React", "Express"],
    videoSrc: "/17.mp4",
    size: "lg:col-span-3",
    github: "https://github.com/kanwarsinghrajawat/chatBotFlowBuilder",
    liveLink: "https://chat-bot-flow-builder.vercel.app/",
  },
  {
    title: "DeFi App (Web3)",
    description: "Decentralized finance app for crypto asset management.",
    techStack: ["Nextjs", "Typescript", "Redux"],
    videoSrc: "/2.mp4",
    size: "lg:col-span-1",
    github: "https://github.com/kanwarsinghrajawat/web3-bridge-client",
    liveLink: "https://web3-bridge-client.vercel.app/",
  },
  {
    title: "Employee Management System",
    description: "Manage employee data, attendance, and performance.",
    techStack: ["Nextjs", "Java", "PostgreSQL"],
    videoSrc: "/13.mp4",
    size: "lg:col-span-2",
    github: "",
    liveLink: "https://employee-management-system-alpha-gray.vercel.app/",
  },

  {
    title: "Dynamic Weather App",
    description: "Visual site builder with drag & drop UI.",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    videoSrc: "/16.mp4",
    size: "lg:col-span-1",
    github: "https://github.com/kanwarsinghrajawat/dynamic-weather-app",
    liveLink: "https://dynamic-weathera-app.vercel.app/",
  },
  {
    title: "E commerece Dashboard",
    description: "Real-time team communication with channels and DMs.",
    techStack: ["Socket.io", "React", "Express"],
    videoSrc: "/12.mp4",
    size: "lg:col-span-1",
    github: "https://github.com/kanwarsinghrajawat/analyticsPage",
    liveLink:
      "https://analytics-page-731rb7vsb-kanwar-singhs-projects.vercel.app/",
  },
  {
    title: "Video Player Application",
    description: "Real-time team communication with channels and DMs.",
    techStack: ["Socket.io", "React", "Express"],
    videoSrc: "/7.mp4",
    size: "lg:col-span-1",
    github: "https://github.com/kanwarsinghrajawat/ReactVideoPlayer",
    liveLink: "https://react-video-player-iota.vercel.app/",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  if (!hasMounted) return null;

  return (
    <section id="work" className="bg-white py-8 md:py-24">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">
          <ScrollAnimatedText text="    Some Of My Work" />
        </h2>

        {/* ✅ DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-3 bg-neutral-800">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group bg-neutral-950 border border-neutral-800 min-h-[380px] ${project.size}`}
            >
              <motion.video
                autoPlay
                loop
                muted
                playsInline
                src={project.videoSrc}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-8 transition-all duration-500"
              />
              <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/10 transition-all duration-500" />
              <div className="relative z-20 p-5 flex flex-col justify-end h-full group-hover:opacity-0 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="absolute bottom-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition duration-500 flex gap-3">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="text-white hover:text-teal-300 w-5 h-5" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuGithub className="text-white hover:text-teal-300 w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ MOBILE CAROUSEL */}
        <div className="lg:hidden relative">
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className=" border border-neutral-800"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[240px] object-cover"
                  src={projects[currentIndex].videoSrc}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {projects[currentIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentIndex].techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {projects[currentIndex].liveLink && (
                      <Link
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuExternalLink className="text-white hover:text-teal-300 w-5 h-5" />
                      </Link>
                    )}
                    {projects[currentIndex].github && (
                      <Link
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LuGithub className="text-white hover:text-teal-300 w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={prevSlide}
              className="text-white text-sm hover:text-teal-400"
            >
              ← Prev
            </button>
            <button
              onClick={nextSlide}
              className="text-white text-sm hover:text-teal-400"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
