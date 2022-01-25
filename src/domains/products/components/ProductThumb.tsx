import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "shared/types";
import styles from "../assets/productThumb.css";

interface ProductThumbPropType {
  product: Pokemon;
  addToCartButton: React.ReactNode;
  sprite: string;
}

const ProductThumb = ({
  product,
  addToCartButton,
  sprite,
}: ProductThumbPropType) => {
  return (
    <Link to={`${product.id}`}>
      <div className={styles.productThumb}>
        <img src={sprite} alt="" />
        <p>{product.name}</p>
        <div>{addToCartButton}</div>
      </div>
    </Link>
  );
};

export default ProductThumb;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
