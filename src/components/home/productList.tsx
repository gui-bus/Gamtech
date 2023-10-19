import { Product } from "@prisma/client";
import ProductItem from "../common/productItem";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    //  scrollbar-thin scrollbar-thumb-[#22222a] scrollbar-track-white
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          product={computeProductTotalPrice(product)}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
