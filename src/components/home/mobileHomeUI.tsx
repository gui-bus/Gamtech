import { prismaClient } from "@/lib/prisma";
import { BannerSection } from "./bannerSection";
import { ProductListSection } from "./productListSection";
import Image from "next/image";
import ProductList from "./productList";
import CategoryList from "./categoryList";

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

  return (
    <main>
      <div className="md:hidden">
        <Image
          src="/banner-deals-mobile.png"
          alt="Até 35% de desconto só esse mês"
          width={0}
          height={0}
          className="h-auto w-full"
          sizes="100vw"
          priority
        />

        <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
          {categories.map((category) => (
            <CategoryList key={category.id} category={category} />
          ))}
        </div>

        <section className="my-5">
          <h2 className="mb-2 pl-5 text-lg font-semibold">Ofertas</h2>
          <ProductList products={deals} />
        </section>
      </div>

      <BannerSection
        imageSrc="/banner-headphones.png"
        altText="Até 20% de desconto em headphones"
      />
      <ProductListSection title="Headphones" products={headphones} />

      <BannerSection
        imageSrc="/banner-mouses.png"
        altText="Até 15% de desconto em mouses"
      />
      <ProductListSection title="Mouses" products={mouses} />

      <BannerSection
        imageSrc="/banner-speakers.png"
        altText="Até 15% de desconto em caixas de som"
      />
      <ProductListSection title="Caixas de som" products={speakers} />

      <BannerSection
        imageSrc="/banner-monitors.png"
        altText="Até 15% de desconto em monitores"
      />
      <ProductListSection title="Monitores" products={monitors} />

      <BannerSection
        imageSrc="/banner-mousepads.png"
        altText="Até 15% de desconto em mousepads"
      />
      <ProductListSection title="Mousepads" products={mousepads} />

      <BannerSection
        imageSrc="/banner-keyboards.png"
        altText="Até 25% de desconto em teclados"
      />
      <ProductListSection title="Teclados" products={keyboards} />

      <div className="md:hidden">
        <div className="mt-5 flex w-full gap-2">
          <Image
            src="/banner-fretemobile.png"
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
