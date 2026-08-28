"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function IntroBanner() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] bg-[#030303] text-[#f5f5f7] flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden border-b border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full max-w-7xl mx-auto">

        {/* Left / Center-Left: Metallic typography & overlapping portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8 relative flex items-center justify-start min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]"
        >
          {/* Huge Display Text */}
          <h1 className="font-display font-extrabold text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter uppercase leading-none bg-gradient-to-br from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent drop-shadow-2xl z-0 select-none">
            HANU <br className="hidden sm:inline" /> AAPA
          </h1>

          {/* Overlapping Moody Portrait - Magazine cover style */}
          <div className="absolute right-0 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-48 sm:w-72 lg:w-96 h-64 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden z-10 shadow-2xl border border-white/20 backdrop-blur-sm group">
            <Image
              src="/images/hero-bg.png"
              alt="Hanu Aapa Portrait"
              fill
              priority
              unoptimized
              className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right Side: Elegant Serif Tagline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right z-20 space-y-4"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-neutral-400 font-mono">
            Introduction
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-100 leading-snug">
            Creating Websites <br />
            That Feel Alive.
          </h2>
        </motion.div>
      </div>

      {/* Bottom Footer Row within Intro Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10"
      >
        {/* Bottom-Left Subtext */}
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
          Turning creative ideas into interactive and high-quality web experiences.
        </p>

        {/* Bottom-Right Pill Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 group hover:scale-105 active:scale-95"
        >
          <span>HANU AAPA</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
