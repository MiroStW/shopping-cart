import { useEffect, useState } from "react";
import useGetRemoteData from "./OLDuseGetRemoteData";
import { Pokemon } from "types/index";

const useGetPokemons = (ids: number[]) => {
  const { isLoading, error, data } = useGetRemoteData(
    ids.map((id) => `https://pokeapi.co/api/v2/pokemon/${id}`)
  );
  const [pokemons, setPokemons] = useState<Pokemon[] | ([] & { length: 0 })>(
    []
  );

  useEffect(() => {
    if (data) {
      // console.log(data);
      setPokemons(
        data.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          sprite: pokemon.sprites.front_default,
          height: pokemon.height,
          abilities: pokemon.abilities,
        }))
      );
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(pokemons);
  // }, [pokemons]);

  return { isLoading, error, pokemons };
};

export default useGetPokemons;
