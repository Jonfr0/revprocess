'use client';

import { useEffect, useState } from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or system preference only after mount
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Listen for theme changes from other sources (like system preference changes)
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) { // Only auto-update if user hasn't manually set a preference
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const isDark = theme === 'dark';

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm bg-white text-black transition-colors duration-200"
        disabled
      >
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
        <span>Loading...</span>
      </button>
    );
  }

  if (isDark) {
    // Dark mode icon: white sun icon that becomes black on hover
    return (
      <button
        type="button"
        aria-label="Switch to light mode"
        className="text-white cursor-pointer sm:text-white"
        onClick={() => setTheme('light')}
      >
        <IoSunnySharp size={20} className="sm:w-6 sm:h-6" />
      </button>
    );
  } else {
    // Light mode icon: black moon icon that becomes white on hover
    return (
      <button
        type="button"
        aria-label="Switch to dark mode"
        className="text-black cursor-pointer sm:text-black"
        onClick={() => setTheme('dark')}
      >
        <IoMoonSharp size={20} className="sm:w-6 sm:h-6" />
      </button>
    );
  }
}


