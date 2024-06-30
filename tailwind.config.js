/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 10s linear infinite",
        "slide-in": "slide-in 0.8s ease-out forwards",
        "slide-in2": "slide-in 0.7s ease-out backwards",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in2": {
          "0%": { transform: "translateX(0)", opacity: 0 },
          "100%": { transform: "translateX(100%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
