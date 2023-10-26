import BackButton from "@/components/common/backButton";
import OrderItem from "@/components/orders/orderItem";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { Button, Chip, Link } from "@nextui-org/react";
import { LuPackageCheck } from 'react-icons/lu'
import { getServerSession } from "next-auth";
import React from "react";
import { TbCategory2 } from "react-icons/tb";

async function OrderPage() {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Access Denied</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div>
      <div className="flex items-center justify-start gap-2 p-5">
        <BackButton />
        <Chip
          startContent={<LuPackageCheck size={20} />}
          color="primary"
          variant="bordered"
          className="cursor-default p-[1.125rem] text-black dark:text-white"
          radius="lg"
        >
          <span className="font-bold uppercase">Meus pedidos</span>
        </Chip>
      </div>

      {orders.length > 0 ? (
        <div className="flex flex-col gap-1 py-5">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="my-5 flex flex-col items-center justify-center text-center">
          <h4 className="font-semibold">
            Você ainda não possui nenhum pedido!
          </h4>
          <p>Que tal fazer umas compras?</p>

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
  );
}

export default OrderPage;
