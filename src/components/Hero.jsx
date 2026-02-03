import React from 'react';
import { motion } from "framer-motion";
import { MapPin, Layers } from "lucide-react";
import { Typewriter } from "./Common.jsx";

const Hero = ({ profile }) => {
  return (
    <section id='about' className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20'>
      {/* Background Cinematic Elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-[120px] animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-[120px] animate-pulse' style={{ animationDelay: "2s" }} />
        <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 dark:opacity-40 mix-blend-overlay pointer-events-none' />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md mb-8'>
              <span className='flex h-2 w-2 rounded-full bg-emerald-500 animate-ping' />
              <span className='text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300'>Available for new challenges</span>
            </div>
            
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-slate-900 dark:text-white'>
              Crafting Digital <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400'>
                Experiences.
              </span>
            </h1>
            
            <div className='text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-400 mb-10'>
              I'm <span className='text-slate-900 dark:text-white'>Wijaya</span>, a{" "}
              <span className='italic font-serif text-cyan-700 dark:text-cyan-300'>
                <Typewriter
                  texts={["Fullstack Dev.", "Tech Educator.", "Laravel Expert."]}
                  typingSpeed={100}
                  deletingSpeed={50}
                />
              </span>
            </div>

            <p className='text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mb-12'>
              {profile.summary}
            </p>

            <div className='flex flex-wrap gap-6'>
              <motion.a
                href='#projects'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl shadow-2xl shadow-slate-500/20 transition-all'>
                View My Work
              </motion.a>
              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-2xl backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 transition-all'>
                Get in Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className='relative hidden lg:block'
          >
            <div className='relative w-full aspect-square flex items-center justify-center'>
              <div className='absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />
              
              <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className='absolute top-0 right-10 w-64 h-80 bg-white/10 dark:bg-white/5 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[3rem] shadow-2xl z-20 flex flex-col items-center justify-center p-8'
              >
                 <div className='w-20 h-20 bg-linear-to-br from-cyan-600 to-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl'>
                    <Layers size={40} className='text-white' />
                 </div>
                 <div className='text-center'>
                    <p className='text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2'>Architecting</p>
                    <p className='text-2xl font-black text-slate-900 dark:text-white leading-tight'>Scalable <br/> Systems</p>
                 </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className='absolute bottom-10 left-0 w-72 h-64 bg-slate-900/90 dark:bg-black/60 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl z-10 p-8 flex flex-col justify-end'
              >
                 <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center'>
                       <MapPin size={24} />
                    </div>
                    <div>
                       <p className='text-[10px] font-black uppercase tracking-widest text-slate-400'>Location</p>
                       <p className='font-bold text-white'>Bogor, ID</p>
                    </div>
                 </div>
                 <p className='text-slate-100 text-sm leading-relaxed'>Curating digital experiences from the heart of Indonesia.</p>
              </motion.div>

              <div className='w-[80%] h-[80%] border-2 border-dashed border-slate-200 dark:border-white/10 rounded-full opacity-50 animate-spin-slow' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
