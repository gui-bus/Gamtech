"use client";
import { Accordion, AccordionItem, Card, Divider } from "@nextui-org/react";
import { Prisma } from "@prisma/client";
import React, { useMemo } from "react";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import OrderProductItem from "./orderProductItem";
import { computeProductTotalPrice } from "@/helpers/product";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const orderDate = new Date(order.createdAt);

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const dayOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const timeOrder = new Intl.DateTimeFormat("pt-BR", timeOptions as any);
  const dayOrder = new Intl.DateTimeFormat("pt-BR", dayOptions as any);
  
  const formattedTime = timeOrder.format(orderDate);
  const formattedDay = dayOrder.format(orderDate);

  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);

      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;

  return (
    <Accordion className="w-full px-5 pb-2" variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        subtitle={<p className="text-tiny opacity-80">Pedido realiado em {formattedDay} às {formattedTime}</p>}
        title={
          <h5 className="text-sm font-semibold">{`Pedido com ${
            order.orderProducts.length
          } ${order.orderProducts.length > 1 ? "produtos" : "produto"}`}</h5>
        }
      >
        <Divider className="mb-5" />

        <div className="flex flex-col text-center">
          <div className="flex flex-col items-center justify-center gap-2 text-sm md:justify-evenly md:text-base lg:flex-row">
            <div className="flex flex-col items-center justify-center md:gap-2 lg:flex-row">
              <p className="flex gap-2 text-sm font-semibold uppercase">
                Status <span className="hidden lg:block">-</span>
              </p>
              <p
                className={`font-bold ${
                  order.status === "WAITING_FOR_PAYMENT"
                    ? "text-red-500"
                    : "text-gamtech"
                }`}
              >
                {order.status === "WAITING_FOR_PAYMENT"
                  ? "Aguardando pagamento"
                  : "Pagamento confirmado"}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:gap-2 lg:flex-row">
              <p className="flex gap-2 text-sm font-semibold uppercase">
                Data <span className="hidden lg:block">-</span>
              </p>
              <p className="opacity-90 dark:opacity-70">
                {formattedDay}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:gap-2 lg:flex-row">
              <p className="flex gap-2 text-sm font-semibold uppercase">
                Forma de pagamento <span className="hidden lg:block">-</span>
              </p>
              <p className="opacity-90 dark:opacity-70">Cartão de crédito</p>
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <div className="grid grid-cols-1 gap-2 gap-x-2 lg:grid lg:grid-cols-2">
          {order.orderProducts.map((orderProcut) => (
            <OrderProductItem key={orderProcut.id} orderProduct={orderProcut} />
          ))}
        </div>

        <Divider className="my-5" />

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
              {totalDiscounts.toLocaleString("pt-BR", {
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
            <p className="font-semibold">Total do pedido</p>
            <p className="font-bold text-gamtech">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default OrderItem;
