"use client";

import Carousel from "./Carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function AuthLayout({ children, images, contentTop = 30, showControls = false }: {
  children: React.ReactNode;
  images: string[];
  contentTop?: number;
  showControls?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className={`${poppins.className} flex w-[1439px] mx-auto min-h-screen bg-[#003259]`}
    >
      {/* Left Carousel */}
      <div className="hidden md:flex relative w-[628px] bg-[#003259] h-[100vh]">
        {/* Top back arrow (common across pages) */}
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="absolute top-[41px] left-[58px] z-20 hover:opacity-80"
        >
          <Image src="/auth/topbackarrow.svg" alt="back" width={24} height={24} />
        </button>
        <Carousel images={images} showControls={showControls} />
      </div>

      {/* Right Form  */}
      <div className="w-[811px] flex flex-col items-center bg-white pt-[42px] pb-[234px] overflow-y-auto">
        
        {/* Logo */}
        <div>
          <Image src="/DocClustor.svg" alt="logo" width={169} height={24} />
        </div>

        {/* Form container */}
        <div
          className="w-[610px] flex flex-col gap-[30px]"
          style={{ marginTop: contentTop }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
