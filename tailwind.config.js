/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "425px",
        lg: "768px",
        xl: "1440px",
        "2xl": "1920px",
      },
      colors: {
        "regal-white": "#EEEEEE",
        "regal-textColor": "#4c4948",
        "regal-hover": "#49B1F5",
      },
      boxShadow: {
        md: "0 3px 8px 6px rgba(7,17,27,0.15);",
        sm: "0 3px 8px 6px rgba(7,17,27,0.06)",
      },
    },
  },
  plugins: [],
};
