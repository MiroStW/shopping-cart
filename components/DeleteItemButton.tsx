import React from "react";
import { CartItem } from "shared/types";
import { useCart } from "../api/cartContext";

const DeleteItemButton = ({ item }: { item: CartItem }) => {
  const { dispatch } = useCart();

  return (
    <button
      onClick={() => {
        if (confirm("Really delete cart item?"))
          dispatch({ type: "DELETE_ITEM", product: item.product });
      }}
    >
      delete
    </button>
  );
};

export default DeleteItemButton;
