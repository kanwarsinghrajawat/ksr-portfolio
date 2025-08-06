"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from "react-scroll-parallax";

export default function LenisScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // SLOW & SMOOTH: lower = slower
      easing: (t) => t, // linear, let lerp do all the smoothing
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <ParallaxProvider>{children}</ParallaxProvider>;
}
