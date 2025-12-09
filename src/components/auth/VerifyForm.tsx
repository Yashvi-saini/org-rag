"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function VerifyForm() {
  const [otp, setOtp] = React.useState<string[]>(Array(6).fill(""));
  const inputsRef = React.useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // allow one digit
    const next = [...otp];
    next[idx] = value;
    setOtp(next);
    if (value && idx < inputsRef.current.length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`${poppins.className} text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Verification
        </h1>
        <p className={`${poppins.className} text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Enter the OTP
        </p>
      </div>

      {/* Form */}

      <form className="mt-[30px] flex flex-col gap-[60px] items-center w-full">
        {/* OTP Inputs */}
        <div className="w-full flex items-center justify-between gap-[22px]">
          {otp.map((val, i) => (
            <input
              key={i}
              ref={(el) => {
                inputsRef.current[i] = el;
              }}
              value={val}
              onChange={(e) => handleChange(i, e.target.value.slice(-1))}
              onKeyDown={(e) => handleKeyDown(i, e)}
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]*"
              className={`${poppins.className} w-[83px] h-[80px] rounded-[25px] bg-[#EAF3FF] border border-[#D9D9D9] text-[24px] font-[700] text-[#000] text-center outline-none focus:bg-white focus:border-[#0B76FF] focus:shadow-[0_0_0_3px_rgba(11,118,255,0.1)]`}
            />
          ))}
        </div>

        {/* Buttons group */}
        <div className="w-full flex flex-col gap-[14px]">
          <button
            type="submit"
            className={`${poppins.className} h-[58px] w-full rounded-[10px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
          >
            Verify OTP
          </button>
          <button
            type="button"
            className={`${poppins.className} h-[58px] w-full rounded-[10px] border border-[#0B76FF] bg-white text-[16px] font-[700] text-[#0B76FF] hover:bg-[#F5F9FF] transition-colors`}
          >
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
}
