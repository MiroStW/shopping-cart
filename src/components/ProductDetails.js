import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductThumb from "./ProductThumb";

const ProductDetails = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [abilities, setAbilities] = useState([]);

  const { id } = useParams();

  const showProduct = () => (
    <div className="productThumb">
      <img src={product.imgUrl} alt="" />
      <p>{product.name}</p>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );

  useEffect(() => {
    const getProduct = async () => {
      // style them as tiles (look up library project)

      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        mode: "cors",
      });
      response = await response.json();
      setProduct({
        id: response.id,
        name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
        imgUrl: response.sprites.front_default,
        abilities: response.abilities,
      });
    };

    setIsLoading(true);
    getProduct();
    setIsLoading(false);
  }, [id]);

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

    if (product.abilities) {
      setIsLoading(true);
      product.abilities.map((ability) => getAbility(ability.ability.url));
      setIsLoading(false);
    }
  }, [product.abilities]);

  useEffect(() => {
    // console.log(abilities);
  }, [abilities]);
  // TODO: ABILITIES LOADING?!!

  return (
    <>
      <h1>{product.name}</h1>
      <div>
        <Link to={`/products`}>Back to products</Link>
      </div>
      <div className="productDetails">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <div>
              <ProductThumb product={product} />
            </div>
            <div>
              {abilities.map((ability, i) => (
                <div key={i}>
                  <div>{ability.name}</div>
                  <div>{ability.effect}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
