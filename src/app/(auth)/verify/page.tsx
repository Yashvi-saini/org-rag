import React, { Suspense } from "react";
import AuthLayout from "@/components/auth/layout/AuthLayout";
import VerifyForm from "@/components/auth/VerifyForm";

export default function VerifyPage() {
  const images = [
    "/auth/verify.svg",
    
  ];

  return (
    <AuthLayout images={images} contentTop={123}>
      <Suspense fallback={<div className="w-full text-center">Loading...</div>}>
        <VerifyForm />
      </Suspense>
    </AuthLayout>
  );
}
