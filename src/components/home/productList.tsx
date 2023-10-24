"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Product } from "@prisma/client";
import ProductItem from "../common/productItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full select-none px-2">
      <Swiper
        className="my-swiper-1"
        slidesPerView={"auto"}
        navigation={{
          enabled: true,
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
      >
        <div className="swiper-button-prev">
          <Button
            isIconOnly
            variant="shadow"
            className="rounded-full"
            startContent={<FaCircleChevronLeft />}
          />
        </div>
        {products.map((product) => (
          <SwiperSlide style={{ width: "fit-content" }} key={product.id}>
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <Button
            isIconOnly
            variant="shadow"
            className="rounded-full"
            startContent={<FaCircleChevronRight />}
          />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductList;
