"use client";

import { motion } from "framer-motion";

const skills = [
  "Java", "C", "C++", "Python", "React", "Next.js",
  "Firebase", "Flask", "MySQL", "DSA", "Git",
];

// Triple the list so the seamless loop has enough content
const marquee = [...skills, ...skills, ...skills];

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#050a14] py-14 border-y border-white/5 overflow-hidden relative">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050a14] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050a14] to-transparent" />

      <motion.div
        className="flex items-center gap-0 w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 18, ease: "linear" }}
      >
        {marquee.map((skill, i) => (
          <div key={i} className="flex items-center">
            <span
              className="font-display uppercase whitespace-nowrap text-white/20 hover:text-white/70 transition-colors duration-300 cursor-default"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.08em", padding: "0 1.5rem" }}
            >
              {skill}
            </span>
            <span
              className="text-[#2e4a6e] select-none"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              ·
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
