import useGetRemoteData from "./useGetRemoteData";

const useGetProducts = (count) => {
  const productIds = [];
  for (let i = 0; i < count; i += 1) {
    productIds.push(Math.floor(Math.random() * 898));
  }

  const [products, isLoading] = useGetRemoteData(...productIds);
  // const [products, isLoading] = [
  //   {
  //     id: 1,
  //     name: "Bisasam",
  //     imgUrl:
  //       "https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  //   },
  //   true,
  // ];

  // console.log(isLoading);

  return [products, isLoading];
};

// await Promise.all(productIds.forEach(id => getProduct(id)));

//     map(async (id) => {
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
//       mode: "cors",
//     });
//     response = await response.json();
//     setProducts((prevState) => ({
//       ...prevState,
//       [i]: {
//         id: response.id,
//         name:
//           response.name.charAt(0).toUpperCase() + response.name.slice(1),
//         imgUrl: response.sprites.front_default,
//       },
//     }));
//   })
// )
// TODO use useGetRemoteData instead

export default useGetProducts;
