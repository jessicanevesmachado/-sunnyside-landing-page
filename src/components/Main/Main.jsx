import { Testimonials } from "./Testimonials/Testimonials";
import * as Styled from "./Styled";
import { VisualArts } from "./VisualArts/VisualArts";

export const Main = () => {
  return (
    <main>
      <Styled.Article>
        <Styled.Section color="white">
          <Styled.SectionItem id="about-section">
            <Styled.Title>Transform your brand</Styled.Title>
            <Styled.Description>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Styled.Description>
            <Styled.Link color="yellow" href="#">
              Learn more
            </Styled.Link>
          </Styled.SectionItem>
        </Styled.Section>

        <Styled.Section color="yellow">
          <Styled.ImageEgg />
        </Styled.Section>

        <Styled.Section color="yellow">
          <Styled.ImageCup />
        </Styled.Section>

        <Styled.Section color="white">
          <Styled.SectionItem>
            <Styled.Title>Stand out to the right audience</Styled.Title>
            <Styled.Description>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </Styled.Description>
            <Styled.Link color="pink" href="#">
              Learn more
            </Styled.Link>
          </Styled.SectionItem>
        </Styled.Section>

        <Styled.CherrySection color="green" id="services-section">
          <Styled.Wrapper>
            <Styled.Title color="darkGreen">Grapic Design</Styled.Title>
            <Styled.Description color="darkGreen">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </Styled.Description>
          </Styled.Wrapper>
        </Styled.CherrySection>

        <Styled.TangerineSection color="blue">
          <Styled.Wrapper>
            <Styled.Title color="darkBlue">Photography</Styled.Title>
            <Styled.Description color="darkBlue">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </Styled.Description>
          </Styled.Wrapper>
        </Styled.TangerineSection>
      </Styled.Article>
      <Testimonials />
      <VisualArts />
    </main>
  );
};
