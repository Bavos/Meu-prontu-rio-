/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: '#4A90E2',
        brandAqua: '#42D6C5',
        textMain: '#2D2D2D',
        textMuted: '#6B6B6B',
        success: '#3DD598'
      },
      fontFamily: {
        sans: ['Poppins', 'Nunito', 'Montserrat', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
