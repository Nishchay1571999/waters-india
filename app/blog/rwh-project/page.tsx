"use client"
// pages/blog/rainwater-harvesting-project.js
import Hero from '@/components/home-page/landing';
import Head from 'next/head';

export default function RainwaterHarvestingProject() {
  return (
    <>
      <Head>
        <title>Rainwater Harvesting Project | Waters India</title>
        <meta name="description" content="Discover how Waters India implemented a rainwater harvesting project, promoting sustainable water management and conservation." />
        <meta name="keywords" content="rainwater harvesting, sustainable water management, water conservation, Waters India" />
      </Head>
      <Hero/>
      <main className="container">
        <h1>Rainwater Harvesting Project: Sustainable Water Solutions</h1>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Waters India is committed to promoting sustainable water management practices. Our <strong>Rainwater Harvesting (RWH)</strong> project is designed to collect, 
            store, and utilize rainwater effectively, contributing to water conservation and ensuring a reliable water supply.
          </p>
        </section>

        <section>
          <h2>What is Rainwater Harvesting?</h2>
          <p>
            Rainwater harvesting is the practice of collecting and storing rainwater for reuse before it reaches the ground. This technique helps reduce 
            the demand on existing water supplies and can provide an alternative source of water for irrigation, landscaping, and even potable use when properly treated.
          </p>
        </section>

        <section>
          <h2>Our RWH Project</h2>
          <p>
            Our rainwater harvesting project aims to harness the potential of rainwater to support sustainable water usage. By integrating RWH systems into 
            buildings and landscapes, we help communities optimize their water resources and reduce dependency on groundwater and municipal supplies.
          </p>
        </section>

        <section>
          <h2>Key Benefits of Our RWH Project</h2>
          <ul>
            <li>
              <strong>Water Conservation:</strong> RWH systems significantly reduce water wastage, promoting efficient water use in communities.
            </li>
            <li>
              <strong>Cost Savings:</strong> By utilizing harvested rainwater, users can lower their water bills and reduce reliance on external water sources.
            </li>
            <li>
              <strong>Environmental Impact:</strong> RWH helps mitigate urban flooding, reduces soil erosion, and replenishes groundwater levels.
            </li>
            <li>
              <strong>Community Resilience:</strong> By providing an alternative water source, RWH enhances community resilience to water shortages and climate change.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Waters India for Your RWH Needs?</h2>
          <p>
            At Waters India, we specialize in designing and implementing effective rainwater harvesting solutions tailored to meet the specific needs of our clients. 
            Our expertise ensures that your RWH system is efficient, sustainable, and beneficial for both the environment and your community. 
            Trust us for your rainwater harvesting projects to experience the advantages of responsible water management.
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
