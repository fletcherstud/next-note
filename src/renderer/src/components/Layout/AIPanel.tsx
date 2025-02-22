import { PencilLine, Robot, Trash, X } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { useState } from 'react'

export function AIPanel(): JSX.Element {
  const { notes, selectedNoteId, updateNote } = useNotes()
  const [isEditing, setIsEditing] = useState(false)
  const [tempContext, setTempContext] = useState('')

  const selectedNote = notes.find(note => note.id === selectedNoteId)

  const handleSaveContext = (): void => {
    if (!selectedNote) return
    updateNote(selectedNote.id, { context: tempContext.trim() || undefined })
    setIsEditing(false)
  }

  const handleRemoveContext = (): void => {
    if (!selectedNote) return
    updateNote(selectedNote.id, { context: undefined })
  }

  const startEditing = (): void => {
    setTempContext(selectedNote?.context || '')
    setIsEditing(true)
  }

  if (!selectedNote) {
    return (
      <div className="flex h-full flex-col border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="border-b border-gray-200 p-4 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Robot className="text-primary-600 dark:text-primary-400 h-5 w-5" weight="duotone" />
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Assistant</h2>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center p-4">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Select a note to view or add AI context
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col border-l border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center gap-2">
            <Robot className="text-primary-600 dark:text-primary-400 h-5 w-5" weight="duotone" />
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Assistant</h2>
          </div>
        </div>

        {/* Context Section */}
        <div className="border-t border-gray-100 bg-white px-4 py-3 dark:border-gray-700/50 dark:bg-gray-800/50">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Context
            </span>
            <div className="h-px flex-1 bg-gray-100 dark:bg-gray-700" />
          </div>
          <div className="relative rounded-lg bg-gray-50 p-2 dark:bg-gray-800">
            {isEditing ? (
              <div className="space-y-2">
                <textarea
                  value={tempContext}
                  onChange={e => setTempContext(e.target.value)}
                  placeholder="Add context to help AI understand your note..."
                  className="w-full resize-none bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-300 dark:placeholder-gray-500"
                  rows={2}
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="rounded px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveContext}
                    className="bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900/10 dark:text-primary-400 dark:hover:bg-primary-900/20 rounded px-2 py-1 text-xs font-medium"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : selectedNote.context ? (
              <div className="group relative">
                <p className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                  {selectedNote.context}
                </p>
                <div className="absolute -right-1 -top-1 flex gap-1 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={startEditing}
                    className="rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                    aria-label="Edit context"
                  >
                    <PencilLine className="h-3 w-3" />
                  </button>
                  <button
                    onClick={handleRemoveContext}
                    className="rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-red-100 hover:text-red-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400"
                    aria-label="Remove context"
                  >
                    <Trash className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={startEditing}
                className="w-full text-left text-sm text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              >
                Add context to help AI understand your note
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Start typing to chat with the AI assistant...
          </p>
        </div>
      </div>
    </div>
  )
}
