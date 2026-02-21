import type { Config } from "tailwindcss";

import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms, aspectRatio, typography],
};

export default config;
