"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0–30% (center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.22, 0.30], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.30], [60, -60]);

  // Section 2: 30–60% (left)
  const opacity2 = useTransform(scrollYProgress, [0.30, 0.38, 0.52, 0.60], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.30, 0.60], [60, -60]);

  // Section 3: 60–90% (right)
  const opacity3 = useTransform(scrollYProgress, [0.60, 0.68, 0.82, 0.92], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.60, 0.92], [60, -60]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* ── Section 1: Center ── */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1
          className="font-display uppercase text-white leading-none text-shadow"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", letterSpacing: "0.04em" }}
        >
          Hi, I&apos;m<br />Shubham Vaidya.
        </h1>
        <p
          className="mt-5 font-sans font-light text-[#b0bec5] text-shadow-sm"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}
        >
          Creative Developer &amp; Problem Solver.
        </p>
      </motion.div>

      {/* ── Section 2: Left ── */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:pl-[8%] max-w-[55%]"
      >
        <h2
          className="font-display uppercase text-white leading-none text-shadow"
          style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", letterSpacing: "0.04em" }}
        >
          I build<br />digital<br />experiences.
        </h2>
        <p
          className="mt-4 font-sans font-light text-[#b0bec5] text-shadow-sm max-w-sm"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}
        >
          From health systems to AI-powered fashion platforms.
        </p>
      </motion.div>

      {/* ── Section 3: Right ── */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-8 md:pr-[8%] max-w-[55%] ml-auto"
      >
        <h2
          className="font-display uppercase text-white leading-none text-shadow"
          style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", letterSpacing: "0.04em" }}
        >
          Design meets<br />Engineering.
        </h2>
        <p
          className="mt-4 font-sans font-light text-[#b0bec5] text-shadow-sm max-w-sm"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}
        >
          Turning complex problems into elegant, real-world solutions.
        </p>
      </motion.div>
    </div>
  );
}
