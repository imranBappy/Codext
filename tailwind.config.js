/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#051114",
        blue: "#2289ff",
        white: "#fff",
        primary: "#42b4ee",
        deepskyblue: "#44b4ee",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "30xl": "49px",
        "8xs": "5px",
      },
      boxShadow: {
        card: "0px 6px 50px 5px rgba(6, 14, 26, 0.05)",
      },
      backgroundImage: {
        featureCard: "url('/assets/feature-bg.svg')",
        planCard: "url('/assets/planCard-bg.svg')",
        hero: "linear-gradient(-251deg, #461096 0.57%, #7f3ce0 99.97%)",
        box1: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%,  rgba(196, 196, 196, 0) 100%)",
        box2: "linear-gradient(180deg,   rgba(196, 196, 196, 0) 0%,   rgba(255, 255, 255, 0.07) 100%)",
      },
    },
  },
};
