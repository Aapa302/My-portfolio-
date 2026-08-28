"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Award,
  Code2,
  ExternalLink,
  PlusCircle,
  Sparkles,
  Bot,
  Video,
  Mic,
  Terminal as TerminalIcon,
} from "lucide-react";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siTailwindcss,
  siFirebase,
  siGooglegemini,
  siGit,
  siGithub,
  siRender,
  siVercel,
} from "simple-icons";

type TabType = "projects" | "certificates" | "techstack";

const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
  { id: "projects", label: "Projects", icon: Layers },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "techstack", label: "Tech Stack", icon: Code2 },
];

const projectsData = [
  {
    id: "apex-os",
    title: "APEX OS",
    description:
      "A full-stack AI autonomous company simulation platform with a CEO → Researcher → Engineer → Reviewer agent chain, voice mode ('Hey APEX'), and a DNA Virtual Lab with self-healing data encoding.",
    tags: ["React", "Node.js", "Firebase", "Gemini API"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: Bot,
    liveUrl: "https://apex-os-frontend.onrender.com/",
    githubUrl: "https://github.com/Aapa302/apex-os-frontend",
  },
  {
    id: "reelforge",
    title: "ReelForge",
    description:
      "An automated video editing app that helps local businesses turn raw footage into polished social-ready reels.",
    tags: ["React", "Node.js", "Video Processing"],
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    icon: Video,
    liveUrl: "https://reelforge-frontend-3wf0.onrender.com/",
    githubUrl: "https://github.com/Aapa302/reelforge-frontend",
  },
  {
    id: "voicekhata",
    title: "VoiceKhata",
    description:
      "A voice-based billing and udhaar (credit) tracking app built for Gujarati shopkeepers, with name-matching accuracy tuned for local dialects and a 'Hey Khata' voice assistant.",
    tags: ["React", "Firebase", "Speech Recognition"],
    gradient: "from-emerald-600 via-teal-600 to-amber-500",
    icon: Mic,
    liveUrl: "https://voices-udhar-frontend.onrender.com/",
    githubUrl: "https://github.com/Aapa302/Voice-khata",
  },
  {
    id: "hypereel",
    title: "HypeReel",
    description:
      "An AI-powered tool that watches uploaded videos and generates both descriptive and catchy viral-style captions, along with trending hashtags across platforms to help videos go viral.",
    tags: ["React", "Node.js", "Gemini API"],
    gradient: "from-rose-600 via-pink-600 to-red-500",
    icon: Sparkles,
    liveUrl: "https://hypereel.onrender.com",
    githubUrl: "https://github.com/Aapa302/hypereel",
  },
];

const techStackData = [
  { name: "HTML5", icon: siHtml5, hex: "#E34F26" },
  { name: "CSS3", icon: siCss, hex: "#1572B6" },
  { name: "JavaScript", icon: siJavascript, hex: "#F7DF1E" },
  { name: "TypeScript", icon: siTypescript, hex: "#3178C6" },
  { name: "React", icon: siReact, hex: "#61DAFB" },
  { name: "Next.js", icon: siNextdotjs, hex: "#FFFFFF" },
  { name: "Node.js", icon: siNodedotjs, hex: "#5FA04E" },
  { name: "Tailwind CSS", icon: siTailwindcss, hex: "#06B6D4" },
  { name: "Firebase", icon: siFirebase, hex: "#DD2C00" },
  { name: "Gemini API", icon: siGooglegemini, hex: "#8E75FF" },
  { name: "Git", icon: siGit, hex: "#F05032" },
  { name: "GitHub", icon: siGithub, hex: "#FFFFFF" },
  { name: "Render", icon: siRender, hex: "#46E3B7" },
  { name: "Vercel", icon: siVercel, hex: "#FFFFFF" },
  { name: "Terminal", customIcon: TerminalIcon, hex: "#4E9F3D" },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <section id="showcase" className="relative py-24 bg-[#030303] text-[#f5f5f7] overflow-hidden border-t border-white/5">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Craft, Code & Credentials
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl">
            Explore my latest projects, technical competencies, and professional credentials.
          </p>
        </motion.div>

        {/* Pill-shaped Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm transition-colors duration-300 flex items-center gap-2 z-10 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-neutral-400 font-medium hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 shadow-md shadow-indigo-500/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <motion.div
                key="projects-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projectsData.map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="group bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 hover:border-indigo-500/40 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
                    >
                      <div>
                        {/* Gradient Placeholder Cover Header */}
                        <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-6 flex items-end justify-between overflow-hidden shadow-inner`}>
                          <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                          <div className="relative z-10">
                            <h3 className="font-display font-extrabold text-2xl text-white tracking-tight drop-shadow-md">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 space-y-4">
                          <p className="text-neutral-300 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tag Pills */}
                          <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Links */}
                      <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
                          aria-label={`View Live Site for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
                          aria-label={`View GitHub Repository for ${project.title}`}
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5 fill-current text-neutral-300"
                          >
                            <path d={siGithub.path} />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* CERTIFICATES TAB */}
            {activeTab === "certificates" && (
              <motion.div
                key="certificates-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-2 border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-indigo-500/30 transition-all duration-300 min-h-[260px]"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                      <PlusCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base text-neutral-300 mb-1">
                        Add your certificate
                      </h4>
                      <p className="text-xs text-neutral-400 max-w-xs">
                        Placeholder slot for future certifications and accreditations.
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TECH STACK TAB */}
            {activeTab === "techstack" && (
              <motion.div
                key="techstack-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              >
                {techStackData.map((tech, idx) => {
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.04,
                        borderColor: `${tech.hex}80`,
                        boxShadow: `0 0 20px ${tech.hex}33`,
                      }}
                      transition={{
                        opacity: { duration: 0.3, delay: idx * 0.03 },
                        scale: { duration: 0.2 },
                        borderColor: { duration: 0.2 },
                        boxShadow: { duration: 0.2 },
                      }}
                      className="group bg-neutral-900/60 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center space-y-3 backdrop-blur-md transition-colors duration-300 cursor-pointer"
                    >
                      <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                        {tech.customIcon ? (
                          <tech.customIcon className="w-8 h-8 text-emerald-400" />
                        ) : tech.icon ? (
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="w-7 h-7 fill-current transition-colors"
                            style={{ color: tech.hex }}
                          >
                            <path d={tech.icon.path} />
                          </svg>
                        ) : null}
                      </div>
                      <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
