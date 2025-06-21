/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,jsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        primary: {
          DEFAULT: "#d4af37",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#f5f5f5",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#171717",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#262626",
          foreground: "#f5f5f5",
        },
        card: {
          DEFAULT: "#111111",
          foreground: "#f5f5f5",
        },
        luxury: {
          gold: "#d4af37",
          copper: "#b87333",
          platinum: "#e5e4e2",
          charcoal: "#36454f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(135deg, #d4af37 0%, #b87333 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
