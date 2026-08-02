import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12153D',
          dark: '#0D0F2B',
          light: '#4A5494',
        },
        secondary: {
          DEFAULT: '#4A5494',
          light: '#7080B0',
          dark: '#333A70',
        },
        tertiary: {
          DEFAULT: '#7080B0',
          light: '#9AAAD0',
          dark: '#4A5494',
        },
        navy: {
          DEFAULT: '#12153D',
          light: '#4A5494',
          dark: '#0D0F2B',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E0C77A',
          dark: '#A8883A',
        },
        background: {
          DEFAULT: '#EDE8DC',
          light: '#F5F2EA',
        },
        'text-dark': '#12153D',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
        accent: ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(18, 21, 61, 0.18)',
        gold: '0 12px 40px -12px rgba(201, 168, 76, 0.45)',
        card: '0 24px 60px -28px rgba(18, 21, 61, 0.4)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 50% 0%, rgba(74, 84, 148, 0.45), transparent 55%)',
        'gold-line':
          'linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;