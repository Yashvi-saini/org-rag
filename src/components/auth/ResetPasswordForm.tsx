"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, type ResetPasswordSchemaType } from "@/lib/authvalidations/resetPassword.schema";
import PasswordInput from "@/components/inputfield_ui/PasswordInput";


export default function ResetPasswordForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { password: "", confirmPassword: "" },
  });

  return (
    <div className="w-full max-w-[610px] mx-auto">
      {/* Heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className={`text-[44px] leading-[52px] font-[700] text-[#000]`}>
          Reset Password
        </h1>
        <p className={`text-[24px] leading-[36px] font-[500] text-[#6B6B6B]`}>
          Set a new password
        </p>
      </div>

      {/* Form */}
      <form className="mt-[30px] flex flex-col gap-[30px] items-center w-full" noValidate autoComplete="off" onSubmit={handleSubmit(() => {})}>
        {/* New password */}
        <PasswordInput
          name="password"
          label="Enter Password"
          register={register("password")}
          error={errors.password?.message}
          value={watch("password")}
          maxLength={20}
        />

        {/* Confirm password */}
        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
          value={watch("confirmPassword")}
          maxLength={20}
        />

        {/* Submit */}
        <button
          type="submit"
          className={`h-[47px] w-full rounded-[6px] bg-[#0B76FF] text-white text-[18px] font-[700] hover:bg-[#0663d6] transition-colors`}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
