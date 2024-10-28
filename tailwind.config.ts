import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#CDD5C6",
        secondary_color: "#FBF2ED",
        third_color: "#8dabbd",
        fourth_color: "#E8D4C6",
        fifth_color: "#e29e6d",
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        oldStandard: ['Old Standard TT', 'serif'],
        parisienne: ['Parisienne', 'cursive'],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.8)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 1)',
      },
      boxShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.8)',
        'lg': '5px 2px 5px 1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '1px 1px 1.5px rgba(0, 0, 0, 0.9)',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
