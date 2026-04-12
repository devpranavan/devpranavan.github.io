import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Database } from 'lucide-react';

const Label = ({ index, text }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold text-accent font-syne tracking-widest">{index} /</span>
    <span className="text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">{text}</span>
  </div>
);

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

export default Skills;

