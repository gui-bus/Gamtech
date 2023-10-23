import ProductImages from "@/components/productDetails/productImages";
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
  });

  if (!product) return null;

  return (
    <div className="pb-5">
      <div className="pb-2">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
      </div>

      <div className="px-5">
        <h1 className="text-sm font-medium text-center">{product?.name}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
