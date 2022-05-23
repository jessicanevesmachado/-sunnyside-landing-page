import { styled } from "@/config/stitches.config";

const headerDesktop = "/src/assets/images/desktop/image-header.jpg";
const headerMobile = "/src/assets/images/mobile/image-header.jpg";

const logo = "/src/assets/images/logo.svg";

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
