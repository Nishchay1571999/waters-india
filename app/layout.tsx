import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Waters India. Pure water should be a necessity",
  description: new Date().toDateString() + " - Waters India, We provide the best, affordable and reliant water management solution in the planet. From STP to Biogas Treatment we have it all.",
  keywords: ["STP", "Biogas", "Water Treatment Solutions", "Water Treatment Banglore", "RO", "WTP", "SP", " RWH", "ETP", "Quick Water Treatments", "Water Management", "Water Management Solutions"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
