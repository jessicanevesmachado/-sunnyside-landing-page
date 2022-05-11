import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      softRed: "hsl(7, 99%, 70%)",
      yellow: "hsl(51, 100%, 49%)",
      darkDesaturatedCyan: "hsl(167, 40%, 24%)",
      darkBlue: "hsl(198, 62%, 26%)",
      darkModerateCyan: "hsl(168, 34%, 41%)",
      veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
      veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
      darkGrayishBlue: "hsl(213, 9%, 39%)",
      grayishBlue: "hsl(210, 4%, 67%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSizes: {
      body: "100px",
    },
    fonts: {
      barlowSemiBold: "BarlowSemiBold",
      frauncesBlack: "FrauncesBlack900",
      frauncesBold: "FrauncesBold700",
    },
  },
  media: {
    mobile: "(min-width: 375px)",
    desktop: "(min-width: 1440px)",
  },
});
