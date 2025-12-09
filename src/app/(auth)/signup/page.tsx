import AuthLayout from "@/components/auth/layout/AuthLayout";
import SignUpFormForm from "@/components/auth/SignUpForm";

export default function RegisterPage() {

  const images = [
    "/auth/signup1.svg",
    "/auth/signup2.svg",
    "/auth/signup3.svg",
  ];

  return (
    <AuthLayout images={images} contentTop={33}>
      <SignUpFormForm />
    </AuthLayout>
  );
}
