import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../API/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <>
      <h1>Hello from Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty :-( Add some <Link to="/products">products</Link>!
        </div>
      ) : (
        cartItems.map((cartItem, i) => <CartItem key={i} cartItem={cartItem} />)
      )}
    </>
  );
};

export default Cart;
