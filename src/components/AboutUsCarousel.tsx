"use client";
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const images = [
  "/blockchain.png",
  "/blockchain.png",
  "/blockchain.png",
  "/blockchain.png",
];
const CARD_WIDTH = 320;
const TOTAL_WIDTH = CARD_WIDTH * images.length;

const AboutUsCarousel = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const maxDrag = -TOTAL_WIDTH;
      if (latestX > 0) x.set(-TOTAL_WIDTH);
      if (latestX < maxDrag * 2) x.set(-TOTAL_WIDTH);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full py-20 bg-white"
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const mouseX = e.clientX - rect.left;
        const percent = mouseX / rect.width;
        const offset = -percent * 200;
        x.set(offset);
      }}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x }}
      >
        {[...images, ...images, ...images].map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] group perspective-1000"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="rounded-xl shadow-2xl bg-neutral-900 p-2"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={src}
                alt={`Image ${i}`}
                width={320}
                height={420}
                className="rounded-xl pointer-events-none"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade masks */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default AboutUsCarousel;
