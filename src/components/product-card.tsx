"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: number
  title: string
  price: number
  rating: number
  reviewCount: number
  imageSrc: string
}

export default function ProductCard({ id, title, price, rating, reviewCount, imageSrc }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow p-3 relative group">
      <button
        className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
      </button>

      <Link href={`/product/${id}`}>
        <div className="aspect-square bg-gray-50 mb-3 flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
          />
        </div>

        <h3 className="font-medium text-sm mb-1 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-3 w-3 ${star <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
          <span className="text-xs text-[#007185]">{reviewCount}</span>
        </div>

        <div className="mb-2">
          <span className="text-sm">$</span>
          <span className="font-bold">{price.toFixed(2)}</span>
        </div>
      </Link>

      <Button className="w-full bg-[#febd69] hover:bg-[#f3a847] text-black text-sm" size="sm">
        Add to Cart
      </Button>

      <div className="text-xs text-[#007185] mt-2">
        Get it by <span className="font-medium">Tomorrow, 8 PM</span>
      </div>
    </div>
  )
}

