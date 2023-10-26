import { computeProductTotalPrice } from "@/helpers/product";
import { OrderProduct, Prisma } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 ">
        <div className="flex w-full items-center gap-3 ">
          <div className="flex aspect-square h-auto md:w-40 md:h-40 items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800">
            <Image
              src={orderProduct.product.imageUrls[0]}
              width={0}
              height={0}
              alt={orderProduct.product.name}
              sizes="100vw"
              className="h-auto max-h-[95%] w-auto max-w-[95%] p-3"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex w-2/3 flex-col">
            <h2 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
              {orderProduct.product.name}
            </h2>

            <div className="flex items-center gap-2">
              {orderProduct.product.discountPercentage > 0 ? (
                <div className="flex items-center gap-1">
                  <p className="text-sm font-extrabold text-[#1267dc]">
                    {productWithTotalPrice.totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="text-xs line-through opacity-75">
                    {Number(orderProduct.product.basePrice).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}
                  </p>
                </div>
              ) : (
                <p className="text-sm font-extrabold text-[#1267dc]">
                  {Number(orderProduct.product.basePrice).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    },
                  )}
                </p>
              )}
            </div>

            <p className="text-sm">Quantidade: {orderProduct.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
