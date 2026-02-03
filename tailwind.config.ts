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
        // LimaCharlie color palette
        'lc-blue': {
          1: '#00030c',
          2: '#00183c',
          3: '#123c78',
          4: '#2778c6',
          5: '#3ca8de',
          6: '#5adef9',
        },
        'lc-pink': {
          2: '#f02463',
          3: '#ff487b',
        },
        // Legacy aliases
        'vr-dark': '#00030c',
        'vr-darker': '#00183c',
        'vr-cyan': '#3ca8de',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        'super-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
export default config
