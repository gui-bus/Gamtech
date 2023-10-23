"use client";
import { Product } from "@prisma/client";
import ProductItem from "../common/productItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { useRef } from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const scrollAmount = e.deltaY;
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleHover = () => {
    window.addEventListener("wheel", preventScroll, { passive: false });
  };

  const handleHoverExit = () => {
    window.removeEventListener("wheel", preventScroll);
  };

  const preventScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex w-full gap-4 overflow-x-auto px-5 scrollbar-track-white scrollbar-thumb-[#727272] dark:scrollbar-thumb-[#22222a] md:scrollbar-thin"
      onWheel={handleWheelScroll}
      ref={containerRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {products.map((product) => (
        <div key={product.id} className="mb-8">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
