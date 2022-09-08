/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      montserrat: 'Montserrat, sans-serif',
      anek: 'Anek Telugu, sans-serif',
    },
    
    extend: {
      fontSize: {
        'my2xl': ['32px', { lineHeight: '20px', letterSpacing: '-0.032em'}],
        'my5xl': ['64px', { lineHeight: '50px', letterSpacing: '-0.032em'}],
        'my4xl': ['36px', { lineHeight: '2px', letterSpacing: '-0.032em'}],
        'mybase': ['16px', { lineHeight: '12px', letterSpacing: '-0.032em'}],
        'mysm': ['8px', { lineHeight: '6px', letterSpacing: '-0.032em'}],
      },
    },
  },
  plugins: [],
}
