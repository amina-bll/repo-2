
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'px-10 py-4 rounded-full font-bold transition-all duration-500 active:scale-95 text-sm uppercase tracking-wider overflow-hidden relative group';
  const variants = {
    primary: 'bg-white text-black hover:bg-slate-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]',
    secondary: 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20',
    outline: 'border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/10 glass',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </button>
  );
};
