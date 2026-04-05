"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">

        {/* Left: big display headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full md:w-1/2 shrink-0"
        >
          <h2
            className="font-display uppercase text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "0.03em" }}
          >
            Computer<br />
            Engineering<br />
            Student.<br />
            <span className="text-[#2e4a6e]">Mumbai.</span>
          </h2>
        </motion.div>

        {/* Right: glass bio card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="w-full md:w-1/2"
        >
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-[#2e4a6e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
            {/* Thin top accent line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#2e4a6e]/60 to-transparent" />

            <p className="text-[#b0bec5] font-sans font-light leading-relaxed text-base md:text-lg relative z-10">
              I&apos;m{" "}
              <span className="text-white font-medium">Shubham Vaidya</span>, studying at{" "}
              <span className="text-white font-medium">Vidyalankar Institute of Technology</span>.
              Passionate about building real-world applications with{" "}
              <span className="text-white">Java, C++, Python</span>, and modern web technologies.
            </p>
            <p className="mt-6 text-[#b0bec5] font-sans font-light leading-relaxed text-base md:text-lg relative z-10">
              Currently exploring Data Structures &amp; Algorithms, MySQL, and open-source
              contributions. Always looking for the next hard problem to solve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
