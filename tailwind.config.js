/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffc4',
        'neon-teal': '#00ffc4',
        'dark-blue': '#021651',
        'sea-blue': '#13299a',
        'pixel-blue': '#0732b2',
        'accent-cyan': '#00ffc4',
        'primary-blue': '#021651',
        'secondary-blue': '#13299a',
        'tertiary-blue': '#0732b2',
      },
      fontFamily: {
        'blox': ['BloxBrk', 'monospace'],
        'ari': ['AriBold', 'monospace'],
        'isometric-bold': ['3DIsometricBold', 'monospace'],
        'isometric-black': ['3DIsometricBlack', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #00ffc4, 0 0 10px #00ffc4, 0 0 15px #00ffc4' },
          '100%': { boxShadow: '0 0 10px #00ffc4, 0 0 20px #00ffc4, 0 0 30px #00ffc4' }
        },
        'wave': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
