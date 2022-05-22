import { styled } from "/src/config/stitches.config";
import eggDesktop from "../../assets/images/desktop/egg.jpg";
import eggMobile from "../../assets/images/mobile/egg.jpg";

import cupDesktop from "../../assets/images/desktop/cup.jpg";
import cupMobile from "../../assets/images/mobile/cup.jpg";

import cherryDesktop from "../../assets/images/desktop/cherry.jpg";
import cherryMobile from "../../assets/images/mobile/cherry.jpg";

import tangerineDesktop from "../../assets/images/desktop/tangerine.jpg";
import tangerineMobile from "../../assets/images/mobile/tangerine.jpg";

export const Article = styled("article", {
  display: "flex",
  flexFlow: "wrap",
  backgroundColor: "$white",
  justifyContent: "center",

  "@mobile": {
    flexDirection: "column",
  },
});

export const Section = styled("section", {
  flex: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",

  "@mobile": {
    flex: "100%",
  },

  variants: {
    color: {
      white: {
        backgroundColor: "$white",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
      blue: {
        backgroundColor: "$lightBlue",
      },
      green: {
        backgroundColor: "$lightGreen",
      },
    },
  },
});

export const Title = styled("h2", {
  fontSize: "$1",
  fontFamily: "$barlowSemiBlack",
  width: "100%",
  textAlign: "center",
  marginBottom: "15px",

  variants: {
    color: {
      darkGreen: {
        color: "$darkGreen",
      },
      darkBlue: {
        color: "$darkBlue",
      },
    },
  },
});

export const Description = styled("p", {
  fontSize: "12px",
  fontFamily: "$barlowSemiBold",
  color: "#374151",
  marginBottom: "15px",
  padding: "20px",

  variants: {
    color: {
      darkGreen: {
        color: "$darkGreen",
      },
      darkBlue: {
        color: "$darkBlue",
      },
    },
  },
});

export const Link = styled("a", {
  fontFamily: "$barlowSemiBold",
  textTransform: "uppercase",
  textDecoration: "none",
  color: "black",
  borderBottom: "1px solid $yellow",
});

export const ImageEgg = styled("img", {
  width: "100%",
  height: "100%",
  content: `url(${eggDesktop})`,
  "@mobile": {
    content: `url(${eggMobile})`,
  },
});

export const ImageCup = styled("img", {
  width: "100%",
  height: "100%",
  content: `url(${cupDesktop})`,
  "@mobile": {
    content: `url(${cupMobile})`,
  },
});

export const CherrySection = styled(Section, {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center top",

  backgroundImage: `url(${cherryDesktop})`,
  "@mobile": {
    backgroundImage: `url(${cherryMobile})`,
  },
});

export const TangerineSection = styled(Section, {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center top",

  backgroundImage: `url(${tangerineDesktop})`,
  "@mobile": {
    backgroundImage: `url(${tangerineMobile})`,
  },
});

export const Wrapper = styled("div", {
  padding: "350px 20px 40px 20px",
  textAlign: "center",
});
