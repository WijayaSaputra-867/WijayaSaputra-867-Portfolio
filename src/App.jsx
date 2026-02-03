import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Data
import { profile, experiences, education, projects } from "./data/portfolioData.jsx";

// Components
import { LoadingScreen } from "./components/Common.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    setShuffledProjects(shuffleArray(projects));
  }, []);

  useEffect(() => {
    // Determine initial theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Apply initial state
    if (mediaQuery.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleProjectAction = () => {
    if (visibleProjects >= shuffledProjects.length) {
      setVisibleProjects(4);
    } else {
      setVisibleProjects((prev) => Math.min(prev + 4, shuffledProjects.length));
    }
  };

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
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          
          <main>
            <Hero profile={profile} />
            <About />
            <Journey experiences={experiences} education={education} />
            <Projects 
              shuffledProjects={shuffledProjects} 
              visibleProjects={visibleProjects} 
              handleProjectAction={handleProjectAction} 
            />
            <Contact 
              profile={profile} 
              handleSubmit={handleSubmit} 
              isSubmitting={isSubmitting} 
            />
          </main>

          <Footer profile={profile} />
        </div>
      )}
    </>
  );
};

export default Portfolio;
