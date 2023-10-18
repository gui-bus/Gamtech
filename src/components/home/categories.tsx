import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
