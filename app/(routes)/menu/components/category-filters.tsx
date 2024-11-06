"use client";

import Box from "@/components/Box";
import { cn } from "@/lib/utils";
import { Categories } from "@/types-db";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryFiltersProps {
  categories: Categories[];
}

const CategoryFilters = ({ categories }: CategoryFiltersProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    if (currentParams.category == category) {
      delete currentParams.category;
    } else {
      currentParams.category = category;
    }

    const href = qs.stringifyUrl({
      url: "/menu",
      query: currentParams,
    });
    router.push(href);
  };

  return (
    <Box className="flex-col gap2  pb-4 cursor-pointer">
      <h2 className="text-xl font-semibold text-neutral-700">Category</h2>
      <Box className="flex-col gap-2 mt-2">
        {categories.map((category) => (
          <div
            onClick={() => handleClick(category.name)}
            key={category.id}
            className={cn(
              "text-sm font-semibold text-neutral-500 flex items-center gap-2",
              category.name === searchParams.get("category") && "text-blue-500"
            )}
          >
            {category.name}
            {category.name === searchParams.get("category") && (
              <Check className="w-4 h-4 text-blue-600" />
            )}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilters;
