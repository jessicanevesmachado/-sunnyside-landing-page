import { useState } from "react";
import * as Styled from "./Styled";

export const Menu = () => {
  const [menus] = useState(["About", "Services", "Projects", "Contact"]);
  return (
    <Styled.Navbar>
      <Styled.ListContainer>
        {menus.map((item, index) => (
          <Styled.ListItem key={index}>{item}</Styled.ListItem>
        ))}
      </Styled.ListContainer>
    </Styled.Navbar>
  );
};
