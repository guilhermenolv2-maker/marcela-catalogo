import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: '#F8D9E6',
        lavender: '#E5D8F7',
        ice: '#EDF6FF',
        pearl: '#FFFFFF',
        mist: '#F5F5F5',
        gold: '#D6B36A',
        ink: '#3D3640',
        sage: '#DDE9DE',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(61, 54, 64, 0.10)',
        glow: '0 12px 30px rgba(214, 179, 106, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
