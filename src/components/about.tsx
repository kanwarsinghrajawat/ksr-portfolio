"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./animatedBg";

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 tracking-tighter text-center">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-neutral-400">ME</span>
          </h2>

          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              I'm a passionate Software Developer Engineer with 3+ years of
              experience building innovative solutions across various domains
              including blockchain, AI, and web development. My expertise spans
              frontend and backend technologies, with a focus on creating
              seamless user experiences and robust architectures.
            </p>
            <p>
              I thrive in collaborative environments and enjoy tackling complex
              problems with creative solutions. My background in computer
              science combined with hands-on industry experience allows me to
              approach projects with both technical depth and business
              perspective.
            </p>
            <p>
              Throughout my career, I've worked on a diverse range of projects,
              from DeFi platforms and AI-powered applications to e-commerce
              solutions and educational platforms. This breadth of experience
              has given me a unique perspective on software development and the
              ability to adapt to new technologies and challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
