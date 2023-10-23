import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";
import CartItem from "../cart/cardItem";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="my-5 flex flex-col gap-2">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={computeProductTotalPrice(product as any) as any}
        />
      ))}
    </div>
  );
};

export default Cart;
