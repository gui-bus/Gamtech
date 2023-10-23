"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  cartTotalItems: number;
  AddProductsToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  cartTotalItems: 0,
  AddProductsToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const AddProductsToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      toast.success(`Produto adicionado ao carrinho`, {
        style: { fontSize: "0.7rem" },
      });
      return;
    }

    setProducts((prev) => [...prev, product]);
    toast.success(`Produto adicionado ao carrinho`, {
      style: { fontSize: "0.7rem" },
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        AddProductsToCart,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        cartTotalItems: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
