import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        screens: {
        'sm': '320px',
        'md': '360px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': "1544px"
      },
    },
    
  },
  plugins: []
}
