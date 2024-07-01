/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61", // Coral
        secondary: "#6B5B95", // Amethyst
        accent: "#88B04B", // Green
        background: "#F0F4C3", // Light Green
        text: "#444444", // Dark Gray
      },
    },
  },
  plugins: [],
};
