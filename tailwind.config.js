module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Ensure this matches your file structure
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
    plugins: [],
  };