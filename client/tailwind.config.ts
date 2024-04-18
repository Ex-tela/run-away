import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin"

const config: Config = {
  content: [
    "./node_modules/flowbite-react/dist/**/*.cjs",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
  // darkMode: 'selector',
  // darkMode: ['variant', '&:not(.light *)']
};
export default config;
