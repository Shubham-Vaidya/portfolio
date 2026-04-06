"use client";

import { motion, Variants } from "framer-motion";

interface Achievement {
  title: string;
  organizer: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  {
    title: "JEE Mains — 96 Percentile",
    organizer: "National Testing Agency",
    description:
      "Scored in the top 4% nationally in JEE Mains. Also qualified for JEE Advanced based on this performance.",
    badge: "Academic Excellence",
    highlight: true,
  },
  {
    title: "Certificate of Excellence — Last Standing Ronin",
    organizer: "GDG On Campus – VIT Mumbai",
    description:
      "Recognized for excelling in debugging, algorithms, and product development at the Last Standing Ronin — a time-based coding & DSA competition.",
    badge: "Excellence Award",
  },
  {
    title: "INVASION: Hack The Ghost — Certificate of Participation",
    organizer: "GDG On Campus – VIT Mumbai & UMIT",
    description:
      "Participated in the INVASION hackathon at Vidyalankar Institute of Technology, organized by GDG On Campus – VIT Mumbai & UMIT.",
    badge: "Hackathon",
  },
  {
    title: "JEE Advanced — Qualified",
    organizer: "IIT Joint Admission Board",
    description:
      "Qualified for JEE Advanced based on JEE Mains performance, earning eligibility to sit for India's most prestigious engineering entrance exam.",
    badge: "Academic",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function CertificationsSection() {
  return (
    <section id="achievements" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
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
            Certifications & Achievements
          </p>
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "0.04em" }}
          >
            Accolades
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((item, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-2xl p-8 overflow-hidden transition-all duration-400 ease-out cursor-default"
              style={{
                background: item.highlight
                  ? "rgba(46,74,110,0.12)"
                  : "rgba(255,255,255,0.03)",
                border: item.highlight
                  ? "1px solid rgba(46,74,110,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              whileHover={{
                borderColor: "rgba(46,74,110,0.6)",
                boxShadow: "0 0 32px rgba(46,74,110,0.2)",
              }}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent to-transparent transition-all duration-500 ${
                  item.highlight
                    ? "via-[#2e4a6e]/80"
                    : "via-[#2e4a6e]/40 group-hover:via-[#2e4a6e]/80"
                }`}
              />

              {/* Highlight glow for JEE card */}
              {item.highlight && (
                <div className="absolute inset-0 bg-[#2e4a6e]/5 rounded-2xl pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2e4a6e] bg-[#2e4a6e]/10 px-3 py-1 rounded-full border border-[#2e4a6e]/20">
                    {item.badge}
                  </span>
                  {item.highlight && (
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      ★ Top 4%
                    </span>
                  )}
                </div>

                <h3
                  className="font-display uppercase text-white leading-tight mb-2"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", letterSpacing: "0.04em" }}
                >
                  {item.title}
                </h3>

                <p className="text-[#b0bec5]/60 text-xs tracking-[0.15em] uppercase font-medium mb-4">
                  {item.organizer}
                </p>

                <p className="text-[#b0bec5] font-sans font-light leading-relaxed text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
