import useGetPokemons from "./useGetPokemons";

const useGetProducts = (count: number) => {
  const productIds: number[] = [];
  for (let i = 0; i < count; i += 1) {
    productIds.push(Math.floor(Math.random() * 897 + 1));
  }

  const { isLoading, error, pokemons: products } = useGetPokemons(productIds);

  return { isLoading, error, products };
};

export default useGetProducts;
