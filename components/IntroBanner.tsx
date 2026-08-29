"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function IntroBanner() {
  return (
    <section className="relative w-full bg-[#030303] text-[#f5f5f7] flex flex-col justify-between py-12 px-4 sm:p-10 lg:p-16 overflow-hidden border-b border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full max-w-7xl mx-auto">

        {/* Left / Center-Left: Metallic typography & overlapping portrait */}
        <div className="lg:col-span-8 relative flex items-center justify-start min-h-[300px] sm:min-h-[380px] lg:min-h-[480px]">
          {/* Overlapping Moody Portrait - Layered behind/with the text magazine-cover style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute left-1/4 sm:left-1/3 lg:left-2/5 top-1/2 -translate-y-1/2 w-52 sm:w-72 lg:w-96 h-64 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden z-0 shadow-2xl border border-white/20 backdrop-blur-sm group opacity-85"
          >
            <Image
              src="/images/hero-bg.png"
              alt="Hanu Aapa Portrait"
              fill
              priority
              unoptimized
              className="object-cover object-center grayscale contrast-125 brightness-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay to blend image into dark canvas while keeping text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-[#030303]/40" />
          </motion.div>

          {/* Huge Display Text over/interlocking with portrait */}
          <h1 className="font-display font-extrabold text-5xl sm:text-8xl lg:text-[10rem] tracking-tighter uppercase leading-none text-white drop-shadow-2xl z-10 select-none relative pointer-events-none">
            <motion.span
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-block text-white"
            >
              HANU
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="inline-block text-white"
            >
              AAPA
            </motion.span>
          </h1>
        </div>

        {/* Right Side: Elegant Serif Tagline */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right z-20 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-neutral-400 font-mono">
            Introduction
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-100 leading-snug">
            <motion.span
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="inline-block"
            >
              Creating Websites
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" }}
              className="inline-block"
            >
              That Feel Alive.
            </motion.span>
          </h2>
        </div>
      </div>

      {/* Bottom Footer Row within Intro Banner */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        {/* Bottom-Left Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed"
        >
          Turning creative ideas into interactive and high-quality web experiences.
        </motion.p>

        {/* Bottom-Right Pill Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 group hover:scale-105 active:scale-95"
        >
          <span>HANU AAPA</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
