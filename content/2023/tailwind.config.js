/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // This is important to avoid conflicts with other libraries
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        yk: ["var(--font-yanone-kaffeesatz)"],
      },
      screens: {
        tablet: "640px",
        desktop: "1024px",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
