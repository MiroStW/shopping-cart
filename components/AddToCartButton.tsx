import React from "react";
import { useCart } from "../api/cartContext";
import { PokemonType } from "../types";

const AddToCartButton = ({ product }: { product: PokemonType }) => {
  const {
    context: { dispatch },
  } = useCart();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", product: product, quantity: 1 });
  };

  return <button onClick={(e) => clickHandler(e)}>Add to cart</button>;
};

export default AddToCartButton;
