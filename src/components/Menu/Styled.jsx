import { styled } from "@/config/stitches.config";
export const Navbar = styled("nav", {
  marginRight: "30px",
  maxWidth: "300px",
});
export const ListContainer = styled("ul", {
  display: "flex",
  listStyleType: "none",
  maxHeight: "60px",
});
export const ListItem = styled("li", {
  color: "$white",
  fontSize: "14px",
  fontFamily: "$barlowSemiBold",
  display: "block",

  "&:hover": {
    color: "black",
    backgroundColor: "$white",
    borderRadius: "15px",
  },
  cursor: "pointer",
});
