"use client";

import { motion, Variants } from "framer-motion";

const profiles = [
  {
    label: "LinkedIn",
    handle: "shubham-vaidya-309529340",
    url: "https://www.linkedin.com/in/shubham-vaidya-309529340/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    handle: "Shubham-Vaidya",
    url: "https://github.com/Shubham-Vaidya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    color: "#ffffff",
  },
  {
    label: "LeetCode",
    handle: "Shubham26Vaidya",
    url: "https://leetcode.com/u/Shubham26Vaidya/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    color: "#FFA116",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function CodingProfilesSection() {
  return (
    <section id="profiles" className="w-full bg-[#050a14] py-32 px-6 border-t border-white/5">
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
            Find Me On
          </p>
          <h2
            className="font-display uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", letterSpacing: "0.04em" }}
          >
            Profiles
          </h2>
        </motion.div>

        {/* Profile cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {profiles.map((profile, i) => (
            <motion.a
              key={i}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative flex flex-col items-start justify-between rounded-2xl p-8 overflow-hidden transition-all duration-400 ease-out"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              whileHover={{
                borderColor: "rgba(46,74,110,0.6)",
                boxShadow: "0 0 32px rgba(46,74,110,0.2)",
                y: -4,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#2e4a6e]/40 to-transparent group-hover:via-[#2e4a6e]/80 transition-all duration-500" />
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#2e4a6e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

              <div className="relative z-10 w-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: profile.color, background: `${profile.color}18`, border: `1px solid ${profile.color}30` }}
                >
                  {profile.icon}
                </div>

                <h3
                  className="font-display uppercase text-white leading-none mb-2"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "0.04em" }}
                >
                  {profile.label}
                </h3>

                <p className="text-[#b0bec5]/60 text-xs tracking-[0.12em] font-medium mb-6">
                  @{profile.handle}
                </p>

                {/* Arrow CTA */}
                <div className="flex items-center gap-2 text-[#2e4a6e] text-xs uppercase tracking-[0.15em] font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Visit Profile</span>
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
