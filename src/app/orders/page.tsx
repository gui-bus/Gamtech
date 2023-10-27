"use client";
import BackButton from "@/components/common/backButton";
import OrderItem from "@/components/orders/orderItem";
import { Button, Chip, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { RxReload } from "react-icons/rx";

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
            <OrderItem key={order.id} order={order} fetchOrders={fetchOrders}/>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center justify-center gap-1 px-4 text-center">
          <h1 className="font-semibold">
            Oops! Parece que você ainda não possui nenhuma pedido!
          </h1>
          <p>Que tal dar uma olhada nas opçoes?</p>
          <p className="text-tiny">
            Caso possua um pedido que ainda não está sendo exibido, atualize a
            sua lista!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pb-16 pt-4 md:flex-row">
            <Link href="/categories" className="mx-auto w-full max-w-xl">
              <Button
                endContent={<TbCategory2 size={20} />}
                className="w-full font-semibold"
                variant="shadow"
                color="primary"
              >
                Ver catálogo de produtos
              </Button>
            </Link>

            <Button
              endContent={<RxReload size={20} />}
              className="w-full font-semibold"
              variant="shadow"
              color="primary"
              onClick={fetchOrders}
            >
              Atualizar lista de pedidos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
