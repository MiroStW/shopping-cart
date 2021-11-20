import React from "react";
import ProductThumb from "./ProductThumb";
import AddToCartButton from "./AddToCartButton";
import { useGetPokemon } from "../API/useGetPokemon";

const Products = ({ ids }: { ids: number[] }) => {
  const { loading, error, products } = useGetPokemon(ids);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.dir(error);

    return <div>Oops, something went wrong, check console</div>;
  }

  return (
    <>
      <h1>Products</h1>
      <div className="productOverview">
        {products.map((product: any, i: number) => (
          <ProductThumb
            key={i}
            product={product}
            sprite={product.sprite}
            addToCartButton={<AddToCartButton product={product} />}
          />
        ))}
      </div>
    </>
  );
};

export default Products;

//possible addition: use graphQL pagination to paginate through all available
//pokemons
