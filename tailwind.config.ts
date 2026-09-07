import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        bgSubtle: '#F8FAFC',
        bgRaised: '#F1F5F9',
        bgRaised2: '#E2E8F0',
        card: '#FFFFFF',
        cardHover: '#FFFFFF',
        line: '#E2E8F0',
        lineLight: '#CBD5E1',
        ink: '#0F172A',
        muted: '#475569',
        subtle: '#64748B',
        brand: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#00A896',
          400: '#028090',
          500: '#0A2540', // DataSphere Enterprise Navy
          600: '#003875',
          700: '#002752',
          800: '#001C3D',
          900: '#001229',
        },
        navyAccent: '#0A2540',
        tealAccent: '#00A896',
        cyanAccent: '#028090',
        blueAccent: '#0284C7',
        indigoAccent: '#2563EB',
        gold: '#D97706',
        goldAccent: '#F59E0B',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Poppins', 'Manrope', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'Montserrat', 'Poppins', 'Manrope', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
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
        'card': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(15, 23, 42, 0.1), 0 4px 8px -2px rgba(15, 23, 42, 0.04)',
        'glow-teal': '0 4px 20px -2px rgba(0, 168, 150, 0.2)',
        'glow-cyan': '0 4px 20px -2px rgba(2, 128, 144, 0.2)',
        'glow-gold': '0 4px 20px -2px rgba(217, 119, 6, 0.15)',
        'glass': '0 4px 24px 0 rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

