import React from 'react';
import { motion } from "framer-motion";
import { Globe, Cpu, Database, TrendingUp } from "lucide-react";

const About = () => {
  const stackItems = [
    { title: "Frontend", tags: ["React", "Next.js", "Tailwind", "Framer Motion"], icon: <Globe size={20} /> },
    { title: "Backend", tags: ["Laravel", "Django", "Node.js", "PHP"], icon: <Cpu size={20} /> },
    { title: "Databases", tags: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"], icon: <Database size={20} /> },
    { title: "Exploring", tags: ["Flutter", "Data Science", "AI Agents"], icon: <TrendingUp size={20} /> },
  ];

  return (
    <section className='py-40 relative overflow-hidden'>
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.03] dark:opacity-[0.05]'>
         <span className='text-[30rem] font-black tracking-tighter leading-none'>PROGRAMMER</span>
      </div>

       <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-20 items-start'>
             <div className='lg:col-span-12 mb-12'>
                <div className='flex items-center gap-4 mb-6'>
                   <div className='h-px w-20 bg-cyan-500' />
                   <span className='text-xs font-black uppercase tracking-[0.5em] text-cyan-600 dark:text-cyan-400'>The Philosophy</span>
                </div>
             </div>

             <div className='lg:col-span-7'>
                <h2 className='text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-12'>
                   Beyond the <br /> 
                   <span className='italic font-serif font-light text-slate-400 dark:text-slate-600'>Terminal.</span>
                </h2>
                <div className='space-y-8 text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium'>
                   <p>
                     I don't just write code; I design systems that solve real-world problems. 
                     My journey is a blend of continuous learning and sharing knowledge with the next generation.
                   </p>
                   <p className='text-slate-900 dark:text-white'>
                     Efficiency, scalability, and elegance are the three pillars that support every line of code I ship.
                   </p>
                </div>
             </div>

             <div className='lg:col-span-5 pt-12 lg:pt-0'>
                <div className='grid grid-cols-1 gap-12'>
                  {stackItems.map((stack, idx) => (
                    <motion.div 
                      key={stack.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className='group'
                    >
                       <div className='flex items-center gap-4 mb-4'>
                          <div className='w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform'>
                             {stack.icon}
                          </div>
                          <h3 className='text-lg font-black uppercase tracking-widest text-slate-900 dark:text-white'>{stack.title}</h3>
                       </div>
                       <div className='flex flex-wrap gap-2 pl-14'>
                          {stack.tags.map(tag => (
                            <span key={tag} className='text-sm border-b-2 border-slate-100 dark:border-white/5 py-1 text-slate-400 dark:text-slate-500 font-bold hover:text-cyan-500 transition-colors'>
                              {tag}
                            </span>
                          ))}
                       </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default About;
