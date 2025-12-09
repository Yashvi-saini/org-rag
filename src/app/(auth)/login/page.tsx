import AuthLayout from "@/components/auth/layout/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {

  const images = [
    "/auth/login1.svg",
    "/auth/login2.svg",
    "/auth/login3.svg",
  ];

  return (
    <AuthLayout images={images} contentTop={63}>
      <LoginForm />
    </AuthLayout>
  );
}
