"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function ResetPasswordForm() {
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`${poppins.className} text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Reset Password
        </h1>
        <p className={`${poppins.className} text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Set a new password
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full">
        {/* New password */}
        <div className="relative w-full">
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter Password"
            className="h-[44px] w-full rounded-[6px] border border-[#D9D9D9] px-[16px] pr-[44px] text-[14px] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
          />
          <button
            type="button"
            aria-label={showNew ? "Hide password" : "Show password"}
            onClick={() => setShowNew((v) => !v)}
            className="absolute right-[12px] top-1/2 -translate-y-1/2 p-[4px]"
          >
            <Image src={showNew ? "/eyeoff.svg" : "/eye.svg"} alt="toggle" width={20} height={20} />
          </button>
        </div>

        {/* Confirm password */}
        <div className="relative w-full">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="h-[44px] w-full rounded-[6px] border border-[#D9D9D9] px-[16px] pr-[44px] text-[14px] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
          />
          <button
            type="button"
            aria-label={showConfirm ? "Hide password" : "Show password"}
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-[12px] top-1/2 -translate-y-1/2 p-[4px]"
          >
            <Image src={showConfirm ? "/eyeoff.svg" : "/eye.svg"} alt="toggle" width={20} height={20} />
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`${poppins.className} h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
