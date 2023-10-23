"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Accordion, AccordionItem, Button, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { FaTruckFast } from "react-icons/fa6";
import { Separator } from "../ui/separator";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "name" | "totalPrice"
  >;
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, name, totalPrice },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col bg-white/50  p-5 dark:bg-neutral-800 lg:rounded-bl-3xl">
      <h2 className="text-center text-lg">{name}</h2>

      <div className="my-2 flex items-center justify-center gap-2">
        {discountPercentage > 0 ? (
          <>
            <Chip
              variant="solid"
              size="sm"
              startContent={<BsArrowDownShort size={20} />}
            >
              <p className="text-tiny">{discountPercentage}%</p>
            </Chip>
            <p className="text-xl font-extrabold text-[#1267dc]">
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-sm line-through opacity-75">
              {Number(basePrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </>
        ) : (
          <p className="text-xl font-extrabold text-[#1267dc]">
            {Number(basePrice).toLocaleString("pt-BR", {
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
          <Button
            endContent={<HiShoppingCart size={20} />}
            variant="shadow"
            color="primary"
            className="w-full font-bold"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>

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


      <div className="mt-14 flex flex-col gap-3">
        <Accordion variant="shadow" className="bg-white/50 dark:bg-neutral-900">
          <AccordionItem
            key="1"
            aria-label="Sobre o produto"
            title={<h1 className="font-semibold ml-2">Sobre o produto</h1>}
            subtitle={
              <p className="text-tiny opacity-80 ml-2">
                Clique para ver mais detalhes
              </p>
            }
          >
            <p className="px-2 pb-4 text-justify opacity-80">
              {description.replace(/\\n/g, "\n")}
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
