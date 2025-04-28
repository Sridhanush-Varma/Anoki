"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCommand } from 'react-icons/fi';
import CommandLauncher from './CommandLauncher';

const CommandButton: React.FC = () => {
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);

  const openLauncher = () => {
    setIsLauncherOpen(true);
  };

  const closeLauncher = () => {
    setIsLauncherOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openLauncher}
        className="fixed bottom-6 right-6 bg-blue-600 dark:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center space-x-2 z-40 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        aria-label="Open Command Launcher"
      >
        <FiCommand className="h-5 w-5" />
        <span className="font-medium">Command</span>
      </motion.button>
      
      <CommandLauncher isOpen={isLauncherOpen} onClose={closeLauncher} />
    </>
  );
};

export default CommandButton;
