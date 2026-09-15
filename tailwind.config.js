/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'] },
      colors: {
        ink: '#1d2840',
        muted: '#6f7890',
        primary: '#4f6bff',
        lavender: '#7c83fd',
        canvas: '#f6f8fc'
      },
      boxShadow: {
        clay: '8px 10px 24px rgba(31, 45, 74, 0.08), -6px -6px 18px rgba(255,255,255,0.9)',
        claySm: '4px 5px 12px rgba(31,45,74,0.07), -3px -3px 10px rgba(255,255,255,0.85)',
        insetSoft: 'inset 2px 2px 6px rgba(31,45,74,0.06), inset -2px -2px 6px rgba(255,255,255,0.8)'
      }
    }
  },
  plugins: []
}
