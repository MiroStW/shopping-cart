import React, { useEffect } from "react";
import useGetProducts from "./useGetProducts";
import ProductThumb from "./ProductThumb";

const Products = () => {
  const [products, isLoading] = useGetProducts(10);

  return (
    <>
      <h1>Hello from Products</h1>
      <div className="productOverview">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          Object.keys(products).map((product) => (
            <ProductThumb key={product} product={products[product]} />
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
