"use client"
// React and Next.js imports
import Link from "next/link";
// import Image from "next/image";

// Local component imports
import { Section, Container } from "@/components/craft";
import Drawer from "./Drawer";


const Hero = () => {
  return (
    <Section className="relative">
      <Container className="not-prose">
        <div className="flex w-full justify-between">
          <div className="">
            <Link className="flex-row transition-all text-green-200 hover:opacity-70" href="/">
              <div className="flex-row ">
                <h1 className="text-3xl text-orange-600 font-normal md:text-6xl">
                  {'Waters'}
                </h1>
                <h1 className="text-3xl text-white font-normal md:text-6xl">
                  {'India'}</h1>
              </div>

            </Link>

            <div className="flex-row">
              <h2 className="w-82 text-lg text-green-200 font-light leading-6">
                Pure water should be a
              </h2>
              <h2 className="w-82 text-lg text-orange-300 font-light leading-6">necessity</h2>
            </div>
          </div>
          <Drawer />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
