import AuthLayout from "@/components/auth/layout/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  const images = [
    "/auth/Reset.svg",
    
  ];

  return (
    <AuthLayout images={images} contentTop={124}>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
