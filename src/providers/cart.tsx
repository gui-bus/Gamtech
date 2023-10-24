"use client";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useState } from "react";
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
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  cartTotalItems: 0,
  AddProductsToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("@gamtech/cart-products") || "[]"),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("@gamtech/cart-products", JSON.stringify(products));
  }, [products]);

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

      toast.success(`Produto adicionado ao carrinho!`, {
        style: { fontSize: "0.8rem" },
      });
      return;
    }

    setProducts((prev) => [...prev, product]);
    toast.success(`Produto adicionado ao carrinho!`, {
      style: { fontSize: "0.8rem" },
    });
  };

  const decreaseProductQuantity = (productId: string) => {
    let itemRemoved = false; // Variável de controle

    setProducts((prev) => {
      const newProducts = prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0);

      // Verifique se um item foi removido
      if (!itemRemoved && newProducts.length < prev.length) {
        itemRemoved = true;
        toast.success(`Produto removido do carrinho!`, {
          style: { fontSize: "0.8rem" },
        });
      }

      return newProducts;
    });
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    toast.success(`Produto removido!`, {
      style: { fontSize: "0.7rem" },
    });
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
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
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
