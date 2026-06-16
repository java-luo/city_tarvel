import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F3E8',
        ink: '#1F1F1F',
        cinnabar: '#B3261E',
        gold: '#C9A227',
        teal: '#2F6F73',
        borderRice: '#E8DED0'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 31, 31, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
