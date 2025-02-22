import React, { createContext, useState } from 'react'

interface LayoutContextType {
  isNavigationOpen: boolean
  isAIPanelOpen: boolean
  toggleNavigation: () => void
  toggleAIPanel: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function LayoutProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true)
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(true)

  const toggleNavigation = (): void => setIsNavigationOpen(prev => !prev)
  const toggleAIPanel = (): void => setIsAIPanelOpen(prev => !prev)

  return (
    <LayoutContext.Provider
      value={{
        isNavigationOpen,
        isAIPanelOpen,
        toggleNavigation,
        toggleAIPanel,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export { LayoutContext }
