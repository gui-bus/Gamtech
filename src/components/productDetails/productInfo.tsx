"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { FaTruckFast } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { status, data } = useSession();

  const { AddProductsToCart } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    AddProductsToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col bg-white/50  p-5 dark:bg-neutral-800 lg:rounded-bl-3xl">
      <h2 className="text-center text-lg">{product.name}</h2>

      <div className="my-2 flex items-center justify-center gap-2">
        {product.discountPercentage > 0 ? (
          <>
            <Chip
              variant="solid"
              size="sm"
              startContent={<BsArrowDownShort size={20} />}
            >
              <p className="text-tiny">{product.discountPercentage}%</p>
            </Chip>
            <p className="text-xl font-extrabold text-[#1267dc]">
              {product.totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-sm line-through opacity-75">
              {Number(product.basePrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </>
        ) : (
          <p className="text-xl font-extrabold text-[#1267dc]">
            {Number(product.basePrice).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        )}
      </div>

      <div className="my-4 flex w-full flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            startContent={<BiSolidChevronLeft size={20} />}
            size="sm"
            onClick={handleDecreaseQuantity}
          />
          <span className="px-4">{quantity}</span>
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            startContent={<BiSolidChevronRight size={20} />}
            size="sm"
            onClick={handleIncreaseQuantity}
          />
        </div>

        <div className="w-full max-w-xl">
          {status === "authenticated" && data?.user ? (
            <Button
              endContent={<HiShoppingCart size={20} />}
              variant="shadow"
              color="primary"
              className="w-full font-bold"
              onClick={handleAddToCartClick}
            >
              Adicionar ao carrinho
            </Button>
          ) : (
            <Tooltip
              content={
                <p className="cursor-default text-center font-bold">
                  Oops! Para adicionar este item ao carrinho é necessário fazer
                  login.
                </p>
              }
              delay={0}
              closeDelay={0}
              color="primary"
              placement="bottom"
              radius="sm"
              className="w-full max-w-xs"
            >
              <div className="w-full cursor-not-allowed">
                <Button
                  endContent={<HiShoppingCart size={20} />}
                  variant="shadow"
                  color="primary"
                  className="w-full font-bold"
                  isDisabled
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-lg bg-white/50 px-5 py-3 text-xs dark:bg-neutral-900 md:text-sm">
          <div className="flex items-center justify-center gap-2">
            <FaTruckFast size={40} />
            <div>
              <p>
                Entrega via <span className="font-bold">Gampack &reg;</span>
              </p>
              <p className="font-bold text-primary">
                Envio para <span className="font-bold">todo o Brasil</span>
              </p>
            </div>
          </div>

          <p className="font-bold">Frete Grátis</p>
        </div>

        <div className="flex flex-col gap-3">
          <Accordion
            variant="shadow"
            className="bg-white/50 dark:bg-neutral-900"
          >
            <AccordionItem
              key="1"
              aria-label="Sobre o produto"
              title={<h1 className="ml-2 font-semibold">Sobre o produto</h1>}
              subtitle={
                <p className="ml-2 text-tiny opacity-80">
                  Clique para ver mais detalhes
                </p>
              }
            >
              <p className="px-2 pb-4 text-justify opacity-80">
                {product.description.replace(/\\n/g, "\n")}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
