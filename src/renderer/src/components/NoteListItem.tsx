import { Trash } from '@phosphor-icons/react'
import { Note } from '../types/Note'

interface NoteListItemProps {
  note: Note
  isSelected: boolean
  onSelect: (id: string) => void
  onDelete: (id: string) => void
}

export const NoteListItem = ({
  note,
  isSelected,
  onSelect,
  onDelete,
}: NoteListItemProps): JSX.Element => {
  return (
    <div className="group relative rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      <button
        onClick={() => onSelect(note.id)}
        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ${
          isSelected
            ? 'bg-primary-50 text-primary-900 dark:bg-primary-900/10 dark:text-primary-100'
            : 'text-gray-900 dark:text-gray-100'
        }`}
      >
        <div className="flex flex-1 items-center gap-2 truncate">
          <span className="truncate">{note.title}</span>
          {note.context && (
            <span className="flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              AI
            </span>
          )}
        </div>
        <button
          onClick={e => {
            e.stopPropagation()
            onDelete(note.id)
          }}
          className="flex-shrink-0 rounded p-1 text-gray-400 opacity-0 hover:bg-gray-200 hover:text-red-600 group-hover:opacity-100 dark:hover:bg-gray-600 dark:hover:text-red-400"
          aria-label="Delete note"
        >
          <Trash className="h-4 w-4" weight="regular" />
        </button>
      </button>
    </div>
  )
}
