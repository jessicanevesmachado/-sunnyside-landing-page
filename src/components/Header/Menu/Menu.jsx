import { useState } from "react";
import * as Styled from "./Styled";
import hamburger from "/src/assets/images/icon-hamburger.svg";

export const Menu = () => {
  const [menus] = useState(["About", "Services", "Projects", "Contact"]);
  const [open, setOpen] = useState(null);
  return (
    <>
      <Styled.Link
        href="#"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Styled.Icon src={hamburger} alt="Menu Hamburguer" />
      </Styled.Link>

      <Styled.Navbar>
        <Styled.ListContainer open={open}>
          {menus.map((item, index) => (
            <Styled.ListItem key={index}>{item}</Styled.ListItem>
          ))}
        </Styled.ListContainer>
      </Styled.Navbar>
    </>
  );
};
