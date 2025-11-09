'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-md sm:text-lg font-medium text-text dark:text-text-dark flex items-center gap-2">
          <span className="text-2xl">🏗️</span>
          <span className="font-sans font-bold text-primary dark:text-primary-light">BuildPro</span>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral dark:bg-neutral-dark hover:bg-neutral-dark dark:hover:bg-neutral transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-colors shadow-subtle hover:shadow-hover"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
}