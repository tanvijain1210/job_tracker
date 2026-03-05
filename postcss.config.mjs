/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Note the change here:
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;