import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageCarouselProps {
  images: Array<StaticImageData>;
}

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((item, index) => (
        <div key={index} className="break-inside-avoid">
          <Image
            className="h-auto max-w-full rounded-lg"
            src={item}
            alt={`Image ${index + 1}`} // Corrected the alt attribute
            layout="responsive"
            objectFit="cover"
            width={500} // Adjust according to your layout
            height={300} // Adjust according to your layout
          />
        </div>
      ))}
    </div>
  );
}


export default ImageCarousel;

export const ListImageCorousel = ({
  images,
}: {
  images: StaticImageData[];
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee space-x-6">
        {images.map((item, index) => (
          <Image
            src={item}
            key={index}
            alt={`Image ${index + 1}`}
            width={150}
            height={150}
            className="object-contain p-5"
          />
        ))}
        {images.map((item, index) => (
          <Image
            src={item}
            key={`duplicate-${index}`}
            alt={`Image ${index + 1}`}
            width={150}
            height={150}
            className="object-contain p-5"
          />
        ))}
      </div>
    </div>
  );
};
