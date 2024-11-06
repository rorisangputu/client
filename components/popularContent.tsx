"use client";

import { Product } from "@/types-db";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCart from "@/hooks/use-carts";

interface PopularContentProps {
  data: Product;
}

const PopularContent = ({ data }: PopularContentProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const cart = useCart();

  const addToCart = (data: Product) => {
    cart.addItem({ ...data, qty: 1 });
  };

  return (
    <Card className="w-full max-h-[380px] rounded-lg shadow-md flex flex-col items-center bg-white p-4 relative">
      {/* Image Section */}
      <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4">
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={data.images[0].url}
            alt={data.name}
            layout="fill"
            objectFit="contain"
            className="p-2"
          />
        </div>
      </div>

      {/* Product Details */}
      <Link href={`/menu/${data.id}`} className="text-center w-full">
        <CardTitle className="text-lg font-semibold text-neutral-800 mb-1 truncate">
          {data.name}
        </CardTitle>
      </Link>

      <div className="flex flex-wrap gap-2 items-start justify-start text-xs text-gray-600 mt-2">
        {data.cuisine && (
          <span className="bg-emerald-100 px-2 py-1 rounded-lg">
            {data.cuisine}
          </span>
        )}
        {data.category && (
          <span className="bg-blue-100 px-2 py-1 rounded-lg">
            {data.category}
          </span>
        )}
        {data.kitchen && (
          <span className="bg-red-100 px-2 py-1 rounded-lg">
            {data.kitchen}
          </span>
        )}
        {data.size && (
          <span className="bg-yellow-100 px-2 py-1 rounded-lg">
            {data.size}
          </span>
        )}
      </div>

      <CardDescription className=" text-gray-500 text-sm mt-3 px-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum
        qui assumenda dolores eligendi.
      </CardDescription>
      <div className="flex gap-2 py-2">
        {/* Add to Cart and Wishlist Buttons */}
        <Button
          onClick={() => addToCart(data)}
          className="p-1 rounded-full bg-white shadow-sm"
        >
          <ShoppingCart className="h-5 w-5 text-gray-700" />
        </Button>
        <Button
          onClick={() => setIsLiked(!isLiked)}
          className="p-1 rounded-full bg-white shadow-sm"
          variant="ghost"
        >
          {isLiked ? (
            <Heart className="w-5 h-5 text-red-500" />
          ) : (
            <HeartCrack className="w-5 h-5 text-gray-700" />
          )}
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex items-center justify-between px-4">
        <Button variant="outline" className="text-lg font-medium text-gray-700">
          R{data.price}
        </Button>
        <Link href={`/menu/${data.id}`} className="w-1/2">
          <Button className="bg-blue-600 text-white w-full rounded-lg">
            Buy Now
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PopularContent;
