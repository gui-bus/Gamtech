import { Product } from "@prisma/client";
import ProductList from "./productList";

interface ProductListSectionProps {
  title: string;
  products: Product[];
}

export function ProductListSection({ title, products }: ProductListSectionProps) {
  return (
    <section className="my-5 md:hidden">
      <h2 className="mb-2 pl-5 text-lg font-semibold">{title}</h2>
      <ProductList products={products} />
    </section>
  );
}
