import { styled } from "/src/config/stitches.config";

export const Section = styled("section", {
  display: "flex",
  flexFlow: "wrap",
  backgroundColor: "$white",
  justifyContent: "center",
  minHeight: "200px",
  marginBottom: "50px",
  "@mobile": {
    flexDirection: "column",
  },
});

export const Article = styled("article", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "100px",
});
export const Avatar = styled("img", {
  borderRadius: "50%",
  width: "50px",
  marginBottom: "20px",
});
export const Title = styled("h3", {
  display: "flex",
  justifyContent: "center",
  flex: "100%",
  marginBottom: "50px",
  marginTop: "90px",
  fontFamily: "$frauncesBold",
  textTransform: "uppercase",
  color: "$darkGrayishBlue",
  fontSize: "17px",
  letterSpacing: "3px",
});

export const Description = styled("p", {
  fontSize: "$body",
  lineHeight: "1.5",
  fontFamily: "$barlowSemiBold",
  color: "#7B7E81",
  marginBottom: "15px",
  padding: "20px",
  maxWidth: "300px",
});

export const Author = styled("p", {
  color: "black",
  fontSize: "14px",
  fontFamily: "$frauncesBold",
  marginBottom: "10px",
});

export const Responsibility = styled("p", {
  color: "#BBB9BA",
  fontSize: "12px",
  fontFamily: "$barlowSemiBold",
});
