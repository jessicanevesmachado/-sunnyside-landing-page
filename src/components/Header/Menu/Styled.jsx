import { styled } from "@/config/stitches.config";

export const Navbar = styled("nav", {
  marginRight: "30px",
  marginTop: "30px",

  "@mobile": {
    position: "absolute",
    width: "100%;",
    top: "38px",
  },
});
export const ListContainer = styled("ul", {
  display: "flex",
  listStyleType: "none",
  marginTop: "30px",

  "@mobile": {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "$white",
    margin: "10px",
    overflow: "hidden",
    transform: "scaleY(0)",
    transformOrigin: "top",
    transition: "transform 0.26s ease",
  },

  variants: {
    open: {
      true: {
        transform: "scaleY(1)",
      },
    },
  },
});
export const ListItem = styled("li", {
  fontSize: "14px",
  fontFamily: "$barlowSemiBold",
  display: "block",
  marginRight: "30px",
  padding: "10px",

  "&:hover": {
    backgroundColor: "$white",
    borderRadius: "15px",

    a: {
      color: "black",
    },
  },
  cursor: "pointer",

  "@mobile": {
    color: "$darkGrayishBlue",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "$yellow",
      borderRadius: "15px",
    },
  },
});

export const Link = styled("a", {
  position: "absolute",
  right: "8px",
  top: "30px",
  visibility: "hidden",

  "@mobile": {
    visibility: "visible",
  },
});

export const LinkMenu = styled("a", {
  textDecoration: "none",
  color: "white",

  "@mobile": {
    color: "$darkGrayishBlue",
  },

  "&:hover": {
    color: "black",
  },
});
export const Icon = styled("img", {});
