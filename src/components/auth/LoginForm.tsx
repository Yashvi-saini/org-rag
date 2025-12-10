"use client";

import Image from "next/image";
import React from "react";
import IdentifierInput from "@/components/inputfield_ui/IdentifierInput";
import PasswordInput from "@/components/inputfield_ui/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/authvalidations/login.schema";


type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { email: "", password: "" },
  });
  const emailValue = watch("email");

  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Welcome Back
        </h1>
        <p className={`text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Log In to your account
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full" noValidate autoComplete="off" onSubmit={handleSubmit(() => {})}>
        {/* Identifier (Email) with floating label */}
        <IdentifierInput
          name="email"
          label="Enter Email"
          type="email"
          register={register("email")}
          error={errors.email?.message}
          value={emailValue}
        />

        {/* Password */}
        <PasswordInput
          name="password"
          label="Enter Password"
          register={register("password")}
          error={errors.password?.message}
          value={watch("password")}
          maxLength={20}
        />

        {/* Remember + Forgot */}
        <div className="w-full flex items-center justify-between">
          <label className={`flex items-center gap-[10px] text-[14px] font-[500] text-[#6B6B6B]`}>
            <input type="checkbox" className="accent-[#0B76FF] w-[16px] h-[16px]" />
            Remember Me
          </label>
          <a href="/forgot-password" className={`text-[14px] font-[500] text-[#6B6B6B] hover:underline`}>Forgot Password ?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Log In
        </button>

        {/* Divider */}
        <div className={`w-full flex items-center gap-3 text-[14px] text-[#6B6B6B]`}>
          <div className="h-px flex-1 bg-[#E6E6E6]" />
          <span>Or Log in With</span>
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
        Create a New Account?
        <a href="/signup" className="ml-1 text-[#0B76FF] font-[700] hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}
