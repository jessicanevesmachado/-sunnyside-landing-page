import * as Styled from "./Styled";
import { Menu } from "./Menu/Menu";
export const Header = () => {
  return (
    <Styled.Header>
      <Styled.WrapperHeader>
        <Styled.Brand href="#">
          <Styled.Logo alt="Logo sunnyside" title="Logo sunnyside" />
        </Styled.Brand>
        <Menu />
      </Styled.WrapperHeader>
      <Styled.Title>We Are Creatives</Styled.Title>
      <Styled.IconArrowDown>
        <Styled.ArrowDown />
      </Styled.IconArrowDown>
    </Styled.Header>
  );
};
