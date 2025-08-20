'use client';

import { useEffect, useState } from 'react';

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

  const isDark = theme === 'dark';

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md border border-border-gray px-3 py-1.5 text-sm bg-white text-black transition-colors duration-200"
        disabled
      >
        <div className="w-4 h-4 bg-gray-300 rounded animate-pulse" />
        <span>Loading...</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-2 rounded-md border border-border-gray px-3 py-1.5 text-sm bg-white text-black dark:bg-[#1e1e1e] dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        // Sun icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zM4.95 19.07l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM20 11v2h3v-2h-3zm-1.34-7.95l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM13 1h-2v3h2V1zm4.24 17.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 6a6 6 0 100 12A6 6 0 0012 6z"/>
        </svg>
      ) : (
        // Moon icon
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.75 15.5A9.75 9.75 0 1112.5 2.25a8.25 8.25 0 009.25 13.25z"/>
        </svg>
      )}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}


