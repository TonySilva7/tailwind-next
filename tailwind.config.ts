import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        myPurple: '#8257e6',
      },
      maxWidth: {
        myWidth: '700px',
      }
    },
  },
  plugins: [],
}
export default config
