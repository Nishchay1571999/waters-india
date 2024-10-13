// import { Main, Section, Container } from "@/components/craft";
"use client"
import { Container, Layout, Main, Section } from "@/components/craft";
import Clients from "@/components/home-page/clients";
import Footer from "@/components/home-page/Footer";
import Hero from "@/components/home-page/landing";
import Statement from "@/components/home-page/statement";


export default function Home() {
  return (
    <>
    

      <Layout>
        <Main className="dark text-foreground bg-background">
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
