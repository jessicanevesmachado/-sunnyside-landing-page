import React from "react";
import { globalCss } from "@/config/stitches.config";
export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  "@font-face": [
    {
      fontFamily: "BarlowSemiBold",
      src: 'local("Barlow-SemiBold-600"), url("/src/assets/styles/fonts/Barlow-SemiBold-600.ttf") format("truetype")',
    },
    {
      fontFamily: "FrauncesBlack900",
      src: 'local("Fraunces-Black-900"), url("/src/assets/styles/fonts/Fraunces-Black-900.ttf") format("truetype")',
    },
    {
      fontFamily: "FrauncesBold700",
      src: 'local("Fraunces-Bold-700"), url("/src/assets/styles/fonts/Fraunces-Bold-700.ttf") format("truetype")',
    },
  ],
});
