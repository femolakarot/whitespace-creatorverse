// components/views/EliteCircle.js
"use client";
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function EliteCircle() {
  const [active, setActive] = useState('Courses');
  return (
    <div className="pt-32 px-6 pb-20 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]">
      
      {/* ELITE HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-28 section-tight">
        <div className="fade-up in text-center">
          <h1 className="leading-tight text-[rgb(212,175,55)] mb-6">The Circle</h1>
          <p className="text-gray-400 uppercase tracking-widest max-w-lg">Exclusive access. High-value networks. Masterclasses.</p>
        </div>

        <div className="hero-graphic" aria-hidden>
          <img src="/assets/elite-stripes.svg" alt="elite stripes" />
        </div>
      </section>

      {/* ELITE GRID (Courses, Events, etc.) */}
      <section className="max-w-7xl mx-auto">
        <div className="flex gap-4 mb-8">
          {['Courses','Events','Community','Mentoring','Shop'].map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`px-4 py-2 rounded-full ${active===t? 'bg-[#d4af37] text-black' : 'bg-white/5'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {eliteSections.filter(s => s.title === active || active==='Courses' && s.title==='Courses' || active==='Shop' && s.title==='Shop' || active==='Events' && s.title==='Events' || active==='Community' && s.title==='Community').map((item, i) => (
            <div key={i} className="group relative h-[320px] border border-white/10 rounded-2xl p-10 flex flex-col justify-between hover:bg-white/5 transition-all cursor-pointer overflow-hidden">
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
        </div>
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