"use client";

import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - simplified version */}
      <header className="bg-[#131921] text-white p-4">
        <div className="container mx-auto flex items-center justify-center">
          <Link href="/" className="font-bold text-xl">
            amazon<span className="text-orange-400">.clone</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 flex flex-col items-center">
        <Link
          href="/"
          className="self-start flex items-center text-[#007185] hover:text-red-600 hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>

        <div className="w-full max-w-md flex flex-col items-center">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold">Sign in to your account</h1>
          </div>

          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border border-gray-300 text-black",
                socialButtonsBlockButtonText: "font-normal",
                dividerLine: "bg-gray-300",
                dividerText: "text-gray-500",
                formFieldLabel: "text-sm font-medium",
                formFieldInput:
                  "border border-gray-300 rounded-md focus:ring-[#e77600] focus:border-[#e77600] focus:shadow-amazonFocus",
                formButtonPrimary:
                  "bg-[#f0c14b] hover:bg-[#e7b84f] border border-[#a88734] text-black font-normal rounded-md shadow-sm",
                footerActionLink:
                  "text-[#007185] hover:text-red-600 hover:underline",
                footer: "mt-4",
              },
            }}
          />

          <div className="mt-6 border-t border-gray-300 pt-6">
            <p className="text-sm text-center">New to Amazon Clone?</p>
            <Link
              href="/sign-up"
              className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-md text-sm text-center bg-gray-100 hover:bg-gray-200"
            >
              Create your Amazon Clone account
            </Link>
          </div>
        </div>
      </main>

      {/* Footer - simplified version */}
      <footer className="bg-[#232f3e] text-white mt-8 p-6 text-center">
        <p className="text-sm">© 2025 Amazon Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}
