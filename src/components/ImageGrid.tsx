"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    image: "/walmart2.jpeg",
    text: "",
    width: 200,
    height: 140,
  },
  {
    image: "/dzap.svg",
    text: "",
    width: 100,
    height: 140,
  },
  {
    image: "/arcane.svg",
    text: "",
    width: 150,
    height: 100,
  },
  {
    image: "/gable.avif",
    text: "",
    width: 100,
    height: 100,
  },

  {
    image: "",
    text: "Voicegain.Ai",
  },
  {
    image: "",
    text: "Tekenlight Solutions",
  },
  {
    image: "",
    text: "Verzeo Edutech",
  },
];

const animationVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ImageGrid() {
  return (
    <div className="py-16  bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={animationVariants}
            className="rounded-xl  p-6 flex flex-col items-center justify-center text-center h-12 transition-all"
          >
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  alt={item.text || `Item ${idx + 1}`}
                  width={item.width || 100}
                  height={item.height || 100}
                  className="object-contain mb-3"
                />
                {item.text && (
                  <p className="text-sm text-gray-800 font-medium">
                    {item.text}
                  </p>
                )}
              </>
            ) : (
              <p className="text-lg text-gray-800 font-semibold">{item.text}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
