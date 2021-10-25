import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetPokemons from "./useGetPokemons";
import useGetAbilities from "./useGetAbilities";

// type PokemonType = {
//   isLoading: boolean;
//   error: string | null;
//   pokemons: Array<object> | null;
// };

// const gotPicachu: PokemonType = {
//   isLoading: false,
//   error: null,
//   pokemons: [
//     {
//       name: "picachu",
//       height: 3,
//     },
//   ],
// };

// if (gotPicachu.pokemons) {
//   const {
//     isLoading: isLoadingTest,
//     error: errorTest,
//     pokemons: [pichachu],
//   } = gotPicachu;
// }

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
            <img src={pokemon.imgUrl} alt="" />
            <span>Height: {pokemon.height}</span>
            <div>
              <button>Add to cart</button>
            </div>
            {abilitiesLoading ? (
              <div>loading...</div>
            ) : (
              <div>
                {abilities &&
                  abilities.map(
                    (ability: { [index: string]: any }, i: number) => (
                      <div key={i} className="productThumb">
                        <div>{ability.name}</div>
                        <div>{ability.effect}</div>
                      </div>
                    )
                  )}
              </div>
            )}
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
