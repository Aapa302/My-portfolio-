"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, Sparkles, Smartphone, Cpu, Code2 } from "lucide-react";
import Image from "next/image";

interface AboutMeViewProps {
  onBack: () => void;
}

export default function AboutMeView({ onBack }: AboutMeViewProps) {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Soft Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top Header Navigation Bar replacement */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030303]/80 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/20 font-medium text-sm transition-all duration-200 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
              <span>← Back</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 hidden sm:inline">
                About View
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 w-full flex flex-col items-center">
        {/* Small ID-Card Style Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md bg-neutral-900/80 border border-white/15 rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-2xl flex items-center gap-4 mb-10 hover:border-indigo-500/40 transition-colors"
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-950 via-neutral-900 to-purple-950 border border-white/10 flex-shrink-0">
            <Image
              src="/images/profile.png"
              alt="Hanu Aapa"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              ID Badge
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
              Name: Hanu Aapa
            </h3>
            <p className="text-xs text-neutral-400 font-medium mt-0.5">
              Full-Stack AI Developer (Mobile-First Workflow)
            </p>
          </div>
        </motion.div>

        {/* Heading with Typewriter Cursor Effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight inline-flex items-center justify-center flex-wrap gap-x-3">
            <span>About Myself</span>
            <span
              className="inline-block w-1.5 h-9 sm:h-12 bg-indigo-400 animate-pulse ml-1 rounded-full shadow-[0_0_8px_#818cf8]"
              aria-hidden="true"
            />
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Pioneering autonomous full-stack software development built entirely from a smartphone with AI agents.
          </p>
        </motion.div>

        {/* Card/Box with 4 Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-neutral-900/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal mb-10"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-white">Mobile-Only Autonomous Engineer</h2>
              <p className="text-xs text-neutral-400">Zero desktop PCs • Pure mobile velocity</p>
            </div>
          </div>

          <p>
            I am an independent full-stack AI app developer operating with a unique execution model: I design, code, test, and launch production web applications entirely from a smartphone. Without relying on traditional laptop or desktop dev hardware, I leverage mobile computing power coupled with cloud infrastructure to build software from anywhere.
          </p>

          <p>
            My core engineering stack revolves around modern web architecture — utilizing <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Tailwind CSS</span>, <span className="text-white font-medium">Firebase</span>, and the <span className="text-white font-medium">Gemini API</span>. By orchestrating advanced AI coding agents directly through mobile interfaces, I can execute rapid iteration cycles, set up databases, deploy cloud APIs, and push production releases seamlessly.
          </p>

          <p>
            I am genuinely passionate about AI-assisted development and exploring how autonomous AI tools redefine the limits of software creation. Eliminating the friction of traditional setups allows me to focus purely on product logic, user experience, and solving real-world challenges through intelligent software solutions.
          </p>

          <p>
            Whether building interactive AI web tools, high-speed mobile web applications, or automated workflows, my goal is to prove that vision, adaptability, and cutting-edge AI collaboration outweigh traditional hardware constraints when delivering world-class software.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-neutral-400">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Gemini API & AI Agents</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Next.js & Firebase</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-pink-400" />
              <span>Mobile-First Dev Rig</span>
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-semibold text-base shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 group"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#030303] border-t border-white/10 text-neutral-500 py-6 text-center text-xs relative z-10">
        <p>© {new Date().getFullYear()} Hanu Aapa. All rights reserved.</p>
      </footer>
    </div>
  );
}
