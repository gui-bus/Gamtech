import Categories from "@/components/home/categories";
import DesktopProductList from "@/components/home/desktopProductList";
import ProductList from "@/components/home/productList";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones",
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const headphonesAndMouses = await prismaClient.product.findMany({
    where: {
      OR: [
        { category: { slug: "headphones" } },
        { category: { slug: "mouses" } },
      ],
    },
    orderBy: {
      id: "asc",
    },
  });

  const monitorsAndSpeakers = await prismaClient.product.findMany({
    where: {
      OR: [
        { category: { slug: "monitors" } },
        { category: { slug: "speakers" } },
      ],
    },
    orderBy: {
      id: "asc",
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

      {/* Deals list */}
      <section className="my-5">
        <div className="hidden md:block">
          <div className="mb-5 flex flex-col items-center justify-center px-5 text-center">
            <h1 className="text-2xl font-semibold">Confira as ofertas</h1>
            <p>
              Aqui estão as ofertas incríveis que temos para você. Não perca!
            </p>
          </div>
        </div>
        <h2 className="mb-2 pl-5 text-lg font-semibold md:hidden">Ofertas</h2>

        <ProductList products={deals} />
      </section>

      {/* Desktop 02 banners Headphones + Mouses */}
      <div className="hidden md:block">
        <div className="mx-auto my-5 flex w-full items-center justify-center gap-3 px-5">
          <Image
            src="/banner-mouses.png"
            alt="Até 15% de desconto em mouses"
            width={0}
            height={0}
            className="h-auto w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />

          <Image
            src="/banner-headphones.png"
            alt="Até 20% de desconto em headphones"
            width={0}
            height={0}
            className="h-auto  w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Desktop product list Headphones + Mouses */}
      <section className="my-5 hidden md:block">
        <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
          Potencialize sua jornada digital com os melhores acessórios
        </p>

        <ProductList products={headphonesAndMouses} />
      </section>

      {/* Desktop 02 banners Monitors + Speakers */}
      <div className="hidden md:block">
        <div className="mx-auto my-5 flex w-full items-center justify-center gap-3 px-5">
          <Image
            src="/banner-monitors.png"
            alt="Até 15% de desconto em monitores"
            width={0}
            height={0}
            className="h-auto w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />

          <Image
            src="/banner-speakers.png"
            alt="Até 10% de desconto em caixas de som"
            width={0}
            height={0}
            className="h-auto  w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Desktop product list Monitors + Speakers */}
      <section className="my-5 hidden md:block">
        <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
          Descubra a combinação perfeita de qualidade de som e imagem em nossa
          coleção.
        </p>

        <ProductList products={monitorsAndSpeakers} />
      </section>

      {/* Desktop 02 banners Headphones + Mouses */}
      <div className="hidden md:block">
        <div className="mx-auto my-5 flex w-full items-center justify-center gap-3 px-5">
          <Image
            src="/banner-fretegratis.png"
            alt="Até 15% de desconto em mouses"
            width={0}
            height={0}
            className="h-auto w-full rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile 01 banner - Headphones */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/headphones_mobile.png"
            alt="Até 20% de desconto em headphones"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list Headphones*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Headphones</h2>
        <ProductList products={headphones} />
      </section>

      {/* Mobile 02 banner - Mouses */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/mouses_mobile.png"
            alt="Até 15% de desconto em mouses"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list Mouses*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Mouses</h2>
        <ProductList products={mouses} />
      </section>
    </main>
  );
}
