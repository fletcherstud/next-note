import { useState } from 'react'
import { Plus, MagnifyingGlass } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { CreateNoteModal } from '../CreateNoteModal'
import { NoteListItem } from '../NoteListItem'

export function NavigationSidebar(): JSX.Element {
  const { notes, selectedNoteId, selectNote, deleteNote } = useNotes()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      {/* Search and Create */}
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <MagnifyingGlass
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              weight="regular"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search notes..."
              className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            />
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            aria-label="Create new note"
          >
            <Plus className="h-4 w-4" weight="bold" />
          </button>
        </div>
      </div>

      {/* Notes List */}
      <nav className="flex-1 overflow-y-auto p-4">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            {searchQuery ? 'No notes found' : 'No notes yet'}
          </p>
        ) : (
          <div className="space-y-1">
            {filteredNotes.map(note => (
              <NoteListItem
                key={note.id}
                note={note}
                isSelected={selectedNoteId === note.id}
                onSelect={selectNote}
                onDelete={deleteNote}
              />
            ))}
          </div>
        )}
      </nav>

      <CreateNoteModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}
