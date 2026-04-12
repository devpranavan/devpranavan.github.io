import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter font-syne text-dark">
          PRANAVAN
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-dark/70">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Work</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </div>
        {/* Mobile menu could be added here but keeping it minimal as requested */}
      </div>
    </nav>
  );
};

export default Navbar;

