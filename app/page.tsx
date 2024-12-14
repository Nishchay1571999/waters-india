// import { Main, Section, Container } from "@/components/craft";
"use client"
import { Container, Layout, Main, Section } from "@/components/craft";
import Clients from "@/components/home-page/clients";
import Footer from "@/components/home-page/Footer";
import Hero from "@/components/home-page/landing";
import Statement from "@/components/home-page/statement";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Water Treatment Solutions in Bangalore - Waters India</title>
        <meta name="description" content="Waters India offers advanced water treatment solutions in Bangalore, specializing in STP, WTP, RO, and more." />
        <meta name="keywords" content="water solutions, water purifier, industrial water, Water Treatment, Bangalore, STP, WTP, RO, Waters India" />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Waters India - Best Water Solutions" />
        <meta property="og:description" content="Providing the best water solutions for homes and industries in India." />
        <meta property="og:url" content="https://watersindia.com" />
        <meta property="og:image" content="https://watersindia.com/pof11.jpeg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (for Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Waters India - Best Water Solutions" />
        <meta name="twitter:description" content="Providing the best water solutions for homes and industries in India." />
        <meta name="twitter:image" content="https://watersindia.com/twitter-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Waters India",
              url: "https://watersindia.com",
              logo: "https://watersindia.com/logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9740890400",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </Head>

      <Layout>
        <Main className=" text-foreground bg-background">
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
