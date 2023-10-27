import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  { params: { orderId } }: { params: { orderId: string } },
) {
  const existingOrder = await prismaClient.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderProducts: true,
    },
  });

  if (!existingOrder) {
    return new NextResponse("Order not found", { status: 404 });
  }

  await prismaClient.orderProduct.deleteMany({
    where: {
      orderId: orderId,
    },
  });

  const deletedOrder = await prismaClient.order.delete({
    where: {
      id: orderId,
    },
  });

  return new NextResponse(JSON.stringify(deletedOrder), { status: 200 });
}
