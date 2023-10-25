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
      "sea-serpent": "#66D2CF",
      transparent: "transparent",
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
        "fluid-28-32": "clamp(1.75rem, 1.662rem + 0.3756vw, 2rem)",
        "fluid-32-40": "clamp(2rem, 1.4286rem + 1.1905vw, 2.5rem)",
        "fluid-48-128": "clamp(3rem, -1.771rem + 18.3562vw, 8rem)",
        "fluid-128-224": "clamp(8rem, 1.1429rem + 12.2857vw, 20rem)",
      },
      gap: {
        "fluid-12-96": "clamp(0.75rem, -5.25rem + 12.5vw, 6rem)",
        "fluid-16-24": "clamp(1rem, 0.5229rem + 2.0356vw, 1.5rem)",
        "fluid-24-36": "clamp(1.5rem, 0.7844rem + 3.0534vw, 2.25rem)",
        "fluid-36-72": "clamp(2.25rem, 0.1031rem + 9.1603vw, 4.5rem)",
      },
      width: {
        "fluid-224-288": "clamp(14rem, 9.4286rem + 9.5238vw, 18rem)",
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
