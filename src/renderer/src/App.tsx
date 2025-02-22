import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainLayout } from './components/Layout/MainLayout';

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MainLayout>
        <div className="h-full flex items-center justify-center text-text-light dark:text-text-dark">
          <p>Select or create a note to get started</p>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}
