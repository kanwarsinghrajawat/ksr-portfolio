"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuExternalLink as ExternalLink } from "react-icons/lu";

interface ExperienceCardProps {
  title: string;
  company: string;
  period?: string;
  description: string[];
  techStack: string;
  links?: { name: string; url: string }[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  techStack,
  links,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-slate-800 p-8 rounded-xl shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {period && (
            <span className="text-purple-400 font-semibold">{period}</span>
          )}
        </div>
        <p className="text-xl text-slate-300 mb-6">{company}</p>

        <ul className="space-y-3 mb-6">
          {description.map((item, index) => (
            <li key={index} className="text-slate-300 flex">
              <span className="text-purple-400 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.split(", ").map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {links && links.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Links:</h4>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="flex items-center px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
