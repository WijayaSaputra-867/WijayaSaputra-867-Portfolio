import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Building2, GraduationCap, School } from "lucide-react";

const Journey = ({ experiences, education }) => {
  return (
    <section id='journey' className='py-32 relative'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20'>
          <div>
            <h2 className='text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4'>
              The <span className='text-cyan-600 dark:text-cyan-400'>Timeline.</span>
            </h2>
            <p className='text-slate-500 dark:text-slate-400 max-w-lg'>
              A chronicle of my professional growth, technical milestones, and academic foundation.
            </p>
          </div>
          <div className='flex gap-4'>
            <div className='px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md'>
              <span className='text-2xl font-black text-slate-900 dark:text-white'>3+</span>
              <span className='ml-2 text-[10px] font-bold uppercase tracking-widest text-slate-400'>Years Exp</span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
          {/* Experience Column */}
          <div className='lg:col-span-8'>
            <div className='space-y-8'>
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className='relative pl-12 group'
                >
                  {/* Timeline Line */}
                  <div className='absolute left-[19px] top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500/50 to-transparent group-last:bg-linear-to-b group-last:from-cyan-500/50 group-last:to-transparent' />
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-2 w-10 h-10 rounded-2xl flex items-center justify-center z-10 transition-transform group-hover:scale-110 shadow-lg ${exp.current ? 'bg-cyan-500 text-white shadow-cyan-500/40' : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-white/10'}`}>
                     <Briefcase size={18} />
                  </div>

                  <div className='p-8 rounded-[2rem] bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all'>
                    <div className='flex flex-wrap justify-between items-start gap-4 mb-6'>
                      <div className='flex items-center gap-4'>
                        <div className='w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 rounded-2xl flex items-center justify-center'>
                          <Building2 size={24} />
                        </div>
                        <div>
                          <h3 className='text-2xl font-black text-slate-900 dark:text-white'>{exp.company}</h3>
                          <p className='text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest'>{exp.period}</p>
                        </div>
                      </div>
                    </div>

                    <p className='text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic'>"{exp.mainDesc}"</p>

                    <div className='space-y-6'>
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className='relative pl-8 border-l border-slate-100 dark:border-white/10'>
                          <div className='absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500' />
                          <div className='flex flex-wrap justify-between items-center gap-4 mb-1'>
                             <h4 className='font-black text-slate-900 dark:text-white'>{role.title}</h4>
                             <span className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>{role.period}</span>
                          </div>
                          <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>{role.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className='lg:col-span-4'>
             <div className='sticky top-32 space-y-8'>
                <div className='p-8 rounded-[2.5rem] bg-linear-to-br from-indigo-600 to-blue-700 text-white shadow-2xl relative overflow-hidden'>
                  <div className='absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl' />
                   <GraduationCap size={40} className='mb-6 opacity-50' />
                   <h3 className='text-2xl font-black mb-6 tracking-tight'>Academic Foundation</h3>
                   <div className='space-y-8'>
                      {education.map((edu, idx) => (
                        <div key={idx} className='relative pl-6 border-l border-white/20'>
                          <p className='text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-1'>{edu.period}</p>
                          <h4 className='font-bold mb-1 leading-tight'>{edu.degree}</h4>
                          <p className='text-sm text-indigo-100/70'>{edu.school}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className='p-8 rounded-[2.5rem] bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 shadow-xl'>
                   <h4 className='font-black text-slate-900 dark:text-white mb-4'>Certifications</h4>
                   <div className='space-y-3'>
                      {["Laravel Developer Associate", "Advanced Database Management", "UI/UX Design Fundamentals"].map(cert => (
                        <div key={cert} className='flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5'>
                           <div className='w-2 h-2 rounded-full bg-emerald-500' />
                           <span className='text-xs font-bold text-slate-500 dark:text-slate-400'>{cert}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
