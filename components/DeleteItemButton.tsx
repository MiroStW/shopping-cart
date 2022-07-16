import { useCart } from "../api/cartContext";
import { CartItemType } from "../types";

const DeleteItemButton = ({ item }: { item: CartItemType }) => {
  const {
    context: { dispatch },
  } = useCart();

  return (
    <button
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Really delete cart item?"))
          dispatch({ type: "DELETE_ITEM", product: item.product });
      }}
    >
      delete
    </button>
  );
};

export default DeleteItemButton;
