/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    // https://type-scale.com : minor third
    fontSize: {
      "4xl": "2.488rem",
      "3xl": "2.074rem",
      "2xl": "1.728rem",
      xl: "1.44rem",
      lg: "1.2rem",
      base: "1rem",
      sm: "0.833rem",
      xs: "0.694rem",
    },

    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "72ch",
            color: "#212212",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              fontSize: "2.488rem",
              margin: "0 0 1.38rem",
            },
            h2: {
              fontSize: "2.074rem",
              margin: "3rem 0 1.38rem",
            },
            h3: {
              fontSize: "1.728rem",
              margin: "3rem 0 1.38rem",
            },
            h4: {
              fontSize: "1.44rem",
              margin: "3rem 0 1.38rem",
            },
            h5: {
              fontSize: "1.2rem",
              margin: "3rem 0 1.38rem",
            },
            h6: {
              fontSize: "1rem",
              margin: "3rem 0 1.38rem",
            },
            p: {
              fontSize: "1rem",
              marginBottom: "1rem",
            },
            small: {
              fontSize: "0.833rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};
