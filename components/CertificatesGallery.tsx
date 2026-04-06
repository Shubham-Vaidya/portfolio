"use client";

import { motion, Variants } from "framer-motion";

const certificates = [
  {
    title: "INVASION: Hack The Ghost",
    issuer: "GDG On Campus – VIT Mumbai & UMIT",
    type: "Certificate of Participation",
    description:
      "Participated in the INVASION hackathon at Vidyalankar Institute of Technology. A competitive tech event organized by GDG On Campus – VIT Mumbai & UMIT.",
    badge: "Hackathon",
    file: "/certificates/Shubham Vaidya - Invasion Certificates.pdf",
    icon: "🏴",
  },
  {
    title: "Last Standing Ronin",
    issuer: "GDG On Campus – VIT Mumbai",
    type: "Certificate of Excellence",
    description:
      "Recognized for outstanding performance in debugging, algorithms, and product development in this time-based coding & DSA competition.",
    badge: "Excellence",
    file: "/certificates/Shubham Vaidya  LastStandingRonin certificate.pdf",
    icon: "⚔️",
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

export default function CertificatesGallery() {
  return (
    <section id="certificates" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
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
            Hackathon & Event Certificates
          </p>
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "0.04em" }}
          >
            Certificates
          </h2>
        </motion.div>

        {/* Certificate cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificates.map((cert, i) => (
            <motion.div key={i} variants={cardVariants}>
              <motion.article
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-400 ease-out h-full"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                whileHover={{
                  borderColor: "rgba(46,74,110,0.6)",
                  boxShadow: "0 0 32px rgba(46,74,110,0.2)",
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#2e4a6e]/40 to-transparent group-hover:via-[#2e4a6e]/80 transition-all duration-500" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#2e4a6e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

                <div className="relative z-10 p-8">
                  {/* Icon & badge row */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2e4a6e] bg-[#2e4a6e]/10 px-3 py-1 rounded-full border border-[#2e4a6e]/20">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {cert.type}
                    </span>
                  </div>

                  <h3
                    className="font-display uppercase text-white leading-tight mb-2"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "0.04em" }}
                  >
                    {cert.title}
                  </h3>

                  <p className="text-[#b0bec5]/60 text-xs tracking-[0.15em] uppercase font-medium mb-4">
                    {cert.issuer}
                  </p>

                  <p className="text-[#b0bec5] font-sans font-light leading-relaxed text-[0.95rem] mb-8">
                    {cert.description}
                  </p>

                  {/* View / Download button */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 border border-[#2e4a6e]/40 text-[#b0bec5] hover:text-white hover:border-[#2e4a6e] text-xs uppercase tracking-[0.2em] font-medium px-5 py-3 rounded-full transition-all duration-300 hover:bg-[#2e4a6e]/10"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
