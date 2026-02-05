// components/views/EliteCircle.js
"use client";
import { ArrowUpRight } from 'lucide-react';

export default function EliteCircle() {
  return (
    <div className="pt-32 px-6 pb-20 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]">
      
      {/* ELITE HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-32">
        <h1 className="text-6xl md:text-9xl font-serif italic text-[#d4af37] mb-6 animate-pulse-slow">
          The Circle.
        </h1>
        <p className="text-gray-400 uppercase tracking-widest max-w-lg">
          Exclusive access. High-value networks. Masterclasses.
        </p>
      </section>

      {/* ELITE GRID (Courses, Events, etc.) */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
        {eliteSections.map((item, i) => (
          <div key={i} className="group relative h-[400px] border border-white/10 rounded-2xl p-10 flex flex-col justify-between hover:bg-white/5 transition-all cursor-pointer overflow-hidden">
            <div className="absolute top-10 right-10 p-3 bg-white/10 rounded-full group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
              <ArrowUpRight />
            </div>
            
            <h3 className="text-4xl font-light">{item.title}</h3>
            
            <div className="relative z-10">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">{item.subtitle}</p>
              <p className="text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const eliteSections = [
  { title: "Courses", subtitle: "Mastery", desc: "Advanced technical direction & 8K rendering workflows." },
  { title: "Events", subtitle: "Gatherings", desc: "Private industry mixers in Lagos & London." },
  { title: "Community", subtitle: "Network", desc: "Direct access to Nigeria's top 1% of creators." },
  { title: "Shop", subtitle: "Assets", desc: "Exclusive LUTs, 3D Models, and Presets." },
];