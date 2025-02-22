import { useState } from 'react'
import { Plus, MagnifyingGlass, Note, Star, Trash, CaretDown } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { CreateNoteModal } from '../CreateNoteModal'

export function NavigationSidebar(): JSX.Element {
  const { notes, selectedNoteId, selectNote } = useNotes()
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

      {/* Navigation Lists */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* All Notes */}
          <div>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center gap-2">
                <Note className="h-4 w-4 text-gray-500 dark:text-gray-400" weight="regular" />
                <span>All Notes</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">24</span>
            </button>
          </div>

          {/* Favorites */}
          <div>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gray-500 dark:text-gray-400" weight="regular" />
                <span>Favorites</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">8</span>
            </button>
          </div>

          {/* Notebooks */}
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center gap-2">
                <CaretDown className="h-4 w-4 text-gray-500 dark:text-gray-400" weight="regular" />
                <span>Notebooks</span>
              </div>
            </button>
            {/* Add notebook list items here */}
          </div>

          {/* Trash */}
          <div>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center gap-2">
                <Trash className="h-4 w-4 text-gray-500 dark:text-gray-400" weight="regular" />
                <span>Trash</span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">3</span>
            </button>
          </div>
        </div>
      </nav>

      <CreateNoteModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  )
}
