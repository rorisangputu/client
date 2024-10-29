import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-single-product";
import Box from "@/components/Box";
import Container from "@/components/container";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import Gallery from "./components/gallery/Gallery";
import Info from "./components/Info";
import SuggestedList from "./components/suggested-list";

interface ProdPageProps {
  params: {
    productId: string;
  };
}

const productPage = async ({ params }: ProdPageProps) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ category: product?.category });
  //console.log(product);
  return (
    <Container className="bg-white rounded-lg my-4 px-4 xl:px-0">
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

        <ChevronRight className="w-5 h-5 text-muted-foreground" />
        <Link href="/menu" className="flex items-center gap-2">
          {product.name}
        </Link>
      </Box>
      <div className="px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Gallery section */}
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            {/* Info section */}
            <Info product={product} />
          </div>
        </div>
        <div>
          <SuggestedList products={suggestedProducts} />
        </div>
      </div>
    </Container>
  );
};

export default productPage;
