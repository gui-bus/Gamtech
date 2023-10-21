import CategoryProductItem from "@/components/categories/categoryProductItem";
import BackButton from "@/components/common/backButton";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { Chip } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

import { TbDiscount2 } from "react-icons/tb";
import { BANNER_LINK } from "@/constants/bannerLink";

const PromoPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <div className="flex items-center justify-start gap-2 p-5">
        <BackButton />
        <Chip
          startContent={<TbDiscount2 size={20} />}
          color="primary"
          variant="bordered"
          className="cursor-default p-[1.125rem] text-black dark:text-white"
          radius="lg"
        >
          <span className="font-bold uppercase">Ofertas Imperdíveis</span>
        </Chip>
      </div>

      <Image
        src={BANNER_LINK.banner_promomobile}
        alt="Descontos incríveis e por tempo limitado!"
        width={0}
        height={0}
        className="h-auto w-full md:hidden"
        sizes="100vw"
        priority
      />

      <Image
        src={BANNER_LINK.banner_promo}
        alt="Descontos incríveis e por tempo limitado!"
        width={0}
        height={0}
        className="hidden h-auto w-full md:block"
        sizes="100vw"
        priority
      />

      <div className="grid grid-cols-2 gap-4 p-5 py-8 md:grid-cols-3 xl:grid-cols-6">
        {deals.map((product) => (
          <CategoryProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoPage;
