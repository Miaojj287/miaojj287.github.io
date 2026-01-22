
import React from 'react';
import { SKILL_CARDS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <div className="relative pt-10">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
        <h2 className="text-3xl font-bold px-4 whitespace-nowrap">Skills & Expertise</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {SKILL_CARDS.map((card, idx) => (
          <div 
            key={idx}
            className={`
              ${card.color} 
              ${card.rotate}
              p-6 aspect-square shadow-md rounded-sm border border-black/5 dark:border-white/5
              flex flex-col justify-between transform hover:rotate-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300
            `}
          >
            <h4 className="font-handwriting text-zinc-800 dark:text-zinc-100 font-bold text-lg md:text-xl">
              {card.title}
            </h4>
            <p className="font-handwriting text-zinc-700 dark:text-zinc-200 text-sm md:text-base leading-snug">
              {card.content}
            </p>
            <div className="flex justify-end opacity-20 dark:opacity-40">
              <span className="text-xs font-marker">#skill</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
