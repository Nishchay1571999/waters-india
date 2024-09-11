"use client"

import { Section, Container } from "@/components/craft";
import ProofOfWork1 from "@/public/proofofwork.jpeg";
import ProofOfWork2 from "@/public/proofofwork1.jpeg";
import ProofOfWork3 from "@/public/proofofwork2.jpeg";
import ProofOfWork4 from "@/public/proofofwork3.jpeg";
import ProofOfWork5 from "@/public/proofofwork4.jpeg";
import ProofOfWork6 from "@/public/ProofofWork6.jpeg";
import ProofOfWork7 from "@/public/ProofofWork7.jpeg";
import ProofOfWork8 from "@/public/pof11.jpeg";

import React from "react";
import Imagecorousel from "../common/Imagecorousel";
const images = [ProofOfWork1,ProofOfWork2,ProofOfWork3,ProofOfWork4,ProofOfWork5,ProofOfWork6,ProofOfWork7,ProofOfWork8]
const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm h-auto">
      <Container className="flex flex-col gap-8">
        <h1 className="!mb-0 text-white opacity-80">
          What if all your water treatment solutions were one phone-call away
        </h1>
        <h3 className="text-white">
          We provide all kinds of water treatment & solutions. STP, WTP, RO,
          SP,FFTR, RWH,DM (EDI), PSB, BIOGAS, ETP
        </h3>
        <div className="flex items-end justify-between">
        <Imagecorousel images={images}/>
        </div>
      
      </Container>
    </Section>
  );
};

export default Hero;
