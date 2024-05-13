import typography from '@tailwindcss/typography'
import daisyui from "daisyui"
import tailwindVerticalRhythm from 'tailwind-vertical-rhythm'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans Display', 'sans-serif'],
      dyslexic: ['OpenDyslexic3']
    },
    extend: {},
  },
  verticalRhythm: {
    defaultLineHeight: 'normal',
    fontCapHeight: {
      'default': 0.72,
    },
    height: 0.5 // Vertical rhythm in rems
  },
  plugins: [
    typography,
    tailwindVerticalRhythm,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3f6212",
          "secondary": "#14532d",
          "accent": "#2563eb",
          "neutral": "#a0a0a0",
          "base-100": "#f0f0f0",
          "info": "#3b82f6",
          "success": "#d9f99d",
          "warning": "#fde047",
          "error": "#dc2626",
          "unique": "#7f1d1d",
        },
      },
      {
        dark: {
          "primary": "#3f6212",
          "secondary": "#14532d",
          "accent": "#2563eb",
          "neutral": "#333",
          "base-100": "#222",
          "info": "#3b82f6",
          "success": "#d9f99d",
          "warning": "#fde047",
          "error": "#dc2626",
          "unique": "#7f1d1d",
        },
      },
    ],
  },
}
