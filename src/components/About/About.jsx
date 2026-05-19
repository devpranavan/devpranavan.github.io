import React from 'react';

const Label = ({ index, text }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-bold text-accent font-syne tracking-widest">{index} /</span>
    <span className="text-xs font-bold text-dark/40 font-syne tracking-widest uppercase">{text}</span>
  </div>
);

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

export default About;

