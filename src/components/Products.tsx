import React from "react";
import useGetProducts from "./useGetProducts";
import ProductThumb from "./ProductThumb";
import { Pokemon } from "types";
import AddToCartButton from "./AddToCartButton";

const Products = ({
  addToCart,
}: {
  addToCart: (product: Pokemon, quantity: number) => void;
}) => {
  const { isLoading, error, products } = useGetProducts(10);

  return (
    <>
      <h1>Hello from Products</h1>
      {error && <p>Oops, something went worng: {error}</p>}
      <div className="productOverview">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          products.map((product, i) => (
            <ProductThumb
              key={i}
              product={product}
              addToCartButton={
                <AddToCartButton product={product} addToCart={addToCart} />
              }
            />
          ))
        )}
      </div>
    </>
  );
};

export default Products;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.

// fetch products & list them
// add router for individual product page component
// add
