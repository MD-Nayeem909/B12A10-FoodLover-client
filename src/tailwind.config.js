/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ensure this line exists
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#632EE3",
      //   secondary: "#9F62F2",
      // },
      keyframes: {
        // Custom fade-in
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Slide up
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        // Zoom in
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        zoomIn: "zoomIn 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
