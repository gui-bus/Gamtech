import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { Category } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} >
      <Card
        isPressable
        shadow="sm"
        className="group flex flex-col bg-white/80 text-center text-sm font-semibold dark:bg-neutral-800 w-full"
      >
        <CardBody className="flex h-36 w-full items-center justify-center ">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-24 w-auto max-w-[90%]"
            style={{ objectFit: "contain" }}
          />
        </CardBody>
        <CardFooter>
          <p className="group-hover:text-gamtech w-full">{category.name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryItem;
