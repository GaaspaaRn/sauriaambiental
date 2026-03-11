import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-roboto)', 'sans-serif'],
        'display': ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'primary': '#006400',
        'primary-dark': '#004d00',
        'secondary': '#1e90ff',
        'accent': '#f5a623',
        'light': '#f8f9fa',
        'dark': '#343a40',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
