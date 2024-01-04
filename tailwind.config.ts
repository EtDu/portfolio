import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-border': 'linear-gradient(45deg, #f5d478, #050304, #718ecd, #bab2c6, #bc6d51, #f3d166, #5c4530, #4164af, #d8c8c5, #8ea7d4, #d4ab73, #547bc7, #164c9c, #9f748c, #b1bb92)'  
      },
      fontFamily: {
        'avenida': ['avenida', 'sans-serif'],
        'fonseca': ['fonseca', 'sans-serif']
      },
      colors: {
        'primary-1': '#f5d478',
        'primary-2': '#050304',
        'primary-3': '#718ecd',
        'primary-4': '#bab2c6',
        'primary-5': '#bc6d51',
        'primary-6': '#f3d166',
        'primary-7': '#5c4530',
        'primary-8': '#4164af',
        'primary-9': '#d8c8c5',
        'primary-10': '#8ea7d4',
        'primary-11': '#d4ab73',
        'primary-12': '#547bc7',
        'primary-13': '#164c9c',
        'primary-14': '#9f748c',
        'primary-15': '#b1bb92',
        'grad': 'linear-gradient(45deg, #f5d478, #050304, #718ecd, #bab2c6, #bc6d51, #f3d166, #5c4530, #4164af, #d8c8c5, #8ea7d4, #d4ab73, #547bc7, #164c9c, #9f748c, #b1bb92)'
      }
    },
  },
  plugins: [],
}
export default config
