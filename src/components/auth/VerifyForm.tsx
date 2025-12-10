"use client";

import React from "react";
import OtpInput, { ResendOtpButton } from "@/components/inputfield_ui/OtpInput";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "signup";
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [resendKey, setResendKey] = React.useState<number | null>(null);
  const [cooldownActive, setCooldownActive] = React.useState(false);

  
  React.useEffect(() => {
    if (otp.length === 0) {
      setError(null);
    }
  }, [otp]);

  const onComplete = (code: string) => {
    setOtp(code);
  };

  const verify = async () => {
    // Simulate verify: allow any 6-digit OTP for now
    if (otp.length !== 6) {
      setError("Enter 6-digit OTP");
      return;
    }
    // On success, navigate based on mode
    if (mode === "forgot") {
      router.push("/reset-password");
    } else {
      router.push("/dummydash");
    }
  };

  return (
    <div className="w-full max-w-[610px] mx-auto">
      <div className="flex flex-col gap-[6px]">
        <h1 className={`text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Verification
        </h1>
        <p className={`text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Enter the OTP
        </p>
      </div>

      <div className="mt-[30px] flex flex-col gap-[22px] items-center w-full">
        <OtpInput length={6} onChange={setOtp} onComplete={onComplete} error={error} />
        {/* space for display error*/}
        <div className="w-full h-[18px]">
          {error ? (
            <p className={`text-[#FF2121] text-[12px] w-full`}>{error}</p>
          ) : null}
        </div>

        <div className="w-full flex flex-col gap-[14px] mt-[22px]">
          <button
            type="button"
            onClick={verify}
            className={`h-[58px] w-full rounded-[10px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
          >
            Verify OTP
          </button>
          <ResendOtpButton
            onResend={() => {
              // will call resend API here later
            }}
            seconds={30}
            startKey={resendKey}
            disabledBeforeStart
            onCountdownEnd={() => setCooldownActive(false)}
          />
        </div>
      </div>
    </div>
  );
}
