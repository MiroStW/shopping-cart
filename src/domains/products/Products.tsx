import React from "react";
import ProductThumb from "./components/ProductThumb";
import AddToCartButton from "./components/AddToCartButton";
import { useGetPokemon } from "../../api/useGetPokemon";
import styles from "./assets/products.css";

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
      <div className={styles.productOverview}>
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
