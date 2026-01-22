
'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectImageGallery: React.FC<{ images: string[], title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group/gallery">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 hover:scale-105"
      />

      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-white/40 dark:hover:bg-black/40"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 text-white opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 hover:bg-white/40 dark:hover:bg-black/40"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white w-3' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
        <h2 className="text-3xl font-bold px-4">Projects</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
      </div>
      
      <div className="grid gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row gap-8 p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group"
          >
            <div className="md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/50">
              <ProjectImageGallery images={project.images} title={project.title} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <a 
                href={project.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform"
              >
                View Project 
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
