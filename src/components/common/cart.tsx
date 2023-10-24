import { CartContext } from "@/providers/cart";
import React, { useContext } from "react";
import CartItem from "../cart/cartItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Button, Link } from "@nextui-org/react";
import { TbCategory2 } from 'react-icons/tb'

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="my-5 flex flex-col gap-2 overflow-y-auto">
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center my-5">
          <h4 className="font-semibold">Você ainda não possui nenhum produto no carrinho!</h4>
          <p>Que tal dar uma olhada nas opções?</p>

          <Link href="/categories" className="mt-4 w-full mx-auto">
            <Button endContent={<TbCategory2 size={20}/>} className="w-full font-semibold" variant="shadow" color="primary">Ver catálogo de produtos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
