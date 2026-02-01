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
        // LimaCharlie-inspired colors
        'vr-dark': '#0a0f1a',
        'vr-darker': '#060a12',
        'vr-blue': {
          1: '#0d1929',
          2: '#132238',
          3: '#1a2d4a',
          4: '#2563eb',
          5: '#3b82f6',
          6: '#60a5fa',
        },
        'vr-pink': {
          1: '#831843',
          2: '#be185d',
          3: '#db2777',
          4: '#ec4899',
        },
        'vr-cyan': '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
