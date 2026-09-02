import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1D',
        bgSubtle: '#0F172A',
        bgRaised: '#131F37',
        bgRaised2: '#182744',
        card: '#111C31',
        cardHover: '#16233B',
        line: '#1E2E4A',
        lineLight: '#2B4063',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        subtle: '#64748B',
        brand: {
          50: '#E0F7F6',
          100: '#B2ECE9',
          200: '#80DFDC',
          300: '#4DD3CE',
          400: '#26C9C4',
          500: '#00A896', // DataSphere Primary Teal
          600: '#028090',
          700: '#026773',
          800: '#014F59',
          900: '#013A40',
        },
        cyanAccent: '#06B6D4',
        blueAccent: '#0EA5E9',
        indigoAccent: '#3B82F6',
        gold: '#F59E0B',
        goldAccent: '#E8A33D',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        md: '14px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
      },
      maxWidth: {
        wrap: '1240px',
        wide: '1360px',
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(0, 168, 150, 0.3)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.3)',
        'glow-gold': '0 0 30px -5px rgba(245, 158, 11, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
