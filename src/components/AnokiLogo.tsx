"use client"

import React from 'react';
import { useTheme } from './ThemeProvider';

const AnokiLogo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-10 h-10">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-500'}`}>
        <span className="text-xl font-bold text-white">A</span>
      </div>
    </div>
  );
};

export default AnokiLogo;
