import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            em: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              borderRadius: '0.25rem',
              paddingInline: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              borderRadius: '0.5rem',
              padding: '1rem',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: 'inherit',
            },
            hr: {
              borderColor: 'inherit',
            },
            'ul > li::marker': {
              color: 'inherit',
            },
            'ol > li::marker': {
              color: 'inherit',
            },
            img: {
              maxWidth: '100%',
              borderRadius: '0.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
