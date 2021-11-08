import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetPokemons from "./useGetPokemons";
import useGetAbilities from "./useGetAbilities";
import AddToCartButton from "./AddToCartButton";
import { Pokemon } from "types";

const ProductDetails = () => {
  const { id }: any = useParams();
  const {
    isLoading: pokemonLoading,
    error: pokemonError,
    pokemons: [pokemon],
  } = useGetPokemons([id]);

  const {
    isLoading: abilitiesLoading,
    error: abilitiesError,
    abilities,
  } = useGetAbilities(
    [
      `https://pokeapi.co/api/v2/ability/65/`,
      `https://pokeapi.co/api/v2/ability/105/`,
    ]
    // pokemon
    //   ? pokemon.abilities.reduce(
    //       (urls, currentAbility) => urls.concat(currentAbility.ability.url),
    //       []
    //     )
    //   : null
  );

  // const [abilities, isLoadingAbilities] = useGetRemoteAbilitiesData(() =>
  //   `https://pokeapi.co/api/v2/ability/65/`, `https://pokeapi.co/api/v2/ability/105/`
  // );

  useEffect(() => {
    // if (pokemon)
    // console.log(
    // pokemon.abilities
    //   .reduce(
    //   (urls, currentAbility) => urls.concat(currentAbility.ability.url),
    //   []
    // )
    // );
  }, [pokemon]);
  // TODO: USE custom hook for this

  return (
    <>
      {pokemonError && <p>Ooops, Pokemon not loaded: {pokemonError}</p>}
      {abilitiesError && <p>Ooops, Abilities not loaded: {abilitiesError}</p>}

      {!pokemonError && pokemonLoading ? (
        <div>loading...</div>
      ) : (
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
                <img src={pokemon.imgUrl} alt="" className="productImg" />
              </div>
              <div>
                <p>
                  <b>Height:</b> {pokemon.height}
                </p>
                {abilitiesLoading ? (
                  <div>loading...</div>
                ) : (
                  <div>
                    {abilities &&
                      abilities.map(
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
                )}
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

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
