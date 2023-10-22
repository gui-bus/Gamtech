import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import { DesktopBannerSection } from "./desktopBannerSection";
import { DesktopProductListSection } from "./desktopProductListSection";
import ProductList from "./productList";
import CategoryList from "./categoryList";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "@nextui-org/react";

import { TbCategory2 } from "react-icons/tb";
import { Separator } from "../ui/separator";

import { BANNER_LINK } from "@/constants/bannerLink";

export default async function DesktopUI() {
  const categories = await prismaClient.category.findMany({});

  const mousesAndKeyboardsBanner = [
    {
      src: BANNER_LINK.banner_keyboards,
      alt: "Até 25% de desconto em teclados",
    },
    {
      src: BANNER_LINK.banner_mouses,
      alt: "Até 15% de desconto em mouses",
    },
  ];

  const speakersAndHeadphonesBanner = [
    {
      src: BANNER_LINK.banner_speakers,
      alt: "Até 10% de desconto em caixas de som",
    },
    {
      src: BANNER_LINK.banner_headphones,
      alt: "Até 20% de desconto em headphones",
    },
  ];

  const monitorsAndGpuBanner = [
    {
      src: BANNER_LINK.banner_monitors,
      alt: "Até 15% de desconto em monitores",
    },
    {
      src: BANNER_LINK.banner_gpu,
      alt: "Até 30% de desconto em placas de vídeo",
    },
  ];

  const caseAndMousepadsBanner = [
    {
      src: BANNER_LINK.banner_case,
      alt: "Até 20% de desconto em gabinetes",
    },
    {
      src: BANNER_LINK.banner_mousepads,
      alt: "Até 15% de desconto em mousepads",
    },
  ];

  const consolesAndGamepadsBanner = [
    {
      src: BANNER_LINK.banner_consoles,
      alt: "Até 10% de desconto em consoles",
    },
    {
      src: BANNER_LINK.banner_gamepads,
      alt: "Até 20% de desconto em Controles",
    },
  ];

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

  return (
    <main>
      <div className="hidden md:block">
        <Image
          src={BANNER_LINK.banner_cover}
          alt="O melhor do mundo tech, ofertas imperdíveis!"
          width={0}
          height={0}
          className="hidden h-96 w-full object-cover md:block"
          sizes="100vw"
          priority
        />

        <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
          <Sheet>
            <div className="w-full max-w-xl px-5">
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
          <div className="hidden md:block">
            <div className="mb-5 flex flex-col items-center justify-center px-5 text-center">
              <h1 className="text-2xl font-semibold">Confira as ofertas</h1>
              <p>
                Aqui estão as ofertas incríveis que temos para você. Não perca!
              </p>
            </div>
          </div>
          <ProductList products={deals} />
        </section>
      </div>


      <DesktopBannerSection images={mousesAndKeyboardsBanner} />
      <DesktopProductListSection
        products={mousesAndKeyboards}
        description="Potencialize sua jornada digital com os melhores periféricos."
      />

      <DesktopBannerSection images={monitorsAndGpuBanner} />
      <DesktopProductListSection
        products={monitorsAndGpu}
        description="Encontre a combinação ideal para ter a melhor experiência visual."
      />

      <DesktopBannerSection images={caseAndMousepadsBanner} />
      <DesktopProductListSection
        products={caseAndMousepads}
        description="Explore as possibilidades para aprimorar o seu espaço de trabalho."
      />

      <DesktopBannerSection images={speakersAndHeadphonesBanner} />
      <DesktopProductListSection
        products={speakersAndHeadphones}
        description="Descubra o que é qualidade de som em nossa coleção."
      />

      <DesktopBannerSection images={consolesAndGamepadsBanner} />
      <DesktopProductListSection
        products={consolesAndGamepads}
        description=""
      />

      {/* Desktop Banner -  Delivery */}
      <div className="hidden md:block">
        <div className="mt-5 w-full">
          <Image
            src={BANNER_LINK.banner_fretegratis}
            alt="Até 15% de desconto em mouses"
            width={0}
            height={0}
            className="h-auto w-full"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </main>
  );
}
