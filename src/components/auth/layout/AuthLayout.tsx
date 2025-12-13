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
      className={`${poppins.className} flex w-screen min-h-screen bg-[#003259]`}
    >
      {/* Left Carousel */}
      <div className="hidden md:flex relative w-[45%] bg-[#003259] h-screen">
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

      {/* Right Form */}
      <div className="flex-1 flex flex-col items-center bg-white pt-6 md:pt-[42px] pb-16 md:pb-[234px] overflow-y-auto relative">
        {/* Mobile back arrow */}
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="md:hidden absolute top-4 left-4 z-20 rounded-full p-2 hover:bg-gray-100"
        >
          <Image src="/auth/mobilebackarrow.svg" alt="back" width={24} height={24} />
        </button>

        <Image src="/DocClustor.svg" alt="logo" width={169} height={24} className="hidden md:block mt-0" />

        <div
          className="w-full max-w-[610px] px-4 md:px-0 flex flex-col flex-1 gap-[30px]"
          style={{ marginTop: contentTop }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
