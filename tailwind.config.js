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
      },
    },
  },
};
