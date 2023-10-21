import { ProductWithTotalPrice } from "@/helpers/product";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { BsArrowDownShort } from "react-icons/bs";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[160px] flex-col gap-4">
      {/* Image */}
      <div className="relative flex h-40 w-40 items-center justify-center rounded-lg bg-white/80 dark:bg-neutral-800">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-32 w-auto max-w-[90%]"
          style={{ objectFit: "contain" }}
        />
        {product.discountPercentage > 0 && (
          <Chip
            className="absolute left-2 top-2"
            variant="solid"
            size="sm"
            startContent={<BsArrowDownShort size={20} />}
          >
            <p className="text-tiny">{product.discountPercentage}%</p>
          </Chip>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-tiny">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="text-xs font-extrabold text-[#1267dc]">
                {product.totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-xs line-through opacity-75">
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </>
          ) : (
            <p className="text-xs font-extrabold text-[#1267dc]">
              {Number(product.basePrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
