/** @type {import('tailwindcss').Config} */
// import { colors } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{html,js,tsx,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        miau: 'rgb(255, 0, 255)'
      },
      gridTemplateColumns: {
        'auto-fill-11': 'repeat(auto-fill, minmax(11rem, 1fr))',
        'auto-fill-13': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'auto-fit-11': 'repeat(auto-fit, minmax(11rem, 1fr))',
        'auto-fit-13': 'repeat(auto-fit, minmax(13rem, 1fr))'
      }
    }
  }
}
