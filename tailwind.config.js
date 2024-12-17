/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': '#F5E3E0',
        'soft-pink': '#E8B4BC',
        'muted-pink': '#D282A6',
        'dark-mauve': '#6E4555',
        'dark-grayish-brown': '#3A3238',
        'misty-rose': '#f5e3e0ff',
        'orchid-pink': '#e8b4bcff',
        'thulian-pink': '#d282a6ff',
        'eggplant': '#6e4555ff',
        'jet': '#3a3238ff',
      },
    },
  },
  plugins: [],
};
