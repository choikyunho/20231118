/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}
// @layer components {
//   .input-style {
//     @apply px-4 py-2 focus:outline-none focus:border-blue-300 border-2 rounded-lg;
//   }

//   .button-style {
//     @apply text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900 ml-4 px-2 py-1 rounded-md;
//   }
// }