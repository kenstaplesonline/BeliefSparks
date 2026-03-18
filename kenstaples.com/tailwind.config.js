/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        highway: ['var(--font-oswald)', 'Arial Narrow', 'sans-serif'],
      },
      colors: {
        calgary: {
          // Core Colors
          red: '#c8102e',           // Main brand color (Calgary Red)
          grey: '#4b4f55',          // Corporate grey (dark background)
          black: '#000000',         // Pure black
          white: '#ffffff',         // Pure white

          // Secondary Colors (for accents)
          orange: '#E57200',        // Orange accent
          yellow: '#FFC600',        // Yellow accent
          green: '#4C8C2B',         // Green accent
          blue: '#0085AD',          // Blue accent
          darkBlue: '#003865',      // Dark blue accent
          purple: '#642F6C',        // Purple accent
          pink: '#AC145A',          // Pink accent

          // Lighter shades of grey
          greyLight: {
            1: '#5d6066',
            2: '#6f7277',
            3: '#818388',
            4: '#939599',
            5: '#a5a7aa',
            6: '#b7b9bb',
            7: '#c9cacc',
            8: '#dbdcdd',
            9: '#ededee',
            10: '#f6f6f6',
          },

          // Darker shades
          greyDark: {
            1: '#191919',
            2: '#333333',
            3: '#4c4c4c',
            4: '#666666',
            5: '#7f7f7f',
            6: '#999999',
            7: '#b2b2b2',
            8: '#cccccc',
            9: '#e5e5e5',
          },
        },
      },
    },
  },
  plugins: [],
}
