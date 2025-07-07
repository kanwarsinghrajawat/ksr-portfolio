"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-16 tracking-tighter text-center">
            <span className="text-white">EDUCATION &</span>{" "}
            <span className="text-neutral-400">ACHIEVEMENTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">
                Education
              </h3>
              <div className="border border-neutral-800 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-white font-medium">
                    Bachelor of Computer Science & Engineering
                  </h4>
                  <span className="text-neutral-500 text-sm">2018-2022</span>
                </div>
                <p className="text-neutral-400 mb-2">
                  Lovely Professional University, Punjab
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">
                Achievements
              </h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 p-4">
                  <h4 className="text-white font-medium mb-1">JEE MAINS</h4>
                  <p className="text-neutral-500 text-sm">
                    ETH India 2024 Winner
                  </p>
                </div>
                <div className="border border-neutral-800 p-4">
                  <h4 className="text-white font-medium mb-1">Fitness</h4>
                  <p className="text-neutral-500 text-sm">
                    Holding 1hr Plank Record
                  </p>
                </div>
                <div className="border border-neutral-800 p-4">
                  <h4 className="text-white font-medium mb-1">Sports</h4>
                  <p className="text-neutral-500 text-sm">
                    National Level Athlete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
