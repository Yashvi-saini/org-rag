"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3000 // 3 seconds
    );

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="carousel-image"
          width={628}
          height={1025}
          className={`
            absolute inset-0 object-contain transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}