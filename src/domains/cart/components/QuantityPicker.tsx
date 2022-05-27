import { CartItem } from "shared/types";
import { useCart } from "../../../api/cartContext";
import styles from "../assets/quantityPicker.css";

const QuantityPicker = ({ item }: { item: CartItem }) => {
  const { dispatch } = useCart();

  const updateQuantity = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch({
      type: "UPDATE_QUANTITY",
      product: item.product,
      quantity: Number(e.target.value),
    });

  return (
    <span className={styles.quantityPicker}>
      <label htmlFor="quantity">Quantity: </label>
      <select
        name="quantity"
        value={item.quantity}
        onChange={(e) => updateQuantity(e)}
      >
        <option value="0">0 (delete)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </span>
  );
};

export default QuantityPicker;
