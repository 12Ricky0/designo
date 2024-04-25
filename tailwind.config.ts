import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "big-circle": "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "small-circle":
          "url('/assets/shared/desktop/bg-pattern-small-circle.svg')",
        "phone-img": "url('/assets/home/desktop/image-hero-phone.png')",
        "mob-app-design": "url('/assets/home/mobile/image-app-design.jpg')",
        "mob-web-design": "url('/assets/home/mobile/image-web-design.jpg')",
        "mob-graphic-design":
          "url('/assets/home/mobile/image-graphic-design.jpg')",
        "des-app-design": "url('/assets/home/desktop/image-app-design.jpg')",
        "des-web2-design":
          "url('/assets/home/desktop/image-web-design-small.jpg')",
        "des-web-design":
          "url('/assets/home/desktop/image-web-design-large.jpg')",
        "des-graphic-design":
          "url('/assets/home/desktop/image-graphic-design.jpg')",
        "tab-app-design": "url('/assets/home/tablet/image-app-design.jpg')",
        "tab-web-design": "url('/assets/home/tablet/image-web-design.jpg')",
        "tab-graphic-design":
          "url('/assets/home/tablet/image-graphic-design.jpg')",
        modal: "rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: {
          peach: "#E7816B",
          black: "#1D1C1E",
        },
        secondary: {
          "light-peach": "#FFAD9B",
          "dark-gray": "#333136",
          "light-gray": "#F1F3F5",
        },
      },
      gridTemplateColumns: {
        "4": "2fr,1fr, 1fr",
      },
      gridTemplateRows: {
        "4": "repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
