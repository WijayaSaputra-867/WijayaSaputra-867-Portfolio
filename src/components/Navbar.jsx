import React from 'react';
import { Menu } from "lucide-react";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className='fixed w-full top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md dark:border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center'>
        <div className='text-2xl font-bold text-cyan-700 dark:text-cyan-400'>
          MWS
        </div>
        <div className='hidden md:flex items-center space-x-8 text-sm font-medium'>
          {["About", "Journey", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='hover:text-cyan-600 transition-colors'>
              {item}
            </a>
          ))}
        </div>
        <div className='flex items-center space-x-4 md:hidden'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-slate-600 dark:text-slate-300'>
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden bg-white dark:bg-[#0f172a] dark:border-slate-800 px-4 py-4'>
          {["About", "Journey", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='block py-2 hover:text-cyan-600'
              onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
