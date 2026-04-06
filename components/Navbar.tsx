"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050a14]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-display tracking-widest text-white hover:text-[#b0bec5] transition-colors"
        >
          SV.
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-[#b0bec5]">
          <a href="#work" className="hover:text-white transition-colors duration-200">
            Work
          </a>
          <a href="#achievements" className="hover:text-white transition-colors duration-200">
            Achievements
          </a>
          <a href="#leadership" className="hover:text-white transition-colors duration-200">
            Leadership
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
          <a
            href="/certificates/2-Column resume .pdf"
            download
            className="flex items-center gap-2 border border-white/20 text-white text-xs px-4 py-2 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
