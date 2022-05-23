import { styled } from "/src/config/stitches.config";
import milkDesktop from "/src/assets/images/desktop/image-gallery-milkbottles.jpg";
import milkMobile from "/src/assets/images/mobile/image-gallery-milkbottles.jpg";

import orangeDesktop from "/src/assets/images/desktop/image-gallery-orange.jpg";
import orangeMobile from "/src/assets/images/mobile/image-gallery-orange.jpg";

import coneDesktop from "/src/assets/images/desktop/image-gallery-cone.jpg";
import coneMobile from "/src/assets/images/mobile/image-gallery-cone.jpg";

import sugarDesktop from "/src/assets/images/desktop/image-gallery-sugarcubes.jpg";
import sugarMobile from "/src/assets/images/mobile/image-gallery-sugar-cubes.jpg";

export const Section = styled("section", {
  display: "flex",
  flexWrap: "wrap",
});

export const Image = styled("img", {
  width: "25%",
  height: "auto",

  "@mobile": {
    width: "100%",
  },
});

export const MilkImage = styled(Image, {
  content: `url(${milkDesktop})`,
  "@mobile": {
    content: `url(${milkMobile})`,
  },
});

export const OrangeImage = styled(Image, {
  content: `url(${orangeDesktop})`,
  "@mobile": {
    content: `url(${orangeMobile})`,
  },
});

export const ConeImage = styled(Image, {
  content: `url(${coneDesktop})`,
  "@mobile": {
    content: `url(${coneMobile})`,
  },
});

export const SugarImage = styled(Image, {
  content: `url(${sugarDesktop})`,
  "@mobile": {
    content: `url(${sugarMobile})`,
  },
});
