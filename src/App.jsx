/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Linkedin,
  Mail,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  Cpu,
  Globe,
  Layers,
  MessageSquare,
  DollarSign,
  Calendar,
  QrCode,
  ScanFace,
  Image,
  Inbox,
  ArrowRight,
  Loader2,
  MessageCircle,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- FORM HANDLER (AJAX) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgevlye", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          theme: "colored",
        });
        form.reset();
      } else {
        toast.error("Oops! Failed to send message. Please try again.", {
          position: "bottom-right",
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.", {
        position: "bottom-right",
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // --- DATA ---
  const profile = {
    name: "Muhammad Wijaya Saputra",
    role: "Laravel Developer & Tech Educator",
    email: "wijayasaputra679@gmail.com",
    whatsapp: "+6281934506531",
    linkedin: "https://www.linkedin.com/in/m-wijaya-saputra-601145241/",
    location: "Bogor, Indonesia",
    mapsLink:
      "https://www.google.com/maps/place/6%C2%B028'15.1%22S+106%C2%B048'12.1%22E/@-6.470862,106.8007771,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.470862!4d106.803352?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
    summary:
      "Crafting robust school management systems and IoT solutions with Laravel & React. Bridging the gap between complex code and clear understanding as a passionate educator and IT specialist.",
  };

  const skillCategories = [
    {
      title: "Fullstack Arsenal",
      icon: <Layers size={24} className='text-cyan-600 dark:text-cyan-400' />,
      skills: ["Laravel", "Next.js", "RESTful API", "MVC Pattern"],
      // SOLID COLOR: Slate background untuk dark mode
      className: "bg-cyan-50 dark:bg-slate-800/50 hover:border-cyan-500/50",
    },
    {
      title: "Frontend Craft",
      icon: (
        <Globe size={24} className='text-purple-600 dark:text-purple-400' />
      ),
      skills: ["React.js", "Modern JS", "Tailwind CSS", "Framer Motion"],
      // SOLID COLOR
      className: "bg-purple-50 dark:bg-slate-800/50 hover:border-purple-500/50",
    },
    {
      title: "Tech & IoT Tools",
      icon: (
        <Cpu size={24} className='text-emerald-600 dark:text-emerald-400' />
      ),
      skills: ["Python", "MySQL", "Git Workflow", "FaceID Logic", "Leanbot"],
      // SOLID COLOR
      className:
        "bg-emerald-50 dark:bg-slate-800/50 hover:border-emerald-500/50",
    },
  ];

  const experiences = [
    {
      role: "System Developer",
      company: "Internal School Projects",
      period: "2021 – Present",
      desc: "Architecting end-to-end school management solutions. From attendance automation to exam systems, reducing administrative workloads significantly.",
    },
    {
      role: "Laravel Instructor",
      company: "SMK TI DWIGUNA",
      period: "2022 – Present",
      desc: "Mentoring the next generation of developers. Teaching MVC architecture, database optimization, and best coding practices in Laravel ecosystem.",
    },
    {
      role: "IT Support Specialist",
      company: "SMK TI DWIGUNA",
      period: "2021 – Present",
      desc: "Managing and maintaining school server infrastructure to ensure high availability. Responsible for network troubleshooting, hardware maintenance, and data security backups.",
    },
  ];

  const projects = [
    {
      title: "Public Complaint Hub",
      tech: "Laravel • Bootstrap • MySQL",
      desc: "Citizen reporting platform with real-time tracking & automated PDF generation for government transparency.",
      icon: <MessageSquare size={20} />,
      color: "text-blue-600 dark:text-blue-400",
      bgIcon: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "Smart Tuition (SPP)",
      tech: "Laravel • Payment Gateway",
      desc: "Digital financial ecosystem for schools handling arrears, receipts, and real-time financial auditing.",
      icon: <DollarSign size={20} />,
      color: "text-green-600 dark:text-green-400",
      bgIcon: "bg-green-100 dark:bg-green-900/30",
    },
    {
      title: "Sport Booking Engine",
      tech: "Laravel • FullCalendar",
      desc: "Real-time reservation system for sports venues with schedule management dashboards.",
      icon: <Calendar size={20} />,
      color: "text-orange-600 dark:text-orange-400",
      bgIcon: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      title: "Geo-QR Attendance",
      tech: "Laravel • Geolocation",
      desc: "Anti-fraud attendance system combining Dynamic QR Codes with GPS radius validation.",
      icon: <QrCode size={20} />,
      color: "text-purple-600 dark:text-purple-400",
      bgIcon: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      title: "FaceID Guest Book",
      tech: "React • Face Recog • Laravel",
      desc: "AI-powered visitor logger that recognizes returning guests instantly via camera feed.",
      icon: <ScanFace size={20} />,
      color: "text-red-600 dark:text-red-400",
      bgIcon: "bg-red-100 dark:bg-red-900/30",
    },
    {
      title: "Event Broadcast System",
      tech: "Laravel • Mailpit • SMTP",
      desc: "Mass email engine for school events with robust SMTP configuration and testing environments.",
      icon: <Inbox size={20} />,
      color: "text-yellow-600 dark:text-yellow-400",
      bgIcon: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      title: "Digital School Gallery",
      tech: "Laravel • Media Optimization",
      desc: "High-performance digital archive handling bulk uploads and multi-category albums.",
      icon: <Image size={20} />,
      color: "text-pink-600 dark:text-pink-400",
      bgIcon: "bg-pink-100 dark:bg-pink-900/30",
    },
  ];

  return (
    <div className='min-h-screen font-sans transition-colors duration-300 bg-slate-50 text-slate-600 dark:bg-[#0f172a] dark:text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200 relative overflow-hidden'>
      {/* --- TOAST CONTAINER --- */}
      <ToastContainer />

      {/* --- BACKGROUND BLOBS --- */}
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'>
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] 
            bg-purple-300/30 mix-blend-multiply dark:bg-purple-600/20 dark:mix-blend-screen'
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className='absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] 
            bg-cyan-300/30 mix-blend-multiply dark:bg-cyan-600/10 dark:mix-blend-screen'
        />
      </div>

      {/* --- NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className='fixed w-full top-0 z-50 border-b backdrop-blur-md 
          bg-white/80 border-slate-200 
          dark:bg-[#0f172a]/80 dark:border-white/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* SOLID COLOR */}
            <div className='text-2xl font-bold text-cyan-600 dark:text-cyan-400 cursor-pointer'>
              MWS
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-8 text-sm font-medium'>
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative group text-slate-700 dark:text-slate-300'>
                  {item}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all group-hover:w-full'></span>
                </a>
              ))}
            </div>

            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white'>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className='md:hidden border-b bg-white border-slate-200 dark:bg-[#0f172a] dark:border-white/10'>
            <div className='px-4 pt-2 pb-4 space-y-2'>
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='block py-2 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id='about' className='pt-40 pb-20 px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-8
                bg-cyan-100 border-cyan-200 text-cyan-700 border
                dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-500'></span>
              </span>
              Available for Hire
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className='text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white'>
              Hello, I'm <br />
              {/* SOLID COLOR */}
              <span className='text-cyan-600 dark:text-cyan-400'>Putra.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className='text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-slate-600 dark:text-slate-400'>
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className='flex flex-wrap justify-center gap-4 mb-20'>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#contact'
                className='flex items-center gap-2 px-8 py-3.5 rounded-full font-bold transition shadow-lg
                  bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl
                  dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-50 dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'>
                <Mail size={18} /> Let's Talk
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={profile.linkedin}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border transition
                  border-slate-300 text-slate-700 hover:bg-slate-100
                  dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800'>
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </motion.div>

            {/* --- SKILLS GRID --- */}
            <motion.div
              variants={staggerContainer}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.2 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
              {skillCategories.map((cat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className={`group p-6 rounded-2xl border transition-all duration-300 
                    bg-white border-slate-200 hover:shadow-xl
                    dark:border-white/5 ${cat.className}`}>
                  <div className='flex items-center justify-between mb-4'>
                    <div
                      className='p-3 rounded-xl border transition-colors
                      bg-slate-50 border-slate-100
                      dark:bg-[#0f172a] dark:border-white/10 dark:group-hover:border-white/30'>
                      {cat.icon}
                    </div>
                  </div>
                  <h4 className='text-lg font-bold mb-3 text-slate-900 dark:text-white'>
                    {cat.title}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className='px-2.5 py-1 text-xs font-medium rounded-md border
                          bg-slate-100 text-slate-700 border-slate-200
                          dark:bg-[#0f172a]/60 dark:text-slate-300 dark:border-white/5'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id='experience' className='py-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900 dark:text-white'>
            <Briefcase className='text-cyan-600 dark:text-cyan-400' /> Career
            Path
          </motion.h2>

          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className='relative pl-8 border-l transition-colors duration-300 group
                  border-slate-300 hover:border-cyan-500
                  dark:border-slate-700 dark:hover:border-cyan-500'>
                <div
                  className='absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-colors
                  bg-slate-300 group-hover:bg-cyan-500
                  dark:bg-slate-700 dark:group-hover:bg-cyan-400'></div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white'>
                  {exp.role}
                </h3>
                <div className='text-sm font-medium mb-3 text-cyan-700 dark:text-cyan-400'>
                  {exp.company} • {exp.period}
                </div>
                <p className='leading-relaxed max-w-2xl text-slate-600 dark:text-slate-400'>
                  {exp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id='projects'
        className='py-20 bg-slate-100/50 dark:bg-[#0f172a]'>
        <div className='max-w-6xl mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className='text-3xl font-bold mb-12 flex items-center gap-3 text-slate-900 dark:text-white'>
            <Code className='text-purple-600 dark:text-purple-400' /> Selected
            Works
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className='group relative p-6 rounded-2xl transition-all duration-300
                  bg-white border border-slate-200 hover:shadow-xl hover:shadow-cyan-900/10
                  dark:bg-slate-800/40 dark:backdrop-blur-sm dark:border-white/5 dark:hover:bg-slate-800/60 dark:hover:shadow-cyan-900/20'>
                <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 dark:text-slate-500'>
                  <ArrowRight size={20} className='-rotate-45' />
                </div>

                <div
                  className={`mb-5 inline-flex p-3 rounded-lg border ${project.bgIcon} border-white/10 ${project.color}`}>
                  {project.icon}
                </div>

                <h3 className='text-lg font-bold mb-2 transition-colors text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400'>
                  {project.title}
                </h3>

                <p className='text-xs font-bold uppercase tracking-wider mb-3 text-slate-500'>
                  {project.tech}
                </p>

                <p className='text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS & EDUCATION --- */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            // SOLID COLOR
            className='p-8 md:p-12 rounded-3xl border backdrop-blur-lg
              bg-white/60 border-slate-200
              dark:bg-slate-800/50 dark:border-white/5'>
            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white'>
                  <Award className='text-yellow-500 dark:text-yellow-400' />{" "}
                  Highlights
                </h3>
                <ul className='space-y-4'>
                  {[
                    "Built exam system for 300+ concurrent users.",
                    "Maintained 99.9% server uptime during exams.",
                    "Automated 70% of admin reporting tasks.",
                    "Pioneered FaceID security implementation.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className='flex gap-3 text-slate-700 dark:text-slate-300'>
                      <span className='text-cyan-600 dark:text-cyan-400 mt-1'>
                        ✦
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white'>
                  <GraduationCap className='text-cyan-600 dark:text-cyan-400' />{" "}
                  Education
                </h3>
                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-slate-900 dark:text-white'>
                    Diploma 3 – AMIK Wahana Mandiri
                  </h4>
                  <p className='text-sm text-slate-500 dark:text-slate-500'>
                    2021 - 2025
                  </p>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {[
                    "Data Science (DQLab)",
                    "Laravel Expert",
                    "React Essentials",
                    "Next.js",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 rounded-full border text-xs
                        bg-slate-100 border-slate-200 text-slate-600
                        dark:bg-white/5 dark:border-white/10 dark:text-slate-400'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id='contact' className='py-24 relative overflow-hidden'>
        <div className='max-w-4xl mx-auto px-4 relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className='text-center mb-12'>
            <h2 className='text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
              Ready to Collaborate?
            </h2>
            <p className='text-slate-600 dark:text-slate-400'>
              Drop a message or reach out directly.
            </p>
          </motion.div>

          <div
            className='grid md:grid-cols-5 gap-8 border rounded-3xl p-1 overflow-hidden backdrop-blur-xl
             bg-white/40 border-slate-200 
             dark:bg-slate-800/30 dark:border-white/10'>
            {/* Contact Details */}
            <div
              className='md:col-span-2 p-8 rounded-2xl flex flex-col justify-between
              bg-white/80 dark:bg-slate-900/80'>
              <div>
                <div className='font-bold text-xl mb-8 text-slate-900 dark:text-white'>
                  Contact Info
                </div>
                <div className='space-y-6'>
                  <a
                    href={`mailto:${profile.email}`}
                    className='flex items-center gap-3 transition group
                      text-slate-600 hover:text-slate-900 
                      dark:text-slate-300 dark:hover:text-white'>
                    <Mail
                      size={18}
                      className='text-cyan-600 dark:text-cyan-400'
                    />{" "}
                    {profile.email}
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 transition group
                      text-slate-600 hover:text-slate-900 
                      dark:text-slate-300 dark:hover:text-white'>
                    <MessageCircle
                      size={18}
                      className='text-green-600 dark:text-green-400'
                    />{" "}
                    {profile.whatsapp}
                  </a>

                  <a
                    href={profile.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 transition group
                      text-slate-600 hover:text-slate-900 
                      dark:text-slate-300 dark:hover:text-white'>
                    <Linkedin
                      size={18}
                      className='text-cyan-600 dark:text-cyan-400'
                    />{" "}
                    LinkedIn Profile
                  </a>
                  <a
                    href={profile.mapsLink}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 transition group
                      text-slate-600 hover:text-slate-900 
                      dark:text-slate-300 dark:hover:text-white'>
                    <MapPin
                      size={18}
                      className='text-cyan-600 dark:text-cyan-400'
                    />{" "}
                    {profile.location}
                  </a>
                </div>
              </div>
              <div className='mt-12 text-xs text-slate-500'>
                © {new Date().getFullYear()} Wijaya Saputra.
              </div>
            </div>

            {/* Form */}
            <div className='md:col-span-3 p-8'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full rounded-lg px-4 py-3 border transition focus:outline-none focus:border-cyan-500
                        bg-white border-slate-300 text-slate-900
                        dark:bg-slate-900/50 dark:border-slate-700 dark:text-white'
                      placeholder='John Doe'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      className='w-full rounded-lg px-4 py-3 border transition focus:outline-none focus:border-cyan-500
                        bg-white border-slate-300 text-slate-900
                        dark:bg-slate-900/50 dark:border-slate-700 dark:text-white'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    required
                    rows='3'
                    className='w-full rounded-lg px-4 py-3 border transition resize-none focus:outline-none focus:border-cyan-500
                      bg-white border-slate-300 text-slate-900
                      dark:bg-slate-900/50 dark:border-slate-700 dark:text-white'
                    placeholder='Tell me about your project...'></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type='submit'
                  // SOLID COLOR BUTTON
                  className='w-full font-bold py-4 rounded-lg transition shadow-lg flex justify-center items-center gap-2
                    bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white dark:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {isSubmitting ? (
                    <>
                      <Loader2 className='animate-spin' /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
