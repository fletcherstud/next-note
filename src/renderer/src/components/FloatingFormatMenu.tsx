import { Editor, BubbleMenu } from '@tiptap/react'
import {
  TextBolder,
  TextItalic,
  TextUnderline,
  TextStrikethrough,
  TextH,
  Code,
  Quotes,
  Link,
  TextAa,
  Highlighter,
} from '@phosphor-icons/react'

interface FloatingFormatMenuProps {
  editor: Editor | null
}

export function FloatingFormatMenu({ editor }: FloatingFormatMenuProps): JSX.Element | null {
  if (!editor) return null

  return (
    <BubbleMenu
      className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('bold') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextBolder className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('italic') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextItalic className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('underline') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextUnderline className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('strike') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextStrikethrough className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="mx-0.5 my-2 w-px bg-gray-200 dark:bg-gray-600" />

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextH className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('code') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Code className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('blockquote') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Quotes className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="mx-0.5 my-2 w-px bg-gray-200 dark:bg-gray-600" />

      <button
        onClick={() => {
          const url = window.prompt('Enter the URL')
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('link') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Link className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('highlight') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <Highlighter className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('codeBlock') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <TextAa className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
    </BubbleMenu>
  )
}
