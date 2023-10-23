import CategoryProductItem from "@/components/categories/categoryProductItem";
import ProductList from "@/components/home/productList";
import ProductImages from "@/components/productDetails/productImages";
import ProductInfo from "@/components/productDetails/productInfo";
import { Separator } from "@/components/ui/separator";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import React from "react";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const ProductDetails = async ({ params: { slug } }: ProductDetailsProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="pb-5">
      <div className="flex w-full flex-col pb-2 lg:flex-row">
        <div className="w-full">
          <ProductImages product={product} />
        </div>

        <div className="w-full">
          <ProductInfo product={computeProductTotalPrice(product)} />
        </div>
      </div>

      <Separator className="mx-auto my-4 w-full max-w-[95vw]" />

      <div className="lg:hidden">
        <ProductList products={product.category.products} />
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-4 px-5 pb-8 pt-3 md:grid-cols-5">
          {product.category.products.map((product) => (
            <CategoryProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
