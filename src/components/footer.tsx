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
    <footer className="py-12 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link
                href="#home"
                className="text-2xl font-bold tracking-tighter"
              >
                <span className="text-white">K</span>
                <span className="text-neutral-400">S</span>
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <Link
                  href="https://github.com/kanwarsinghrajawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:kanwarsinghrajawat3@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
              <p className="text-neutral-600 text-sm">
                © {new Date().getFullYear()} Kanwar Singh. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
