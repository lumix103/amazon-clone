"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CartPage() {
  // This would normally come from a state management solution
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product 1 - Premium Quality Item with Amazing Features",
      price: 29.99,
      quantity: 1,
      imageSrc: "/placeholder.svg?height=150&width=150&text=Product 1",
    },
    {
      id: 2,
      title: "Product 2 - High Performance Device with Extended Battery Life",
      price: 49.99,
      quantity: 2,
      imageSrc: "/placeholder.svg?height=150&width=150&text=Product 2",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl font-medium">Shopping Cart</h1>
                <span className="text-sm text-gray-500">Price</span>
              </div>

              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-6 border-b border-gray-200"
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.imageSrc || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <div className="text-sm text-green-600 mb-2">
                          In Stock
                        </div>
                        <div className="text-sm mb-2">
                          Eligible for FREE Shipping
                        </div>

                        <div className="flex items-center gap-2">
                          <Select
                            value={item.quantity.toString()}
                            onValueChange={(value) =>
                              updateQuantity(item.id, Number.parseInt(value))
                            }
                          >
                            <SelectTrigger className="w-24 h-8">
                              <SelectValue placeholder="Qty: 1" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  Qty: {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <div className="h-4 border-r border-gray-300"></div>

                          <button
                            className="text-sm text-[#007185] hover:text-red-600 hover:underline flex items-center gap-1"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="text-lg font-medium">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <h2 className="text-xl font-medium mb-2">
                    Your Amazon Cart is empty
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Your shopping cart is waiting. Give it purpose – fill it
                    with groceries, clothing, household supplies, electronics,
                    and more.
                  </p>
                  <Button
                    asChild
                    className="bg-[#ffd814] hover:bg-[#f7ca00] text-black"
                  >
                    <Link href="/">Continue Shopping</Link>
                  </Button>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="text-right text-lg pt-4">
                  Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):{" "}
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Checkout */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-md shadow-sm p-4">
                <div className="text-green-600 mb-2">
                  Your order qualifies for FREE Shipping.
                </div>

                <div className="text-lg mb-4">
                  Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"}):{" "}
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="gift"
                    className="rounded text-[#007185]"
                  />
                  <label htmlFor="gift" className="text-sm">
                    This order contains a gift
                  </label>
                </div>

                <Button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-black mb-2">
                  Proceed to checkout
                </Button>
              </div>
            </div>
          )}
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
