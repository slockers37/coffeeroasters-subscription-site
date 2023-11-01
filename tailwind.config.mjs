/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      black: "#000",
      "dark-cyan": "#0E8784",
      "dark-grey-blue": "#333D4B",
      "pale-orange": "#FDD6BA",
      "light-cream": "#FEFCF7",
      grey: "#83888F",
      "outer-space": "#2C343E",
      "sea-serpent": "#66D2CF",
      isabelline: "#F4F1EB",
      transparent: "transparent",
      white: "#FFF",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
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
        "fluid-24-32": "clamp(1.5rem, 1.0229rem + 2.0356vw, 2rem)",
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
        "fluid-48-128": "clamp(3rem, -2.7143rem + 11.9048vw, 8rem)",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
