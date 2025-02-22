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
      <div className="flex flex-1">
        {/* Navigation Sidebar */}
        <NavigationSidebar />
        {/* Main Content Area */}
        <NoteEditor />
        {/* AI Panel */}
        <AIPanel />
      </div>
    </div>
  )
}
