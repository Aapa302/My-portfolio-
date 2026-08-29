"use client";

import { motion } from "framer-motion";
import { Smartphone, Bot, Rocket, Cpu } from "lucide-react";

const statHighlights = [
  {
    icon: Rocket,
    title: "4+ Projects Shipped",
    description: "Production-ready web & mobile applications built end-to-end.",
    badge: "Track Record",
  },
  {
    icon: Smartphone,
    title: "Rapid AI-Powered Delivery",
    description: "Leveraging AI coding agents to design, build, and deploy full-stack products faster than traditional development cycles.",
    badge: "Unique Method",
  },
  {
    icon: Bot,
    title: "AI-First Development",
    description: "Leveraging cutting-edge AI coding agents & Gemini API to amplify build speed and accuracy.",
    badge: "Next-Gen Tech",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#030303] text-[#f5f5f7] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Cpu className="w-3.5 h-3.5" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Building the Future directly from a Smartphone
          </motion.h2>
        </div>

        {/* Content & Paragraphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-12 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
            >
              I am an independent, mobile-only AI app developer pushing the boundaries of software creation. My entire development workflow takes place directly on a smartphone — zero desktop computers, zero traditional rigs. By pairing mobile power with next-generation AI coding agents, I conceptualize, build, test, and ship complete full-stack web platforms on the go.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.46, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
            >
              My technology stack centers on <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">Firebase</span>, and the <span className="text-white font-medium">Gemini API</span>. From complex multi-agent simulations to speech-recognition utility tools for local dialect shopkeepers, I specialize in transforming ambitious concepts into high-impact products rapidly and independently.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.58, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
            >
              I believe the future of software engineering lies in human-AI collaboration. By orchestrating AI agents as virtual team members, I deliver robust, scalable application architecture, fluid user interfaces, and custom AI logic — proving that real innovation is driven by vision and execution, regardless of device.
            </motion.p>
          </div>
        </div>

        {/* 3 Stat/Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statHighlights.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {stat.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
