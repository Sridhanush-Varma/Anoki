"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { FiMenu, FiX } from 'react-icons/fi'
import { FiSun, FiMoon } from 'react-icons/fi'
import AnokiLogo from './AnokiLogo'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="mr-2">
                <AnokiLogo />
              </div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Anoki</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link href="/ai-tools" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              AI Tools
            </Link>
            <Link href="/converters" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              File Converters
            </Link>
            <Link href="/detectors" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              AI Detectors
            </Link>
            <Link href="/editors" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Editors
            </Link>
            <Link href="/enhancers" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Enhancers
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700 mt-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link
                href="/"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/ai-tools"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <Link
                href="/converters"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                File Converters
              </Link>
              <Link
                href="/detectors"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Detectors
              </Link>
              <Link
                href="/editors"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Editors
              </Link>
              <Link
                href="/enhancers"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Enhancers
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
