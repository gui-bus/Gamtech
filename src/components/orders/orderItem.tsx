"use client";
import { Accordion, AccordionItem, Card, Divider } from "@nextui-org/react";
import { Prisma } from "@prisma/client";
import React from "react";
import { Separator } from "../ui/separator";
import { format } from "date-fns";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: true;
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const orderDate = new Date(order.createdAt);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat("pt-BR", options as any);
  const formattedDate = formatter.format(orderDate);

  return (
    <Accordion className="w-full px-5 pb-2" variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        subtitle={
          <p className="text-tiny opacity-80">{`Pedido criado em ${formattedDate}`}</p>
        }
        title={`Pedido com ${order.orderProducts.length} ${
          order.orderProducts.length > 1 ? "produtos" : "produto"
        }`}
      >
        <Divider className="mb-5"/>

        <div className="flex flex-col text-center">
          <div className="flex flex-col items-center justify-center gap-2 md:justify-evenly lg:flex-row">
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
                {format(order.createdAt, "dd/MM/y")}
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

        <Divider className="my-5"/>
      </AccordionItem>
    </Accordion>
  );
};

export default OrderItem;
