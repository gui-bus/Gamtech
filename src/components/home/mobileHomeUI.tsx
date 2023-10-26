import { prismaClient } from "@/lib/prisma";
import { BannerSection } from "./bannerSection";
import { ProductListSection } from "./productListSection";
import Image from "next/image";
import ProductList from "./productList";
import { BANNER_LINK } from "@/constants/bannerLink";

import ProductSearch from "../common/productSearch";

export default async function MobileUI() {
  const categories = await prismaClient.category.findMany({});

  async function fetchProductsByCategories(categorySlugs: string[]) {
    return await prismaClient.product.findMany({
      where: {
        category: {
          slug: {
            in: categorySlugs,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    });
  }

  const mousesAndKeyboards = await fetchProductsByCategories([
    "keyboards",
    "mouses",
    "headsets",
  ]);

  const mouses = await fetchProductsByCategories([
    "mouses",
  ]);

  const headsets = await fetchProductsByCategories([
    "headsets",
  ]);

  const keyboards = await fetchProductsByCategories([
    "keyboards",
  ]);

  const cpu = await fetchProductsByCategories([
    "cpu",
  ]);

  const gpu = await fetchProductsByCategories([
    "gpu",
  ]);

  const motherboards = await fetchProductsByCategories([
    "motherboards",
  ]);


  async function fetchProductsByDiscount() {
    return await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
      orderBy: {
        id: "desc",
      },
    });
  }

  const deals = await fetchProductsByDiscount();

  return (
    <main>
      <div className="md:hidden">
        <div className="flex w-full gap-2">
          <Image
            src={BANNER_LINK.banner_cover_mobile}
            alt="O melhor do mundo tech, ofertas imperdíveis!"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="mx-auto mt-4 w-full max-w-xl px-5">
          <ProductSearch />
        </div>

        <section className="my-5">
          <h2 className="mb-2 pl-5 text-lg font-semibold">Ofertas</h2>
          <ProductList products={deals} />
        </section>
      </div>

      <BannerSection
        imageSrc={BANNER_LINK.banner_mouses}
        altText="Até 15% de desconto em mouses"
      />
      <ProductListSection title="Mouses" products={mouses} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_keyboards}
        altText="Até 25% de desconto em teclados"
      />
      <ProductListSection title="Teclados" products={keyboards} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_headphones}
        altText="Até 20% de desconto em fones"
      />
      <ProductListSection title="Headsets" products={headsets} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_gpu}
        altText="Até 30% de desconto em placas de vídeo"
      />
      <ProductListSection title="Placas de Vídeo" products={gpu} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_cpu}
        altText="Até 35% de desconto em processadores"
      />
      <ProductListSection title="Processadores" products={cpu} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_motherboard}
        altText="Até 30% de desconto em placas mãe"
      />
      <ProductListSection title="Placas Mãe" products={motherboards} />

      <div className="md:hidden">
        <div className="mt-5 flex w-full gap-2">
          <Image
            src={BANNER_LINK.banner_fretemobile}
            alt="Frete grátis para todo o Brasil"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </main>
  );
}
