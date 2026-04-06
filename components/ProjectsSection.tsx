"use client";

import { motion, Variants } from "framer-motion";

interface Project {
  title: string;
  tag: string;
  description: string;
  badge: string;
  wide?: boolean;
}

const projects: Project[] = [
  {
    title: "TrafficGuard AI",
    tag: "React · Firebase · Google Maps API",
    description:
      "Real-time traffic incident reporting platform with live map visualization and emergency alert system. Built for GDG Build for Chaos hackathon.",
    badge: "Hackathon Project",
  },
  {
    title: "StyleSync AI",
    tag: "React · Node.js · Firebase · Python Flask",
    description:
      "AI-powered virtual fashion try-on platform. Upload your image, visualize outfits using PIL-based image compositing, and get style recommendations. Built during a GDG hackathon.",
    badge: "AI · First Hackathon",
  },
  {
    title: "Health Emergency Response System",
    tag: "Java",
    description:
      "Java application that helps accident victims locate nearby hospitals, get navigation or ambulance support, and notify hospitals in advance for emergency preparation.",
    badge: "Core Java",
    wide: true,
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

export default function ProjectsSection() {
  return (
    <section id="work" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#2e4a6e] text-xs uppercase tracking-[0.3em] mb-3 font-medium">Selected Work</p>
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "0.04em" }}
          >
            Projects
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
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className={`
                group relative flex flex-col justify-between
                rounded-2xl p-8 overflow-hidden
                transition-all duration-400 ease-out cursor-default
                ${project.wide ? "md:col-span-2 md:flex-row md:items-center md:gap-12" : ""}
              `}
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

              {/* Content */}
              <div className={project.wide ? "w-full md:w-2/3" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#2e4a6e] bg-[#2e4a6e]/10 px-3 py-1 rounded-full border border-[#2e4a6e]/20">
                    {project.badge}
                  </span>
                </div>

                <h3
                  className="font-display uppercase text-white leading-none mb-2"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "0.04em" }}
                >
                  {project.title}
                </h3>

                <p className="text-[#b0bec5]/60 text-xs tracking-[0.15em] uppercase font-medium mb-5">
                  {project.tag}
                </p>

                <p className="text-[#b0bec5] font-sans font-light leading-relaxed text-[0.95rem]">
                  {project.description}
                </p>
              </div>

              {/* Arrow decoration on wide card */}
              {project.wide && (
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#2e4a6e]/30 text-[#2e4a6e] group-hover:border-[#2e4a6e]/80 transition-colors flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
