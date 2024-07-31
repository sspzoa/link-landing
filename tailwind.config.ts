import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: 'var(--gray100)',
        gray200: 'var(--gray200)',
        gray300: 'var(--gray300)',
        gray400: 'var(--gray400)',
        gray500: 'var(--gray500)',
        gray600: 'var(--gray600)',
        gray700: 'var(--gray700)',
        gray800: 'var(--gray800)',
        gray900: 'var(--gray900)',
        gray1000: 'var(--gray1000)',
        'link-white': 'var(--link-white)',
        'link-white100': 'var(--link-white100)',
        'link-semi': 'var(--link-semi)',
        'link-purple': 'var(--link-purple)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
