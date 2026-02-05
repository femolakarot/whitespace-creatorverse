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
      <section className="h-[72vh] flex items-center justify-center relative overflow-hidden section-loose">
        <div className="z-10 text-center fade-up in">
            <h1 className="leading-tight">Visual communication solutions for modern challenges.</h1>
            <p className="mt-6 lowercase tracking-widest text-sm text-gray-400" style={{letterSpacing:'.45em'}}>bridging the gap between traditional design and emerging technology.</p>
        </div>

        <div className="hero-graphic" aria-hidden>
          <img src="/assets/hero-diagonal.svg" alt="hero graphic" />
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