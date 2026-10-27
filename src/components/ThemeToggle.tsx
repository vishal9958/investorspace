"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    // Listen for class changes on <html>
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className={`size-9 rounded-full border border-border/40 bg-black/5 dark:bg-white/5 ${className}`} />
    );
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Luxury Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Luxury Dark Theme"}
      className={`group relative grid size-9 sm:size-10 place-items-center rounded-full border border-border/60 bg-white/80 dark:bg-[#151D2A]/90 dark:border-primary/40 backdrop-blur-md shadow-sm transition-colors hover:border-primary hover:shadow-[0_0_15px_rgba(141,1,2,0.3)] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-amber-400"
          >
            <Sun className="size-4.5 sm:size-5 transition-transform group-hover:rotate-45" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-slate-700 hover:text-primary"
          >
            <Moon className="size-4.5 sm:size-5 transition-transform group-hover:-rotate-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
