/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050510', // Deep Void
        'deep-void': '#050510',
        'nebula-blue': '#0B0F29',
        'royal-blue': '#2563EB',
        'electric-cyan': '#00F0FF',
        'starlight-white': '#FFFFFF',
        'mist-grey': '#A0A0B0',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(5,5,16,0) 0%, #050510 100%)', // Fade to black
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 240, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
