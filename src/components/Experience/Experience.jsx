import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Database } from 'lucide-react';

const Label = ({ index, text }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold text-accent font-syne tracking-widest">{index} /</span>
    <span className="text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">{text}</span>
  </div>
);

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

export default Experience;

