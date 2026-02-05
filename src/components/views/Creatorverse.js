// components/views/Creatorverse.js
"use client";
import { ArrowUpRight } from 'lucide-react';
import HoverProjects from '@/components/HoverProjects'; // Ensure these exist from previous steps
import AboutSection from '@/components/AboutSection';
import FAQ from '@/components/FAQ';

export default function Creatorverse() {
  return (
    <div className="pt-20">
      
      {/* 1. HERO VIDEO (Static placeholder for logic) */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-30">
           <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-lines-render-loop-42866-large.mp4" type="video/mp4" />
        </video>
        <div className="z-10 text-center">
            <h1 className="text-8xl font-bold uppercase tracking-tighter">Whitespace</h1>
            <p className="tracking-[0.5em] mt-4 uppercase text-xs">The Creatorverse</p>
        </div>
      </section>

      {/* 2. SERVICES & MENU */}
      <section className="py-20 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
        {['About Us', 'Our Services', 'Team', 'Reach Out'].map((item) => (
          <div key={item} className="h-40 border-t border-white/20 flex flex-col justify-end pb-4 hover:pl-4 transition-all cursor-pointer group">
            <ArrowUpRight className="mb-auto self-end opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-xl uppercase tracking-widest">{item}</span>
          </div>
        ))}
      </section>

      {/* 3. CASE STUDY (Project Gallery) */}
      <HoverProjects />

      {/* 4. FAQ SECTION (Only here) */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight">Frequently Asked Questions</h2>
        <FAQ />
      </section>

    </div>
  );
}