import { CartItemType } from "types";

interface QuantityPickerPropType {
  item: CartItemType;
  itemIndex: number;
  setCartItems: (
    value: React.SetStateAction<
      | ([] & {
          length: 0;
        })
      | CartItemType[]
    >
  ) => void;
}

const QuantityPicker = ({
  item,
  itemIndex,
  setCartItems,
}: QuantityPickerPropType) => {
  const updateQuantity = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCartItems((prevState) => {
      if (e.target.value === "0") prevState.splice(itemIndex, 1);
      else prevState[itemIndex].quantity = Number(e.target.value);
      return [...prevState];
    });

  return (
    <span className="quantityPicker">
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
