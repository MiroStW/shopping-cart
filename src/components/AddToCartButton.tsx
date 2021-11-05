import React from "react";
import { CartItemType, Pokemon } from "types";

interface AddToCartButtonPropType {
  product: Pokemon;
  addToCart: (product: Pokemon, quantity: number) => void;
}

const AddToCartButton = ({ product, addToCart }: AddToCartButtonPropType) => (
  <button onClick={() => addToCart(product, 1)}>Add to cart</button>
);

export default AddToCartButton;
