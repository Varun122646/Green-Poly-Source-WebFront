const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#182404",
        foreground: "#DEE5D1",
        primary: {
          DEFAULT: "#9EF01A",
          foreground: "#182404",
        },
        secondary: {
          DEFAULT: "#DEE5D1",
          foreground: "#182404",
        },
        muted: {
          DEFAULT: "#2A3815",
          foreground: "#DEE5D1",
        },
        accent: {
          DEFAULT: "#9EF01A",
          foreground: "#182404",
        },
        card: {
          DEFAULT: "#1E2C08",
          foreground: "#DEE5D1",
        },
        popover: {
          DEFAULT: "#1E2C08",
          foreground: "#DEE5D1",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

