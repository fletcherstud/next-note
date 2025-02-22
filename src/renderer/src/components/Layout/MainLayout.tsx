import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { NavigationSidebar } from './NavigationSidebar'
import { AIPanel } from './AIPanel'
import { NoteEditor } from './NoteEditor'

export function MainLayout(): JSX.Element {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="h-12 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex h-full items-center justify-between px-4">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Notes</h1>
          <select
            value={theme}
            onChange={e => setTheme(e.target.value as 'light' | 'dark' | 'system')}
            className="rounded border border-gray-200 bg-gray-50 px-2 py-1 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar - Collapses first on smaller screens */}
        <div className="hidden h-full min-w-[200px] max-w-[300px] flex-shrink overflow-x-hidden xl:block">
          <NavigationSidebar />
        </div>

        {/* Main Content Area - Fixed width, becomes scrollable */}
        <div className="flex h-full flex-shrink-0 flex-grow">
          <div className="mx-auto h-full max-w-[850px]">
            <NoteEditor />
          </div>
        </div>

        {/* AI Panel - Collapses before navigation on smaller screens */}
        <div className="hidden h-full min-w-[250px] max-w-[400px] flex-shrink overflow-x-hidden lg:block">
          <AIPanel />
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="bg-primary-600 fixed bottom-4 left-4 rounded-full p-3 text-white shadow-lg xl:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile AI Panel Toggle */}
        <button className="bg-primary-600 fixed bottom-4 right-4 rounded-full p-3 text-white shadow-lg lg:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
