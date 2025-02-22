import { useState, useCallback, useEffect } from 'react'
import { NotePencil } from '@phosphor-icons/react'
import { useNotes } from '../../hooks/useNotes'
import { CreateNoteModal } from '../CreateNoteModal'
import { EditableTitle } from '../EditableTitle'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import { EditorView } from 'prosemirror-view'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import CharacterCount from '@tiptap/extension-character-count'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Dropcursor from '@tiptap/extension-dropcursor'
import Focus from '@tiptap/extension-focus'
import FontFamily from '@tiptap/extension-font-family'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Image from '@tiptap/extension-image'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import { common, createLowlight } from 'lowlight'
import { EditorToolbar } from '../EditorToolbar'
import { FloatingFormatMenu } from '../FloatingFormatMenu'

const lowlight = createLowlight(common)

export function NoteEditor(): JSX.Element {
  const { notes, selectedNoteId, updateNote } = useNotes()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const selectedNote = notes.find(note => note.id === selectedNoteId)

  useEffect(() => {
    console.log('NoteEditor: Selected note changed:', selectedNote?.id)
  }, [selectedNote])

  const handleTitleChange = (newTitle: string): void => {
    if (selectedNote) {
      updateNote(selectedNote.id, { title: newTitle })
    }
  }

  const handleContextMenu = useCallback((_view: EditorView, event: MouseEvent): boolean => {
    // Prevent the default editor behavior (which shows the floating menu)
    event.preventDefault()

    // Create and dispatch a new context menu event to show the browser's native menu
    const customEvent = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      view: window,
      button: 2,
      buttons: 2,
      clientX: event.clientX,
      clientY: event.clientY,
      screenX: event.screenX,
      screenY: event.screenY,
    })

    event.target?.dispatchEvent(customEvent)
    return true
  }, [])

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: 'Start typing your note...',
        showOnlyWhenEditable: true,
        showOnlyCurrent: false,
      }),
      Highlight,
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextStyle,
      Color,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CharacterCount,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'javascript',
      }),
      Dropcursor.configure({
        color: '#38bdf8',
        width: 2,
      }),
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
      FontFamily,
      HorizontalRule,
      Image,
      Subscript,
      Superscript,
      Underline,
    ],
    content: selectedNote?.content || '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm dark:prose-invert max-w-none outline-none px-8 py-4 min-h-full [&_*]:outline-none [&_.has-focus]:ring-0 [&_p]:my-2 [&_pre]:bg-gray-100 dark:[&_pre]:bg-gray-800 [&_pre]:p-4 [&_pre]:rounded-lg [&_img]:max-w-full [&_img]:rounded-lg [&_hr]:my-4 [&_hr]:border-gray-200 dark:[&_hr]:border-gray-700',
        spellcheck: 'true',
        autocorrect: 'true',
      },
      handleDOMEvents: {
        contextmenu: handleContextMenu,
        mousedown: (view, event) => {
          // Allow default behavior for right clicks
          if (event.button === 2) {
            return false
          }
          return true
        },
      },
    },
    autofocus: 'end',
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
      <div className="flex h-full w-full flex-col items-center justify-center bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center">
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
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center px-6 py-4">
          <EditableTitle title={selectedNote?.title || ''} onSave={handleTitleChange} />
        </div>
        <EditorToolbar editor={editor} />
      </div>
      <div className="flex flex-1 bg-white dark:bg-gray-800">
        <div className="relative flex w-full flex-col">
          <FloatingFormatMenu editor={editor} />
          <div
            className="min-h-full w-full cursor-text"
            onClick={() => editor?.chain().focus().run()}
          >
            <EditorContent editor={editor} className="min-h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
