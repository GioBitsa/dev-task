// tailwind.config.js
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Extend default colors
      ...require("tailwindcss/colors"),
      // Add your custom colors
    },
    extend: {}, // Keep empty if not extending other properties
  },
};
