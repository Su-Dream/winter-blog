/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-white": "#EEEEEE",
      },
      boxShadow: {
        md: "0 3px 8px 6px rgba(7,17,27,0.15);",
        sm: "0 3px 8px 6px rgba(7,17,27,0.06)",
      },
    },
  },
  plugins: [],
};
