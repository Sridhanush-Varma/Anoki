"use client"

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  // Handle GitHub Pages 404 redirects
  useEffect(() => {
    // Check if we're on GitHub Pages and handle potential path issues
    const path = window.location.pathname
    const isGitHubPages = window.location.hostname.includes('github.io')

    if (isGitHubPages) {
      // Extract the repository name from the path
      const pathParts = path.split('/')
      if (pathParts.length > 1) {
        const repoName = pathParts[1]

        // Check if we need to redirect
        if (path.startsWith(`/${repoName}`) && !path.startsWith(`/${repoName}/`)) {
          window.location.href = `/${repoName}/`
          return
        }

        // Check if path is missing the base path
        if (!path.startsWith(`/${repoName}`)) {
          window.location.href = `/${repoName}${path}`
          return
        }

        // Check if this is a static asset path that needs fixing
        if (path.includes('/next/static/') && !path.includes(`/${repoName}/next/static/`)) {
          const correctedPath = path.replace('/next/static/', `/${repoName}/next/static/`)
          window.location.href = correctedPath
          return
        }
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}
