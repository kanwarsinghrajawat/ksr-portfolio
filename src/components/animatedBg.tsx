"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Line {
      x: number;
      y: number;
      width: number;
      height: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.width = Math.random() * 2 + 0.1;
        this.height = Math.random() * 40 + 10;
        this.vx = Math.random() * 0.5 - 0.25;
        this.vy = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = "#ffffff";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.rotate(Math.PI / 2);
        ctx!.globalAlpha = this.alpha;
        ctx!.fillStyle = this.color;
        ctx!.fillRect(0, 0, this.width, this.height);
        ctx!.restore();
      }
    }

    const lines: Line[] = [];
    for (let i = 0; i < 50; i++) {
      lines.push(new Line());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const line of lines) {
        line.update();
        line.draw();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
    </>
  );
}
