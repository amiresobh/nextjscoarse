/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      ActiveColor: '#002f42',
      AccentColor: '#00bebb',
      TextColor: '#333',
      SoftTextColor: '#00bebb',
      WhiteTextColor: '#f0f0f0'
      
    },
    fontFamily: {
      EstedadBlack: ["Estedad-Black", "sans-serif"],
      EstedadBold: ["Estedad-Bold", "sans-serif"],
      EstedadExtraBold: ["Estedad-ExtraBold", "sans-serif"],
      EstedadExtraLight: ["Estedad-ExtraLight", "sans-serif"],
      EstedadLight: ["Estedad-Light", "sans-serif"],
      EstedadMedium: ["Estedad-Medium", "sans-serif"],
      EstedadRegular: ["Estedad-Regular", "sans-serif"],
      EstedadSemiBold: ["Estedad-SemiBold", "sans-serif"],
      EstedadThin: ["Estedad-Thin", "sans-serif"],
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
