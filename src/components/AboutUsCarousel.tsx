"use client";
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const cards = [
  { src: "/blockchain.png", title: "FRONTEND" },
  { src: "/blockchain.png", title: "BLOCKCHAIN" },
  { src: "/blockchain.png", title: "BACKEND" },
  { src: "/blockchain.png", title: "FULL STACK" },
];

const CARD_WIDTH = 320;
const TOTAL_WIDTH = CARD_WIDTH * cards.length;

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
      className="relative border-t border-b border border-black overflow-hidden w-full pt-6 md:pt-8 pb-8 md:pb-20 bg-white"
      onMouseMove={(e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const mouseX = e.clientX - rect.left;
        const percent = mouseX / rect.width;
        const offset = -percent * 200;
        x.set(offset);
      }}
    >
      <p className="text-4xl font-bold  italic text-start text-black mb-8 pl-4">
        SERVICES
      </p>

      <motion.div
        ref={containerRef}
        className="flex gap-10 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        style={{ x }}
      >
        {[...cards, ...cards, ...cards].map((card, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] group perspective-1000"
            whileHover={{ scale: 1.05 }}
          >
            {/* Title ABOVE the image */}
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-normal text-black font-mabry pl-4 text-left">
                {card.title}
              </h2>
            </div>

            {/* Image Card */}
            <motion.div
              className="p-2"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={card.src}
                alt={`Image ${i}`}
                width={320}
                height={420}
                className=" pointer-events-none"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade masks */}
      <div className="md:hidden absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="md:hidden absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default AboutUsCarousel;
