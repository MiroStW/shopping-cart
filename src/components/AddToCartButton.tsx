import React from "react";
import { Pokemon } from "types";
import { useCart } from "./cartContext";

const AddToCartButton = ({ product }: { product: Pokemon }) => {
  const { dispatch } = useCart();

  return (
    <button
      onClick={() =>
        dispatch({ type: "ADD_TO_CART", product: product, quantity: 1 })
      }
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
