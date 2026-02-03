import React from 'react';
import { Mail, MessageCircle, Linkedin, Loader2, Send } from "lucide-react";

const Contact = ({ profile, handleSubmit, isSubmitting }) => {
  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          <div>
             <h2 className='text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-8'>
              Let's Build <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400'>
                Something Great.
              </span>
            </h2>
            <p className='text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-lg'>
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a touch of modern expertise, let's talk.
            </p>

            <div className='space-y-6'>
              {[
                { icon: <Mail size={24} />, label: "Email", value: profile.email, link: `mailto:${profile.email}`, color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600" },
                { icon: <MessageCircle size={24} />, label: "WhatsApp", value: profile.whatsapp, link: `https://wa.me/${profile.whatsapp.replace(/\+/g, "")}`, color: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600" },
                { icon: <Linkedin size={24} />, label: "LinkedIn", value: "Wijaya Saputra", link: profile.linkedin, color: "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600" },
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-6 p-6 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 hover:border-cyan-500/50 shadow-lg hover:shadow-xl transition-all group'
                >
                   <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {item.icon}
                   </div>
                   <div>
                      <p className='text-xs font-black uppercase tracking-widest text-slate-400 mb-1'>{item.label}</p>
                      <p className='text-lg font-bold text-slate-900 dark:text-white'>{item.value}</p>
                   </div>
                </a>
              ))}
            </div>
          </div>

          <div className='relative'>
             <div className='p-8 md:p-12 rounded-[3rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl relative z-10'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                   <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>Name</label>
                        <input 
                          type='text' 
                          name='name' 
                          required 
                          placeholder='Your Name'
                          className='w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 focus:border-cyan-500 focus:outline-hidden transition-all text-slate-900 dark:text-white'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>Email</label>
                        <input 
                          type='email' 
                          name='email' 
                          required 
                          placeholder='your@email.com'
                          className='w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 focus:border-cyan-500 focus:outline-hidden transition-all text-slate-900 dark:text-white'
                        />
                      </div>
                   </div>
                   <div className='space-y-2'>
                      <label className='text-xs font-black uppercase tracking-widest text-slate-400 ml-2'>Message</label>
                      <textarea 
                        name='message' 
                        required 
                        rows='5' 
                        placeholder='Hey Wijaya, I have a project idea...'
                        className='w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 focus:border-cyan-500 focus:outline-hidden transition-all text-slate-900 dark:text-white resize-none'
                      ></textarea>
                   </div>
                   <button 
                    type='submit' 
                    disabled={isSubmitting}
                    className='w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl shadow-xl hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all disabled:opacity-50 flex items-center justify-center gap-3 group'
                   >
                     {isSubmitting ? <Loader2 className='animate-spin' /> : <><Send size={20} className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' /> Send Message</>}
                   </button>
                </form>
             </div>
             <div className='absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
