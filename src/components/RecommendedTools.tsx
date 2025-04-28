"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tool, getPersonalizedRecommendations } from '@/utils/recommendationEngine';
import { FiArrowRight } from 'react-icons/fi';

interface RecommendedToolsProps {
  title?: string;
  limit?: number;
}

const RecommendedTools: React.FC<RecommendedToolsProps> = ({ 
  title = "Recommended for You", 
  limit = 4 
}) => {
  const [recommendations, setRecommendations] = useState<Tool[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get recommendations on client-side only
    setRecommendations(getPersonalizedRecommendations(limit));
    setIsLoaded(true);
  }, [limit]);

  if (!isLoaded || recommendations.length === 0) {
    return null; // Don't render anything if no recommendations
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((tool) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <Link 
              href={tool.url} 
              target={tool.url.startsWith('http') ? '_blank' : undefined}
              rel={tool.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
                </div>
                <FiArrowRight className="text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mt-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTools;
