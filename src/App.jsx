import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const SECTION_IDS = ["hero", "tech", "projects", "experience"];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -55% 0px",
      threshold: 0.2,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black dark:text-white transition-colors duration-500">
        <Navbar
          activeSection={activeSection}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((prev) => !prev)}
        />

        <main className="pt-20 md:pt-24 relative overflow-hidden">
          {/* Soft glowing background blobs (parallax-ish) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-10 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <Hero />
          <Tech />
          <Projects />
          <Experience />
        </main>

        <Footer />
      </div>
    </div>
  );
}
