"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Eye, EyeOff, ArrowRight } from "lucide-react";
import Image from "next/image";

// Simple custom Instagram icon SVG wrapper or component
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const techPills = [
  { name: "Next.js", color: "from-blue-500/20 to-neutral-800" },
  { name: "React.js", color: "from-cyan-500/20 to-neutral-800" },
  { name: "Firebase", color: "from-amber-500/20 to-neutral-800" },
  { name: "Gemini API", color: "from-purple-500/20 to-neutral-800" },
  { name: "Tailwind CSS", color: "from-teal-500/20 to-neutral-800" },
];

export default function Hero() {
  const [showCard, setShowCard] = useState(true);
  const [hasProfileImage, setHasProfileImage] = useState(false);

  // Motion values for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [12, -12]);
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    // Check if public/images/profile.jpg exists
    const img = new window.Image();
    img.src = "/images/profile.jpg";
    img.onload = () => setHasProfileImage(true);
    img.onerror = () => setHasProfileImage(false);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 lg:py-24 overflow-hidden">
      {/* Background Soft Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Status & Role Badge */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Available for Work Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Work
              </div>

              {/* Role Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Full-Stack AI App Developer
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                Hanu Aapa
              </h1>
              <p className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-neutral-300 tracking-tight leading-snug">
                Turning creative ideas into interactive high-quality web experiences.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Building modern, AI-powered apps with clean, responsive interfaces. Turning ideas into real, working products — end to end.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techPills.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${tech.color} border border-white/10 text-xs font-medium text-neutral-200 shadow-sm backdrop-blur-sm hover:border-white/25 transition-colors`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all duration-200 shadow-lg shadow-white/5 active:scale-95"
              >
                About Me
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowCard(!showCard)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 font-medium text-sm transition-all duration-200 backdrop-blur-md active:scale-95"
              >
                {showCard ? (
                  <>
                    <EyeOff className="w-4 h-4 text-neutral-400" />
                    Hide Card
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-neutral-400" />
                    Show Card
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: ID-Badge/Lanyard Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[420px]">
            <AnimatePresence>
              {showCard && (
                <motion.div
                  key="id-card"
                  initial={{ opacity: 0, scale: 0.8, rotate: -8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 8, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative flex flex-col items-center perspective-1000 cursor-pointer group"
                >
                  {/* Lanyard Strap Top */}
                  <div className="w-3 h-16 bg-gradient-to-b from-neutral-800 to-indigo-600 rounded-t-sm shadow-md" />

                  {/* Lanyard Clip Metal Badge */}
                  <div className="w-8 h-5 bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 rounded-sm border border-neutral-300 shadow-md flex items-center justify-center -mt-1 z-20">
                    <div className="w-3 h-1.5 bg-neutral-800 rounded-full" />
                  </div>

                  {/* ID Badge Container */}
                  <div className="relative w-72 sm:w-80 bg-neutral-900/90 border border-white/15 rounded-2xl p-5 shadow-2xl backdrop-blur-xl mt-1 text-center group-hover:border-indigo-500/50 transition-colors duration-300">
                    {/* Top Lanyard Hole Slot */}
                    <div className="w-12 h-2.5 bg-black/60 rounded-full mx-auto mb-4 border border-white/10" />

                    {/* Photo Container */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950 via-neutral-900 to-purple-950 border border-white/10 flex items-center justify-center shadow-inner">
                      {hasProfileImage ? (
                        <Image
                          src="/images/profile.jpg"
                          alt="Hanu Aapa"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 via-neutral-900 to-purple-900/60 flex flex-col items-center justify-center text-neutral-400 p-4">
                          <div className="w-20 h-20 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center mb-2">
                            <span className="font-display font-bold text-3xl text-indigo-400">HA</span>
                          </div>
                          <span className="text-xs font-medium text-neutral-400">Profile Photo Placeholder</span>
                        </div>
                      )}
                    </div>

                    {/* Card Info */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-col items-center">
                      <h3 className="font-display font-bold text-lg text-white">
                        Name: Hanu Aapa
                      </h3>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5 uppercase tracking-wider">
                        Full-Stack AI Developer
                      </p>

                      {/* Instagram Placeholder Handle */}
                      <div className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-pink-500/50 transition-colors">
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                        <span>@instagram_handle_placeholder</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
