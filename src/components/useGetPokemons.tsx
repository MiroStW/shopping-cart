import { useEffect, useState } from "react";
import useGetRemoteData from "./useGetRemoteData";

// type DataReturnType = {
//   isLoading: boolean;
//   error: string | null;
//   pokemons: Pokemon[] | null;
// };

interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
  height: number;
  abilities: {}[];
}

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
          imgUrl: pokemon.sprites.front_default,
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