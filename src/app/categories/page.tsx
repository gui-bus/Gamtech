import CategoryItem from "@/components/categories/categoryItem";
import { prismaClient } from "@/lib/prisma";
import { Chip } from "@nextui-org/react";
import React from "react";

import { TbCategory2 } from "react-icons/tb";

const CategoriesPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5">
      <Chip
        startContent={<TbCategory2 size={20} />}
        color="primary"
        variant="bordered"
        className="cursor-default p-4 text-black dark:text-white"
        radius="lg"
      >
        <span className="font-bold uppercase">Categorias</span>
      </Chip>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 py-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
