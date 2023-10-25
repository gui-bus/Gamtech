import { prismaClient } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return new NextResponse(
      JSON.stringify({
        message: "Missing text parameter",
      }),
      { status: 400 },
    );
  }

  const lowerText = text.toLowerCase();

  const products = await prismaClient.product.findMany({
    where: {
      OR: [
        {
          slug: {
            endsWith: lowerText,
          },
        },
        {
          slug: {
            startsWith: lowerText,
          },
        },
        {
          slug: {
            contains: lowerText,
          },
        },
        {
          slug: {
            equals: lowerText,
          },
        },
      ],
    },
  });

  return new NextResponse(JSON.stringify(products), { status: 200 });
}
