/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IS", "sans-serif"],
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true, // فعال‌سازی حالت راست‌چین
    themes: ["light", "dark"], // تنظیم تم‌ها
  },
};
