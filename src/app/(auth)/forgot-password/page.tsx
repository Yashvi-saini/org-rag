import AuthLayout from "@/components/auth/layout/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const images = [
    "/auth/Forgot.svg",
   
  ];

  return (
    <AuthLayout images={images} contentTop={203}>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}

