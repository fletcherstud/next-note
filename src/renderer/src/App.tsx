import { ThemeProvider } from './contexts/ThemeContext'
import { LayoutProvider } from './contexts/LayoutContext'
import { MainLayout } from './components/Layout/MainLayout'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <MainLayout />
      </LayoutProvider>
    </ThemeProvider>
  )
}
