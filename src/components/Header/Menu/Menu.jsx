import { useState } from "react";
import * as Styled from "./Styled";
import hamburger from "/src/assets/images/icon-hamburger.svg";

export const Menu = () => {
  const [menus] = useState([
    ["About", "#about-section"],
    ["Services", "#services-section"],
    ["Projects", "#projects-section"],
    ["Contact", "#contact-section"],
  ]);
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
          {menus.map((item, index) => {
            console.log("href: " + item[1] + " link: " + item[0]);
            return (
              <Styled.ListItem key={index}>
                <Styled.LinkMenu href={item[1]}>{item[0]}</Styled.LinkMenu>
              </Styled.ListItem>
            );
          })}
        </Styled.ListContainer>
      </Styled.Navbar>
    </>
  );
};
