"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 20;

export default function CursorTrail() {
  const [hasMounted, setHasMounted] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setHasMounted(true);

    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const next = [...prev, { x: e.clientX, y: e.clientY }];
        return next.length > TRAIL_LENGTH ? next.slice(-TRAIL_LENGTH) : next;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;

    const animate = () => {
      setTrail((prev) => {
        if (prev.length < 2) return prev;
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
  }, [hasMounted]);

  if (!hasMounted) return null; // 👈 Prevents hydration mismatch

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
        stroke="#00FFFF"
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
