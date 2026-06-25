/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        'pixel-outline': "hsl(var(--pixel-outline))",
        'coin-gold': "hsl(var(--coin-gold))",
        'heart-red': "hsl(var(--heart-red))",
        'sky-blue': "hsl(var(--sky-blue))",
        'mint-green': "hsl(var(--mint-green))",
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'sans-serif'],
        'press-start': ['"Press Start 2P"', 'cursive'],
        body: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
