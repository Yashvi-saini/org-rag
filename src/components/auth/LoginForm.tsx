"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`${poppins.className} text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Welcome Back
        </h1>
        <p className={`${poppins.className} text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Log In to your account
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full">
        <input
          type="email"
          placeholder="Enter Email"
          className="h-[44px] w-full rounded-[6px] border border-[#D9D9D9] px-[16px] text-[14px] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
        />

        {/* Password with eye toggle */}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="h-[44px] w-full rounded-[6px] border border-[#D9D9D9] px-[16px] pr-[44px] text-[14px] placeholder:text-[#8A8A8A] focus:outline-none focus:ring-2 focus:ring-[#0B76FF1A]"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-[12px] top-1/2 -translate-y-1/2 p-[4px]"
          >
            <Image src={showPassword ? "/eyeoff.svg" : "/eye.svg"} alt="toggle" width={20} height={20} />
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="w-full flex items-center justify-between">
          <label className={`${poppins.className} flex items-center gap-[10px] text-[14px] font-[500] text-[#6B6B6B]`}>
            <input type="checkbox" className="accent-[#0B76FF] w-[16px] h-[16px]" />
            Remember Me
          </label>
          <a href="/forgot-password" className={`${poppins.className} text-[14px] font-[500] text-[#6B6B6B] hover:underline`}>Forgot Password ?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`${poppins.className} h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Log In
        </button>

        {/* Divider */}
        <div className={`${poppins.className} w-full flex items-center gap-3 text-[14px] text-[#6B6B6B]`}>
          <div className="h-px flex-1 bg-[#E6E6E6]" />
          <span>Or Log in With</span>
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
        Create a New Account?
        <a href="/signup" className="ml-1 text-[#0B76FF] font-[700] hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}
