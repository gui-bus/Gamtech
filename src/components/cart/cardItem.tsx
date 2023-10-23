import { CartProduct } from "@/providers/cart";
import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "@nextui-org/react";

import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { HiTrash } from "react-icons/hi";

interface CardItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CardItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex aspect-square h-32 w-32 items-center justify-center rounded-lg bg-white/50 dark:bg-neutral-800">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full p-3"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-ellipsis text-center text-xs">{product.name}</h2>

          <div className="flex items-center justify-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-base font-extrabold text-gamtech">
                  {product.totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p className="text-tiny line-through opacity-75">
                  {Number(product.basePrice).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </>
            ) : (
              <p className="text-xl font-extrabold text-gamtech">
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            startContent={<BiSolidChevronLeft size={20} />}
            size="sm"
          />
          <span className="px-4">{product.quantity}</span>
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            startContent={<BiSolidChevronRight size={20} />}
            size="sm"
          />
        </div>
      </div>

      <Button
        variant="flat"
        endContent={<HiTrash size={20} />}
        size="sm"
        className="mt-4"
      >
        Remover produto
      </Button>

      <Separator className="mb-2 mt-4" />
    </div>
  );
};

export default CartItem;
