import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1B2D',
        bgRaised: '#16283F',
        bgRaised2: '#1C3350',
        line: '#2A3F5C',
        ink: '#F5F3EE',
        muted: '#8FA0BC',
        gold: '#E8A33D',
        teal: '#2DD4BF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '14px',
      },
      maxWidth: {
        wrap: '1160px',
      },
    },
  },
  plugins: [],
}

export default config
