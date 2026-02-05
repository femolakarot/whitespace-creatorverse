// components/HoverProjects.js
"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function HoverProjects() {
  const [activeProject, setActiveProject] = useState(projects[0]); // Default to first project
  const mediaRef = useRef(null); // Ref for the image/video container

  useEffect(() => {
    // GSAP animation for media container on project change
    gsap.fromTo(mediaRef.current, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [activeProject]); // Trigger animation when activeProject changes

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      
      {/* Project List */}
      <div className="flex-1">
        <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase reveal">Our <span className="italic font-light text-gray-400">Archive.</span></h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveProject(project)}
            >
              <h3 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase text-white hover:text-white/60 transition-colors duration-300 reveal">
                {project.title}
              </h3>
              {/* Optional: Project Category/Year */}
              <p className="absolute left-0 bottom-0 text-gray-500 text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 ease-out">
                {project.category} / {project.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Media Display */}
      <div ref={mediaRef} className="flex-1 relative min-h-[400px] lg:min-h-0 bg-[#161616] rounded-xl overflow-hidden shadow-2xl">
        {activeProject.type === 'image' ? (
          <Image 
            src={activeProject.src} 
            alt={activeProject.title} 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <video 
            src={activeProject.src} 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <p className="absolute bottom-8 left-8 text-white text-lg font-bold z-10">{activeProject.description}</p>
      </div>

    </section>
  );
}

// --- EDITABLE PROJECT CONTENT ---
const projects = [
  {
    id: 'p1',
    title: 'Void Sculptures',
    type: 'image',
    src: '/assets/void-sculptures.webp', // Add this image to your public/assets folder
    category: '3D Render',
    year: '2025',
    description: 'Generative art in an empty dimension.'
  },
  {
    id: 'p2',
    title: 'Digital Exodus',
    type: 'video',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-particles-flow-through-dark-space-40615-large.mp4', // Replace with your video
    category: 'Cinematic',
    year: '2024',
    description: 'Narrative short exploring the digital afterlife.'
  },
  {
    id: 'p3',
    title: 'AI Fabrications',
    type: 'image',
    src: '/assets/ai-fabrications.webp', // Add this image to your public/assets folder
    category: 'AI Design',
    year: '2025',
    description: 'Hyper-realistic environments by neural networks.'
  },
  {
    id: 'p4',
    title: 'Creator Protocol',
    type: 'video',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-with-glowing-dots-24018-large.mp4', // Replace with your video
    category: 'UI/UX',
    year: '2026',
    description: 'Next-gen platform for decentralized creation.'
  },
];