import CategoryItem from "@/components/categories/categoryItem";
import BackButton from "@/components/common/backButton";
import { prismaClient } from "@/lib/prisma";
import { Chip } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

import { TbCategory2 } from "react-icons/tb";
import { BANNER_LINK } from "@/constants/bannerLink";

const CategoriesPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div>
      <Image
        src={BANNER_LINK.banner_catalogmobile}
        alt="Até 35% de desconto só esse mês, aproveite agora mesmo!"
        width={0}
        height={0}
        className="h-auto w-full md:hidden"
        sizes="100vw"
        priority
      />

      <Image
        src={BANNER_LINK.banner_catalog}
        alt="Até 35% de desconto só esse mês, aproveite agora mesmo!"
        width={0}
        height={0}
        className="hidden h-auto w-full md:block"
        sizes="100vw"
        priority
      />

      <div className="flex items-center justify-start gap-2 p-5">
        <BackButton />
        <Chip
          startContent={<TbCategory2 size={20} />}
          color="primary"
          variant="bordered"
          className="cursor-default p-[1.125rem] text-black dark:text-white"
          radius="lg"
        >
          <span className="font-bold uppercase">Categorias</span>
        </Chip>
      </div>

      <div className="grid grid-cols-2 gap-4 px-5 pt-3 pb-8 md:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
