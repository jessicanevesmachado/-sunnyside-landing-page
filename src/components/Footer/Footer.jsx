import * as Styled from "./Styled";
import facebook from "/src/assets/images/icon-facebook.svg";
import instagram from "/src/assets/images/icon-instagram.svg";
import twitter from "/src/assets/images/icon-twitter.svg";

import pinterest from "/src/assets/images/icon-pinterest.svg";

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Title>sunnyside</Styled.Title>
      <Styled.WrapperMenu>
        <Styled.MenuFooter>
          <Styled.MenuItem>About</Styled.MenuItem>
          <Styled.MenuItem>Services</Styled.MenuItem>
          <Styled.MenuItem>Projects</Styled.MenuItem>
        </Styled.MenuFooter>
      </Styled.WrapperMenu>
      <Styled.WrapperSocialMedia>
        <Styled.Icone src={facebook} alt="icone do facebook" />
        <Styled.Icone src={instagram} alt="icone do instagram" />
        <Styled.Icone src={twitter} alt="icone do twitter" />
        <Styled.Icone src={pinterest} alt="icone do pinterest" />
      </Styled.WrapperSocialMedia>
    </Styled.Footer>
  );
};
