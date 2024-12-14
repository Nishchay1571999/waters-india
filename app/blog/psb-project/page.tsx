"use client"
// pages/blog/psb-tumkur.js
import Hero from '@/components/home-page/landing';
import Head from 'next/head';

export default function PSBTumkur() {
  return (
    <div className="bg-white">
      <Head>
        <title>PSB Project in Tumkur | Waters India</title>
        <meta name="description" content="Discover how our PSB installation in Tumkur ensures efficient and cost-effective water filtration, delivering reliable and high-quality water." />
        <meta name="keywords" content="Pressure Sand Filter, PSB, water filtration, Tumkur, clean water, affordable, efficient" />
      </Head>
      <Hero />
      <main className="container">
        <h1>PSB Project in Tumkur: Effective Water Filtration with Affordability and Reliability</h1>

        <section>
          <h2>Introduction</h2>
          <p>
            At Waters India, we take pride in providing top-notch water treatment solutions for our clients. Our recent project in Tumkur involved the installation of a <strong>Pressure Sand Filter (PSB)</strong> system,
            which offers an <strong>efficient</strong> and <strong>affordable</strong> solution for water filtration, ensuring clean and high-quality water.
          </p>
        </section>

        <section>
          <h2>What is a Pressure Sand Filter (PSB)?</h2>
          <p>
            A Pressure Sand Filter (PSB) is a filtration system that removes suspended particles, turbidity, and impurities from water using a multi-layered sand bed.
            This <strong>cost-effective</strong> and <strong>low-maintenance</strong> solution is widely used to provide clean water for a range of applications.
          </p>
        </section>

        <section>
          <h2>Project Overview</h2>
          <p>
            Our PSB installation in Tumkur was customized to meet local water filtration needs, ensuring that water quality standards are met with minimal effort.
            The system is designed to be <strong>reliable</strong> and <strong>easy to operate</strong>, providing a practical solution for long-term water filtration.
          </p>
        </section>

        <section>
          <h2>Key Benefits of the PSB Project in Tumkur</h2>
          <ul>
            <li>
              <strong>Efficient Filtration:</strong> The PSB effectively removes impurities, resulting in cleaner water that meets safety and quality standards.
            </li>
            <li>
              <strong>Cost-Effective Solution:</strong> Our PSB system is affordable and reduces maintenance costs, offering a high return on investment.
            </li>
            <li>
              <strong>Reliable Performance:</strong> Built to handle high water volumes, the PSB system delivers consistent results with minimal maintenance.
            </li>
            <li>
              <strong>Environmentally Friendly:</strong> The PSB system minimizes the need for chemical treatments, making it a sustainable choice for water filtration.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Waters India for Your Water Filtration Needs?</h2>
          <p>
            Waters India is dedicated to providing <strong>high-quality</strong> and <strong>affordable water treatment solutions</strong> that meet the specific needs of our clients.
            Our PSB systems are reliable, efficient, and designed to ensure safe and clean water. Choose us to experience the best in water filtration technology.
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
    </div>
  );
}
