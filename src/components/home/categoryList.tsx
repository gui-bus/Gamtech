import { Category } from "@prisma/client";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Button, Link } from "@nextui-org/react";

interface CategoryItemProps {
  category: Category;
}

const CategoryList = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Button
        className="flex w-36 cursor-pointer items-center justify-center gap-2 rounded-md bg-white p-2 drop-shadow-lg transition-all hover:bg-zinc-300 dark:bg-foreground dark:text-black hover:dark:bg-foreground-900/90 "
        startContent={
          CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]
        }
      >
        <p className="text-sm font-medium">{category.name}</p>
      </Button>
    </Link>
  );
};

export default CategoryList;
