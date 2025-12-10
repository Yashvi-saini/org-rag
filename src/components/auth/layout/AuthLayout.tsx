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
    <div className={`${poppins.className} flex w-[1439px] mx-auto min-h-screen bg-[#003259] overflow-hidden`}>
      
      {/* Left Carousel */}
      <div className="hidden md:flex w-[628px] h-full bg-[#003259]">
        <Carousel images={images} />
      </div>

      {/* Right Form */}
      <div className="w-[811px] flex flex-col items-center bg-white pt-[42px] pb-[234px]">
      
        {/*logo of doclustor*/}
      <div >
        <Image
             src="/DocClustor.svg"
             alt="logo"
             width={169}
             height={24}
        />
      </div>

        {/*forms are changing*/}
       <div className="w-[610px] flex flex-col gap-[30px]" style={{ marginTop: contentTop }}>
         {children}
       </div>
       
      </div>

    </div>
  );
}
