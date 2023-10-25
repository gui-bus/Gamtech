import { prismaClient } from "@/lib/prisma";
import { BannerSection } from "./bannerSection";
import { ProductListSection } from "./productListSection";
import Image from "next/image";
import ProductList from "./productList";
import CategoryList from "./categoryList";
import { BANNER_LINK } from "@/constants/bannerLink";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "@nextui-org/react";

import { TbCategory2 } from "react-icons/tb";
import { Separator } from "../ui/separator";
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
  ]);
  const speakersAndHeadphones = await fetchProductsByCategories([
    "headphones",
    "speakers",
  ]);
  const monitorsAndGpu = await fetchProductsByCategories(["gpu", "monitors"]);

  const caseAndMousepads = await fetchProductsByCategories([
    "cases",
    "mousepads",
  ]);

  const consolesAndGamepads = await fetchProductsByCategories([
    "consoles",
    "gamepads",
  ]);

  const cpuAndMotherboard = await fetchProductsByCategories([
    "cpu",
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
        <div className="mt-5 flex w-full gap-2">
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
        imageSrc={BANNER_LINK.banner_perifericos}
        altText="Até 25% de desconto em perifericos"
      />
      <ProductListSection title="Periféricos" products={mousesAndKeyboards} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_video}
        altText="Até 30% de desconto em dispositivos de vídeo"
      />
      <ProductListSection
        title="Dispositivos de Vídeo"
        products={monitorsAndGpu}
      />

      <BannerSection
        imageSrc={BANNER_LINK.banner_desktop}
        altText="Até 20% de desconto em desktop"
      />
      <ProductListSection title="Desktop" products={caseAndMousepads} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_audio}
        altText="Até 20% de desconto em dispositivos áudio"
      />
      <ProductListSection
        title="Dispositivos de Áudio"
        products={speakersAndHeadphones}
      />

      <BannerSection
        imageSrc={BANNER_LINK.banner_hardware}
        altText="Até 35% de desconto em hardware"
      />
      <ProductListSection title="Hardware" products={cpuAndMotherboard} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_games}
        altText="Até 20% de desconto em jogos"
      />
      <ProductListSection title="Video Games" products={consolesAndGamepads} />

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
