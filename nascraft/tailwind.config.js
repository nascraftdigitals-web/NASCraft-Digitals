/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        obsidian: '#030305',
        deep: '#080810',
        navy: '#0D0D1A',
        teal: '#00F5D4',
        'teal-d': '#00C4AA',
        'teal-g': 'rgba(0,245,212,0.18)',
        mag: '#FF00C8',
        'mag-d': '#CC00A0',
        'mag-g': 'rgba(255,0,200,0.15)',
        white: '#E8E8FF',
        muted: '#454568',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '1rem'],
      },
      animation: {
        'grid-drift': 'gridDrift 24s linear infinite',
        glitch: 'glitch 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        gridDrift: {
          to: { backgroundPosition: '44px 44px' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '75%': { transform: 'translate(2px, -2px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backgroundColor: {
        'grid-bg': 'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 90deg, rgba(0, 245, 212, 0.04) 90deg 180deg)',
      },
    },
  },
  plugins: [],
}

