"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import AboutUsCarousel from "./AboutUsCarousel";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  function SequentialTypewriter({
    items,
    delayBetween = 600,
    typeSpeed = 15,
  }: {
    items: { type: "paragraph" | "list" | "link"; content: string }[];
    delayBetween?: number;
    typeSpeed?: number;
  }) {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
    const [currentLine, setCurrentLine] = useState(-1);
    const [typedLines, setTypedLines] = useState<string[]>([]);

    useEffect(() => {
      if (inView) {
        setTypedLines(new Array(items.length).fill(""));
        setCurrentLine(0);
      } else {
        setTypedLines([]);
        setCurrentLine(-1);
      }
    }, [inView]);

    useEffect(() => {
      if (currentLine < 0 || currentLine >= items.length) return;

      const fullText = items[currentLine].content;
      let i = 0;

      const typeChar = () => {
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = fullText.slice(0, i + 1);
          return updated;
        });

        if (i < fullText.length - 1) {
          i++;
          setTimeout(typeChar, typeSpeed);
        } else {
          setTimeout(() => setCurrentLine((prev) => prev + 1), delayBetween);
        }
      };

      typeChar();
    }, [currentLine]);

    return (
      <div ref={ref} className="space-y-3 min-h-[400px]">
        {items.map((item, index) => {
          const fullText = item.content;
          const typedText = typedLines[index] || "";

          const baseClass =
            item.type === "paragraph"
              ? "text-2xl font-mabry leading-relaxed"
              : item.type === "list"
                ? "list-item font-mabry ml-5"
                : "font-mabry";

          const isLink = item.type === "link";

          return (
            <div key={index} className={`relative ${baseClass}`}>
              {/* Gray disabled background text */}
              <span className="block text-gray-300 whitespace-pre-line">
                {isLink ? (
                  <span className="underline font-medium">{fullText}</span>
                ) : (
                  fullText
                )}
              </span>

              {/* Black typed overlay */}
              <span className="absolute top-0 left-0 block text-neutral-900 whitespace-pre-line">
                {isLink && index <= currentLine ? (
                  <Link
                    href="https://calendly.com/builders-club/30min"
                    target="_blank"
                    className="underline font-medium"
                  >
                    {typedText}
                  </Link>
                ) : (
                  typedText
                )}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const aboutItems: { type: "paragraph" | "list" | "link"; content: string }[] =
    [
      {
        type: "paragraph",
        content:
          "I’m a product engineer who helps turn bold ideas into scalable, high-impact products.",
      },
      {
        type: "paragraph",
        content:
          "I combine startup speed with full-stack execution and product strategy to ship fast and scale smart.",
      },
      {
        type: "paragraph",
        content: "What I Do",
      },
      {
        type: "list",
        content: "MVPs & Launches: Rapid prototyping to production.",
      },
      {
        type: "list",
        content: "Web3: dApps, DEXs, DAOs, dashboards, token launches.",
      },
      {
        type: "list",
        content: "AI Interfaces: LLMs, voice, and analytics integration.",
      },
      {
        type: "list",
        content: "FinTech: Workflows, automation, and compliance systems.",
      },
      {
        type: "list",
        content: "Front-End: Fast, responsive UI/UX for web and mobile.",
      },
      {
        type: "link",
        content: "Get in touch",
      },
    ];

  return (
    <section
      id="about"
      className="relative py-8 md:py-24 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 md:pb-16">
        <div className="flex my-12 justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[95%] lg:w-[70%] relative min-h-[400px]"
          >
            <SequentialTypewriter
              items={aboutItems}
              typeSpeed={15}
              delayBetween={400}
            />
          </motion.div>
        </div>
      </div>
      <Parallax speed={-10}>
        <AboutUsCarousel />
      </Parallax>
    </section>
  );
}
