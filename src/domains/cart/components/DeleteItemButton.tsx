import React from "react";
import { CartItemType } from "shared/types";
import { useCart } from "../../../api/cartContext";

const DeleteItemButton = ({ item }: { item: CartItemType }) => {
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
