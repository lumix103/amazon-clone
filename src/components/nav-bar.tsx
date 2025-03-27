"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";

export default function NavBar() {
  const { isSignedIn, user } = useUser();

  return (
    <>
      {/* Header */}
      <header className="bg-[#131921] text-white p-2 md:p-4">
        <div className="container mx-auto flex items-center gap-2 md:gap-4">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl md:text-2xl">amazon</span>
            <span className="text-orange-400 hidden md:inline">.clone</span>
          </Link>

          <div className="flex-1 mx-2 md:mx-4">
            <div className="relative flex">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-l-md rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white text-black"
              />
              <Button className="rounded-l-none bg-[#febd69] hover:bg-[#f3a847] text-black">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href={isSignedIn ? "/account" : "/sign-in"}
              className="flex flex-col text-xs"
            >
              <span className="text-gray-300">
                {isSignedIn
                  ? `Hello, ${user?.firstName || "User"}`
                  : "Hello, Sign in"}
              </span>
              <span className="font-bold">Account & Lists</span>
            </Link>

            <Link href="/orders" className="flex flex-col text-xs">
              <span className="text-gray-300">Returns</span>
              <span className="font-bold">& Orders</span>
            </Link>

            <Link href="/cart" className="flex items-end">
              <div className="relative">
                <ShoppingCart className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 bg-[#febd69] text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </div>
              <span className="font-bold">Cart</span>
            </Link>
          </div>

          <div className="flex md:hidden gap-2">
            <Link href={isSignedIn ? "/account" : "/sign-in"}>
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-[#febd69] text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#232f3e] text-white p-2">
        <div className="container mx-auto flex items-center gap-4 overflow-x-auto text-sm">
          <button className="flex items-center gap-1">
            <Menu className="h-4 w-4" />
            All
          </button>
          <Link href="#" className="whitespace-nowrap hover:underline">
            Today's Deals
          </Link>
          <Link href="#" className="whitespace-nowrap hover:underline">
            Customer Service
          </Link>
          <Link href="#" className="whitespace-nowrap hover:underline">
            Registry
          </Link>
          <Link href="#" className="whitespace-nowrap hover:underline">
            Gift Cards
          </Link>
          <Link href="#" className="whitespace-nowrap hover:underline">
            Sell
          </Link>
        </div>
      </nav>
    </>
  );
}
