"use client";
import CategoryProductItem from "@/components/categories/categoryProductItem";
import BackButton from "@/components/common/backButton";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { computeProductTotalPrice } from "@/helpers/product";
import { Category, Product } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { BsSortUp, BsSortDown, BsPercent } from "react-icons/bs";
import { TiSortAlphabetically } from "react-icons/ti";

type FilterProps = {
  category?: Category;
  products: Product[];
  title?: string;
};

export function Filter({ products, category, title }: FilterProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterAscending = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return Number(a.basePrice) - Number(b.basePrice);
    });
    setFilteredProducts(sortedProducts);
  };

  const filterDescending = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return Number(b.basePrice) - Number(a.basePrice);
    });
    setFilteredProducts(sortedProducts);
  };

  const filterDiscount = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return Number(a.discountPercentage) - Number(b.discountPercentage);
    });
    setFilteredProducts(sortedProducts);
  };

  const filterName = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <div className="flex items-center justify-between rounded-xl bg-white/80 p-2 dark:bg-neutral-800">
        <p className="text-center font-medium ml-2 md:ml-5">
          {products.length.toString().padStart(2, "0")} {category?.name} {title} {" "}
          disponíveis
        </p>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="faded" endContent={<ChevronDown size={20} />}>
              Filtrar por
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded">
            <DropdownItem
              key="crescente"
              endContent={<BsSortUp size={20} />}
              onClick={filterAscending}
            >
              Preço crescente
            </DropdownItem>
            <DropdownItem
              key="decrescente"
              endContent={<BsSortDown size={20} />}
              onClick={filterDescending}
            >
              Preço decrescente
            </DropdownItem>
            <DropdownItem
              key="decrescente"
              endContent={<BsPercent size={20} />}
              onClick={filterDiscount}
            >
              Desconto
            </DropdownItem>
            <DropdownItem
              key="decrescente"
              endContent={<TiSortAlphabetically size={20} />}
              onClick={filterName}
            >
              Ordem Alfabética
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-8 pt-4 md:grid-cols-3 xl:grid-cols-6">
        {filteredProducts.map((product) => (
          <CategoryProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
}
