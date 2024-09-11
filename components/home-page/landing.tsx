// React and Next.js imports
import Link from "next/link";
// import Image from "next/image";

// Local component imports
import { Section, Container } from "@/components/craft";


const Hero = () => {
  return (
    <Section className="relative h-[100vh]">
      <Container className="not-prose">
        <div className="flex w-full justify-between">
          <div className="">
            <h1 className="mb-4 text-3xl font-normal md:text-6xl">
              <Link className="transition-all text-green-200 hover:opacity-70" href="#">
                Waters India
              </Link>
            </h1>

            <div className="flex">
            <h2 className="w-82 text-lg text-green-200 font-light leading-6">
              Pure water should be a 
            </h2>
            <h2 className="w-82 text-lg text-orange-300 font-light leading-6">necessity</h2>
            </div>
          </div>
          <div className="hidden gap-4 md:flex">
            <Link className="transition-all hover:text-green-400" href="#">
              Blogs
            </Link>
            <Link className="transition-all hover:text-green-400" href="#">
              Products
            </Link>
            <Link className="transition-all hover:text-green-400" href="#">
              Call
            </Link>
            <Link className="transition-all hover:text-green-400" href="#">
              Email
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
