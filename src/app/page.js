// app/page.js
"use client";
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import SmoothScroll from '@/components/SmoothScroll';
import Creatorverse from '@/components/views/Creatorverse';
import EliteCircle from '@/components/views/EliteCircle';
import Footer from '@/components/Footer';
import FlipSwitch from '@/components/FlipSwitch';
import Logo from '@/components/Logo';

// --- EDITABLE SOCIALS (Shared across both worlds) ---
const socialHandles = [
  { platform: "Instagram", url: "#", label: "@whitespace.verse" },
  { platform: "Twitter/X", url: "#", label: "@whitespace" },
  { platform: "LinkedIn", url: "#", label: "Whitespace Creatorverse" }
];

export default function Home() {
  const [isElite, setIsElite] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // The 3D Flip Animation Logic
  const handleToggle = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsElite(!isElite) // Switch content halfway
      });

      // 1. Rotate OUT (90 degrees)
      tl.to(contentRef.current, {
        rotationY: 90,
        scale: 0.8, // Slight zoom out for depth
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      });
      
      // 2. Set State (happens via onComplete above, but we pause timeline to wait)
      tl.add(() => {
        // This gap allows React to render the new component
      });

      // 3. Rotate IN (-90 to 0)
      tl.fromTo(contentRef.current, 
        { rotationY: -90, opacity: 0, scale: 0.8 },
        { rotationY: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }, containerRef);
  };

  return (
    <SmoothScroll>
      <main className="bg-[#0c0c0c] min-h-screen text-white perspective-1000 overflow-x-hidden">
        
        {/* FIXED HEADER (Always Visible) */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-8 mix-blend-difference pointer-events-none">
          <div className="pointer-events-auto"><Logo /></div>
          
          {/* THE FLIP SWITCH */}
          <div className="pointer-events-auto">
            <FlipSwitch isElite={isElite} onToggle={handleToggle} />
          </div>

          {/* Socials (Desktop) */}
          <div className="hidden md:flex flex-col gap-1 text-[10px] uppercase tracking-widest text-right pointer-events-auto">
            {socialHandles.map((social) => (
              <a key={social.platform} href={social.url} className="hover:text-gray-400 transition">{social.label}</a>
            ))}
          </div>
        </nav>

        {/* 3D CONTENT CONTAINER */}
        <div ref={containerRef} className="perspective-container w-full min-h-screen">
          <div ref={contentRef} className="transform-style-3d w-full">
            
            {/* CONDITIONAL RENDERING OF VIEWS */}
            {isElite ? <EliteCircle /> : <Creatorverse />}
            
          </div>
        </div>

        {/* SHARED FOOTER */}
        <Footer socials={socialHandles} />

      </main>
    </SmoothScroll>
  );
}