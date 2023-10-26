"use client";
import BackButton from "@/components/common/backButton";
import OrderItem from "@/components/orders/orderItem";
import { Button, Chip, Link } from "@nextui-org/react";
import { LuPackageCheck } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";

const OrderPage = () => {
  const [orders, setOrders] = useState<
    Prisma.OrderGetPayload<{
      include: {
        orderProducts: {
          include: {
            product: true;
            order: {
              include: {
                orderProducts: true;
              };
            };
          };
        };
      };
    }>[]
  >([]);
  const { status, data } = useSession();
  const router = useRouter();

  const fetchOrders = async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/orders`);
    const json = await response.json();

    setOrders(json);
    console.log(json);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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

          <Link href="/categories" className="mx-auto mt-4 w-full max-w-xl">
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
};

export default OrderPage;
