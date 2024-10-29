"use client";

import PopularContent from "@/components/popularContent";
import { Product } from "@/types-db";
import { useParams } from "next/navigation";

interface suggestedListProps {
  products: Product[];
}

const SuggestedList = ({ products }: suggestedListProps) => {
  const { productId } = useParams();
  return (
    <>
      <h2 className="text-3xl text-neutral-600 font-semibold">
        Related Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-20 md:gap-x-4 md:gap-y-24 my-6 py-12">
        {products
          .filter((item) => item.id !== productId)
          .map((product) => (
            <PopularContent key={product.id} data={product} />
          ))}
      </div>
    </>
  );
};

export default SuggestedList;
