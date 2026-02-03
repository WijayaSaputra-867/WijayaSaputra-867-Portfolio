import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ profile }) => {
  return (
    <footer className='py-12 bg-white dark:bg-[#0f172a]'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left'>
        <div>
           <div className='text-2xl font-black text-cyan-600 dark:text-cyan-400 mb-2'>MWS</div>
           <p className='text-slate-500 dark:text-slate-400 text-sm max-w-sm'>
             {profile.summary}
           </p>
        </div>
        
        <div className='flex flex-col items-center md:items-end gap-6'>
           <div className='flex gap-4'>
             {[
               { icon: <Github size={20} />, link: profile.github },
               { icon: <Linkedin size={20} />, link: profile.linkedin },
               { icon: <Mail size={20} />, link: `mailto:${profile.email}` },
             ].map((social, idx) => (
               <a 
                 key={idx}
                 href={social.link}
                 target='_blank'
                 rel='noopener noreferrer'
                 className='w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all'
               >
                 {social.icon}
               </a>
             ))}
           </div>
           <p className='text-xs font-bold text-slate-400 uppercase tracking-widest'>
             © {new Date().getFullYear()} M. Wijaya Saputra. Built with Passion.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
