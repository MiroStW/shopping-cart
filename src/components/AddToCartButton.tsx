import React from "react";
import { Pokemon } from "types";
import { useCart } from "../API/cartContext";

const AddToCartButton = ({ product }: { product: Pokemon }) => {
  const { dispatch } = useCart();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", product: product, quantity: 1 });
  };

  return <button onClick={(e) => clickHandler(e)}>Add to cart</button>;
};

export default AddToCartButton;
