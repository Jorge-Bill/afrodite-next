module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#CB6CE7',
        secondary: '#B472C7',
        tertiary: '#99a0a3',
        border: '#1a2e35',
        background: '#ffffff',
        highlight: "#3F0F4D",
        highdark: "#D068EC",
        offwhite: "#F4F7F8",
        title: "#08030A",
        bggray: "#d5e1e3",
        texts: "#848486",
        medium: "#393e46",
        black: "#222222",
        darker: " rgba(0, 0, 0, 0.75)",
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
