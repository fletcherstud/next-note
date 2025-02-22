import { ThemeProvider } from './contexts/ThemeContext'
import { LayoutProvider } from './contexts/LayoutContext'
import { NotesProvider } from './contexts/NotesContext'
import { MainLayout } from './components/Layout/MainLayout'

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <NotesProvider>
          <MainLayout />
        </NotesProvider>
      </LayoutProvider>
    </ThemeProvider>
  )
}
