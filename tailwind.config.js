/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        ink: '#151817',
        muted: '#66706b',
        primary: '#16c95b',
        lavender: '#35d978',
        canvas: '#f7fbf9'
      },
      boxShadow: {
        clay: '0 12px 28px rgba(29, 55, 42, 0.08)',
        claySm: '0 5px 14px rgba(29, 55, 42, 0.07)',
        insetSoft: 'inset 2px 2px 6px rgba(29,55,42,0.05)'
      }
    }
  },
  plugins: []
}
