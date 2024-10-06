import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Waters India",
  description: "Waters India, We provide the best water management solution in the planet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Water Treatment Solutions in Bangalore - Waters India</title>
        <meta name="description" content="Waters India offers advanced water treatment solutions in Bangalore, specializing in STP, WTP, RO, and more." />
        <meta name="keywords" content="Water Treatment, Bangalore, STP, WTP, RO, Waters India" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Waters India",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              },
              "description": "Water treatment solutions provider in Bangalore, specializing in STP, WTP, RO, and more.",
              "url": "https://watersindia.com",
              "telephone": "+91 9740890400",
              "areaServed": "Bangalore",
              "keywords": ["Water Treatment Bangalore", "STP", "WTP", "RO", "Water Management", "FFTR", "RWH", "Water Solutions",],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
