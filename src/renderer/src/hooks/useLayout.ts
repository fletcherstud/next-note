import { useContext } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'

interface LayoutContextType {
  isNavigationOpen: boolean
  isAIPanelOpen: boolean
  toggleNavigation: () => void
  toggleAIPanel: () => void
}

export function useLayout(): LayoutContextType {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}
