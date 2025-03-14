/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#465475',
        darkGreen:'#7FAFB0',
      }
    },
  },
  plugins: [],
}

