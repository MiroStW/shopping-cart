import React from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";
import { useGetPokemon } from "api/useGetPokemon";
import styles from "./assets/productDetails.css";
import { Ability } from "shared/types";

const ProductDetails = () => {
  const { id }: any = useParams();
  if (isNaN(id)) return <p>Invalid id</p>;

  const { loading, error, products } = useGetPokemon([id], true);
  const pokemon = products[0];

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.dir(error);
    return <p>Oops, something went wrong, check console</p>;
  }

  return (
    <>
      {" "}
      {!loading && (
        <>
          <div>
            <Link to={`/products`}>
              &lt;-
              <span style={{ textDecoration: "underline" }}>
                Back to products
              </span>
            </Link>
          </div>
          <h1>{pokemon.name}</h1>
          <div className={styles.productSection}>
            <div>
              <img src={pokemon.sprite} alt="" className={styles.productImg} />
            </div>
            <div>
              <p>
                <b>Height:</b> {pokemon.height}
              </p>

              <div>
                {pokemon.abilities?.map((ability, i) => (
                  <div key={i}>
                    <p>
                      <b>{ability.name}</b>
                    </p>
                    <p>{ability.effect}</p>
                  </div>
                ))}
              </div>
              <AddToCartButton product={pokemon} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
