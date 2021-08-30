import { useEffect, useState } from "react";

const useGetRemotePokemonData = (...ids) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ids.map(async (id) => {
      setIsLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: "cors",
      });
      const json = await response.json();
      setProducts((prevProducts) => [
        ...prevProducts,

        {
          id: json.id,
          name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
          imgUrl: json.sprites.front_default,
          height: json.height,
          abilities: json.abilities,
        },
      ]);
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   if (products) setIsLoading(false);
  // }, [products]);

  // useEffect(() => {
  //   // console.log(products);
  //   console.log(isLoading);
  // }, [isLoading]);

  return [products, isLoading];
};

export default useGetRemotePokemonData;
