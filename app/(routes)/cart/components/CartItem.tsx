"use client";

import Box from "@/components/Box";
import useCart from "@/hooks/use-carts";
import { cn } from "@/lib/utils";
import { Product } from "@/types-db";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
  const [qty, setQty] = useState(item.qty ?? 1);
  const cart = useCart();

  //changes item qty
  const handleQty = (num: number) => {
    setQty(num);
    cart.updateItemQty(item.id, num);
  };

  return (
    <Box className="flex items-center justify-start gap-4 border border-gray-200 p-3 rounded-lg">
      <div className="aspect-square w-24 min-w-24 h-24 min-h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <Image
          alt={item.name}
          fill
          className="w-full hf object-contain"
          src={item.images[0].url}
        />
      </div>

      <div>
        <h2 className="w-full min-w-44 whitespace-nowrap truncate font-semibold text-2xl text-neutral-700">
          {item.name}
        </h2>
        <div className="w-full flex items-center justify-start gap-2 flex-wrap mt-2">
          {item.category && (
            <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
              {item.category}
            </div>
          )}
        </div>
      </div>
      <Box className="flex items-center justify-center h-full">
        <div className="flex items-center gap-3">
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
      </Box>
      <Box className="flex items-center justify-center h-full">
        <h2>R{item.price * item.qty}</h2>
      </Box>
      <div onClick={() => cart.removeItem(item.id)} className="w-auto m-auto">
        <Trash className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-red-600" />
      </div>
    </Box>
  );
};

export default CartItem;
