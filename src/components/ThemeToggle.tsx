'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Function to apply theme
  const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    setMounted(true);
    
    // Function to get current Chicago time
    const getChicagoTime = () => {
      const now = new Date();
      const chicagoTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      return chicagoTime.getHours();
    };

    // Function to determine theme based on time
    const getThemeForTime = (hour: number) => {
      // Light mode: 6 AM - 8 PM (6:00 - 19:59)
      // Dark mode: 8 PM - 6 AM (20:00 - 5:59)
      return (hour >= 6 && hour < 20) ? 'light' : 'dark';
    };

    // Initial theme application based on time
    const currentHour = getChicagoTime();
    const currentTheme = getThemeForTime(currentHour);
    applyTheme(currentTheme);

    // Set up interval to check time every minute
    const interval = setInterval(() => {
      const hour = getChicagoTime();
      const theme = getThemeForTime(hour);
      applyTheme(theme);
    }, 60000); // Check every minute

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Listen for theme changes from other sources (like system preference changes)
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) { // Only auto-update if user hasn't manually set a preference
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);


  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="hidden sm:block">
        <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-400 rounded" />
        </div>
      </div>
    );
  }

  return null;
}


