import React, { createContext, useState } from 'react'
import { Note, CreateNoteData } from '../types/Note'
import { v4 as uuidv4 } from 'uuid'

export interface NotesContextType {
  notes: Note[]
  selectedNoteId: string | null
  createNote: (data: CreateNoteData) => Note
  selectNote: (id: string | null) => void
  updateNote: (id: string, updates: Partial<Note>) => void
  deleteNote: (id: string) => void
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined)

export function NotesProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)

  const createNote = (data: CreateNoteData): Note => {
    const now = new Date()
    const newNote: Note = {
      id: uuidv4(),
      title: data.title,
      content: '',
      context: data.context,
      createdAt: now,
      updatedAt: now,
    }

    setNotes(prev => [newNote, ...prev])
    setSelectedNoteId(newNote.id)
    return newNote
  }

  const selectNote = (id: string | null): void => {
    setSelectedNoteId(id)
  }

  const updateNote = (id: string, updates: Partial<Note>): void => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              ...updates,
              updatedAt: new Date(),
            }
          : note
      )
    )
  }

  const deleteNote = (id: string): void => {
    setNotes(prev => prev.filter(note => note.id !== id))
    if (selectedNoteId === id) {
      setSelectedNoteId(null)
    }
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        selectedNoteId,
        createNote,
        selectNote,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
