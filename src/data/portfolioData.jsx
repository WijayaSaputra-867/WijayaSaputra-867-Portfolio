import React from 'react';
import { 
  GraduationCap, 
  School, 
  MessageSquare, 
  DollarSign, 
  Calendar, 
  QrCode, 
  ScanFace, 
  ShieldCheck, 
  Image, 
  BookOpen, 
  Cpu, 
  Globe, 
  Bot,
  Building
} from "lucide-react";

export const profile = {
  name: "Muhammad Wijaya Saputra",
  email: "wijayasaputra679@gmail.com",
  whatsapp: "+6281934506531",
  github: "https://github.com/WijayaSaputra-867",
  linkedin: "https://www.linkedin.com/in/m-wijaya-saputra-601145241/",
  location: "Bogor, Indonesia",
  mapsLink: "https://www.google.com/maps/place/6%C2%B028'15.1%22S+106%C2%B048'12.1%22E/@-6.470862,106.8007771,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.470862!4d106.803352?entry=ttu",
  summary: "Professional Laravel Developer & Educator. I build scalable web applications and simplify complex technical concepts for students.",
};

export const experiences = [
  {
    company: "SMK TI DWIGUNA",
    period: "2021 – Present",
    mainDesc: "A multifaceted journey in technology and education at SMK TI DWIGUNA, shifting from infrastructure to system development and technical mentorship.",
    roles: [
      {
        title: "System Developer",
        period: "2021 – Present",
        desc: "Architecting end-to-end school management solutions including Exams, PPDB, and Finance systems using Laravel.",
      },
      {
        title: "Laravel Instructor",
        period: "2022 – Present",
        desc: "Mentoring next-gen developers in MVC architecture, Database Design, and API Development.",
      },
      {
        title: "IT Support Specialist",
        period: "2021 – 2024",
        desc: "Managed server infrastructure, network security, and hardware troubleshooting to ensure 99% uptime.",
      },
    ],
    current: true,
  },
];

export const education = [
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

export const projects = [
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
    tech: "C++ • Arduino",
    desc: "Line Follower Robot.",
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
  {
    title: "It Helpdesk Ticketing System with AI integration",
    tech: "Laravel • React • Recaptcha v3 • AI",
    desc: "Ticketing system for IT support.",
    icon:  <Bot size={20} />,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  {
    title: "Company Profile",
    tech: "Laravel • Tailwind CSS",
    desc: "Company profile website.",
    icon: <Building size={20} />,
    color: "text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-900/20",
  },
  
];
