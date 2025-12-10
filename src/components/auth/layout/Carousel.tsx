"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000); //image is changed 3 sec 
    
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={images[index]}
        alt="auth-image"
        width={628}
        height={1025}
        className="object-contain"
      />
    </div>
  );
}
