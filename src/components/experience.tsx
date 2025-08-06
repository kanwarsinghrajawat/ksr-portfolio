"use client";

import { motion } from "framer-motion";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import ScrollAnimatedText from "./ScrollAnimatedText";

const experiences = [
  {
    title: "Software Engineer | Blockchain Engineer",
    company: "DZap",
    period: "2022 - Present",
    description: [
      "Led token launch systems for DAAO.ai.",
      "Built AI-powered transaction platform.",
      "Created zapping infra for LP migration.",
      "Turned app into a modular widget.",
      "Integrated contracts into frontend SDK.",
    ],
    techStack:
      "Nextjs, ReactJS, Solidity, ExpressJs, TypeScript, PostgreSQL, Tailwind, Redux, Jest, Viem, Web3, Ether.js, Wagmi",
    links: [
      { name: "app.dzap.io", url: "https://app.dzap.io" },
      { name: "daao.ai", url: "https://daao.ai" },
    ],
  },
  {
    title: "Software Engineer",
    company: "TEKENLIGHT SOLUTIONS",
    period: "2021 - 2022",
    description: [
      "Built voice AI apps with STT and LLM.",
      "Developed financial dashboards using WebSockets.",
    ],
    techStack: "React, WebSockets, TypeScript, SCSS, Redux",
  },
  {
    title: "Frontend Developer",
    company: "VERZEO EDUTECH",
    period: "2020 - 2021",
    description: [
      "Built real estate and e-learning platforms.",
      "Tech used: React, TypeScript, Tailwind.",
    ],
    techStack: "React, TypeScript, UseContext, Tailwind",
  },
  {
    title: "Software Engineer",
    company: "Walmart",
    period: "2020",
    description: ["Built internal data portal for enterprise use."],
    techStack: "React, Redux, Node.js",
  },
];

export default function Experience() {
  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-black mb-12 text-center">
        <ScrollAnimatedText text="Experience" />
      </h2>
      <ImageGrid />

      <div className="grid grid-cols-1 gap-8 auto-rows-min">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            className="bg-[#111213]  p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {exp.title}
            </h3>
            <p className="text-sm text-white mb-4">
              <span className="font-semibold">{exp.company}</span> —{" "}
              {exp.period}
            </p>

            <ul className="list-disc pl-5 text-white text-sm space-y-1 mb-4">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-xs text-gray-600 mb-4">
              <strong>Tech Stack:</strong> {exp.techStack}
            </p>

            {Array.isArray(exp.links) && exp.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {exp.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-blue-700 flex items-center gap-1 hover:underline text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
