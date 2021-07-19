module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        blink: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        animation: {
          blink: "blink 1s ease-in-out infinite",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
