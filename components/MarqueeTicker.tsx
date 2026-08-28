"use client";

import { motion } from "framer-motion";

const items = [
  "FRONTEND",
  "DEVELOPER",
  "HANU AAPA",
  "FULL-STACK",
];

// Repeat list multiple times to fill wide screens seamlessly
const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="w-full h-16 sm:h-20 bg-[#030303] border-y border-white/10 flex items-center overflow-hidden select-none relative z-20">
      <motion.div
        className="flex whitespace-nowrap items-center shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Render two identical sets inside the moving container for seamless 50% shift loop */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {repeatedItems.map((item, index) => (
            <span key={`first-${index}`} className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span className="font-display font-bold uppercase tracking-widest text-base sm:text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors duration-200">
                {item}
              </span>
              <span className="text-indigo-400 text-xs sm:text-sm font-bold">•</span>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {repeatedItems.map((item, index) => (
            <span key={`second-${index}`} className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span className="font-display font-bold uppercase tracking-widest text-base sm:text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors duration-200">
                {item}
              </span>
              <span className="text-indigo-400 text-xs sm:text-sm font-bold">•</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
