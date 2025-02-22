import { useState, useEffect, KeyboardEvent } from 'react'
import { Check } from '@phosphor-icons/react'

interface EditableTitleProps {
  title: string
  onSave: (newTitle: string) => void
}

export function EditableTitle({ title, onSave }: EditableTitleProps): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)

  useEffect(() => {
    setEditedTitle(title)
  }, [title])

  const handleSave = (): void => {
    if (editedTitle.trim() !== '') {
      onSave(editedTitle.trim())
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setEditedTitle(title)
    }
  }

  if (isEditing) {
    return (
      <div className="flex w-full items-center gap-2">
        <input
          type="text"
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="border-primary-500 w-full border-b bg-transparent text-2xl font-bold text-gray-900 outline-none dark:text-gray-100"
        />
        <button
          onClick={handleSave}
          className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Check className="text-primary-500 h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <h1
      className="hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer text-2xl font-bold text-gray-900 dark:text-gray-100"
      onClick={() => setIsEditing(true)}
    >
      {title}
    </h1>
  )
}
