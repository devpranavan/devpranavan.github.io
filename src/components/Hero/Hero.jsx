import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Developer", "Freelancer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-40 pb-24 md:pt-60 md:pb-40 px-6 max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
          Full Stack Developer / Open to work
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-dark leading-tight mb-6 tracking-tighter">
          Pranavan
          <span className="block text-3xl md:text-5xl text-accent mt-2">
            {roles[roleIndex]}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-dark/60 max-w-lg mb-10 leading-relaxed">
          I build responsive apps and care about clean code, user experience, and Machine Learning & Robotics. Who thrives at the intersection of code and creativity.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#work" className="px-8 py-4 bg-accent text-white font-bold rounded-none flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#" className="px-8 py-4 border-2 border-dark text-dark font-bold rounded-none">
            Resume
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <SocialIcon icon={<Github size={22} />} href="https://github.com/devpranavan" />
          <SocialIcon icon={<Twitter size={22} />} href="https://x.com/PranavanT2004" />
          <SocialIcon icon={<Linkedin size={22} />} href="https://www.linkedin.com/in/pranavandev/" />
          <SocialIcon icon={<Mail size={22} />} href="mailto:pranavan.dev@gmail.com" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:flex justify-end items-center relative z-0"
      >
        <div className="relative w-full max-w-xs lg:max-w-sm aspect-[4/5] bg-[#F9F9F9] border border-gray-100 p-4">
          <img 
            src={profileImg} 
            alt="Pranavan" 
            className="w-full h-full object-cover"
          />
          {/* Decorative Teal Corner */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-accent" />
        </div>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-dark/40">
    {icon}
  </a>
);

export default Hero;

