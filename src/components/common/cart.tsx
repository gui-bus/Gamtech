import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
