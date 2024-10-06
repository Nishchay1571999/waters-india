// import { Main, Section, Container } from "@/components/craft";

import { Container, Layout, Main, Section } from "@/components/craft";
import Clients from "@/components/home-page/clients";
import Footer from "@/components/home-page/Footer";
import Hero from "@/components/home-page/landing";
import Statement from "@/components/home-page/statement";


export default function Home() {
  return (
    <>
      
      <Layout>
        <Main>
          <Section>
            <Container>
              <Hero />
              <Statement />
              <Clients />
            </Container>
          </Section>
          <Footer />
        </Main>
      </Layout>
    </>
  );
}
