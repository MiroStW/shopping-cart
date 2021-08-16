import { useEffect, useState } from "react";

const useGetRemoteData = (...ids) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // console.log(ids);
  useEffect(() => {
    setIsLoading(true);
    // (async () => {})();
    ids.map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((json) => {
          setProducts((prevProducts) => [
            ...prevProducts,

            {
              id: json.id,
              name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
              imgUrl: json.sprites.front_default,
            },
          ]);
        })
    );

    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return [products, isLoading];
};

export default useGetRemoteData;
