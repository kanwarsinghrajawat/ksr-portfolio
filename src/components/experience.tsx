"use client";

import { motion } from "framer-motion";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import Link from "next/link";

const experiences = [
  {
    title: "Software Engineer | Blockchain Engineer",
    company: "DZap",
    period: "2022 - Present",
    description: [
      "Led the design and implementation of DAAO.ai's token launch, reward and yield-farming systems, and contributor features.",
      "Designed and developed an AI-powered platform enabling seamless transaction execution through simple prompts.",
      "Developed a zapping infrastructure to facilitate direct migration, addition, or removal of liquidity.",
      "Transformed the full application into a compact, versatile widget for flexible use.",
      "Integrated smart contracts into the frontend and SDK.",
    ],
    techStack:
      "Nextjs, ReactJS, Solidity, ExpressJs, TypeScript, Postgrese, Tailwind, Redux, Jest, Viem, web3js, etherjs, wagmi",
    links: [
      { name: "app.dzap.io", url: "https://app.dzap.io" },
      { name: "daao.ai", url: "https://daao.ai" },
      { name: "arcane.build", url: "https://arcane.build" },
    ],
  },
  {
    title: "Software Engineer",
    company: "TEKENLIGHT SOLUTIONS",
    period: "2021 - 2022",
    description: [
      "VOICEGAIN.AI - Created Voice AI apps with Speech-to-Text and LLM-powered APIs. Recorded & transcribed audio, generated summaries, sentiment analysis, and built conversational voice bots.",
      "Financial Service Product - Developed frontend interfaces using React, WebSockets, TypeScript, and CSS3/SCSS.",
    ],
    techStack: "React, WebSockets, TypeScript, CSS3/SCSS, Redux",
  },
  {
    title: "Frontend Developer",
    company: "VERZEO EDUTECH",
    period: "2020 - 2021",
    description: [
      "Galactic Space - Real Estate WebApp using Reactjs, Typescript, UseContext, Tailwind",
      "Learn Skill - E-Learning WebApp using Reactjs, Typescript, UseContext, Tailwind",
    ],
    techStack: "Reactjs, Typescript, UseContext, Tailwind",
  },
  {
    title: "Software Engineer",
    company: "Walmart",
    period: "2020",
    description: ["Building a Data Portal."],
    techStack: "React, Redux, Node.js",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-16 tracking-tighter text-center">
            <span className="text-white">WORK</span>{" "}
            <span className="text-neutral-400">EXPERIENCE</span>
          </h2>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <p className="text-neutral-500 text-sm tracking-wider">
                      {exp.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-neutral-400 mb-4">{exp.company}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-neutral-500 text-sm leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <h4 className="text-xs uppercase tracking-wider text-neutral-600 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.split(", ").map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {exp.links && (
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-neutral-600 mb-2">
                          Links
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-neutral-400 hover:text-white text-xs transition-colors duration-300"
                            >
                              <span>{link.name}</span>
                              <ExternalLink className="ml-1 w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
