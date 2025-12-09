"use client";

import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`${poppins.className} text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Forgot Your Password?
        </h1>
        <p className={`${poppins.className} text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Enter your account’s email
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full">
        <input
          type="email"
          placeholder="Enter Email"
          className="h-[44px] w-full rounded-[6px] border border-[#D9D9D9] px-[16px] text-[14px] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        <button
          type="submit"
          className={`${poppins.className} h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}
