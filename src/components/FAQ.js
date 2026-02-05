// components/FAQ.js
"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Installing framer-motion is recommended for smooth accordions: npm install framer-motion

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-white/10">
          <button 
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center py-6 text-left hover:text-gray-300 transition-colors"
          >
            <span className="text-xl font-light">{item.question}</span>
            {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-gray-400 leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// EDITABLE FAQ DATA
const faqData = [
  { question: "What is Whitespace Creatorverse?", answer: "We are a digital production house bridging the gap between raw industrial creativity and corporate luxury standards." },
  { question: "How do I join the Elite Circle?", answer: "The Elite Circle is membership-only. You can apply through our 'Connect' page. Access is granted to creators demonstrating high-value potential." },
  { question: "Do you work with international clients?", answer: "Yes. While we are rooted in Lagos, 60% of our production is for global brands in London, Dubai, and New York." },
];