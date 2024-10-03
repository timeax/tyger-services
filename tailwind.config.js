import colors from "./src/assets/colors";
import breakpoints from "./tailwind/breakpoints";

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors,
         screens: breakpoints,
      },
   },
   plugins: [],
};
