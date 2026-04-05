"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

// Build the exact filenames matching the actual files on disk
const currentFrame = (index: number): string => {
  const padded = index.toString().padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Render a specific frame index (0-based) onto the canvas
  const renderFrame = (index: number) => {
    const img = imagesRef.current[index];
    const canvas = canvasRef.current;
    if (!img || !canvas || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Keep canvas pixel dimensions matching the viewport
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // object-fit: cover math
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);

      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));

        if (loaded === FRAME_COUNT) {
          imagesRef.current = images;
          setLoaded(true);
          requestAnimationFrame(() => renderFrame(0));
        }
      };

      img.onerror = () => {
        // Count errored frames too so we don't hang forever
        loaded++;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };

      images[i] = img;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    }
  });

  // Re-render on window resize
  useEffect(() => {
    const handleResize = () => {
      if (loaded) {
        requestAnimationFrame(() => renderFrame(Math.round(frameIndex.get())));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Loading Overlay */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#050a14]">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b0bec5] mb-6 font-sans">
              Loading Experience
            </p>
            <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2e4a6e] rounded-full transition-all duration-150"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-[#2e4a6e] text-sm mt-4 font-display tracking-widest">
              {loadProgress}%
            </p>
          </div>
        )}

        {/* Canvas layer */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Gradient vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

        {/* Parallax text overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
