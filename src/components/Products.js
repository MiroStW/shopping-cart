import React, { useEffect, useState } from "react";
import ProductThumb from "./ProductThumb";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({});

  const showProducts = () =>
    Object.keys(products).map((product) => (
      <ProductThumb key={product} product={products[product]} />
    ));

  const getProducts = async (count) => {
    // style them as tiles (look up library project)
    setLoading(true);

    const productIds = [];
    for (let i = 0; i < count; i += 1) {
      productIds.push(Math.floor(Math.random() * 898));
    }

    await Promise.all(
      productIds.map(async (id, i) => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          mode: "cors",
        });
        response = await response.json();
        setProducts((prevState) => ({
          ...prevState,
          [i]: {
            id: response.id,
            name:
              response.name.charAt(0).toUpperCase() + response.name.slice(1),
            imgUrl: response.sprites.front_default,
          },
        }));
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    getProducts(10);
  }, []);

  useEffect(() => {
    // console.log(pokemons);
  }, [products]);

  return (
    <>
      <h1>Hello from Products</h1>
      <div className="productOverview">
        {loading ? <div>loading...</div> : showProducts()}
      </div>
      <div className="productDetails">
        {loading ? <div>loading...</div> : showProducts()}
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
