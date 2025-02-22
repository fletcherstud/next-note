import { Editor } from '@tiptap/react'
import {
  TextBolder,
  TextItalic,
  TextStrikethrough,
  TextH,
  ListBullets,
  ListNumbers,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  Link,
  Table,
  CheckSquare,
  Highlighter,
} from '@phosphor-icons/react'

interface EditorToolbarProps {
  editor: Editor | null
}

export function EditorToolbar({ editor }: EditorToolbarProps): JSX.Element | null {
  if (!editor) return null

  return (
    <div className="flex items-center gap-1 border-b border-gray-200 bg-white px-6 py-2 dark:border-gray-700 dark:bg-gray-800">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('bold') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextBolder className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('italic') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextItalic className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('strike') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextStrikethrough className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 1 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextH className="h-5 w-5 text-gray-600 dark:text-gray-300" weight="bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextH className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextH className="h-5 w-5 text-gray-600 dark:text-gray-300" weight="light" />
      </button>

      <div className="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('bulletList') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <ListBullets className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('orderedList') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <ListNumbers className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('taskList') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <CheckSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'left' }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextAlignLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'center' }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextAlignCenter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive({ textAlign: 'right' }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextAlignRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="mx-1 h-4 w-px bg-gray-200 dark:bg-gray-700" />

      <button
        onClick={() => {
          const url = window.prompt('Enter the URL')
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('link') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Link className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        }
        className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Table className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('highlight') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Highlighter className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  )
}
