import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  ArrowLeft,
  Package,
  User,
  CreditCard,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import { SignOutButton } from "@clerk/nextjs";

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Replace the existing header with NavBar */}
      <NavBar />

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <Link
          href="/"
          className="flex items-center text-[#007185] hover:text-red-600 hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to shopping
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold">Your Account</h1>
          <p>Hello, {user.firstName || user.emailAddresses[0].emailAddress}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/orders"
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Package className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Your Orders</h2>
                <p className="text-sm text-gray-600">
                  Track, return, or buy things again
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/security"
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <User className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Login & Security</h2>
                <p className="text-sm text-gray-600">
                  Edit login, name, and mobile number
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/payments"
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <CreditCard className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Your Payments</h2>
                <p className="text-sm text-gray-600">
                  Manage payment methods and settings
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/wishlist"
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Heart className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Your Lists</h2>
                <p className="text-sm text-gray-600">
                  View and manage your wishlists
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/settings"
            className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <Settings className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Your Preferences</h2>
                <p className="text-sm text-gray-600">
                  Manage your preferences and settings
                </p>
              </div>
            </div>
          </Link>

          <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <LogOut className="h-10 w-10 text-[#232f3e]" />
              <div>
                <h2 className="font-bold text-lg">Sign Out</h2>
                <p className="text-sm text-gray-600">
                  Securely sign out of your account
                </p>
                <SignOutButton>
                  <Button variant="outline" className="text-sm border-gray-300">
                    Sign Out
                  </Button>
                </SignOutButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - simplified version */}
      <footer className="bg-[#232f3e] text-white mt-8 p-6 text-center">
        <Link href="/" className="font-bold text-xl">
          amazon<span className="text-orange-400">.clone</span>
        </Link>
        <p className="text-sm mt-2">
          © 2025 Amazon Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
