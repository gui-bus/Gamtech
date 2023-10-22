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
        <Image
          src={BANNER_LINK.banner_deals_mobile}
          alt="Até 35% de desconto só esse mês"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
          priority
        />

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
        imageSrc={BANNER_LINK.banner_mouses}
        altText="Até 15% de desconto em mouses"
      />
      <ProductListSection title="Mouses" products={mouses} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_gpu}
        altText="Até 30% de desconto em placas de vídeo"
      />
      <ProductListSection title="Placas de vídeo" products={gpu} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_keyboards}
        altText="Até 25% de desconto em teclados"
      />
      <ProductListSection title="Teclados" products={keyboards} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_monitors}
        altText="Até 15% de desconto em monitores"
      />
      <ProductListSection title="Monitores" products={monitors} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_case}
        altText="Até 20% de desconto em gabinetes"
      />
      <ProductListSection title="Gabinetes" products={cases} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_speakers}
        altText="Até 15% de desconto em caixas de som"
      />
      <ProductListSection title="Caixas de som" products={speakers} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_mousepads}
        altText="Até 15% de desconto em mousepads"
      />
      <ProductListSection title="Mousepads" products={mousepads} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_headphones}
        altText="Até 20% de desconto em headphones"
      />
      <ProductListSection title="Headphones" products={headphones} />

      <BannerSection
        imageSrc={BANNER_LINK.banner_consoles}
        altText="Até 10% de desconto em consoles"
      />
      <ProductListSection title="Consoles" products={consoles} />

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
