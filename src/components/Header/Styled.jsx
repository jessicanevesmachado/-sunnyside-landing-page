import { styled } from "@/config/stitches.config";
export const Header = styled("header", {
  backgroundColor: "#3DBFFF",
  backgroundImage: `url("/src/assets/image-header.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center ",
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
});
export const WrapperHeader = styled("section", {
  backgroundColor: "red",
  maxHeight: "100px",
  display: "flex",
  justifyContent: "space-between",
});
export const HeaderTitle = styled("a", {
  padding: "30px 0 0 20px",
  color: "$white",
  fontFamily: "$frauncesBlack",
  fontSize: "25px",
});
