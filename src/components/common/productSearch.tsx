"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";

import { ImSearch } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ProductSearchForm {
  text: string;
}

const ProductSearch = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ProductSearchForm>();

  const onSubmit = (data: ProductSearchForm) => {
    router.push(`/products/search?text=${data.text}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex w-full items-center justify-center gap-2">
        <Input
          placeholder="Buscar por um produto..."
          autoComplete="off"
          type="text"
          {...register("text", {
            required: {
              value: true,
              message: "Digite o nome do produto no campo de pesquisa!",
            },
          })}
        />

        <Button
          variant="shadow"
          color="primary"
          endContent={<ImSearch size={16} />}
          isIconOnly
          onClick={() => handleSubmit(onSubmit)()}
        />
      </div>
      {errors.text && (
        <span className="mx-auto mt-2 text-xs font-medium text-red-400 dark:text-red-300 md:mr-auto">
          {errors.text.message}
        </span>
      )}
    </div>
  );
};

export default ProductSearch;
