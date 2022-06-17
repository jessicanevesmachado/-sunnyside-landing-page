import { styled } from "@/config/stitches.config";

import headerDesktop from "../../assets/images/desktop/image-header.jpg";
import headerMobile from "../../assets/images/mobile/image-header.jpg";

import logo from "../../assets/images/logo.svg";
export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "$lightBlue",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center ",
  backgroundSize: "cover",

  backgroundImage: `url(${headerDesktop})`,
  "@mobile": {
    backgroundImage: `url(${headerMobile})`,
  },
});
export const WrapperHeader = styled("section", {
  with: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",

  "@mobile": {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const Brand = styled("a", {
  padding: "30px 0 0 20px",
  color: "$white",
  fontFamily: "$frauncesBlack",
  fontSize: "25px",
  textDecoration: "none",
});

export const Logo = styled("img", {
  content: `url(${logo})`,
});

export const Title = styled("h1", {
  color: "$white",
  textAlign: "center",
  fontFamily: "$frauncesBlack",
  textTransform: "uppercase",
  marginTop: "44px",
});

export const IconArrowDown = styled("div", {
  position: "absolute",
  top: "50%",
  left: "49%",
});

export const ArrowDown = () => (
  <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
    <g
      stroke="#FFF"
      stroke-width="6"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 3v100M3 95.484l15 15 15-15" />
    </g>
  </svg>
);
