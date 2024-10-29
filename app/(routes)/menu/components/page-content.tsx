/* eslint-disable react/jsx-key */
"use client";

import Box from "@/components/Box";
import PopularContent from "@/components/popularContent";
import { Product } from "@/types-db";
import { ChevronRight, Home, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface PageContentProps {
  products: Product[];
}

const PageContent = ({ products }: PageContentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = Object.fromEntries(searchParams.entries());

  const handleClick = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParams = { ...currentParams };
      delete newParams[param];
      const href = qs.stringifyUrl({
        url: "/menu",
        query: newParams,
      });
      router.push(href);
    }
  };
  return (
    <>
      <Box className="pt-4 pb-24 flex-col items-start">
        {/* crumbs */}
        <Box className="text-neutral-700 justify-start items-start">
          <Link href={"/"} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
          <Link href={"/menu"} className="flex items-center gap-2">
            Products
          </Link>
          {searchParams.get("category") && (
            <>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
              <Link href="/menu" className="flex items-center gap-2">
                {searchParams.get("category")}
              </Link>
            </>
          )}
        </Box>
        <Box className="mt-8 flex-col items-start">
          {/* category name */}
          {searchParams.get("category") && (
            <h2>{searchParams.get("category")}</h2>
          )}

          {/* Category tag */}
          <Box className="gap-3 my-4 justify-start items-start">
            {currentParams &&
              Object.entries(currentParams).map(([key, value]) => (
                <div
                  onClick={() => handleClick(key)}
                  className="px-4 py-1 cursor-pointer hover:shadow-md rounded-md bg-emerald-500/10 flex items-center gap-1 text-neutral-600"
                >
                  {value}
                  <X className="h-4 w-4" />
                </div>
              ))}
          </Box>
        </Box>
      </Box>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-full gap-4 gap-y-24">
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <PopularContent data={product} key={product.id} />
            ))}
          </>
        ) : (
          <Box className="items-center justify-center py-12 text-muted-foreground font-bold col-span-10 text-xl">
            <p>No products available</p>
          </Box>
        )}
      </div>
    </>
  );
};

export default PageContent;
