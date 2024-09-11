"use client"

import Autoplay from "embla-carousel-autoplay";
import { Section, Container } from "@/components/craft";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import ProofOfWork1 from "@/public/proofofwork.jpeg";
import ProofOfWork2 from "@/public/proofofwork1.jpeg";
import ProofOfWork3 from "@/public/proofofwork2.jpeg";
import ProofOfWork4 from "@/public/proofofwork3.jpeg";
import ProofOfWork5 from "@/public/proofofwork4.jpeg";
import React from "react";
const Hero = () => {
  const plugin1 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Section className="relative backdrop-blur-sm h-[100vh]">
      <Container className="flex flex-col gap-8">
        <h1 className="!mb-0 text-white opacity-80">
          What if all your water treatment solutions were one phone-call away
        </h1>
        <h3 className="text-white">
          We provide all kinds of water treatment & solutions. STP, WTP, RO,
          SP,FFTR, RWH,DM (EDI), PSB, BIOGAS, ETP
        </h3>
        <div className="flex items-end justify-between">
        <Carousel
        opts={{loop:true}}
          plugins={[plugin1.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin1.current.stop}
          onMouseLeave={plugin1.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork1}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork2}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork3}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork4}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork5}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <Carousel
        opts={{loop:true}}
          plugins={[plugin2.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin2.current.stop}
          onMouseLeave={plugin2.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork1}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork2}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork3}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork4}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="h-[60vh] w-full object-contain"
                src={ProofOfWork5}
                alt="Proof Of Work"
              ></Image>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        </div>
      
      </Container>
    </Section>
  );
};

export default Hero;
