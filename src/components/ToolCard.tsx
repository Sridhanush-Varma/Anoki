"use client"

import Link from 'next/link'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { saveToolInteraction } from '@/utils/recommendationEngine'

interface ToolCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  bgColor: string
  iconColor: string
  isExternal?: boolean
}

const ToolCard = ({
  title,
  description,
  icon,
  href,
  bgColor,
  iconColor,
  isExternal = false
}: ToolCardProps) => {
  const cardContent = (
    <>
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
        <div className={`${iconColor}`}>
          {icon}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center">
        {description}
      </p>
    </>
  )

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center tool-card"
    >
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-full"
          onClick={() => {
            // Track external tool click
            const toolId = title.toLowerCase().replace(/\s+/g, '-');
            saveToolInteraction(toolId);
          }}
        >
          {cardContent}
        </a>
      ) : (
        <Link
          href={href}
          className="flex flex-col items-center w-full"
          onClick={() => {
            // Track internal tool click
            const toolId = title.toLowerCase().replace(/\s+/g, '-');
            saveToolInteraction(toolId);
          }}
        >
          {cardContent}
        </Link>
      )}
    </motion.div>
  )
}

export default ToolCard
