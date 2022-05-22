import { styled } from "@/config/stitches.config";
export const Header = styled("header", {
  backgroundColor: "$lightBlue",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center ",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundImage: `url("/src/assets/images/desktop/image-header.jpg")`,
  "@mobile": {
    backgroundImage: `url("/src/assets/images/mobile/image-header.jpg")`,
  },
});
export const WrapperHeader = styled("section", {
  with: "100%",
  display: "flex",
  justifyContent: "space-between",
});
export const HeaderTitle = styled("a", {
  padding: "30px 0 0 20px",
  color: "$white",
  fontFamily: "$frauncesBlack",
  fontSize: "25px",
});

export const Title = styled("h1", {
  color: "$white",
  textAlign: "center",
  fontFamily: "$BarlowSemiBold",
  textTransform: "uppercase",
  marginTop: "30px",
});
