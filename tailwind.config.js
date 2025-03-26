/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // change selon ton style préféré
      },
      colors: {
        primary: "#1E1E1E", // noir élégant
        secondary: "#E5E7EB", // gris clair doux
        accent: "#FF5A5F", // couleur d’appel à l’action (modulable)
        muted: "#9CA3AF", // pour les éléments discrets
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // compatible avec ShadCN pour animations
  ],
  darkMode: "class",
};
