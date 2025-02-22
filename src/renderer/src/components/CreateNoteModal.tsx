import { useState } from 'react'
import { X } from '@phosphor-icons/react'
import { useNotes } from '../hooks/useNotes'

interface CreateNoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateNoteModal({ isOpen, onClose }: CreateNoteModalProps): JSX.Element | null {
  const { createNote } = useNotes()
  const [title, setTitle] = useState('')
  const [context, setContext] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (!title.trim()) return

    createNote({
      title: title.trim(),
      context: context.trim() || undefined,
    })
    onClose()
    setTitle('')
    setContext('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Create New Note
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Title
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter note title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="context"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Context (optional)
            </label>
            <textarea
              id="context"
              value={context}
              onChange={e => setContext(e.target.value)}
              className="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Add context to help AI understand your note better"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 text-sm font-medium text-white"
            >
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
