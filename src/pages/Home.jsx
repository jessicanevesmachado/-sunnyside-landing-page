import { styled } from "/src/config/stitches.config";
const Button = styled("button", {
  backgroundColor: "$softRed",
  fontSize: "$body",
});

const H1 = styled("h1", {
  color: "$softRed",
  fontSize: "$body",
  fontFamily: "$barlowSemiBold",
});

const H1t = styled("h1", {
  color: "$softRed",
  fontSize: "$body",
  fontFamily: "$frauncesBlack",
});

const H1r = styled("h1", {
  color: "$softRed",
  fontSize: "$body",
  fontFamily: "$frauncesBold",
});

export const Home = () => {
  console.log("Home");
  return (
    <>
      <H1>Home</H1>
      <H1t>Home 2</H1t>
      <H1r>Home 3</H1r>
      <Button>Hello</Button>;
    </>
  );
};
