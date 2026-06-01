/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'anime-primary':   '#FF6B9D',
        'anime-secondary': '#C084FC',
        'anime-accent':    '#38BDF8',
        'anime-dark':      '#0F0F1A',
        'anime-darker':    '#050508',
        'anime-text':      '#E2E8F0',
        'anime-muted':     '#8888A0',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glitch':       'glitch 2s infinite',
        'sakura-fall':  'sakuraFall 8s linear infinite',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
        'typing':       'typing 3.5s steps(40, end)',
        'blink':        'blink 0.75s step-end infinite',
        'scan':         'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #FF6B9D55' },
          '50%':      { boxShadow: '0 0 40px #FF6B9DAA, 0 0 60px #C084FC55' },
        },
        sakuraFall: {
          '0%':   { transform: 'translateY(-10vh) rotate(0deg)',   opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,107,157,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,157,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}