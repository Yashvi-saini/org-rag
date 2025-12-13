"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordSchemaType } from "@/lib/authvalidations/forgotPassword.schema";
import IdentifierInput from "@/components/inputfield_ui/IdentifierInput";


export default function ForgotPasswordForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onBlur",
    defaultValues: { email: "" },
  });
  const emailValue = watch("email");
  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px] text-center md:text-left">
        <h1 className="text-[24px] leading-[32px] md:text-[44px] md:leading-[52px] font-[700] text-[#000]">
          Forgot Your Password?
        </h1>
        <p className="hidden md:block text-[24px] leading-[36px] font-[500] text-[#6B6B6B]">
          Enter your account’s email
        </p>
        <p className="md:hidden text-[14px] leading-[20px] font-[500] text-[#6B6B6B]">
          Don&apos;t worry it happens to the best of us. Enter your email and we&apos;ll help you securely reset it.
        </p>
      </div>

      {/* Form */}
      <form
        className="mt-[30px] flex flex-col gap-[30px] items-center w-full"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => {
          // Navigate to verify OTP for forgot-password flow
          const email = encodeURIComponent(data.email);
          router.push(`/verify?mode=forgot&email=${email}`);
        })}
      >
        <IdentifierInput
          name="email"
          label="Enter Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
          value={emailValue}
        />

        <button
          type="submit"
          className={`h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}
