"use client"
import Hero from '@/components/home-page/landing';
// pages/blog/solarice-disha-international-school.js
import Head from 'next/head';

export default function SolariceDishaInternationalSchool() {
  return (
    <>
     <Hero/>
      <Head>
        <title>Solarice Project at Disha International School | Waters India</title>
        <meta name="description" content="Learn how the Solarice project at Disha International School in Bangalore provides sustainable energy solutions with high efficiency and affordability." />
        <meta name="keywords" content="Solarice, solar energy, Disha International School, Bangalore, sustainable energy, affordable" />
      </Head>
      <main className="container">
        <h1>Solarice Project at Disha International School: Sustainable, Efficient, and Affordable</h1>
        
        <section>
          <h2>Introduction</h2>
          <p>
            We are excited to share the success of our recent <strong>Solarice project</strong> at 
            <strong> Disha International School</strong> in Bangalore, Gottigere. This initiative focuses on providing 
            <strong> sustainable energy solutions</strong> that are both <strong>efficient</strong> and <strong>affordable</strong>, 
            meeting the growing energy needs of the school while reducing its environmental impact.
          </p>
        </section>

        <section>
          <h2>What is Solarice?</h2>
          <p>
            The <strong>Solarice system</strong> harnesses solar energy through advanced photovoltaic technology, converting sunlight 
            into reliable, clean energy. This innovative system is designed to maximize efficiency while minimizing costs, 
            making it an ideal solution for institutions aiming to adopt <strong>eco-friendly energy practices</strong>.
          </p>
        </section>

        <section>
          <h2>Project Overview</h2>
          <p>
            At Disha International School, the Solarice installation has significantly reduced reliance on traditional energy sources. 
            This <strong>cost-effective solution</strong> provides the school with reliable energy while cutting down on electricity costs 
            and promoting <strong>sustainability</strong>.
          </p>
        </section>

        <section>
          <h2>Key Benefits of the Solarice Project for Disha International School</h2>
          <ul>
            <li>
              <strong>Sustainable Energy:</strong> The Solarice system enables the school to reduce its carbon footprint, supporting 
              environmental sustainability and contributing to a cleaner, greener future.
            </li>
            <li>
              <strong>Cost Savings:</strong> With Solarice, the school benefits from a lower electricity bill, which provides long-term 
              financial savings and a higher return on investment.
            </li>
            <li>
              <strong>Reliable Performance:</strong> Designed for high efficiency, the Solarice system offers reliable energy output, 
              ensuring that the school's energy needs are consistently met.
            </li>
            <li>
              <strong>Educational Value:</strong> The Solarice project serves as a practical learning resource, helping students understand 
              the importance of renewable energy and sustainability in real-world applications.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Waters India for Solar Solutions?</h2>
          <p>
            At Waters India, we are dedicated to providing <strong>affordable</strong> and <strong>high-quality solar energy solutions</strong>. 
            Our expertise in renewable energy makes us the ideal partner for schools and institutions looking to adopt sustainable practices. 
            We are proud to support Disha International School in its journey toward <strong>energy efficiency</strong> and environmental stewardship.
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
