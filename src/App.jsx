/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Linkedin,
  Mail,
  MapPin,
  Code,
  BookOpen,
  Briefcase,
  GraduationCap,
  Menu,
  Cpu,
  Globe,
  Layers,
  MessageSquare,
  DollarSign,
  Calendar,
  QrCode,
  ScanFace,
  Image,
  ArrowRight,
  Loader2,
  Languages,
  MessageCircle,
  Database,
  TrendingUp,
  ShieldCheck,
  School,
  Github,
  ChevronDown,
} from "lucide-react";

// Component Typewriter
const Typewriter = ({
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

// Component LoadingScreen
const LoadingScreen = () => {
  return (
    <div className='fixed inset-0 z-9999 bg-slate-50 dark:bg-[#0f172a] flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className='mb-4'>
        <div className='w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl'>
          MWS
        </div>
      </motion.div>
      <div className='flex gap-2'>
        <div
          className='w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full animate-bounce'
          style={{ animationDelay: "0s" }}></div>
        <div
          className='w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full animate-bounce'
          style={{ animationDelay: "0.1s" }}></div>
        <div
          className='w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full animate-bounce'
          style={{ animationDelay: "0.2s" }}></div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgevlye", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🚀", { theme: "colored" });
        form.reset();
      } else {
        toast.error("Oops! Failed to send message.", { theme: "colored" });
      }
    } catch (error) {
      toast.error("Network error.", { theme: "colored" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  // Data Profile, Experience, Education, Projects
  const profile = {
    name: "Muhammad Wijaya Saputra",
    email: "wijayasaputra679@gmail.com",
    whatsapp: "+6281934506531",
    github: "https://github.com/WijayaSaputra-867",
    linkedin: "https://www.linkedin.com/in/m-wijaya-saputra-601145241/",
    location: "Bogor, Indonesia",
    mapsLink:
      "https://www.google.com/maps/place/6%C2%B028'15.1%22S+106%C2%B048'12.1%22E/@-6.470862,106.8007771,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.470862!4d106.803352?entry=ttu",
    summary:
      "Professional Laravel Developer & Educator. I build scalable web applications and simplify complex technical concepts for students.",
  };

  const experiences = [
    {
      role: "System Developer (Part-Time)",
      company: "Internal School Projects",
      period: "2021 – Present",
      desc: "Architecting end-to-end school management solutions including Exams, PPDB, and Finance systems using Laravel.",
      current: true,
    },
    {
      role: "Laravel Instructor (Part-Time)",
      company: "SMK TI DWIGUNA",
      period: "2022 – Present",
      desc: "Mentoring next-gen developers in MVC architecture, Database Design, and API Development. Preparing students for industry standards.",
      current: true,
    },
    {
      role: "IT Support Specialist",
      company: "SMK TI DWIGUNA",
      period: "2021 – 2024",
      desc: "Managed server infrastructure, network security, and hardware troubleshooting to ensure 99% uptime for school operations.",
      current: false,
    },
  ];

  const education = [
    {
      icon: <GraduationCap size={20} />,
      degree: "Diploma 3 - Informatics Management",
      school: "AMIK Wahana Mandiri",
      period: "2021 - 2024",
      desc: "Focused on Software Engineering, Database Management, and Web Technologies. Graduated with a strong foundation in logic and algorithms.",
    },
    {
      icon: <School size={20} />,
      degree: "Senior High School - Science Program",
      school: "SMK TI DWIGUNA",
      period: "2018 - 2021",
      desc: "Specialized in Mathematics and Natural Sciences. Developed analytical thinking and problem-solving skills through rigorous coursework.",
    },
  ];

  const projects = [
    {
      title: "Public Complaint Hub",
      tech: "Laravel • Bootstrap",
      desc: "Citizen reporting platform.",
      icon: <MessageSquare size={20} />,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Smart Tuition (SPP)",
      tech: "Laravel • Payment",
      desc: "Financial ecosystem for schools.",
      icon: <DollarSign size={20} />,
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Sport Booking Engine",
      tech: "Laravel • FullCalendar",
      desc: "Venue reservation system.",
      icon: <Calendar size={20} />,
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      title: "Geo-QR Attendance",
      tech: "Laravel • Geolocation",
      desc: "Anti-fraud attendance system.",
      icon: <QrCode size={20} />,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "FaceID Guest Book",
      tech: "React • Face Recognition",
      desc: "Visitor management with facial recognition.",
      icon: <ScanFace size={20} />,
      color: "text-red-500",
      bg: "bg-red-100 dark:bg-red-900/20",
    },
    {
      title: "School Event & OTP",
      tech: "Laravel • OTP • SMTP",
      desc: "Event manager with OTP verification.",
      icon: <ShieldCheck size={20} />,
      color: "text-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-900/20",
    },
    {
      title: "School Gallery",
      tech: "Laravel • Image Optim",
      desc: "Optimized media gallery system.",
      icon: <Image size={20} />,
      color: "text-pink-500",
      bg: "bg-pink-100 dark:bg-pink-900/20",
    },
    {
      title: "Exam & Report Manager",
      tech: "Laravel • Excel • PDF",
      desc: "Learning management system with data import/export features.",
      icon: <BookOpen size={20} />,
      color: "text-indigo-500",
      bg: "bg-indigo-100 dark:bg-indigo-900/20",
    },
    {
      title: "Leanbot",
      tech: "C++ • Telegram API",
      desc: "Telegram learning assistant bot.",
      icon: <Cpu size={20} />,
      color: "text-teal-500",
      bg: "bg-teal-100 dark:bg-teal-900/20",
    },
    {
      title: "Fruit Store E-Commerce",
      tech: "Django • Bootstrap",
      desc: "Online fruit marketplace.",
      icon: <Globe size={20} />,
      color: "text-cyan-500",
      bg: "bg-cyan-100 dark:bg-cyan-900/20",
    },
  ];

  // Render Portfolio
  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className='min-h-screen font-sans bg-slate-50 text-slate-700 dark:bg-[#0f172a] dark:text-slate-300 selection:bg-cyan-500/30'>
          <ToastContainer />

          {/* --- NAVBAR --- */}
          <nav className='fixed w-full top-0 z-50 border-b bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md dark:border-slate-800'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center'>
              <div className='text-2xl font-bold text-cyan-700 dark:text-cyan-400'>
                MWS
              </div>
              <div className='hidden md:flex space-x-8 text-sm font-medium'>
                {["About", "Journey", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className='hover:text-cyan-600 transition-colors'>
                    {item}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden'>
                <Menu />
              </button>
            </div>
            {isMenuOpen && (
              <div className='md:hidden border-b bg-white dark:bg-[#0f172a] dark:border-slate-800 px-4 py-4'>
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

          {/* --- HERO SECTION --- */}
          <section id='about' className='pt-40 pb-20 px-4'>
            <div className='max-w-5xl mx-auto'>
              <div className='text-center mb-16'>
                <div className='inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold mb-6 tracking-wide uppercase border border-cyan-200 dark:border-cyan-800'>
                  Available for Hire
                </div>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight'>
                  I'm{" "}
                  <span className='text-cyan-600 dark:text-cyan-400'>
                    <Typewriter
                      texts={[
                        "Wijaya.",
                        "a Fullstack Dev.",
                        "a Tech Educator.",
                        "a Laravel Expert.",
                      ]}
                      typingSpeed={100}
                      deletingSpeed={50}
                    />
                  </span>
                </h1>
                <p className='text-xl max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed'>
                  {profile.summary}
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]'>
                {/* 1. Main Skill */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between'>
                  <div>
                    <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-4'>
                      <Layers size={24} />
                    </div>
                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>
                      Fullstack Expert
                    </h3>
                    <p className='text-slate-500 dark:text-slate-400'>
                      Specialized in building robust, scalable applications
                      using the Laravel ecosystem and modern React frontends.
                    </p>
                  </div>
                  <div className='flex gap-2 flex-wrap mt-4'>
                    {[
                      "Laravel",
                      "React.js",
                      "Next.js",
                      "Inertia",
                      "Tailwind",
                      "Alpine.js",
                      "Bootstrap",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* 2. Experience Counter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className='md:col-span-1 p-6 rounded-3xl shadow-sm border flex flex-col justify-center items-center text-center transition-colors
                    bg-white border-slate-200
                    dark:bg-slate-800 dark:border-slate-700'>
                  <h3 className='text-5xl font-bold text-cyan-600 dark:text-cyan-400'>
                    3+
                  </h3>
                  <p className='text-sm uppercase tracking-widest mt-2 font-medium text-slate-500 dark:text-slate-400'>
                    Years Exp
                  </p>
                </motion.div>

                {/* 3. Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='md:col-span-1 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center items-center text-center hover:border-cyan-500 transition-colors cursor-pointer'
                  onClick={() => window.open(profile.mapsLink, "_blank")}>
                  <div className='w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-3'>
                    <MapPin size={20} />
                  </div>
                  <h4 className='font-bold text-slate-900 dark:text-white'>
                    Based in
                  </h4>
                  <p className='text-sm text-slate-500'>Bogor, ID</p>
                </motion.div>

                {/* 4. Backend Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className='md:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-6'>
                  <div className='p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl'>
                    <Database size={32} />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-slate-900 dark:text-white'>
                      Backend Engineering
                    </h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>
                      MySQL, SQLite, RESTful APIs, C++ Leanbot, Python scripting
                      & System Architecture.
                    </p>
                  </div>
                </motion.div>

                {/* 5. Expanding Horizons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className='md:col-span-2 p-6 rounded-3xl bg-linear-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 shadow-sm flex items-center gap-6 relative overflow-hidden'>
                  <div className='p-4 bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm z-10'>
                    <TrendingUp size={32} />
                  </div>
                  <div className='z-10'>
                    <h3 className='text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2'>
                      Expanding Horizons
                      <span className='px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-[10px] rounded-full uppercase tracking-wide'>
                        Learning
                      </span>
                    </h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400 mt-1'>
                      Exploring{" "}
                      <span className='font-semibold text-slate-700 dark:text-slate-200'>
                        Flutter
                      </span>{" "}
                      (Mobile),{" "}
                      <span className='font-semibold text-slate-700 dark:text-slate-200'>
                        Django
                      </span>{" "}
                      (Python) &{" "}
                      <span className='font-semibold text-slate-700 dark:text-slate-200'>
                        Data Science
                      </span>
                      (Pandas, NumPy).
                    </p>
                    <p className='text-xs text-slate-400 mt-1 italic'>
                      &lt; 1 Year Experience
                    </p>
                  </div>
                  <div className='absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl'></div>
                </motion.div>

                {/* 6. Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className='md:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center gap-4'>
                  <div className='flex items-center gap-3'>
                    <div className='p-3 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl'>
                      <Languages size={24} />
                    </div>
                    <h3 className='text-lg font-bold text-slate-900 dark:text-white'>
                      Languages
                    </h3>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-700'>
                      <span className='text-slate-600 dark:text-slate-300 font-medium text-sm'>
                        Bahasa Indonesia
                      </span>
                      <span className='px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-300 text-xs font-bold rounded-md'>
                        Native
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-600 dark:text-slate-300 font-medium text-sm'>
                        English
                      </span>
                      <span className='px-2 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-300 text-xs font-bold rounded-md'>
                        Intermediate
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Journey section */}
          <section id='journey' className='py-20'>
            <div className='max-w-5xl mx-auto px-4'>
              <div className='flex items-center gap-4 mb-12'>
                <div className='p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-xl'>
                  <Briefcase size={24} />
                </div>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
                  Professional Journey
                </h2>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                {/* Experience Timeline */}
                <div className='lg:col-span-2'>
                  <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2'>
                    <span className='w-2 h-8 bg-cyan-500 rounded-full'></span>
                    Work History
                  </h3>

                  <div className='relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-12'>
                    {experiences.map((exp, index) => (
                      <div key={index} className='ml-8 relative'>
                        <span
                          className={`absolute -left-[39px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full border-4 border-white dark:border-[#0f172a] ${
                            exp.current
                              ? "bg-cyan-500"
                              : "bg-slate-300 dark:bg-slate-600"
                          }`}></span>
                        <div className='bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow'>
                          <div className='flex flex-wrap justify-between items-start mb-2 gap-2'>
                            <h4 className='text-lg font-bold text-slate-900 dark:text-white'>
                              {exp.role}
                            </h4>
                            <span
                              className={`px-3 py-1 text-xs font-bold rounded-full ${
                                exp.current
                                  ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                                  : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                              }`}>
                              {exp.period}
                            </span>
                          </div>
                          <div className='text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-3'>
                            {exp.company}
                          </div>
                          <p className='text-slate-500 dark:text-slate-400 text-sm leading-relaxed'>
                            {exp.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className='lg:col-span-1'>
                  <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-2'>
                    <span className='w-2 h-8 bg-purple-500 rounded-full'></span>
                    Education
                  </h3>

                  <div className='space-y-6'>
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className='bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm'>
                        <div className='w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-4'>
                          {edu.icon}
                        </div>
                        <h4 className='font-bold text-slate-900 dark:text-white'>
                          {edu.school}
                        </h4>
                        <p className='text-sm text-purple-600 dark:text-purple-400 font-medium my-1'>
                          {edu.degree}
                        </p>
                        <p className='text-xs text-slate-400 uppercase tracking-wide mb-3'>
                          {edu.period}
                        </p>
                        <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed'>
                          {edu.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects section */}
          <section
            id='projects'
            className='py-20 bg-slate-100/50 dark:bg-slate-900/50'>
            <div className='max-w-6xl mx-auto px-4'>
              <div className='flex items-center gap-4 mb-10'>
                <div className='p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-xl'>
                  <Code size={24} />
                </div>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>
                  Selected Works
                </h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projects.slice(0, visibleProjects).map((project, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={index}
                    className='group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all'>
                    <a href='#'>
                      <div className='flex justify-between items-start mb-4'>
                        <div
                          className={`p-3 rounded-xl ${project.bg} ${project.color}`}>
                          {project.icon}
                        </div>
                        <ArrowRight
                          size={20}
                          className='text-slate-300 group-hover:text-slate-600 dark:group-hover:text-slate-400 -rotate-45 transition-colors'
                        />
                      </div>
                      <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-2'>
                        {project.title}
                      </h3>
                      <p className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-3'>
                        {project.tech}
                      </p>
                      <p className='text-sm text-slate-500 dark:text-slate-400'>
                        {project.desc}
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Load More Projects */}
              {visibleProjects < projects.length && (
                <div className='mt-12 text-center'>
                  <button
                    onClick={handleLoadMore}
                    className='px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-2 mx-auto shadow-sm'>
                    Load More Projects <ChevronDown size={18} />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Contact section */}
          <section id='contact' className='py-24'>
            <div className='max-w-4xl mx-auto px-4'>
              <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
                  Let's Work Together
                </h2>
                <p className='text-slate-500 dark:text-slate-400'>
                  Have a project in mind?
                </p>
              </div>

              <div className='bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row'>
                <div className='md:w-2/5 bg-slate-900 p-10 text-white flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl font-bold mb-6'>Contact Info</h3>
                    <div className='space-y-6'>
                      <a
                        href={`mailto:${profile.email}`}
                        className='flex items-center gap-3 text-slate-300 hover:text-white'>
                        <Mail size={18} /> {profile.email}
                      </a>
                      <a
                        href={`https://wa.me/${profile.whatsapp.replace(
                          "+",
                          ""
                        )}`}
                        className='flex items-center gap-3 text-slate-300 hover:text-white'>
                        <MessageCircle size={18} /> {profile.whatsapp}
                      </a>
                      <a
                        href={profile.linkedin}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-3 text-slate-300 hover:text-white'>
                        <Linkedin size={18} /> LinkedIn
                      </a>
                      <a
                        href={profile.github}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-3 text-slate-300 hover:text-white'>
                        <Github size={18} /> GitHub
                      </a>
                    </div>
                  </div>
                  <div className='mt-10 text-xs text-slate-500'>
                    © {new Date().getFullYear()} MWS.
                  </div>
                </div>

                <div className='md:w-3/5 p-10'>
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2'>
                          Name
                        </label>
                        <input
                          type='text'
                          name='name'
                          required
                          className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500'
                          placeholder='John Doe'
                        />
                      </div>
                      <div>
                        <label className='block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2'>
                          Email
                        </label>
                        <input
                          type='email'
                          name='email'
                          required
                          className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500'
                          placeholder='john@example.com'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2'>
                        Message
                      </label>
                      <textarea
                        name='message'
                        required
                        rows='4'
                        className='w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 resize-none'
                        placeholder='Tell me about your project...'></textarea>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className='w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition shadow-lg flex justify-center items-center gap-2 disabled:opacity-50'>
                      {isSubmitting ? (
                        <>
                          <Loader2 className='animate-spin' /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Portfolio;
