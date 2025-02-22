import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="h-12 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="h-full px-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Notes</h1>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
            className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Navigation Sidebar */}
        <nav className="w-64 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Notes</h2>
          {/* Note list will go here */}
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 bg-white dark:bg-gray-900 p-4">
          {children}
        </main>

        {/* AI Panel */}
        <aside className="w-80 border-l border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">AI Assistant</h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            AI features coming soon...
          </div>
        </aside>
      </div>
    </div>
  );
} 