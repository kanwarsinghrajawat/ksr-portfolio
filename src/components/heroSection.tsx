"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  LuGithub as Github,
  LuLinkedin as Linkedin,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuPhone as Phone,
} from "react-icons/lu";

import Link from "next/link";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // assert once that canvasRef.current is not null
    const canvasEl = canvasRef.current!;
    const ctx = canvasEl.getContext("2d")!;

    // set your size
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;
    const maxDistance = 200;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        // now canvasEl can’t be null
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() - 0.5;
        this.speedY = Math.random() - 0.5;
        this.color = `rgba(${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 255
        )}, 0.7)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // use canvasEl here too
        if (this.x > canvasEl.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvasEl.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ... rest of your init, animate, etc.
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/70 to-slate-900/70 z-10"></div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                KANWAR SINGH
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
              Software Developer Engineer
              <span className="text-purple-400"> (3yrs)</span>
            </h2>

            <div className="flex flex-col space-y-3 mb-8">
              <div className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>9991917304</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Haryana, India</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <a
                  href="mailto:kanwarsinghrajawat3@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  kanwarsinghrajawat3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/kanwarsinghrajawat"
                target="_blank"
                className="bg-slate-800 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kanwar-singh-241a60169/"
                target="_blank"
                className="bg-slate-800 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">KS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-slate-300 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
