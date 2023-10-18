"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";

import { ImSearch } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ItemSearchForm {
  text: string;
}

const ItemSearch = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ItemSearchForm>();

  const onSubmit = (data: ItemSearchForm) => {
    console.log(data.text);
    // router.push(`/search?text=${data.text}`);
  };

  return (
    <div className="mx-auto my-4 flex w-full max-w-5xl flex-col items-center justify-center rounded-xl">
      {errors.text && (
        <span className="mx-auto mb-2 text-xs font-medium text-red-400 dark:text-red-300 md:ml-0 md:mr-auto">
          {errors.text.message}
        </span>
      )}
      <div className="flex w-full items-center justify-center gap-2 md:flex-row">
        <Input
          type="text"
          label="Pesquise por um item"
          size="sm"
          className="my-2"
          autoComplete="off"
          {...register("text", {
            required: {
              value: true,
              message: "Digite o item no campo de pesquisa!",
            },
          })}
        />

        <Button
          color="default"
          isIconOnly
          endContent={<ImSearch size={20} />}
          onClick={() => handleSubmit(onSubmit)()}
        ></Button>
      </div>
    </div>
  );
};

export default ItemSearch;
