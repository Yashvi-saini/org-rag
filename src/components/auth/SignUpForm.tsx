"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, type SignupSchemaType } from "@/lib/authvalidations/signup.schema";
import IdentifierInput from "@/components/inputfield_ui/IdentifierInput";
import PasswordInput from "@/components/inputfield_ui/PasswordInput";


export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
  });

  const emailValue = watch("email");
  const usernameValue = watch("username");
  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Get Started Now!
        </h1>
        <p className={`text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Create your account here.
        </p>
      </div>

      {/* Form */}
      <form
        className="mt-[30px] flex flex-col gap-[30px] items-center w-full"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => {
          // Navigate to verify OTP for signup flow
          const email = encodeURIComponent(data.email);
          router.push(`/verify?mode=signup&email=${email}`);
        })}
      >
        {/* Identifier (Email) */}
        <IdentifierInput
          name="email"
          label="Enter Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
          value={emailValue}
        />

        {/* Identifier (Username) */}
        <IdentifierInput
          name="username"
          label="Enter Username"
          type="text"
          register={register("username")}
          error={errors.username?.message}
          value={usernameValue}
          maxLength={30}
        />

        <PasswordInput
          name="password"
          label="Enter Password"
          register={register("password")}
          error={errors.password?.message}
          value={watch("password")}
          maxLength={20}
        />

        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
          value={watch("confirmPassword")}
          maxLength={20}
        />

        {/* Terms */}
        <label className={`mt-[-4px] w-full flex items-center gap-[10px] text-[14px] font-[500] text-[#6B6B6B]`}>
          <input type="checkbox" className="accent-[#0B76FF] w-[16px] h-[16px]" {...register("agree")} />
          <span>
            I agree with the
            <a href="#" className="ml-1 text-[#0B76FF] underline-offset-2 hover:underline">
              Terms and Policy
            </a>
          </span>
        </label>
        {errors.agree?.message ? (
          <p className="-mt-6 w-full text-xs text-[#FF2121]">{errors.agree.message}</p>
        ) : null}

        {/* Submit */}
        <button
          type="submit"
          className={`mt-[2px] h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className={`mt-[6px] w-full flex items-center gap-3 text-[14px] text-[#6B6B6B]`}>
          <div className="h-px flex-1 bg-[#E6E6E6]" />
          <span>Or Sign Up With</span>
          <div className="h-px flex-1 bg-[#E6E6E6]" />
        </div>

        {/* Social buttons */}
        <div className="w-full flex items-center justify-between gap-[14px]">
          <button type="button" className={`h-[47px] w-[296px] rounded-[8px] border border-[#999999] bg-white flex items-center justify-center gap-2 text-[14px] font-[500] text-[#737373]`}>
            <Image src="/google.svg" alt="Google" width={24} height={24} />
            <span>Sign Up With Google</span>
          </button>

          <button type="button" className={`h-[47px] w-[296px] rounded-[8px] border border-[#999999] bg-white flex items-center justify-center gap-2 text-[14px] font-[500] text-[#737373]`}>
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            <span>Sign Up With Github</span>
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className={`mt-[30px] text-center text-[18px] font-[500] text-[#000]`}>
        Already have an account?
        <a href="/login" className="ml-1 text-[#0B76FF] font-[700] hover:underline">
          Log In
        </a>
      </p>
    </div>
  );
}
