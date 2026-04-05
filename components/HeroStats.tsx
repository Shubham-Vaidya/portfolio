"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  delay: number;
}

function AnimatedStat({ value, suffix = "", decimals = 0, label, sublabel, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };

    const id = setTimeout(() => requestAnimationFrame(tick), delay * 1000);
    return () => clearTimeout(id);
  }, [isInView, value, delay]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-3"
    >
      <div
        className="font-display text-white leading-none"
        style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
      >
        {formatted}
        <span className="text-[#2e4a6e]">{suffix}</span>
      </div>
      <div className="text-[#b0bec5] uppercase tracking-[0.2em] text-sm font-medium">
        {label}
      </div>
      <div className="text-white/30 text-xs tracking-widest uppercase">{sublabel}</div>
    </motion.div>
  );
}

export default function HeroStats() {
  return (
    <section className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8">
        <AnimatedStat value={9.6} suffix="" decimals={1} label="First Year Engineering" sublabel="CGPI" delay={0} />
        <AnimatedStat value={95.2} suffix="%" decimals={1} label="SSC Score" sublabel="Maharashtra Board" delay={0.15} />
        <AnimatedStat value={3} suffix="+" decimals={0} label="Projects" sublabel="Built & Deployed" delay={0.3} />
      </div>
    </section>
  );
}
