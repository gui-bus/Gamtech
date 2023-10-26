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
import ProductSearch from "../common/productSearch";

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


  const headsetsAndGpuBanner = [
    {
      src: BANNER_LINK.banner_headphones,
      alt: "Até 20% de desconto em fones",
    },
    {
      src: BANNER_LINK.banner_gpu,
      alt: "Até 30% de desconto em placas de vídeo",
    },
  ];


  const cpuAndMotherboardsBanner = [
    {
      src: BANNER_LINK.banner_motherboard,
      alt: "Até 30% de desconto em Placas mãe",
    },
    {
      src: BANNER_LINK.banner_cpu,
      alt: "Até 35% de desconto em Processadores",
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
  const headsetsAndGpu = await fetchProductsByCategories(["gpu", "headsets"]);

  const cpuAndMotherboards = await fetchProductsByCategories([
    "cpu",
    "motherboards",
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

        <div className="mx-auto mt-4 w-full max-w-xl px-5">
          <ProductSearch />
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

      <DesktopBannerSection images={cpuAndMotherboardsBanner} />
      <DesktopProductListSection
        products={cpuAndMotherboards}
        description="Extraia o potencial máximo da sua máquina."
      />

      <DesktopBannerSection images={mousesAndKeyboardsBanner} />
      <DesktopProductListSection
        products={mousesAndKeyboards}
        description="Potencialize sua jornada digital com os melhores periféricos."
      />

      <DesktopBannerSection images={headsetsAndGpuBanner} />
      <DesktopProductListSection
        products={headsetsAndGpu}
        description="Encontre a combinação ideal para ter a melhor experiência visual."
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
