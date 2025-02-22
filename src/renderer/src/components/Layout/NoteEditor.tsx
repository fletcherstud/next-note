import { useState, useCallback, useEffect } from 'react'
import { NotePencil } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { CreateNoteModal } from '../CreateNoteModal'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

export function NoteEditor(): JSX.Element {
  const { notes, selectedNoteId, updateNote } = useNotes()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const selectedNote = notes.find(note => note.id === selectedNoteId)

  useEffect(() => {
    console.log('NoteEditor: Selected note changed:', selectedNote?.id)
  }, [selectedNote])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your note...',
      }),
    ],
    content: selectedNote?.content || '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm dark:prose-invert max-w-none focus:outline-none',
      },
    },
    onUpdate: useCallback(
      ({ editor }: { editor: Editor }) => {
        console.log('NoteEditor: Content update triggered')
        if (selectedNote) {
          const content = editor.getHTML()
          console.log('NoteEditor: Updating note content for:', selectedNote.id)
          updateNote(selectedNote.id, { content })
        }
      },
      [selectedNote, updateNote]
    ),
  })

  // Update editor content when selected note changes
  useEffect(() => {
    if (editor && selectedNote && editor.getHTML() !== selectedNote.content) {
      console.log('NoteEditor: Setting new content for editor')
      editor.commands.setContent(selectedNote.content)
    }
  }, [editor, selectedNote])

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

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {selectedNote.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-1 bg-white dark:bg-gray-800">
        <div className="w-full px-6 py-4">
          <EditorContent editor={editor} className="min-h-full w-full" />
        </div>
      </div>
    </div>
  )
}
