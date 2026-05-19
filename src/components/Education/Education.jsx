import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Label = ({ index, text }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold text-accent font-syne tracking-widest">{index} /</span>
    <span className="text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">{text}</span>
  </div>
);

const Education = () => {
  return (
    <section id="learning" className="py-24 md:py-40 px-6 max-w-5xl mx-auto border-t border-gray-100">
      <Label index="04" text="EDUCATION" />
      <h2 className="text-3xl md:text-5xl font-syne font-bold mb-16">Where I'm Learning</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-12 border border-accent/20 bg-accent/[0.02]"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-6 items-center">
            <div className="bg-dark p-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-syne font-bold">University of Kelaniya</h3>
              <p className="text-dark/60">B.Sc.Hons in Software Engineering (Undergraduate)</p>
            </div>
          </div>
          <div className="text-dark/40 font-syne font-bold text-sm tracking-widest uppercase bg-white border border-gray-100 px-4 py-2">
            2026 — 2030
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

