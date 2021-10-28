import React from "react";
import { CartItem, Pokemon } from "types";

interface AddToCartButtonPropType {
  product: Pokemon;
  addToCart: (product: Pokemon, quantity: number) => void;
}

const AddToCartButton = ({ product, addToCart }: AddToCartButtonPropType) => {
  return <button onClick={() => addToCart(product, 1)}>Add to cart</button>;
};

export default AddToCartButton;
