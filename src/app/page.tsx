import Link from "next/link";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Replace the existing header and navigation with NavBar */}
      <NavBar />

      {/* Hero Banner */}
      <div className="relative">
        <div className="h-[300px] bg-gradient-to-b from-[#232f3e] to-gray-100 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to Amazon Clone
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Shop millions of products with fast delivery
            </p>
            <Button className="bg-[#febd69] hover:bg-[#f3a847] text-black text-lg px-8 py-6">
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 md:p-6">
        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["Electronics", "Home & Kitchen", "Books", "Fashion"].map(
            (category) => (
              <div key={category} className="bg-white p-4 rounded-md shadow-md">
                <h2 className="font-bold text-lg mb-2">{category}</h2>
                <div className="aspect-square bg-gray-100 mb-2 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=${category}`}
                    alt={category}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <Link
                  href="#"
                  className="text-[#007185] text-sm hover:underline hover:text-red-600"
                >
                  See more
                </Link>
              </div>
            )
          )}
        </div>

        {/* Product Listings */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Today's Deals</h2>
            <Link
              href="#"
              className="text-[#007185] hover:underline hover:text-red-600"
            >
              See all deals
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <ProductCard
                key={i}
                id={i}
                title={`Product ${i}`}
                price={19.99 + i * 10}
                rating={4.5}
                reviewCount={120 + i * 10}
                imageSrc={`/placeholder.svg?height=200&width=200&text=Product ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Recommended Products */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[6, 7, 8, 9, 10].map((i) => (
              <ProductCard
                key={i}
                id={i}
                title={`Recommended Product ${i}`}
                price={24.99 + i * 5}
                rating={4.2}
                reviewCount={85 + i * 15}
                imageSrc={`/placeholder.svg?height=200&width=200&text=Recommended ${i}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#232f3e] text-white mt-8">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="font-bold mb-2">Get to Know Us</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Make Money with Us</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Sell products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Become an Affiliate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Advertise Your Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Payment Products</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Business Card
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop with Points
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Reload Your Balance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Let Us Help You</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Returns & Replacements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <Link href="/" className="font-bold text-xl">
              amazon<span className="text-orange-400">.clone</span>
            </Link>
            <p className="text-sm mt-2">
              © 2025 Amazon Clone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
