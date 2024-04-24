import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/theme";


const config: Config = {
  plugins: [nextui()],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'



  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
};
export default config;
