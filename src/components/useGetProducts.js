import useGetRemotePokemonData from "./useGetRemotePokemonData";

const useGetProducts = (count) => {
  const productIds = [];
  for (let i = 0; i < count; i += 1) {
    productIds.push(Math.floor(Math.random() * 898));
  }

  const [products, isLoading] = useGetRemotePokemonData(...productIds);

  return [products, isLoading];
};

export default useGetProducts;
