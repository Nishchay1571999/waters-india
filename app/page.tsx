// import { Main, Section, Container } from "@/components/craft";

import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/landing";
import Statement from "@/components/home-page/statement";


export default function Home() {
  return (
    <>
    <Main>
      <Section>
        <Container>
          <Hero/>
          <Statement />
        </Container>
      </Section>
    </Main>
    </>
  );
}
