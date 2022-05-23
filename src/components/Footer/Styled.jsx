import { styled } from "/src/config/stitches.config";

export const Footer = styled("footer", {
  background: "$lightGreen",
});

export const Title = styled("h4", {
  color: "$darkGreen",
  fontFamily: "$frauncesBlack",
  textAlign: "center",
  paddingTop: "40px",
  fontSize: "20px",
});

export const WrapperMenu = styled("nav", {
  width: "200px",
  margin: "0 auto",
});

export const MenuFooter = styled("ul", {
  display: "flex",
  justifyContent: "space-around",
  listStyle: "none",
  marginBottom: "20px",
  marginTop: "30px",
});
export const MenuItem = styled("li", {
  color: "$darkGreen",
  fontFamily: "$barlowSemiBold",
  fontSize: "14px",
  "&:hover": {
    color: "$white",
  },

  cursor: "pointer",
});

export const WrapperSocialMedia = styled("section", {
  width: "100%",
  paddingTop: "30px",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
});

export const Icone = styled("img", {
  paddingLeft: "10px",
});
