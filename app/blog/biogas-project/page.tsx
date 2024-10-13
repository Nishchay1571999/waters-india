"use client"

// pages/blog/biogas-plant-madikeri.js
import Hero from '@/components/home-page/landing';
import Head from 'next/head';

export default function BiogasPlantMadikeri() {
  return (
    <>
      <Head>
        <title>Biogas Plant Project in Madikeri | Waters India</title>
        <meta name="description" content="Explore how Waters India implemented a biogas plant in Madikeri, providing sustainable energy solutions and promoting waste management." />
        <meta name="keywords" content="biogas plant, sustainable energy, waste management, Madikeri, renewable energy, Waters India" />
      </Head>
      <Hero/>
      <main className="container">
        <h1>Biogas Plant Project in Madikeri: Sustainable Energy Solutions</h1>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Waters India is proud to announce the successful implementation of a <strong>biogas plant</strong> in Madikeri, aimed at promoting sustainable energy solutions 
            and efficient waste management. Our biogas technology harnesses organic waste to produce clean energy, contributing to a greener environment.
          </p>
        </section>

        <section>
          <h2>What is a Biogas Plant?</h2>
          <p>
            A biogas plant is a facility that converts organic waste into biogas through anaerobic digestion. This process produces renewable energy in the form of biogas, 
            which can be used for heating, electricity generation, and as a vehicle fuel, while also reducing greenhouse gas emissions and promoting waste recycling.
          </p>
        </section>

        <section>
          <h2>Our Biogas Project in Madikeri</h2>
          <p>
            The biogas plant in Madikeri is designed to process local organic waste, turning it into valuable energy while minimizing environmental impact. 
            The project highlights our commitment to sustainability and innovation in waste management solutions.
          </p>
        </section>

        <section>
          <h2>Key Benefits of Our Biogas Plant</h2>
          <ul>
            <li>
              <strong>Renewable Energy Production:</strong> The plant generates biogas that can be used as a sustainable energy source for various applications.
            </li>
            <li>
              <strong>Waste Management:</strong> By utilizing organic waste, the biogas plant reduces landfill waste and promotes recycling efforts in the community.
            </li>
            <li>
              <strong>Environmental Protection:</strong> The project helps lower greenhouse gas emissions, contributing to a healthier environment.
            </li>
            <li>
              <strong>Community Benefits:</strong> The biogas plant supports local farmers and businesses by providing a renewable energy source and reducing waste disposal costs.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Waters India for Biogas Solutions?</h2>
          <p>
            Waters India is dedicated to delivering <strong>innovative and sustainable energy solutions</strong> through our biogas technology. 
            Our expertise in renewable energy projects ensures that our clients receive reliable systems tailored to their specific needs. 
            Trust Waters India for your biogas projects and join us in promoting a sustainable future.
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          color: #f0f0f0;
          background-color: #121212;
        }
        h1, h2 {
          color: #e0e0e0;
        }
        p, li {
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        ul li {
          margin-bottom: 0.75rem;
        }
      `}</style>
    </>
  );
}
