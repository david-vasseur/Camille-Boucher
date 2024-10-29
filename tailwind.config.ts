import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const textShadowPlugin = plugin(function({ addUtilities }) {
  const newUtilities = {
    '.text-shadow': {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    '.text-shadow-lg': {
      textShadow: '1px 1px 1.5px rgba(0, 0, 0, 0.9)',
    },
  };

  // const formattedUtilities = Object.entries(newUtilities).reduce((acc, [key, value]) => {
  //   acc[key] = value.textShadow; 
  //   return acc;
  // }, {} as Record<string, string>);

  addUtilities(newUtilities);
});

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
        'button': '1px 3px 0px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [
    textShadowPlugin,
  ],
};
export default config;
