const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "vl-gray": "hsl(0, 0%, 98%)",
          "vl-g-blue": "hsl(236, 33%, 92%)",
          "l-g-blue": "hsl(233, 11%, 84%)",
          "d-g-blue": "hsl(236, 9%, 61%)",
          "vd-g-blue": "hsl(235, 19%, 35%)",
        },
        dark: {
          "vd-blue": "hsl(235, 21%, 11%)",
          "vdd-blue": "hsl(235, 24%, 19%)",
          "lg-blue": "hsl(234, 39%, 85%)",
          "lg-blue-hover": "hsl(236, 33%, 92%)",
          "dg-blue": "hsl(234, 11%, 52%)",
          "vdg-blue": "hsl(233, 14%, 35%)",
          "vdg-blue-hover": "hsl(237, 14%, 26%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-josefin)", ...fontFamily.sans],
      },
      backgroundImage: {
        "desktop-light": "url('/images/bg-desktop-light.jpg')",
      },
    },
  },
  plugins: [],
};
