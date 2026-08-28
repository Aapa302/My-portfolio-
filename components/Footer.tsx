"use client";

import { siInstagram, siGithub } from "simple-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030303] border-t border-white/10 text-neutral-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Left: Logo + "Hanu Aapa" + tagline repeat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                <div className="w-full h-full rounded-full bg-[#030303] flex items-center justify-center font-display font-bold text-white text-base tracking-tight group-hover:bg-transparent transition-colors duration-300">
                  H
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                Hanu Aapa
              </span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm">
              Turning creative ideas into interactive high-quality web experiences.
            </p>
          </div>

          {/* Right: "Follow Me" label + Instagram & GitHub icon links */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Follow Me
            </span>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 text-neutral-300 hover:text-pink-400 transition-all duration-300"
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
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 text-neutral-300 hover:text-white transition-all duration-300"
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
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 text-center text-xs text-neutral-500">
          <p>© {currentYear} Hanu Aapa. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
