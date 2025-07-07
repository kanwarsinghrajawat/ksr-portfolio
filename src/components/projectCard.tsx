"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuExternalLink, LuGithub, LuVideo } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  liveLink?: string;
  githubLink?: string;
  videoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  videoLink,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative h-full bg-slate-800 p-6 rounded-lg shadow-xl flex flex-col transform transition duration-500 group-hover:translate-y-[-5px]">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-300 mb-4 flex-grow">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-400 mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.split(", ").map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="flex items-center px-3 py-1.5 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors"
            >
              <span>Live</span>
              <LuExternalLink className="ml-1 w-3 h-3" />
            </Link>
          )}

          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="flex items-center px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
            >
              <LuGithub className="mr-1 w-3 h-3" />
              <span>Github</span>
            </Link>
          )}

          {videoLink && (
            <Link
              href={videoLink}
              target="_blank"
              className="flex items-center px-3 py-1.5 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
            >
              <LuVideo className="mr-1 w-3 h-3" />
              <span>Video</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
