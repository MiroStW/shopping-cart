import React, { useEffect, useState } from "react";
import ProductThumb from "./ProductThumb";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState({});

  const showPokemon = () =>
    Object.keys(pokemons).map((pokemon) => (
      <ProductThumb key={pokemon} product={pokemons[pokemon]} />
    ));

  const getPokemon = async (count) => {
    // style them as tiles (look up library project)
    setLoading(true);

    const pokemonIds = [];
    for (let i = 0; i < count; i += 1) {
      pokemonIds.push(Math.floor(Math.random() * 898));
    }

    await Promise.all(
      pokemonIds.map(async (id, i) => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          mode: "cors",
        });
        response = await response.json();
        setPokemons((prevState) => ({
          ...prevState,
          [i]: {
            name: response.name,
            imgUrl: response.sprites.front_default,
          },
        }));
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    getPokemon(10);
  }, []);

  useEffect(() => {
    // console.log(pokemons);
  }, [pokemons]);

  return (
    <>
      <h1>Hello from Products</h1>
      <div className="productList">
        {loading ? <div>loading...</div> : showPokemon()}
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
