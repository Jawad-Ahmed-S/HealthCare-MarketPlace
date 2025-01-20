import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-dark': '#2A254B',
        'custom-purple-light': '#4E4D93',
        'custom-gray-light': '#F9F9F9',
        'custom-gray-medium': '#EBE8F4',
        'custom-gray': '#CAC6DA',
      },
      fontFamily:{
        title:["ABeeZee"],
        // 'custom-abeezee':['ABeeZee','sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
