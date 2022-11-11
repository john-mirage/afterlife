/** @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
};

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
      "hover-device": { raw: "(hover: hover)" },
    },
    colors: {
      transparent: "transparent",
      violet: "#7048e8",
      white: "#ffffff",
    },
    spacing: {
      0: "0px",
      1: pxToRem(1),
      2: pxToRem(2),
      4: pxToRem(4),
      6: pxToRem(6),
      8: pxToRem(8),
      10: pxToRem(10),
      12: pxToRem(12),
      14: pxToRem(14),
      16: pxToRem(16),
      20: pxToRem(20),
      24: pxToRem(24),
      28: pxToRem(28),
      32: pxToRem(32),
      36: pxToRem(36),
      40: pxToRem(40),
      44: pxToRem(44),
      48: pxToRem(48),
      52: pxToRem(52),
      56: pxToRem(56),
      60: pxToRem(60),
      64: pxToRem(64),
      68: pxToRem(68),
      72: pxToRem(72),
      76: pxToRem(76),
      80: pxToRem(80),
      84: pxToRem(84),
      88: pxToRem(88),
      92: pxToRem(92),
      96: pxToRem(96),
      128: pxToRem(128),
    },
    fontSize: ({ theme }) => ({
      heading: [
        theme("spacing[24]"),
        {
          lineHeight: theme("spacing[32]"),
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      body: [
        theme("spacing[16]"),
        {
          lineHeight: theme("spacing[24]"),
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    }),
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
