import { styled } from "@/config/stitches.config";
export const Navbar = styled("nav", {
  marginRight: "30px",
  marginTop: "30px",
  "@mobile": {
    display: "none",
  },
});
export const ListContainer = styled("ul", {
  display: "flex",
  listStyleType: "none",
});
export const ListItem = styled("li", {
  color: "$white",
  fontSize: "14px",
  fontFamily: "$barlowSemiBold",
  display: "block",
  marginRight: "30px",
  padding: "10px",

  "&:hover": {
    color: "black",
    backgroundColor: "$white",
    borderRadius: "15px",
  },
  cursor: "pointer",
});
