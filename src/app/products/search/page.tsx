"use client";
import CategoryProductItem from "@/components/categories/categoryProductItem";
import ProductSearch from "@/components/common/productSearch";
import { computeProductTotalPrice } from "@/helpers/product";
import { Button, Spinner } from "@nextui-org/react";
import { Product } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import { TbCategory2 } from "react-icons/tb";

const SearchResult = () => {
  const [product, setProducts] = React.useState<Product[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { status } = useSession();

  const homePage = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `/api/search?text=${searchParams.get("text")}`,
      );

      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, [searchParams, router]);

  if (
    typeof searchParams.get("text") !== "string" ||
    searchParams.get("text")?.trim() === ""
  ) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null;
  }

  return (
    <div className="mb-5 flex flex-col items-center justify-center">
      <div className="mx-auto mt-8 w-full max-w-3xl px-5">
        <ProductSearch />
      </div>
      {status === "loading" ? (
        <div className="flex items-center justify-center my-8">
          <Spinner size="md" color="primary" />
        </div>
      ) : (
        <div>
          <div className="my-5 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl font-semibold">Produtos encontrados</h1>
            <p className="mt-2 text-sm">
              {product.length > 0
                ? `${
                    product.length === 1
                      ? "Foi encontrado"
                      : "Foram encontrados"
                  } ${product.length === 1 ? "um" : product.length} ${
                    product.length === 1 ? "produto" : "produtos"
                  } que ${
                    product.length === 1 ? "possui" : "possuem"
                  } o termo ${'"'}${searchParams.get("text")}${'"'}.`
                : `Infelizmente não foi possível encontrar nenhum produto com o termo ${'"'}${searchParams.get(
                    "text",
                  )}${'"'} :(`}
            </p>
            {product.length === 0 && (
              <Button
                variant="shadow"
                color="primary"
                className="my-4"
                endContent={<TbCategory2 />}
                onClick={homePage}
              >
                Voltar para o catálogo
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 px-5 pb-8 pt-3 md:grid-cols-5">
            {product?.map((product) => (
              <CategoryProductItem
                key={product.id}
                product={computeProductTotalPrice(product)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
