/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      'dark':"#232323",
      'red':"#F9322C",
      'neutral':"#565454",
      'rose':"#F9322C",
      'lightred':"#fee2e2",

     },
     backgroundImage: {
      'hero-pattern': "url('/images/Background Pattern & Mask.png')",
      'mask':"url('/images/Background Pattern & Mask (1).png')"
     
    },
    },
  },
  plugins: [],
};
