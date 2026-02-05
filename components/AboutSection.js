// components/AboutSection.js
"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Content */}
        <div className="z-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 reveal">The Philosophy</h2>
          <p className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-10 reveal">
            We exist at the intersection of <span className="text-white font-medium">raw industrialism</span> and <span className="italic">refined digital luxury.</span>
          </p>
          <div className="space-y-6 text-gray-400 text-lg reveal">
            <p>
              Whitespace Creatorverse is a specialized studio based in Nigeria, serving the global creator economy. 
              We don't just "make content"—we build digital legacies through 8K rendering and strategic brand architecture.
            </p>
            <p>
              Our mission is to provide creators with the visual engine required to compete at the highest corporate levels 
              without losing their unique creative soul.
            </p>
          </div>
          
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-white text-2xl font-bold">150+</p>
              <p className="text-xs uppercase text-gray-500">Assets Delivered</p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">2026</p>
              <p className="text-xs uppercase text-gray-500">Future Ready</p>
            </div>
          </div>
        </div>

        {/* Right: Parallax Image */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <div ref={imageRef} className="absolute inset-0 h-[120%] w-full">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Industrial Architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
}