import useGetPokemons from "./OLDuseGetPokemons";

const useGetProducts = (count: number) => {
  const productIds: number[] = [];
  for (let i = 0; i < count; i += 1) {
    productIds.push(Math.floor(Math.random() * 897 + 1));
  }

  // const { loading, error, data: products } = useQuery(GET_POKEMON, {
  //   variables: { _in: productIds },
  // });
  const { isLoading: loading, error, pokemons: products } = useGetPokemons(
    productIds
  );

  return { loading, error, products };
};

export default useGetProducts;
