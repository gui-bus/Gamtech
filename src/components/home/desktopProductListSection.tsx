import { Product } from "@prisma/client";
import ProductList from "./productList";

interface DesktopProductListSectionProps {
  products: Product[];
  description: string;
}

export function DesktopProductListSection({
  products,
  description,
}: DesktopProductListSectionProps) {
  return (
    <section className="my-5 hidden md:block">
      <p className="mb-4 flex items-center justify-center px-5 text-center text-lg font-medium">
        {description}
      </p>

      <ProductList products={products} />
    </section>
  );
}
