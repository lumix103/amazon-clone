import Link from "next/link";
import {
  ChevronRight,
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/product-card";

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const product = {
    id: Number.parseInt(params.id),
    title: `Product ${params.id} - Premium Quality Item with Amazing Features`,
    price: 29.99 + Number.parseInt(params.id) * 10,
    rating: 4.5,
    reviewCount: 120 + Number.parseInt(params.id) * 10,
    description:
      "This premium product offers exceptional quality and performance. It features a sleek design, durable construction, and versatile functionality that makes it perfect for everyday use. Enjoy the convenience and reliability that comes with this must-have item.",
    features: [
      "High-quality materials for durability",
      "Ergonomic design for comfort",
      "Energy-efficient operation",
      "Easy to clean and maintain",
      "Compact size for convenient storage",
    ],
    imageSrc: `/placeholder.svg?height=400&width=400&text=Product ${params.id}`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - simplified version */}
      <header className="bg-[#131921] text-white p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link href="/" className="font-bold text-xl">
            amazon<span className="text-orange-400">.clone</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-4">
          <Link
            href="/"
            className="text-[#007185] hover:text-red-600 hover:underline"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <Link
            href="/"
            className="text-[#007185] hover:text-red-600 hover:underline"
          >
            Category
          </Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <span className="text-gray-500">Product {params.id}</span>
        </div>

        <Link
          href="/"
          className="flex items-center text-[#007185] hover:text-red-600 hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to results
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-md flex items-center justify-center">
            <img
              src={product.imageSrc || "/placeholder.svg"}
              alt={product.title}
              className="max-w-full max-h-[400px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-xl md:text-2xl font-medium mb-2">
              {product.title}
            </h1>

            <Link href="#reviews" className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="text-sm text-[#007185]">
                {product.reviewCount} ratings
              </span>
            </Link>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="mb-1">
                <span className="text-sm">Price: </span>
                <span className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-gray-700">
                & <span className="text-[#007185]">Free Returns</span>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="font-bold mb-2">About this item</h2>
              <p className="text-sm mb-3">{product.description}</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buy Box */}
          <div className="bg-white p-4 rounded-md border border-gray-200 h-fit">
            <div className="text-xl font-bold mb-2">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-700 mb-2">
              & <span className="text-[#007185]">Free Returns</span>
            </div>

            <div className="text-sm mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Truck className="h-4 w-4 text-[#007185]" />
                <div>
                  <span className="font-bold">FREE delivery </span>
                  <span className="font-bold">Tomorrow</span>
                </div>
              </div>
              <div className="text-[#007185] ml-6">
                Order within 4 hrs 32 mins
              </div>
            </div>

            <div className="text-lg font-medium text-green-600 mb-4">
              In Stock
            </div>

            <div className="mb-4">
              <Select defaultValue="1">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Quantity: 1" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      Quantity: {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 mb-4">
              <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black">
                Add to Cart
              </Button>
              <Button className="w-full bg-[#ffa41c] hover:bg-[#fa8900] text-black">
                Buy Now
              </Button>
            </div>

            <div className="text-sm">
              <div className="flex items-start gap-2 mb-2">
                <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[#007185]">Secure transaction</span>
                </div>
              </div>

              <div className="grid grid-cols-3 text-sm mb-2">
                <div className="text-gray-500">Ships from</div>
                <div className="col-span-2">Amazon.com</div>

                <div className="text-gray-500">Sold by</div>
                <div className="col-span-2">Amazon.com</div>

                <div className="text-gray-500">Returns</div>
                <div className="col-span-2 text-[#007185]">
                  Eligible for Return, Refund or Replacement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Customers who viewed this item also viewed
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <ProductCard
                key={i}
                id={i === Number.parseInt(params.id) ? i + 5 : i}
                title={`Related Product ${i}`}
                price={19.99 + i * 10}
                rating={4.3}
                reviewCount={85 + i * 15}
                imageSrc={`/placeholder.svg?height=200&width=200&text=Related ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div id="reviews">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="bg-white p-4 rounded-md border border-gray-200 mb-4">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="font-medium">{product.rating} out of 5</span>
            </div>

            <div className="text-sm mb-4">
              {product.reviewCount} global ratings
            </div>

            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2 mb-1">
                <div className="text-sm w-12">{star} star</div>
                <div className="flex-1 bg-gray-200 h-6 rounded-sm overflow-hidden">
                  <div
                    className="bg-[#ffa41c] h-full"
                    style={{
                      width: `${
                        star === 5
                          ? 70
                          : star === 4
                          ? 20
                          : star === 3
                          ? 5
                          : star === 2
                          ? 3
                          : 2
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="text-sm w-12 text-[#007185]">
                  {star === 5
                    ? 70
                    : star === 4
                    ? 20
                    : star === 3
                    ? 5
                    : star === 2
                    ? 3
                    : 2}
                  %
                </div>
              </div>
            ))}
          </div>

          {/* Sample Reviews */}
          <div className="space-y-4">
            {[
              {
                name: "J. Smith",
                rating: 5,
                title: "Excellent product, highly recommend!",
                date: "Reviewed in the US on June 15, 2023",
              },
              {
                name: "A. Johnson",
                rating: 4,
                title: "Good value for money",
                date: "Reviewed in the US on May 22, 2023",
              },
              {
                name: "T. Williams",
                rating: 5,
                title: "Exactly what I needed",
                date: "Reviewed in the US on April 10, 2023",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-medium">{review.name}</div>
                </div>

                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                  <span className="font-medium ml-1">{review.title}</span>
                </div>

                <div className="text-xs text-gray-500 mb-2">{review.date}</div>

                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
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
