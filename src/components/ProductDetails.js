import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetRemotePokemonData from "./useGetRemotePokemonData";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [abilities, setAbilities] = useState([]);
  const [[product], isLoading] = useGetRemotePokemonData(id);

  useEffect(() => {
    const getAbility = async (url) => {
      // style them as tiles (look up library project)

      let response = await fetch(url, {
        mode: "cors",
      });
      response = await response.json();
      setAbilities((prevAbilities) => [
        ...prevAbilities,
        {
          name: response.names.filter(
            (entry) => entry.language.name === "en"
          )[0].name,
          effect: response.effect_entries.filter(
            (entry) => entry.language.name === "en"
          )[0].effect,
        },
      ]);
    };
    if (product)
      if (product.abilities) {
        // setIsLoading(true);
        product.abilities.map((ability) => getAbility(ability.ability.url));
        // setIsLoading(false);
      }
  }, [product]);

  useEffect(() => {
    // console.log(abilities);
  }, [abilities]);
  // TODO: USE custom hook for this

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>{product && product.name}</h1>
          <div>
            <Link to={`/products`}>
              &lt;-
              <span style={{ textDecoration: "underline" }}>
                Back to products
              </span>
            </Link>
          </div>
          <div className="productDetails">
            <img src={product && product.imgUrl} alt="" />
            <div>
              <button>Add to cart</button>
            </div>
            <div>
              {abilities.map((ability, i) => (
                <div key={i} className="productThumb">
                  <div>{ability.name}</div>
                  <div>{ability.effect}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
