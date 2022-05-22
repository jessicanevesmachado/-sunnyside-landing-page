import { Testimonials } from "../Testimonials/Testimonials";
import * as Styled from "./Styled";

export const Main = () => {
  return (
    <main>
      <Styled.Article>
        <Styled.Section color="white">
          <Styled.Title>Transform your brand</Styled.Title>
          <Styled.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Styled.Description>
          <Styled.Link href="#">Learn more</Styled.Link>
        </Styled.Section>

        <Styled.Section color="yellow">
          <Styled.ImageEgg />
        </Styled.Section>

        <Styled.Section color="yellow">
          <Styled.ImageCup />
        </Styled.Section>

        <Styled.Section color="white">
          <Styled.Title>Stand out to the right audience</Styled.Title>
          <Styled.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </Styled.Description>
          <Styled.Link href="#">Learn more</Styled.Link>
        </Styled.Section>

        <Styled.CherrySection color="green">
          <Styled.Wrapper>
            <Styled.Title color="darkGreen">Grapic Design</Styled.Title>
            <Styled.Description color="darkGreen">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Styled.Description>
          </Styled.Wrapper>
        </Styled.CherrySection>

        <Styled.TangerineSection color="blue">
          <Styled.Wrapper>
            <Styled.Title color="darkBlue">Photography</Styled.Title>
            <Styled.Description color="darkBlue">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Styled.Description>
          </Styled.Wrapper>
        </Styled.TangerineSection>
      </Styled.Article>
      <Testimonials />
    </main>
  );
};
