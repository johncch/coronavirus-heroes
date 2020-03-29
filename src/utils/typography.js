import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.3,
  bodyFontFamily: ["Noto Serif", "serif"],
  headerFontFamily: ["Roboto Condensed", "sans-serif"],
  blockMarginBottom: 0.5,
  googleFonts: [
    {
      name: "Noto Serif",
      styles: ["400"],
    },
    {
      name: "Roboto Condensed",
      styles: ["700"],
    },
  ],
})

export default typography
