import { useState } from 'react'
import { NotePencil } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { CreateNoteModal } from '../CreateNoteModal'

export function NoteEditor(): JSX.Element {
  const { notes, selectedNoteId } = useNotes()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const selectedNote = notes.find(note => note.id === selectedNoteId)

  if (!selectedNote) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8">
        <NotePencil className="mb-4 h-12 w-12 text-gray-400" weight="thin" />
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          No Note Selected
        </h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
          Select a note from the sidebar or create a new one to get started.
        </p>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 text-sm font-medium text-white"
        >
          Create New Note
        </button>

        <CreateNoteModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      </div>
    )
  }

  // TODO: Implement note editing UI
  return (
    <div className="h-full p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        {selectedNote.title}
      </h1>
      <div className="h-px bg-gray-200 dark:bg-gray-700" />
    </div>
  )
}
