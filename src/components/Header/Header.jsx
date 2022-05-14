import * as Styled from "./Styled";
import { Menu } from "../Menu/Menu";
export const Header = () => {
  return (
    <Styled.Header>
      <Styled.WrapperHeader>
        <Styled.HeaderTitle>sunnyside</Styled.HeaderTitle>
        <Menu />
      </Styled.WrapperHeader>
    </Styled.Header>
  );
};
