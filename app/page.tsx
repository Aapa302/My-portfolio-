import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import IntroBanner from "@/components/IntroBanner";
import MarqueeTicker from "@/components/MarqueeTicker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col selection:bg-indigo-500 selection:text-white">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <IntroBanner />
        <MarqueeTicker />
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
