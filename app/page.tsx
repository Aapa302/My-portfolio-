"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import IntroBanner from "@/components/IntroBanner";
import MarqueeTicker from "@/components/MarqueeTicker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutMeView from "@/components/AboutMeView";

export default function Home() {
  const [showAboutPage, setShowAboutPage] = useState(false);

  if (showAboutPage) {
    return <AboutMeView onBack={() => setShowAboutPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col selection:bg-indigo-500 selection:text-white">
      <Preloader />
      <Navbar onAboutClick={() => setShowAboutPage(true)} />
      <main className="flex-grow">
        <IntroBanner />
        <MarqueeTicker />
        <Hero onAboutClick={() => setShowAboutPage(true)} />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
