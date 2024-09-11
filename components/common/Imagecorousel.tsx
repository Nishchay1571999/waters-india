import Image, { StaticImageData } from "next/image";
import React from "react";

function Imagecorousel({ images }: { images: Array<StaticImageData> }) {
  return (
    <div className="columns-6 md:columns-3 lg:columns-3 gap-6">
      {images.map((item, index) => {
        return (
          <div key={index} className="break-inside-avoid">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={item}
              alt={`Image ${index}`}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Imagecorousel;

export const ListImageCorousel = ({
  images,
}: {
  images: StaticImageData[];
}) => {
  return (
<div className=" whitespace-nowrap">
      <div className="flex animate-marquee space-x-6">
        {images.map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              alt="Image 1"
              width={300}
              height={300}
              className="object-contain p-5"
            />
          );
        })}
        {images.map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              alt="Image 1"
              width={300}
              height={300}
              className="object-contain p-5"
            />
          );
        })}
      </div>
    </div>
  );
};
