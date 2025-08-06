"use client";

import { useEffect, useRef } from "react";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import ScrollAnimatedText from "./ScrollAnimatedText";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer | Blockchain Engineer",
    company: "DZap",
    description: [
      "Lead token launch systems for DAAO.ai. and yield-farming systems",
      "Built AI-powered transaction platform.",
      "Created zapping infra for LP migration.",
      "Turned app into a modular widget.",
      "Integrated contracts into frontend SDK.",
      "Building a DeFi platform",
      "Designed and developed an AI-powered platform enabling seamless transaction execution through simple prompts.",
    ],
    techStack:
      "Nextjs, ReactJS, Solidity, ExpressJs, TypeScript, PostgreSQL, Tailwind, Redux, Jest, Viem, Web3, Ether.js, Wagmi",
    links: [
      { name: "app.dzap.io", url: "https://app.dzap.io" },
      { name: "daao.ai", url: "https://daao.ai" },
      { name: "synthari.io", url: "https://syntahri.io" },
      { name: "arcane.build", url: "https://daao.ai" },
      { name: "haven1", url: "https://haven1.org/" },
    ],
    image: "/arcane.svg",
    width: 150,
    height: 80,
  },
  {
    title: "Software Engineer",
    company: "Walmart",
    description: ["Built internal data portal for enterprise use."],
    techStack:
      "Nextjs, React, Redux, Typescript, Nodejs, expressjs, etherjs, wagmi, viem,Rainbow kit etc",
    image: "/walmart2.jpeg",
    width: 200,
    height: 140,
  },

  {
    title: "Software Engineer",
    company: "TEKENLIGHT SOLUTIONS",
    description: [
      "Built voice AI apps with STT and LLM.",
      "Developed financial dashboards using WebSockets.",
    ],
    techStack:
      "Nextjs, Nodejs, React, WebSockets, TypeScript, SCSS, Redux, Tailwind,etc",
    links: [
      { name: "voicegain.ai", url: "https://www.voicegain.ai/" },
      { name: "Gable Digital Solutions", url: "https://gable.digital/en-US/" },
    ],
    image: "/gable.avif",
    width: 100,
    height: 100,
  },
  {
    title: "Frontend Developer",
    company: "VERZEO EDUTECH",
    description: [
      "Built real estate and e-learning platforms.",
      "Tech used: React, TypeScript, Tailwind.",
    ],
    techStack: "React, TypeScript, Redux, Tailwind",
    image: "/dzap.svg",
    width: 100,
    height: 140,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            target.classList.add("opacity-100", "scale-100", "blur-0");
            target.classList.remove("opacity-40", "scale-95", "blur-sm");
          } else {
            target.classList.remove("opacity-100", "scale-100", "blur-0");
            target.classList.add("opacity-40", "scale-95", "blur-sm");
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const children = containerRef.current?.querySelectorAll(".experience-card");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-4xl text-left font-bold text-black mb-12">
        <ScrollAnimatedText text="Experience" />
      </h2>

      <ImageGrid />

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-min"
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="experience-card relative transform transition-all duration-700 ease-in-out 
      opacity-40 scale-95 blur-sm
      bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] border border-gray-100"
          >
            {/* Image in top-right corner */}
            {exp.image && (
              <>
                {/* Mobile: show on top */}
                <div className="mb-4 block md:hidden">
                  <Image
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    width={exp.width}
                    height={exp.height}
                    className="object-contain mx-auto"
                  />
                </div>

                {/* Desktop: show in top-right corner */}
                <div className="absolute top-4 right-4 hidden md:block">
                  <Image
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    width={exp.width}
                    height={exp.height}
                    className="object-contain"
                  />
                </div>
              </>
            )}

            <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-2">
              {exp.title}
            </h3>

            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mb-4">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mb-4">
              <strong>Tech Stack:</strong> {exp.techStack}
            </p>

            {Array.isArray(exp.links) && exp.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {exp.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-blue-600 flex items-center gap-1 hover:underline text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
