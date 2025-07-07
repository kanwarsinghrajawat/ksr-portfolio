"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 20;

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number | null>(null);
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const next = [...prev, { x: e.clientX, y: e.clientY }];
        return next.length > TRAIL_LENGTH ? next.slice(-TRAIL_LENGTH) : next;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the trail for smoothness
  useEffect(() => {
    const animate = () => {
      setTrail((prev) => {
        if (prev.length < 2) return prev;
        // Slightly interpolate each point towards the next
        return prev.map((point, i, arr) => {
          if (i === arr.length - 1) return point;
          return {
            x: point.x + (arr[i + 1].x - point.x) * 0.35,
            y: point.y + (arr[i + 1].y - point.y) * 0.35,
          };
        });
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Build the SVG points string
  const points = trail.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg
      className="fixed top-0 left-0 pointer-events-none z-50 w-screen h-screen"
      width={windowSize.width}
      height={windowSize.height}
      style={{ width: "100vw", height: "100vh" }}
    >
      <polyline
        points={points}
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{
          filter: "drop-shadow(0 0 6px #fff8)",
          transition: "stroke 0.2s",
        }}
      />
    </svg>
  );
}
