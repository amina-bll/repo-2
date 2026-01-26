
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-right'}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
      <div className={`mt-4 h-1.5 w-24 bg-blue-600 rounded-full ${centered ? 'mx-auto' : 'mr-0'}`}></div>
    </div>
  );
};
