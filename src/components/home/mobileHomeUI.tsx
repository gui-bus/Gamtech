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

export default async function MobileUI() {
  const categories = await prismaClient.category.findMany({});

  async function fetchProductsByCategory(categorySlug: string) {
    return await prismaClient.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
      orderBy: {
        id: "asc",
      },
    });
  }

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

  const cpuAndMotherboard = await fetchProductsByCategories(["cpu", ""]);

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

  const headphones = await fetchProductsByCategory("headphones");
  const mouses = await fetchProductsByCategory("mouses");
  const monitors = await fetchProductsByCategory("monitors");
  const speakers = await fetchProductsByCategory("speakers");
  const keyboards = await fetchProductsByCategory("keyboards");
  const mousepads = await fetchProductsByCategory("mousepads");
  const cases = await fetchProductsByCategory("cases");
  const gpu = await fetchProductsByCategory("gpu");
  const consoles = await fetchProductsByCategory("consoles");

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
        <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
          <Sheet>
            <div className="w-full px-5">
              <SheetTrigger asChild>
                <Button
                  className="w-full"
                  endContent={<TbCategory2 size={20} />}
                >
                  Ver categorias
                </Button>
              </SheetTrigger>

              <Separator className="mt-5" />
            </div>

            <SheetContent side={"bottom"}>
              <SheetHeader>
                <h1 className="mx-auto mb-4 text-lg font-semibold">
                  Categorias
                </h1>
              </SheetHeader>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((category) => (
                  <CategoryList key={category.id} category={category} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
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
