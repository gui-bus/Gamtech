import Categories from "@/components/home/categories";
import ProductList from "@/components/home/productList";
import { prismaClient } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
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

  const deals = await fetchProductsByDiscount();
  const headphones = await fetchProductsByCategory("headphones");
  const mouses = await fetchProductsByCategory("mouses");
  const monitors = await fetchProductsByCategory("monitors");
  const speakers = await fetchProductsByCategory("speakers");
  const keyboards = await fetchProductsByCategory("keyboards");
  const mousepads = await fetchProductsByCategory("mousepads");
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
      {/* Desktop Hero Banner - Deals  */}
      <div>
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
      </div>

      {/* Categories list */}
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

      {/* Desktop banner 01 - Headphones + Mouses */}
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

      {/* Desktop product list 01 - Headphones + Mouses */}
      <section className="my-5 hidden md:block">
        <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
          Potencialize sua jornada digital com os melhores acessórios.
        </p>

        <ProductList products={headphonesAndMouses} />
      </section>

      {/* Desktop banner 02 - Monitors + Speakers */}
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

      {/* Desktop product list 02 - Monitors + Speakers */}
      <section className="my-5 hidden md:block">
        <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
          Descubra a combinação perfeita de qualidade de som e imagem em nossa
          coleção.
        </p>

        <ProductList products={monitorsAndSpeakers} />
      </section>

      {/* Desktop banner 03 - Keyboards + Mousepads */}
      <div className="hidden md:block">
        <div className="mx-auto my-5 flex w-full items-center justify-center gap-3 px-5">
          <Image
            src="/banner-keyboards.png"
            alt="Até 25% de desconto em teclados"
            width={0}
            height={0}
            className="h-auto w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />

          <Image
            src="/banner-mousepads.png"
            alt="Até 15% de desconto em mousepads"
            width={0}
            height={0}
            className="h-auto  w-full max-w-[50%] rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Desktop product list 03 - Keyboards + Mousepads */}
      <section className="my-5 hidden md:block">
        <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
          Encontre a combinação ideal para aprimorar o seu setup.
        </p>

        <ProductList products={keyboardsAndMousepads} />
      </section>

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

      {/* Mobile banner 01 - Headphones */}
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

      {/* Mobile product list 01 - Headphones*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Headphones</h2>
        <ProductList products={headphones} />
      </section>

      {/* Mobile banner 02 - Mouses */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/banner-mouses.png"
            alt="Até 15% de desconto em mouses"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list 02 - Mouses*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Mouses</h2>
        <ProductList products={mouses} />
      </section>

      {/* Mobile banner 03 - Speakers */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/banner-speakers.png"
            alt="Até 15% de desconto em caixas de som"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list 03 - Speakers*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Caixas de som</h2>
        <ProductList products={speakers} />
      </section>

      {/* Mobile banner 04 - Monitors */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/banner-monitors.png"
            alt="Até 15% de desconto em monitores"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list 04 - Monitors*/}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Monitores</h2>
        <ProductList products={monitors} />
      </section>

      {/* Mobile banner 05 - Keyboards */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/banner-keyboards.png"
            alt="Até 25% de desconto em teclados"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list 05 - Keyboards */}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Teclados</h2>
        <ProductList products={keyboards} />
      </section>

      {/* Mobile banner 06 - Mousepads */}
      <div className="md:hidden">
        <div className="my-5 flex w-full gap-2">
          <Image
            src="/banner-mousepads.png"
            alt="Até 15% de desconto em mousepads"
            width={0}
            height={0}
            className="h-auto w-full object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Mobile product list 06 - Mousepads */}
      <section className="my-5 md:hidden">
        <h2 className="mb-2 pl-5 text-lg font-semibold">Mousepads</h2>
        <ProductList products={mousepads} />
      </section>

      {/* Mobile banner 07 - Delivery */}
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
