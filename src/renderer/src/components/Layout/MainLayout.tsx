import { NavigationSidebar } from './NavigationSidebar'
import { AIPanel } from './AIPanel'
import { NoteEditor } from './NoteEditor'
import { List, Robot } from '@phosphor-icons/react'
import { Header } from '../Header'
import { useLayout } from '../../hooks/useLayout'

export function MainLayout(): JSX.Element {
  const { isNavigationOpen, isAIPanelOpen, toggleNavigation, toggleAIPanel } = useLayout()

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar - Collapses first on smaller screens */}
        {isNavigationOpen && (
          <div className="hidden h-full min-w-[200px] max-w-[300px] flex-shrink overflow-x-hidden xl:block">
            <NavigationSidebar />
          </div>
        )}

        {/* Main Content Area - Fixed width, becomes scrollable */}
        <div className="flex h-full flex-shrink-0 flex-grow">
          <div className="mx-auto h-full max-w-[850px]">
            <NoteEditor />
          </div>
        </div>

        {/* AI Panel - Collapses before navigation on smaller screens */}
        {isAIPanelOpen && (
          <div className="hidden h-full min-w-[250px] max-w-[400px] flex-shrink overflow-x-hidden lg:block">
            <AIPanel />
          </div>
        )}

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleNavigation}
          className="fixed bottom-4 left-4 rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-900 shadow-lg transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 xl:hidden"
          aria-label="Toggle Navigation"
        >
          <List className="h-6 w-6" weight={isNavigationOpen ? 'regular' : 'bold'} />
        </button>

        {/* Mobile AI Panel Toggle */}
        <button
          onClick={toggleAIPanel}
          className="fixed bottom-4 right-4 rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-900 shadow-lg transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 lg:hidden"
          aria-label="Toggle AI Panel"
        >
          <Robot className="h-6 w-6" weight={isAIPanelOpen ? 'regular' : 'bold'} />
        </button>
      </div>
    </div>
  )
}
