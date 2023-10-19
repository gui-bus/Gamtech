import Categories from "@/components/home/categories";
import ProductList from "@/components/home/productList";
import { Separator } from "@/components/ui/separator";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main>
      <Image
        src="/banner_home_mobile_01.png"
        alt="Até 35% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full md:hidden"
        sizes="100vw"
        priority
      />

      <Image
        src="/banner_home_desktop_01.png"
        alt="Até 35% de desconto só esse mês"
        width={0}
        height={0}
        className="hidden h-96 w-full object-cover md:block"
        sizes="100vw"
        priority
      />

      <section className="mt-5">
        <Categories />
      </section>

      <section className="my-5">
        <div className="mb-5 flex flex-col items-center justify-center px-5 text-center">
          <h1 className="text-2xl font-semibold">Confira as ofertas</h1>
          <p>Aqui estão as ofertas incríveis que temos para você. Não perca!</p>
        </div>

        <ProductList products={deals} />
      </section>
    </main>
  );
}
