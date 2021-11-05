import React from "react";
import { Link } from "react-router-dom";
import { CartItemType } from "types";
import CartItem from "./CartItem";

interface CartPropType {
  cartItems: CartItemType[];
  setCartItems: (
    value: React.SetStateAction<
      | ([] & {
          length: 0;
        })
      | CartItemType[]
    >
  ) => void;
}

const Cart = ({ cartItems, setCartItems }: CartPropType) => (
  <>
    <h1>Hello from Cart</h1>
    {cartItems.length === 0 ? (
      <div>
        Your cart is empty :-( Add some <Link to="/products">products</Link>!
      </div>
    ) : (
      cartItems.map((cartItem, i) => (
        <CartItem
          key={i}
          itemIndex={i}
          cartItem={cartItem}
          setCartItems={setCartItems}
        />
      ))
    )}
  </>
);

export default Cart;
