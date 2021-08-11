import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ProductThumb = (props) => {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    // console.log(props.product);
  }, []);

  return (
    <Link to={`${url}/${props.product.id}`}>
      <div className="productThumb">
        <img src={props.product.imgUrl} alt="" />
        <p>{props.product.name}</p>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductThumb;

// Build individual card items for each of your products. Display an input field
// on it, which lets a user manually type in how many items they want to buy.
// Also, add an increment and decrement button next to it for fine-tuning. You
// can also display a title for each product as well as an “Add To Cart” button.
