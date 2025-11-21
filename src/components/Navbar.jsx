import React from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Navbar({ activeSection, darkMode, onToggleTheme }) {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-md">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={[
                "text-xs md:text-sm px-3 py-1 rounded-full transition-all",
                "border border-transparent",
                isActive
                  ? "bg-accent text-white shadow-glow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600",
              ].join(" ")}
            >
              {section.label}
            </button>
          );
        })}

        <button
          onClick={onToggleTheme}
          className="ml-1 text-[10px] md:text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
