import React from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";
import { useGetPokemon } from "../../api/useGetPokemon";

const ProductDetails = () => {
  const { id }: any = useParams();
  const { loading, error, products } = useGetPokemon([id], true);
  const pokemon = products[0];

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.dir(error);
    return <div>Oops, something went wrong, check console</div>;
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
          <div className="productDetails">
            <div className="productSection">
              <div>
                <img src={pokemon.sprite} alt="" className="productImg" />
              </div>
              <div>
                <p>
                  <b>Height:</b> {pokemon.height}
                </p>

                <div>
                  {pokemon.abilities?.map(
                    (ability: { [index: string]: any }, i: number) => (
                      <div key={i}>
                        <p>
                          <b>{ability.name}</b>
                        </p>
                        <p>{ability.effect}</p>
                      </div>
                    )
                  )}
                </div>
                <AddToCartButton product={pokemon} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
