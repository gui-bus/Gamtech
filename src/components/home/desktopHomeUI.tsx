import { prismaClient } from "@/lib/prisma";
import Image from "next/image";
import { DesktopBannerSection } from "./desktopBannerSection";
import { DesktopProductListSection } from "./desktopProductListSection";
import ProductList from "./productList";

export default async function DesktopUI() {
  const mousesAndHeadphonesBanner = [
    {
      src: "/banner-mouses.png",
      alt: "Até 15% de desconto em mouses",
    },
    {
      src: "/banner-headphones.png",
      alt: "Até 20% de desconto em headphones",
    },
  ];

  const monitorsAndSpeakersBanner = [
    {
      src: "/banner-monitors.png",
      alt: "Até 15% de desconto em monitores",
    },
    {
      src: "/banner-speakers.png",
      alt: "Até 10% de desconto em caixas de som",
    },
  ];

  const keyboardsAndMousepadsBanner = [
    {
      src: "/banner-keyboards.png",
      alt: "Até 25% de desconto em teclados",
    },
    {
      src: "/banner-mousepads.png",
      alt: "Até 15% de desconto em mousepads",
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

  const headphonesAndMouses = await fetchProductsByCategories([
    "headphones",
    "mouses",
  ]);
  const monitorsAndSpeakers = await fetchProductsByCategories([
    "monitors",
    "speakers",
  ]);
  const keyboardsAndMousepads = await fetchProductsByCategories([
    "keyboards",
    "mousepads",
  ]);

  return (
    <main>
      <div className="hidden md:block">
        <Image
          src="/banner-deals-desktop.png"
          alt="Até 35% de desconto só esse mês"
          width={0}
          height={0}
          className="hidden h-96 w-full object-cover md:block"
          sizes="100vw"
          priority
        />

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

      <DesktopBannerSection images={mousesAndHeadphonesBanner} />
      <DesktopProductListSection
        products={headphonesAndMouses}
        description="Potencialize sua jornada digital com os melhores acessórios."
      />

      <DesktopBannerSection images={monitorsAndSpeakersBanner} />
      <DesktopProductListSection
        products={monitorsAndSpeakers}
        description="Descubra a combinação perfeita de qualidade de som e imagem em nossa
        coleção."
      />

      <DesktopBannerSection images={keyboardsAndMousepadsBanner} />
      <DesktopProductListSection
        products={keyboardsAndMousepads}
        description="Encontre a combinação ideal para aprimorar o seu setup."
      />

      {/* Desktop Banner 04 -  Delivery */}
      <div className="hidden md:block">
        <div className="mt-5 w-full">
          <Image
            src="/banner-fretegratis.png"
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
