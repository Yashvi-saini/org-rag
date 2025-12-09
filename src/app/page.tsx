export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-auto items-center justify-center gap-6 p-10 bg-gray-800">

      <h1 className="text-3xl font-semibold">Dummy landing page</h1>
      <p className="text-black">for testing the auth pages</p>

      <div className="flex flex-col gap-3 text-blue-600 underline text-lg">

        <a href="/login">Login</a>
        <a href="/signup">SignUp</a>
        <a href="/forgot-password">Forgot Password</a>
        <a href="/reset-password">Reset Password</a>
        <a href="/verify">Verify Email</a>

      </div>
    </div>
  );
}
