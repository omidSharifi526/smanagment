/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IS", "sans-serif"],
      },
      backgroundImage: {
        'red-black-gradient': 'linear-gradient(to right, #FF0000 5%, #255D5F 80%)',
      },
      spacing: {
        'modal-padding': '0px !important', // حذف padding مودال
      }
    
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true, // فعال‌سازی حالت راست‌چین
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables // تنظیم تم‌ها
  },
  darkMode: ['class', '[data-theme="dark"]']
};
