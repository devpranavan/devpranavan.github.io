import React from 'react';
import { ExternalLink } from 'lucide-react';

const ContactLink = ({ label, value, href, className = '' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`block group ${className}`}>
    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{label}</div>
    <div className="text-lg md:text-xl font-syne font-bold text-dark flex items-center gap-2">
      {value} <ExternalLink size={18} className="text-dark/20 group-hover:translate-x-1 transition-transform" />
    </div>
  </a>
);

const Footer = () => {
  return (
    <section id="contact" className="pt-24 pb-12 px-6 max-w-5xl mx-auto border-t border-dark">
      <div className="py-24 space-y-12">
        <h2 className="text-4xl md:text-6xl font-syne font-extrabold text-dark leading-none">
          Let's <br /> Connect
        </h2>
        <p className="text-xl md:text-2xl text-dark/40 max-w-2xl font-light">
          I'm open to collaborations, freelance projects, and internships. Feel free to reach out.
        </p>
        <div className="flex gap-8 md:gap-12 flex-wrap">
          <ContactLink label="Email" value="pranavan.dev@gmail.com" href="mailto:pranavan.dev@gmail.com" className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold" />
          <ContactLink label="LinkedIn" value="Pranavan" href="https://www.linkedin.com/in/pranavandev/" />
          <ContactLink label="GitHub" value="@pranavan" href="https://github.com/Pranaa2004" />
          <ContactLink label="Twitter" value="@pranavan" href="https://x.com/PranavanT2004" />
        </div>
      </div>
      <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">
        <div>© 2024 PRANAVAN. ALL RIGHTS RESERVED.</div>
        <div>BUILT WITH REACT & TAILWIND</div>
      </div>
    </section>
  );
};

export default Footer;

