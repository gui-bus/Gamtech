import { Category } from "@prisma/client";

import { BsKeyboard, BsMouse3, BsHeadset, BsSpeaker } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { SquareIcon } from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <BsKeyboard size={20} />,
    monitors: <FiMonitor size={20} />,
    headphones: <BsHeadset size={20} />,
    mousepads: <SquareIcon size={20} />,
    speakers: <BsSpeaker size={20} />,
    mouses: <BsMouse3 size={20} />,
  };
  return (
    <div className="flex w-44 items-center justify-center gap-2 rounded-md p-2 bg-white dark:bg-foreground-900 dark:text-black md:p-3">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <p className="text-sm font-medium">{category.name}</p>
    </div>
  );
};

export default CategoryItem;
