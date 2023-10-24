import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";
import CartItem from "../cart/cartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Button, Link } from "@nextui-org/react";
import { TbCategory2 } from "react-icons/tb";
import { Separator } from "../ui/separator";
import { AiOutlineSafety } from "react-icons/ai";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  return (
    <div className="relative">
      <div className="my-5 flex flex-col gap-2 overflow-hidden">
        <div
          className={`h-80 ${
            products.length > 0 && "overflow-y-scroll"
          } px-2 scrollbar-track-white scrollbar-thumb-[#727272] dark:scrollbar-thumb-[#22222a] md:scrollbar-thin`}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))
          ) : (
            <div className="my-5 flex flex-col items-center justify-center text-center">
              <h4 className="font-semibold">
                Você ainda não possui nenhum produto no carrinho!
              </h4>
              <p>Que tal dar uma olhada nas opções?</p>

              <Link href="/categories" className="mx-auto mt-4 w-full">
                <Button
                  endContent={<TbCategory2 size={20} />}
                  className="w-full font-semibold"
                  variant="shadow"
                  color="primary"
                >
                  Ver catálogo de produtos
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <p className="font-semibold">Subtotal</p>
            <p>
              {subtotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="font-semibold">Descontos</p>
            <p className="line-through opacity-80">
              {totalDiscount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="font-semibold">Frete</p>
            <p className="uppercase">Grátis</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-base">
            <p className="font-semibold">Total</p>
            <p className="font-bold text-gamtech">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

          <Button
            variant="shadow"
            color="primary"
            radius="sm"
            className="font-bold uppercase"
            endContent={<AiOutlineSafety size={24} />}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
