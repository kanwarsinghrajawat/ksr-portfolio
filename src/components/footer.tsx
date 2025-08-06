"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
} from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-[#111213] text-white border-t border-white/10 py-10 min-h-full h-full">
      <h2 className="text-7xl md:text-[300px] leading-tight font-mabry">
        <span className="block italic text-center">KANWAR</span>
        <span className="block italic text-center">SINGH</span>
      </h2>
      <hr></hr>
      <div className="container mx-auto w-full px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex flex-col md:items-end items-center gap-4 w-full">
              <div className="flex gap-8 items-center justify-between">
                <Link
                  href="https://github.com/kanwarsinghrajawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <Github className="w-7 h-7" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <Linkedin className="w-7 h-7" />
                </Link>
                <Link
                  href="mailto:kanwarsinghrajawat3@gmail.com"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <Mail className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
