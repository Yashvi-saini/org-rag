"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold  text-[#000000]">
              Welcome to Doc Clustor
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#556575]">
              A clean, minimal place for all your essentials. Choose your path below to get started.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-2xl"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-2xl"
              >
                Log In
              </Link>
            </div>

          </div>
        </div>
     
    </main>
  );
}
