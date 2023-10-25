import { Filter } from "@/components/category/slug/filter";
import BackButton from "@/components/common/backButton";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { prismaClient } from "@/lib/prisma";
import { Chip } from "@nextui-org/react";
import React from "react";

const CategoryProduct = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-start gap-2">
        <BackButton />
        <Chip
          startContent={
            CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]
          }
          color="primary"
          variant="bordered"
          className="cursor-default p-[1.125rem] text-black dark:text-white"
          radius="lg"
        >
          <span className="font-bold uppercase">{category?.name}</span>
        </Chip>
      </div>

      <div className="mx-auto w-full">
        <div className="mt-5">
          <Filter category={category} products={category.products} />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
