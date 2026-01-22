
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initial theme set to Dark
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-12 md:pb-24 space-y-32">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="space-y-40">
        <section id="hero" className="scroll-mt-48">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-48">
          <About />
        </section>

        <section id="education" className="scroll-mt-48">
          <EducationSection />
        </section>

        <section id="experience" className="scroll-mt-48">
          <ExperienceSection />
        </section>

        <section id="projects" className="scroll-mt-48">
          <ProjectsSection />
        </section>

        <section id="skills" className="pb-20 scroll-mt-48">
          <SkillsSection />
        </section>
      </main>

      <footer className="text-center text-zinc-500 text-sm py-10 border-t border-zinc-200 dark:border-zinc-800">
        <p>© {new Date().getFullYear()} Etytech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
