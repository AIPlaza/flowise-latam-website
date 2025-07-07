/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Added for dark mode examples if needed later

  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          'electric-blue': '#4F46E5',
          'code-green': '#10B981',
          'system-purple': '#8B5CF6',
          'deep-black': '#121212',
          'light-text': '#F3F4F6',
        },
      },
    },
  },
  plugins: [],
}
