const { colors } = require("daisyui");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'blink-fade': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'blink-fade': 'blink-fade 3s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#E7473C",
          "primary-content": "#FFFFFF",
          "secondary": "#404040",
          "secondary-content": "#FFFFFF",
          "accent": "#C93931",
          "accent-content": "#FFFFFF",
          "neutral": "#757575",
          "neutral-content": "#FFFFFF",
          "base-100": "#F0F0F0",
          "base-200": "#E0E0E0",
          "base-300": "#D0D0D0",
          "base-content": "#333333",
          "info": "oklch(54% 0.245 262.881)",
          "info-content": "#FFFFFF",
          "success": "oklch(64% 0.2 131.684)",
          "success-content": "#FFFFFF",
          "warning": "oklch(64% 0.222 41.116)",
          "warning-content": "#FFFFFF",
          "error": "#E7473C",
          "error-content": "#FFFFFF",
        },
      },
    ],
    darkTheme: "light",
  },
};