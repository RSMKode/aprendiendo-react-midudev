/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{html,js,tsx,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // accent: colors.rose['800']
      }
    }
  }
}
