import { ApolloError, gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { pokemonClient } from "./ApolloClient";

export const GET_POKEMON = gql`
  query MyQuery($ids: [Int!], $withAbilities: Boolean! = false) {
    pokemon_v2_pokemon_aggregate(where: { id: { _in: $ids } }) {
      nodes {
        name
        id
        height
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemonabilities_aggregate @include(if: $withAbilities) {
          nodes {
            id
            pokemon_v2_ability {
              name
              pokemon_v2_abilityeffecttexts(
                where: { pokemon_v2_language: { name: { _eq: "en" } } }
              ) {
                effect
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SPRITE = gql`
  query getSprite($id: Int!) {
    pokemon(id: $id) @rest(type: "pokemon", path: "{args.id}") {
      sprites {
        front_default
      }
    }
  }
`;

interface pokemon {
  name: string;
  id: number;
  height: number;
  abilities?: {
    id: number;
    name: string;
    effect: string;
  }[];
  sprite: string;
}

interface useGetPokemonReturnType {
  products: pokemon[];
  loading: boolean;
  error?: ApolloError;
}

export const useGetPokemon = (
  ids: number[],
  withAbilities: boolean = false
): useGetPokemonReturnType => {
  const { loading: loadingPokemon, error, data } = useQuery(GET_POKEMON, {
    variables: { ids, withAbilities },
  });
  const [sprites, setSprites] = useState<{ id: number; sprite: string }[]>([]);
  const [products, setProducts] = useState<pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  // load sprites
  useEffect(() => {
    if (!loadingPokemon && data) {
      setLoading(true);
      ids.forEach((id) => {
        pokemonClient
          .query({ query: GET_SPRITE, variables: { id } })
          .then((response) => {
            setSprites((prevState) => [
              ...prevState,
              {
                id: Number(id),
                sprite: response.data.pokemon.sprites.front_default,
              },
            ]);
          });
      });
    }
  }, [loadingPokemon, data]);

  // transform structure
  useEffect(() => {
    if (
      !loadingPokemon &&
      data &&
      sprites.length === data.pokemon_v2_pokemon_aggregate.nodes.length
    ) {
      setLoading(true);
      setProducts(
        data.pokemon_v2_pokemon_aggregate.nodes.map((pokemon: any) => {
          return {
            name: pokemon.name,
            id: pokemon.id,
            height: pokemon.height,
            abilities: pokemon.pokemon_v2_pokemonabilities_aggregate?.nodes.map(
              (ability: any) => {
                return {
                  id: ability.id,
                  name: ability.pokemon_v2_ability.name,
                  effect:
                    ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0]
                      .effect,
                };
              }
            ),
            sprite: sprites.find((sprite) => sprite.id === pokemon.id)?.sprite,
          };

          // ,
        })
      );
      setLoading(false);
    }
  }, [data, sprites]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return { loading, error, products };
};
