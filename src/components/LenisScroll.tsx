"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: ReactNode;
};

export default function LenisScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // SLOW & SMOOTH: lower = slower
      easing: (t) => t, // linear, let lerp do all the smoothing
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
