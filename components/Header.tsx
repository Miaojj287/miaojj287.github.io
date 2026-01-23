
'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 10;

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Edu', id: 'education' },
    { label: 'Exp', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrollPosition = currentScrollY + 250;
      const sections = ['about', 'education', 'experience', 'projects', 'skills'];
      let current = activeSection;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);

      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 180;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none pt-8 flex flex-col items-center transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
    >
      <div className="pointer-events-auto mb-5">
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white drop-shadow-sm">
          Yijun Miao / 缪亦隽
        </span>
      </div>

      <div className="pointer-events-auto flex justify-center w-full px-6">
        <div className="flex items-center gap-1 p-1.5 bg-white/20 dark:bg-black/10 backdrop-blur-3xl saturate-[180%] border border-white/40 dark:border-white/5 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.03] dark:ring-white/[0.05] transition-all duration-500">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-4 md:px-6 py-2.5 text-sm font-bold rounded-[26px] transition-all duration-500 relative whitespace-nowrap ${activeSection === item.id
                    ? 'bg-white/60 dark:bg-white/10 text-zinc-950 dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-white/50 dark:border-white/10 scale-[1.02]'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="w-px h-6 bg-zinc-950/10 dark:bg-white/10 mx-1.5" />

          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-[26px] transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
