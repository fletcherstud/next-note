import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { MainLayout } from './components/Layout/MainLayout'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MainLayout></MainLayout>
    </ThemeProvider>
  )
}
