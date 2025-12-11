import Carousel from "./Carousel";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function AuthLayout({ children, images, contentTop = 30 }: {
  children: React.ReactNode;
  images: string[];

  contentTop?: number;
}) {
  return (
    <div
      className={`${poppins.className} flex w-[1439px] mx-auto min-h-screen bg-[#003259]`}
    >
      {/* Left Carousel */}
      <div className="hidden md:flex w-[628px] bg-[#003259] h-[100vh]">
        <Carousel images={images} />
      </div>

      {/* Right Form (scrollable) */}
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
