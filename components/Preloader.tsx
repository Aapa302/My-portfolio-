"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, User, Globe } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const targetUrl = "hanuaapa.dev";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    // Typewriter effect logic
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= targetUrl.length) {
        setTypedText(targetUrl.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    // Timer to finish preloader after ~4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "unset";
      if (onComplete) {
        onComplete();
      }
    }, 4500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="max-w-md w-full flex flex-col items-center text-center space-y-6">
            {/* Top row of three small circular icon badges */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shadow-md">
                <Code className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shadow-md">
                <User className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shadow-md">
                <Globe className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Bold White Title Text (Two Lines) */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
              >
                Welcome to my
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
                className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight"
              >
                Portfolio Website
              </motion.h1>
            </div>

            {/* Smaller Gray Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.68, ease: "easeOut" }}
              className="text-neutral-400 text-sm sm:text-base font-normal tracking-wide"
            >
              Creating Websites That Feel Alive.
            </motion.p>

            {/* Typewriter URL Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.82, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-neutral-200 shadow-inner"
            >
              <span>{typedText}</span>
              <span className="w-1.5 h-4 bg-indigo-500 animate-pulse" />
            </motion.div>

            {/* Thin Horizontal Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full max-w-xs h-1 bg-white/10 rounded-full overflow-hidden mt-4"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
