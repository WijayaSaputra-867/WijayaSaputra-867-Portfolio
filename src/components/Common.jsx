import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Typewriter = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer;
    const i = loopNum % texts.length;
    const fullText = texts[i];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingDelay(deletingSpeed);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingDelay(typingSpeed);
      }

      if (!isDeleting && displayedText === fullText) {
        setTypingDelay(pauseTime);
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500);
      }
    };

    timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    loopNum,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    typingDelay,
  ]);

  return (
    <span>
      {displayedText}
      <span className='animate-pulse font-light text-slate-400'>|</span>
    </span>
  );
};

export const LoadingScreen = () => {
  return (
    <div className='fixed inset-0 z-9999 bg-slate-50 dark:bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden'>
      {/* Background Watermark */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden'>
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className='text-[20rem] md:text-[40rem] font-black tracking-tighter text-slate-900 dark:text-white leading-none whitespace-nowrap'
        >
          MWS
        </motion.span>
      </div>

      <div className='relative flex flex-col items-center justify-center'>
        {/* Glowing Ring Animation */}
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           className='absolute w-40 h-40 border-2 border-dashed border-cyan-500/30 rounded-full'
        />
        
        <motion.div
           animate={{ rotate: -360 }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className='absolute w-48 h-48 border border-slate-200 dark:border-white/5 rounded-full'
        />

        {/* Central Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='relative z-10 w-24 h-24 bg-slate-900 dark:bg-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-cyan-500/20'
        >
          <span className='text-white dark:text-slate-900 font-black text-3xl tracking-tighter'>MWS</span>
          
          {/* Scanning Line Effect */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className='absolute left-0 right-0 h-1 bg-cyan-500/50 blur-[2px] z-20'
          />
        </motion.div>

        {/* Pulse Effect */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl -z-10'
        />
      </div>

      {/* Loading Status Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className='mt-12 flex flex-col items-center gap-4'
      >
        <div className='flex gap-1.5'>
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className='w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full'
            />
          ))}
        </div>
        <p className='text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500'>Initialising System</p>
      </motion.div>
    </div>
  );
};
