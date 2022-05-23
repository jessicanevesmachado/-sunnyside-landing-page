import * as Styled from "./Styled";
import emily from "/src/assets/images/image-emily.jpg";
import jennie from "/src/assets/images/image-jennie.jpg";
import thomas from "/src/assets/images/image-thomas.jpg";

export const Testimonials = () => {
  return (
    <Styled.Section>
      <Styled.Title>Client Testimonials</Styled.Title>

      <Styled.Article>
        <Styled.Avatar src={emily} alt="Imagem da Emily" />
        <Styled.Description>
          We put our trust in Sunnyside an they delivered, making sure our needs
          were met and deadlines were always hit.
        </Styled.Description>

        <Styled.Author>Emily R.</Styled.Author>
        <Styled.Responsibility>Marketing Director</Styled.Responsibility>
      </Styled.Article>

      <Styled.Article>
        <Styled.Avatar src={thomas} alt="Imagem do Thomas" />

        <Styled.Description>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </Styled.Description>

        <Styled.Author>Thomas S.</Styled.Author>
        <Styled.Responsibility>Chief Operation Officer</Styled.Responsibility>
      </Styled.Article>

      <Styled.Article>
        <Styled.Avatar src={jennie} alt="Imagem da Jennie" />

        <Styled.Description>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </Styled.Description>

        <Styled.Author>Jennie F.</Styled.Author>
        <Styled.Responsibility>Business Owner</Styled.Responsibility>
      </Styled.Article>
    </Styled.Section>
  );
};
