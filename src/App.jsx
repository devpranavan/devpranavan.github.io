import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Code, Server, Wrench, Database, Award, BookOpen, ExternalLink } from 'lucide-react';
import profileImg from './assets/profile.jpg';

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

/* --- NAVBAR --- */
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

/* --- HERO SECTION --- */
const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Developer", "Freelancer", "Undergraduate"];

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
          <SocialIcon icon={<Github size={22} />} href="https://github.com" />
          <SocialIcon icon={<Twitter size={22} />} href="https://twitter.com" />
          <SocialIcon icon={<Linkedin size={22} />} href="https://linkedin.com" />
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


/* --- ABOUT SECTION --- */
const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 max-w-5xl mx-auto border-t border-gray-100">
      <Label index="01" text="ABOUT" />
      <h2 className="text-3xl md:text-5xl font-syne font-bold mb-16">Who I Am</h2>
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-dark/80 leading-relaxed font-light">
            I am a Software Engineering undergraduate and currently serving as a Software Intern at <span className="text-accent font-medium title">MyDynamica</span>, a dynamic university startup. My journey in tech is driven by a passion for solving complex problems through elegant code.
          </p>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-dark/60 leading-relaxed">
            As a React + PHP/Laravel developer, I specialize in building robust backend systems and intuitive frontend experiences. I'm constantly exploring modern UI design trends and automation to streamline workflows, while nurturing my interest in Machine Learning and Robotics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* --- SKILLS SECTION --- */
const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Code className="text-accent" />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Server className="text-accent" />,
      skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Node.js"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-accent" />,
      skills: ["Git & GitHub", "Docker", "Figma", "VS Code", "Postman"]
    },
    {
      title: "ML / AI",
      icon: <Database className="text-accent" />,
      skills: ["Python", "TensorFlow", "OpenCV", "Robotics OS", "Data Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-40 px-6 max-w-5xl mx-auto border-t border-gray-100">
      <Label index="02" text="SKILLS" />
      <h2 className="text-3xl md:text-5xl font-syne font-bold mb-16">What I Know</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-10 border border-gray-100 bg-[#F9F9F9] flex flex-col items-start"
          >
            <div className="mb-6">{cat.icon}</div>
            <h3 className="text-xl font-syne font-bold mb-6 uppercase tracking-tight">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map(s => (
                <li key={s} className="text-dark/60 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- EXPERIENCE SECTION --- */
const Experience = () => {
  const jobs = [
    {
      company: "MyDynamica",
      role: "Software Intern",
      duration: "Present",
      description: [
        "Developing core features for university management tools using Laravel.",
        "Building responsive user interfaces with React and Tailwind CSS.",
        "Optimizing database queries and system performance.",
        "Collaborating with the startup team on UI/UX improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-40 px-6 max-w-5xl mx-auto border-t border-gray-100">
      <Label index="03" text="EXPERIENCE" />
      <h2 className="text-3xl md:text-5xl font-syne font-bold mb-16">Where I've Worked</h2>
      <div className="space-y-12">
        {jobs.map((job, idx) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-syne font-bold text-dark">{job.company}</h3>
                <p className="text-accent font-medium tracking-wide">{job.role}</p>
              </div>
              <div className="text-dark/40 font-syne font-bold text-sm tracking-widest uppercase">
                {job.duration}
              </div>
            </div>
            <ul className="space-y-4 max-w-2xl">
              {job.description.map((item, i) => (
                <li key={i} className="text-dark/60 leading-relaxed flex gap-4">
                  <span className="text-accent mt-1.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- EDUCATION SECTION --- */
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
              <h3 className="text-2xl font-syne font-bold">University of Software Engineering</h3>
              <p className="text-dark/60">B.Sc. in Software Engineering (Undergraduate)</p>
            </div>
          </div>
          <div className="text-dark/40 font-syne font-bold text-sm tracking-widest uppercase bg-white border border-gray-100 px-4 py-2">
            2021 — 2025
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* --- FOOTER / CONTACT --- */
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
          <ContactLink label="Email" value="pranavan.dev@gmail.com" href="mailto:pranavan.dev@gmail.com" />
          <ContactLink label="LinkedIn" value="Pranavan" href="https://linkedin.com" />
          <ContactLink label="GitHub" value="@pranavan" href="https://github.com" />
          <ContactLink label="Twitter" value="@pranavan" href="https://twitter.com" />
        </div>
      </div>
      <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">
        <div>© 2024 PRANAVAN. ALL RIGHTS RESERVED.</div>
        <div>BUILT WITH REACT & TAILWIND</div>
      </div>
    </section>
  );
};

const ContactLink = ({ label, value, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{label}</div>
    <div className="text-lg md:text-xl font-syne font-bold text-dark flex items-center gap-2">
      {value} <ExternalLink size={18} className="text-dark/20" />
    </div>
  </a>
);

/* --- UTILS --- */
const Label = ({ index, text }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold text-accent font-syne tracking-widest">{index} /</span>
    <span className="text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">{text}</span>
  </div>
);

export default App;
