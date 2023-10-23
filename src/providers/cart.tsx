"use client";
import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";

interface CartProduct extends Product {
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
