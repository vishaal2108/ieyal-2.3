/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07060c",
        "ink-2": "#0d0a18",
        "violet-deep": "#1b0f3d",
        violet: "#3a1c73",
        indigo: "#5b6bff",
        "indigo-2": "#8b6bff",
        cyan: "#6fd6ff",
        "wa-green": "#25d366",
        paper: "#f4f2fb",
        text: "#eee9fb",
        "text-dim": "#a99fc7",
        "text-faint": "#756d92",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        's': '10px',
        'm': '16px',
        'l': '26px',
      },
      maxWidth: {
        'site': '1240px',
      },
      boxShadow: {
        'glow-indigo': '0 0 30px -5px rgba(91, 107, 255, 0.35)',
        'glow-violet': '0 0 40px -10px rgba(58, 28, 115, 0.5)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
