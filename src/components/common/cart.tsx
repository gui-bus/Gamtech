import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";
import CartItem from "../cart/cartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Button, Link, Tooltip } from "@nextui-org/react";
import { TbCategory2 } from "react-icons/tb";
import { Separator } from "../ui/separator";
import { AiOutlineSafety } from "react-icons/ai";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { createOrder } from "@/actions/order";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);
  const { status, data } = useSession();

  const handleFinishPurchaseClick = async () => {
    if(!data?.user) {
      return
    }

    await createOrder(products, (data?.user as any).id)

    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="relative">
      <div className="my-5 flex flex-col gap-2 overflow-hidden">
        <div
          className={`h-full max-h-96 md:max-h-80 ${
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

          <div className="w-full max-w-xl">
            {status === "authenticated" && data?.user ? (
              <Button
                variant="shadow"
                color="primary"
                radius="sm"
                className="w-full font-bold uppercase"
                endContent={<AiOutlineSafety size={24} />}
                onClick={handleFinishPurchaseClick}
              >
                Finalizar compra
              </Button>
            ) : (
              <Tooltip
                content={
                  <p className="cursor-default text-center font-bold">
                    Oops! Para finalizar a compra é necessário fazer login.
                  </p>
                }
                delay={0}
                closeDelay={0}
                color="primary"
                placement="top"
                radius="sm"
                className="hidden w-full max-w-xs lg:block"
              >
                <div className="w-full cursor-not-allowed">
                  <Button
                    variant="shadow"
                    color="primary"
                    radius="sm"
                    className="w-full font-bold uppercase"
                    endContent={<AiOutlineSafety size={24} />}
                    isDisabled
                  >
                    Finalizar compra
                  </Button>
                  <p className="mt-2 text-center text-sm text-red-500 opacity-80 lg:hidden">
                    Para finalizar a compra é necessário fazer login.
                  </p>
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
