"use client";

import { motion } from "framer-motion";
import { siInstagram, siGithub } from "simple-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030303] border-t border-white/10 text-neutral-400 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6 text-center">
        {/* Uppercase Label */}
        <motion.span
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xs font-semibold tracking-widest text-neutral-400 uppercase inline-block"
        >
          FOLLOW ME
        </motion.span>

        {/* Social Icons Row */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-neutral-300 hover:text-pink-400 transition-all duration-300 active:scale-95"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d={siInstagram.path} />
            </svg>
          </a>
          <a
            href="#"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-300 active:scale-95"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d={siGithub.path} />
            </svg>
          </a>
        </div>

        {/* Copyright Line */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="text-xs text-neutral-400 leading-relaxed"
        >
          Copyright © {currentYear} All Rights Reserved | Created by{" "}
          <span className="font-bold underline text-white">Hanu Aapa</span>
        </motion.p>
      </div>
    </footer>
  );
}
