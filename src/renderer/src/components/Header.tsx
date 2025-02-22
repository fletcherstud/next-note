import { useTheme } from '../hooks/useTheme'
import { useLayout } from '../hooks/useLayout'
import { Sun, Moon, Monitor, List, Robot, NotePencil } from '@phosphor-icons/react'
import { useState, useRef, useEffect } from 'react'

export function Header(): JSX.Element {
  const { theme, setTheme } = useTheme()
  const { isNavigationOpen, isAIPanelOpen, toggleNavigation, toggleAIPanel } = useLayout()
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getCurrentThemeIcon = (): JSX.Element => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4 text-gray-600" weight="regular" />
      case 'dark':
        return <Moon className="h-4 w-4 text-gray-400" weight="regular" />
      case 'system':
        return <Monitor className="h-4 w-4 text-gray-500" weight="regular" />
    }
  }

  return (
    <header className="h-12 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Next Note</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* Navigation Toggle */}
          <button
            onClick={toggleNavigation}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 ${
              !isNavigationOpen ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            aria-label="Toggle Navigation Sidebar"
          >
            <List className="h-4 w-4" weight={isNavigationOpen ? 'regular' : 'bold'} />
          </button>

          {/* AI Panel Toggle */}
          <button
            onClick={toggleAIPanel}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 ${
              !isAIPanelOpen ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            aria-label="Toggle AI Panel"
          >
            <Robot className="h-4 w-4" weight={isAIPanelOpen ? 'regular' : 'bold'} />
          </button>

          {/* Theme Selector */}
          <div
            className="relative ml-2 border-l border-gray-200 pl-2 dark:border-gray-700"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 ${
                isThemeOpen ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              aria-label="Change theme"
            >
              {getCurrentThemeIcon()}
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-600 dark:bg-gray-800">
                <button
                  onClick={() => {
                    setTheme('light')
                    setIsThemeOpen(false)
                  }}
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Sun className="h-4 w-4" weight="regular" />
                  Light
                </button>
                <button
                  onClick={() => {
                    setTheme('dark')
                    setIsThemeOpen(false)
                  }}
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Moon className="h-4 w-4" weight="regular" />
                  Dark
                </button>
                <button
                  onClick={() => {
                    setTheme('system')
                    setIsThemeOpen(false)
                  }}
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Monitor className="h-4 w-4" weight="regular" />
                  System
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
