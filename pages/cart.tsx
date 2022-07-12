import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCart } from "../api/cartContext";
import CartItem from "../components/CartItem";
import Nav from "../components/Nav";

const Cart = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const {
    state: { cartItems },
  } = useCart();

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      {!isSSR && cartItems.length === 0 ? (
        <div>
          Your cart is empty :-( Add some <Link href="/products">products</Link>
          !
        </div>
      ) : (
        !isSSR &&
        cartItems.map((cartItem, i) => <CartItem key={i} cartItem={cartItem} />)
      )}
    </>
  );
};

export default Cart;
