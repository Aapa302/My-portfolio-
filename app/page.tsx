import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f5f5f7] flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Hanu Aapa. All rights reserved.</p>
      </footer>
    </div>
  );
}
