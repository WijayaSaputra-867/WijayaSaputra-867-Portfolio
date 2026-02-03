import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Code, ArrowRight, ChevronDown } from "lucide-react";

const Projects = ({ shuffledProjects, visibleProjects, handleProjectAction }) => {
  return (
    <section id='projects' className='py-20 bg-slate-100/50 dark:bg-slate-900/50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center gap-4 mb-10'>
          <div className='p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-xl'>
            <Code size={24} />
          </div>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
            Selected Works
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <AnimatePresence mode="popLayout">
            {shuffledProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={project.title}
                className='group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm relative overflow-hidden'>
                <div className={`absolute top-0 right-0 w-24 h-24 ${project.bg} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
                <a href='#'>
                  <div className='flex justify-between items-start mb-6'>
                    <div className={`p-4 rounded-2xl ${project.bg} ${project.color} shadow-lg shadow-current/10`}>
                      {project.icon}
                    </div>
                    <div className='p-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:text-cyan-500 transition-colors'>
                      <ArrowRight size={20} className='-rotate-45' />
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4'>
                    {project.tech}
                  </p>
                  <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>
                    {project.desc}
                  </p>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className='mt-16 text-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleProjectAction}
            className='group px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-cyan-500/20'>
            {visibleProjects >= shuffledProjects.length ? (
              <>
                Load Less <ChevronDown size={20} className='group-hover:-translate-y-1 rotate-180 transition-transform' />
              </>
            ) : (
              <>
                Explore More Works <ChevronDown size={20} className='group-hover:translate-y-1 transition-transform' />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
