import { useTheme } from '../hooks/useTheme'
import { Sun, Moon, Monitor } from '@phosphor-icons/react'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-12 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Next Note</h1>
        </div>
        <div className="flex items-center gap-2">
          {theme === 'light' && <Sun className="h-4 w-4 text-gray-600" weight="regular" />}
          {theme === 'dark' && <Moon className="h-4 w-4 text-gray-400" weight="regular" />}
          {theme === 'system' && <Monitor className="h-4 w-4 text-gray-500" weight="regular" />}
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
      </div>
    </header>
  )
}
