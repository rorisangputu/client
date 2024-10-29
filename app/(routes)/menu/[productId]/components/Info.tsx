"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/types-db";
import {
  CookingPot,
  ShoppingCart,
  Soup,
  SquareActivity,
  Utensils,
} from "lucide-react";
import { useState } from "react";

interface InfoProps {
  product: Product;
}

const Info = ({ product }: InfoProps) => {
  //Qty state
  const [qty, setQty] = useState(1);

  //Changes qty state
  const handleQty = (num: number) => {
    return setQty(num);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-base text-left text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, quia velit! Architecto distinctio sed fugit in
          accusantium eligendi cum doloremque! Enim asperiores sunt, tempora
          maiores pariatur mollitia quisquam esse. Nulla.
        </p>
      </div>
      <div className="w-full flex items-center justify-start gap-2 flex-wrap mt-8">
        {product.cuisine && (
          <div className="rounded-md bg-emerald-500/10 flex items-center gap-2 px-2 py-[2px] text-[12px] md:text-[16px] font-semibold capitalize">
            <CookingPot className="w-4 h-4" />
            {product.cuisine}
          </div>
        )}
        {product.category && (
          <div className="rounded-md bg-blue-500/10 flex items-center gap-2 px-2 py-[2px] text-[12px] md:text-[16px] font-semibold capitalize">
            <Soup className="w-4 h-4" />
            {product.category}
          </div>
        )}
        {product.kitchen && (
          <div className="rounded-md bg-red-500/10 flex items-center gap-2 px-2 py-[2px] text-[12px] md:text-[16px] font-semibold capitalize">
            <Utensils className="w-4 h-4" />
            {product.kitchen}
          </div>
        )}
        {product.size && (
          <div className="rounded-md bg-yellow-500/10 flex items-center gap-2 px-2 py-[2px] text-[12px] md:text-[16px] font-semibold capitalize">
            <SquareActivity className="w-4 h-4" />
            {product.size}
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-4 my-12">
        <div className="col-span-1 space-y-8">
          <p className="text-lg font-semibold text-neutral-700">Price</p>
          <p className="text-lg font-semibold text-neutral-700">Serves</p>
        </div>
        <div className="col-span-3 space-y-8">
          <p className="font-bold text-black text-xl">R{product.price}</p>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                onClick={() => handleQty(num)}
                key={num}
                className={cn(
                  "w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero",
                  qty === num
                    ? "bg-hero text-white shadow-md"
                    : "bg-transparent shadow-none"
                )}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button className="w-full py-6 text-xl font-bold hover:bg-hero hover:text-white flex items-center justify-center gap-3">
        Add to cart <ShoppingCart className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Info;