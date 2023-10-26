import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  const { searchParams } = new URL(request.url);

  const orders = await prismaClient.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      orderProducts: {
        include: {
          order: true,
          product: true,
        },
      },
    },
  });

  console.log(orders);
  return new NextResponse(JSON.stringify(orders), { status: 200 });
}
