/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      "dark-cyan": "#0E8784",
      "dark-grey-blue": "#333D4B",
      "pale-orange": "#FDD6BA",
      "light-cream": "#FEFCF7",
      grey: "#83888F",
      "outer-space": "#2C343E",
    },
    fontFamily: {
      serif: "Fraunces, serif",
      sans: "Barlow, sans-serif",
    },
    extend: {
      fontSize: {
        "main-title-md": "clamp(2.5rem, 2.0229rem + 2.0356vw, 3rem)",
        "main-title-lg": "clamp(3rem, 1.2857rem + 3.5714vw, 4.5rem)",
        normal: "clamp(0.9375rem, 0.9155rem + 0.0939vw, 1rem)",
        "title-md": "clamp(2rem, 1.5229rem + 2.0356vw, 2.5rem)",
      },
      backgroundImage: {
        "hero-image-home-mobile":
          "url('/home/mobile/image-hero-coffeepress.jpg')",
        "hero-image-home-tablet":
          "url('/home/tablet/image-hero-coffeepress.jpg')",
        "hero-image-home-desktop":
          "url('/home/desktop/image-hero-coffeepress.jpg')",
        "hero-image-plan-mobile": "url('/plan/mobile/image-hero-blackcup.jpg')",
        "hero-image-plan-tablet": "url('/plan/tablet/image-hero-blackcup.jpg')",
        "hero-image-plan-desktop":
          "url('/plan/desktop/image-hero-blackcup.jpg')",
        "hero-image-about-mobile":
          "url('/about/mobile/image-hero-whitecup.jpg')",
        "hero-image-about-tablet":
          "url('/about/tablet/image-hero-whitecup.jpg')",
        "hero-image-about-desktop":
          "url('/about/desktop/image-hero-whitecup.jpg')",
        "commitment-image-about-mobile":
          "url('/about/mobile/image-commitment.jpg')",
        "commitment-image-about-tablet":
          "url('/about/tablet/image-commitment.jpg')",
        "commitment-image-about-desktop":
          "url('/about/desktop/image-commitment.jpg')",
      },
    },
  },
  plugins: [],
};
