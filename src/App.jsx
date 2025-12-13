import React, { useState } from "react";
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
  Send,
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
  Server,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA ---
  const profile = {
    name: "Muhammad Wijaya Saputra",
    role: "Laravel Developer & Tech Educator",
    email: "wijayasaputra679@gmail.com",
    linkedin: "https://www.linkedin.com/in/m-wijaya-saputra-601145241/",
    location: "Indonesia",
    summary:
      "Crafting robust school management systems and IoT solutions with Laravel & React. Bridging the gap between complex code and clear understanding as a passionate educator and IT specialist.",
  };

  const skillCategories = [
    {
      title: "Fullstack Arsenal",
      icon: <Layers size={24} className='text-cyan-400' />,
      skills: ["Laravel 10+", "Next.js", "RESTful API", "MVC Pattern"],
      bg: "from-cyan-500/10 to-blue-500/10",
      border: "group-hover:border-cyan-500/50",
    },
    {
      title: "Frontend Craft",
      icon: <Globe size={24} className='text-purple-400' />,
      skills: ["React.js", "Modern JS", "Tailwind CSS", "Framer Motion"],
      bg: "from-purple-500/10 to-pink-500/10",
      border: "group-hover:border-purple-500/50",
    },
    {
      title: "Tech & IoT Tools",
      icon: <Cpu size={24} className='text-emerald-400' />,
      skills: ["Python", "MySQL", "Git Workflow", "FaceID Logic", "Leanbot"],
      bg: "from-emerald-500/10 to-teal-500/10",
      border: "group-hover:border-emerald-500/50",
    },
  ];

  // --- EXPERIENCE UPDATED ---
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
      period: "2021 – 2024",
      desc: "Managing and maintaining school server infrastructure to ensure high availability. Responsible for network troubleshooting, hardware maintenance, and data security backups.",
    },
  ];

  const projects = [
    {
      title: "Public Complaint Hub",
      tech: "Laravel • Bootstrap • MySQL",
      desc: "Citizen reporting platform with real-time tracking & automated PDF generation for government transparency.",
      icon: <MessageSquare size={20} />,
      color: "text-blue-400",
    },
    {
      title: "Smart Tuition (SPP)",
      tech: "Laravel • Payment Gateway",
      desc: "Digital financial ecosystem for schools handling arrears, receipts, and real-time financial auditing.",
      icon: <DollarSign size={20} />,
      color: "text-green-400",
    },
    {
      title: "Sport Booking Engine",
      tech: "Laravel • FullCalendar",
      desc: "Real-time reservation system for sports venues with schedule management dashboards.",
      icon: <Calendar size={20} />,
      color: "text-orange-400",
    },
    {
      title: "Geo-QR Attendance",
      tech: "Laravel • Geolocation",
      desc: "Anti-fraud attendance system combining Dynamic QR Codes with GPS radius validation.",
      icon: <QrCode size={20} />,
      color: "text-purple-400",
    },
    {
      title: "FaceID Guest Book",
      tech: "React • Face Recog • Laravel",
      desc: "AI-powered visitor logger that recognizes returning guests instantly via camera feed.",
      icon: <ScanFace size={20} />,
      color: "text-red-400",
    },
    {
      title: "Event Broadcast System",
      tech: "Laravel • Mailpit • SMTP",
      desc: "Mass email engine for school events with robust SMTP configuration and testing environments.",
      icon: <Inbox size={20} />,
      color: "text-yellow-400",
    },
    {
      title: "Digital School Gallery",
      tech: "Laravel • Media Optimization",
      desc: "High-performance digital archive handling bulk uploads and multi-category albums.",
      icon: <Image size={20} />,
      color: "text-pink-400",
    },
  ];

  return (
    <div className='min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden'>
      {/* --- BACKGROUND BLOBS (AMBIENT LIGHT) --- */}
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen'></div>
        <div className='absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen'></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className='fixed w-full top-0 z-50 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text'>
              MWS
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-8 text-sm font-medium'>
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='hover:text-cyan-400 transition-colors'>
                  {item}
                </a>
              ))}
            </div>

            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-slate-300 hover:text-white'>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className='md:hidden bg-[#0f172a] border-b border-white/10'>
            <div className='px-4 pt-2 pb-4 space-y-2'>
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='block py-2 hover:text-cyan-400'
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id='about' className='pt-40 pb-20 px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-8'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-500'></span>
            </span>
            Available for Hire
          </div>

          <h1 className='text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight'>
            Hello, I'm <br />
            <span className='bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text'>
              Putra.
            </span>
          </h1>

          <p className='text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10'>
            {profile.summary}
          </p>

          <div className='flex flex-wrap justify-center gap-4 mb-20'>
            <a
              href='#contact'
              className='flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-cyan-50 transition shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'>
              <Mail size={18} /> Let's Talk
            </a>
            <a
              href={profile.linkedin}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition'>
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* --- SKILLS GRID --- */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
            {skillCategories.map((cat, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-linear-to-br ${cat.bg} border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}>
                <div className='flex items-center justify-between mb-4'>
                  <div className='p-3 bg-[#0f172a] rounded-xl border border-white/10 group-hover:border-white/30 transition-colors'>
                    {cat.icon}
                  </div>
                </div>
                <h4 className='text-lg font-bold text-white mb-3'>
                  {cat.title}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className='px-2.5 py-1 bg-[#0f172a]/60 text-slate-300 text-xs font-medium rounded-md border border-white/5'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id='experience' className='py-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white mb-12 flex items-center gap-3'>
            <Briefcase className='text-cyan-400' /> Career Path
          </h2>
          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='relative pl-8 border-l border-slate-700 hover:border-cyan-500 transition-colors duration-300 group'>
                <div className='absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors'></div>
                <h3 className='text-xl font-bold text-white'>{exp.role}</h3>
                <div className='text-sm text-cyan-400 font-medium mb-3'>
                  {exp.company} • {exp.period}
                </div>
                <p className='text-slate-400 leading-relaxed max-w-2xl'>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id='projects' className='py-20 bg-[#0f172a]'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-white mb-12 flex items-center gap-3'>
            <Code className='text-purple-400' /> Selected Works
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='group relative p-6 bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20'>
                <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500'>
                  <ArrowRight size={20} className='-rotate-45' />
                </div>

                <div
                  className={`mb-5 inline-flex p-3 rounded-lg bg-slate-900/50 border border-white/10 ${project.color}`}>
                  {project.icon}
                </div>

                <h3 className='text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-xs font-bold text-slate-500 uppercase tracking-wider mb-3'>
                  {project.tech}
                </p>

                <p className='text-sm text-slate-400 leading-relaxed'>
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS --- */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-4'>
          <div className='p-8 md:p-12 rounded-3xl bg-linear-to-r from-slate-800/50 to-slate-900/50 border border-white/5 backdrop-blur-lg'>
            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
                  <Award className='text-yellow-400' /> Highlights
                </h3>
                <ul className='space-y-4'>
                  {[
                    "Built exam system for 300+ concurrent users.",
                    "Maintained 99.9% server uptime during exams.",
                    "Automated 70% of admin reporting tasks.",
                    "Pioneered FaceID security implementation.",
                  ].map((item, i) => (
                    <li key={i} className='flex gap-3 text-slate-300'>
                      <span className='text-cyan-400 mt-1'>✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
                  <GraduationCap className='text-cyan-400' /> Education
                </h3>
                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-white'>
                    Diploma 3 – AMIK Wahana Mandiri
                  </h4>
                  <p className='text-slate-500 text-sm'>2018 – 2021</p>
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
                      className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id='contact' className='py-24 relative overflow-hidden'>
        <div className='max-w-4xl mx-auto px-4 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Ready to Collaborate?
            </h2>
            <p className='text-slate-400'>
              Drop a message or reach out directly.
            </p>
          </div>

          <div className='grid md:grid-cols-5 gap-8 bg-slate-800/30 backdrop-blur-xl border border-white/10 rounded-3xl p-1 overflow-hidden'>
            {/* Contact Details */}
            <div className='md:col-span-2 bg-slate-900/80 p-8 rounded-2xl flex flex-col justify-between'>
              <div>
                <div className='text-white font-bold text-xl mb-8'>
                  Contact Info
                </div>
                <div className='space-y-6'>
                  <a
                    href={`mailto:${profile.email}`}
                    className='flex items-center gap-3 text-slate-300 hover:text-white transition'>
                    <Mail size={18} className='text-cyan-400' /> {profile.email}
                  </a>
                  <a
                    href={profile.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 text-slate-300 hover:text-white transition'>
                    <Linkedin size={18} className='text-cyan-400' /> LinkedIn
                    Profile
                  </a>
                  <div className='flex items-center gap-3 text-slate-300'>
                    <MapPin size={18} className='text-cyan-400' />{" "}
                    {profile.location}
                  </div>
                </div>
              </div>
              <div className='mt-12 text-xs text-slate-500'>
                © {new Date().getFullYear()} M. Wijaya Saputra.
              </div>
            </div>

            {/* Form */}
            <div className='md:col-span-3 p-8'>
              <form
                action='https://formspree.io/f/xvgevlye'
                method='POST'
                className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition'
                      placeholder='John Doe'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      required
                      className='w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    required
                    rows='3'
                    className='w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition resize-none'
                    placeholder='Tell me about your project...'></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition shadow-lg shadow-cyan-500/20'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
