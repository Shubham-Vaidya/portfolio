"use client";

import { motion } from "framer-motion";

const responsibilities = [
  "Led and organized technical events for the student chapter",
  "Managed hackathon logistics including coordinating with judges",
  "Conducted Freshers' Orientation sessions for new students",
  "Headed Core Team recruitment interviews",
  "Drove collaborative technical initiatives across the student community",
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#2e4a6e] text-xs uppercase tracking-[0.3em] mb-3 font-medium">
            Leadership & Experience
          </p>
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "0.04em" }}
          >
            Leadership
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.article
            className="group relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            whileHover={{
              borderColor: "rgba(46,74,110,0.6)",
              boxShadow: "0 0 40px rgba(46,74,110,0.2)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#2e4a6e]/40 to-transparent group-hover:via-[#2e4a6e]/80 transition-all duration-500" />
            {/* Hover glow */}
            <div className="absolute inset-0 bg-[#2e4a6e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-16">
              {/* Left: role info */}
              <div className="md:w-2/5 mb-8 md:mb-0 shrink-0">
                <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2e4a6e] bg-[#2e4a6e]/10 px-3 py-1 rounded-full border border-[#2e4a6e]/20 mb-6">
                  Student Leadership
                </span>

                <h3
                  className="font-display uppercase text-white leading-tight mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "0.04em" }}
                >
                  CSI Technical Co-Head
                </h3>

                <p className="text-[#b0bec5]/60 text-xs tracking-[0.15em] uppercase font-medium mb-1">
                  Computer Society of India
                </p>
                <p className="text-[#b0bec5]/40 text-xs tracking-[0.12em] uppercase font-medium">
                  VIT Mumbai Chapter
                </p>
              </div>

              {/* Right: responsibilities */}
              <div className="md:w-3/5">
                <p className="text-[#2e4a6e] text-xs uppercase tracking-[0.2em] mb-5 font-medium">
                  Key Contributions
                </p>
                <ul className="space-y-4">
                  {responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-1.5 w-[5px] h-[5px] rounded-full bg-[#2e4a6e] shrink-0" />
                      <span className="text-[#b0bec5] font-sans font-light leading-relaxed text-[0.95rem]">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
