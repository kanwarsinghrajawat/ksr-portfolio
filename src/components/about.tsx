"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import AboutUsCarousel from "./AboutUsCarousel";

export default function About() {
  function SequentialTypewriter({
    items,
    delayBetween = 600,
    typeSpeed = 15,
  }: {
    items: {
      type: "paragraph" | "list" | "link";
      content: string;
    }[];
    delayBetween?: number;
    typeSpeed?: number;
  }) {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.3,
    });

    const [currentLine, setCurrentLine] = useState(-1);

    useEffect(() => {
      if (inView) {
        setCurrentLine(0);
      } else {
        setCurrentLine(-1);
      }
    }, [inView]);

    useEffect(() => {
      if (currentLine >= 0 && currentLine < items.length - 1) {
        const timeout = setTimeout(
          () => {
            setCurrentLine((prev) => prev + 1);
          },
          items[currentLine].content.length * typeSpeed + delayBetween
        );

        return () => clearTimeout(timeout);
      }
    }, [currentLine, items, delayBetween, typeSpeed]);

    return (
      <div
        ref={ref}
        className="space-y-3 min-h-[400px]" // Prevents layout jumping
      >
        {items.map((item, index) => {
          const isVisible = index <= currentLine;
          const colorClass = isVisible ? "text-neutral-800" : "text-gray-400";
          const commonClasses = `transition-colors duration-500 ${colorClass}`;

          const typedText = isVisible ? (
            <span className="inline-block whitespace-pre-line leading-relaxed">
              <Typewriter
                words={[item.content]}
                loop={1}
                cursor={false}
                typeSpeed={typeSpeed}
                deleteSpeed={0}
                delaySpeed={0}
              />
            </span>
          ) : (
            item.content
          );

          if (item.type === "paragraph") {
            return (
              <p
                key={index}
                className={`text-2xl font-mabry leading-relaxed ${commonClasses}`}
              >
                {typedText}
              </p>
            );
          }

          if (item.type === "list") {
            return (
              <li
                key={index}
                className={`list-item font-mabry ml-5 ${commonClasses}`}
              >
                {typedText}
              </li>
            );
          }

          if (item.type === "link") {
            return (
              <div key={index} className={`${commonClasses}`}>
                {isVisible ? (
                  <Link
                    href="https://calendly.com/builders-club/30min"
                    className="inline-block underline font-medium hover:underline"
                    target="_blank"
                  >
                    {item.content}
                  </Link>
                ) : (
                  <span className="underline font-medium">{item.content}</span>
                )}
              </div>
            );
          }

          return null;
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
      <div className="container mx-auto px-6">
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
      <AboutUsCarousel />
    </section>
  );
}
