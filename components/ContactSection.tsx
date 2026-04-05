"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#050a14] border-t border-white/5 flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 900,
          height: 900,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          background: "radial-gradient(circle, rgba(46,74,110,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2e4a6e] text-xs uppercase tracking-[0.3em] mb-6 font-medium"
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display uppercase text-white leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)", letterSpacing: "0.04em" }}
        >
          Let&apos;s Build<br />
          <span className="text-[#2e4a6e]">Something.</span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#b0bec5] font-sans font-light mb-14"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
        >
          Open to internships, collaborations, and new opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="mailto:shubham26vaidya@gmail.com"
            className="group flex items-center justify-center gap-3 bg-white text-[#050a14] font-medium tracking-wide px-8 py-4 rounded-full hover:bg-[#b0bec5] transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            shubham26vaidya@gmail.com
          </a>

          <a
            href="tel:+917738839711"
            className="group flex items-center justify-center gap-3 border border-white/20 text-white font-medium tracking-wide px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.72 19.79 19.79 0 01.09 1.1 2 2 0 012.07 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            +91 7738839711
          </a>
        </motion.div>
      </div>

      {/* Footer line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 text-xs font-sans tracking-widest uppercase">
        © {year} Shubham Vaidya · Mumbai
      </div>
    </section>
  );
}
