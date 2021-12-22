import { useEffect, useState } from "react";
import { DataReturnType } from "shared/types/index";

const useGetRemoteData = ([...urls]): DataReturnType => {
  const [data, setData] = useState<{}[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!urls) {
      return;
    }
    // use urls?.forEach(...) instead!
    // console.log(urls);
    urls?.forEach((url) =>
      fetch(url, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData((prevData) => {
            // console.log(prevData);
            if (prevData) return [...prevData, json];
            return [json];
          });
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.toString());
          setIsLoading(false);
        })
    );
    // setData([
    //   {
    //     id: 12,
    //     name: "butterfree",
    //     imgUrl: "http://pokeapi.co/media/sprites/pokemon/12.png",
    //     height: 11,
    //     abilities: [
    //       {
    //         ability: {
    //           name: "keen-eye",
    //           url: "https://pokeapi.co/api/v2/ability/51/",
    //         },
    //         is_hidden: false,
    //         slot: 1,
    //       },
    //       {
    //         ability: {
    //           name: "drizzle",
    //           url: "https://pokeapi.co/api/v2/ability/2/",
    //         },
    //         is_hidden: false,
    //         slot: 2,
    //       },
    //       {
    //         ability: {
    //           name: "rain-dish",
    //           url: "https://pokeapi.co/api/v2/ability/44/",
    //         },
    //         is_hidden: true,
    //         slot: 3,
    //       },
    //     ],
    //   },
    // ]);
  }, []);

  // useEffect(() => {
  //   if (data) console.log(data);
  // }, [data]);

  // useEffect(() => {
  //   console.log(urls);
  // }, [urls]);

  return { isLoading, error, data };
};

export default useGetRemoteData;
