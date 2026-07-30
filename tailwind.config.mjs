/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2240',
        navyDeep: '#061730',
        gold: '#C8A951',
        goldDim: '#8E763B',
        softgray: '#EDF2F7',
        teal: '#2E5266',
        maroon: '#7A1F2B',
        ink: '#0F172A',
        muted: '#475569',
      },
    },
  },
  plugins: [],
};
