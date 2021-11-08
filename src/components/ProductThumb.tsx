import React from "react";
import { Link } from "react-router-dom";
import { Pokemon } from "types";

interface ProductThumbPropType {
  product: Pokemon;
  addToCartButton: React.ReactNode;
}

const ProductThumb = ({ product, addToCartButton }: ProductThumbPropType) => {
  return (
    <Link to={`${product.id}`}>
      <div className="productThumb">
        <img src={product.imgUrl} alt="" />
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
