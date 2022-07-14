import Link from "next/link";
import React from "react";
import styles from "../styles/productThumb.module.css";
import { PokemonType } from "../types";
import AddToCartButton from "./AddToCartButton";

interface ProductThumbPropType {
  product: PokemonType;
  sprite: string;
}

const ProductThumb = ({ product, sprite }: ProductThumbPropType) => {
  return (
    <Link href={`products/${product.id}`}>
      <div className={styles.productThumb}>
        <img src={sprite} alt="" />
        <p>{product.name}</p>
        <div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </Link>
  );
};

export default ProductThumb;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
