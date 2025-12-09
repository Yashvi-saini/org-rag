"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RegisterForm() {
  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`${poppins.className} text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Get Started Now!
        </h1>
        <p className={`${poppins.className} text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Create your account here.
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full">
        <input
          type="email"
          placeholder="Enter Email"
          className="h-[44px] w-full rounded-[6px] border border-[#999999] px-[16px] text-[14px] text-[#000] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        <input
          type="text"
          placeholder="Enter Username"
          className="h-[44px] w-full rounded-[6px] border border-[#999999] px-[16px] text-[14px] text-[#000] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="h-[44px] w-full rounded-[6px] border border-[#999999] px-[16px] text-[14px] text-[#595959] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="h-[44px] w-full rounded-[6px] border border-[#999999] px-[16px] text-[14px] text-[#595959] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        {/* Terms */}
        <label className={`${poppins.className} mt-[-4px] w-full flex items-center gap-[10px] text-[14px] font-[500] text-[#6B6B6B]`}>        
          <input type="checkbox" className="accent-[#0B76FF] w-[16px] h-[16px]" />
          <span>
            I agree with the
            <a href="#" className="ml-1 text-[#0B76FF] underline-offset-2 hover:underline">
              Terms and Policy
            </a>
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className={`${poppins.className} mt-[2px] h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className={`${poppins.className} mt-[6px] w-full flex items-center gap-3 text-[14px] text-[#6B6B6B]`}>        
          <div className="h-px flex-1 bg-[#E6E6E6]" />
          <span>Or Sign Up With</span>
          <div className="h-px flex-1 bg-[#E6E6E6]" />
        </div>

        {/* Social buttons */}
        <div className="w-full flex items-center justify-between gap-[14px]">
          <button type="button" className={`${poppins.className} h-[47px] w-[296px] rounded-[8px] border border-[#999999] bg-white flex items-center justify-center gap-2 text-[14px] font-[500] text-[#737373]`}>
            <Image src="/google.svg" alt="Google" width={24} height={24} />
            <span>Sign Up With Google</span>
          </button>

          <button type="button" className={`${poppins.className} h-[47px] w-[296px] rounded-[8px] border border-[#999999] bg-white flex items-center justify-center gap-2 text-[14px] font-[500] text-[#737373]`}>
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            <span>Sign Up With Github</span>
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className={`${poppins.className} mt-[30px] text-center text-[18px] font-[500] text-[#000]`}>
        Already have an account?
        <a href="/login" className="ml-1 text-[#0B76FF] font-[700] hover:underline">
          Log In
        </a>
      </p>
    </div>
  );
}
