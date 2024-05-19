/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // 'text': '#ffffff',
        'background': '#EEF7FF',
        'primary': '#4D869C',
        'dull': "#7AB2B2",
        'secondary': '#CDE8E5',
        'accent': '#0C0C0C',
      }
    },
  },
  plugins: [],
}
