// React and Next.js imports
import Link from "next/link";
// import Image from "next/image";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/logo.jpeg";
import Image from "next/image";

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
            <h2 className="w-82 text-lg text-green-200 font-light leading-6">
              Pure water should be a <h2 className="w-82 text-lg text-orange-300 font-light leading-6">necessity</h2>
            </h2>
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
        <div className="fit absolute bottom-40 right-0 flex items-end justify-end">
          <div className="hidden h-72 w-96 md:block">
            <Image
              className="h-full w-full rounded-tl-3xl object-contain"
              src={Placeholder}
              alt="placeholder"
            ></Image>
          </div>
          <div className="h-[420px] w-fit md:w-96">
            <Image
              className="h-full w-full rounded-tl-3xl object-contain"
              src={Placeholder}
              alt="placeholder"
            ></Image> 
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
