import { useContext } from 'react'
import { NotesContext } from '../contexts/NotesContext'
import { Note } from '../types/Note'

interface NotesContextType {
  notes: Note[]
  selectedNoteId: string | null
  createNote: (data: { title: string; context?: string }) => Note
  selectNote: (id: string | null) => void
  updateNote: (id: string, updates: Partial<Note>) => void
  deleteNote: (id: string) => void
}

export function useNotes(): NotesContextType {
  const context = useContext(NotesContext)
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider')
  }
  return context
}
