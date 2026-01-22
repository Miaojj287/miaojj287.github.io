
import React from 'react';
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
        <h2 className="text-3xl font-bold px-4 whitespace-nowrap">Education</h2>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-1" />
      </div>

      <div className="space-y-12">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="group border-l border-zinc-200 dark:border-zinc-800 pl-6 space-y-1 relative">
            {/* Timeline Dot */}
            <div className="absolute w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 left-[-4.5px] top-1.5 group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors" />
            
            {/* Header Row: School & Period */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {edu.school}
              </h3>
              <span className="text-sm text-zinc-500 font-mono tabular-nums">
                {edu.period}
              </span>
            </div>

            {/* Sub-header Row: Degree & Location */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                {edu.degree}
              </p>
              {edu.location && (
                <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono uppercase tracking-wider">
                  {edu.location}
                </span>
              )}
            </div>

            {/* Optional Description */}
            {edu.description && (
              <div className="pt-2">
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  {edu.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
