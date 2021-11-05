import { Link } from "react-router-dom";
import { CartItemType } from "types";
import QuantityPicker from "./QuantityPicker";

interface CartItemPropType {
  cartItem: CartItemType;
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

const CartItem = ({ cartItem, itemIndex, setCartItems }: CartItemPropType) => (
  <div className="cartItem">
    <div>
      <Link to={"/products/" + cartItem.product.id}>
        <img src={cartItem.product.imgUrl} alt="" />
      </Link>
    </div>
    <div>
      <p>
        <Link to={"/products/" + cartItem.product.id}>
          <b>{cartItem.product.name}</b>
        </Link>
      </p>
      <p>
        {/* add remove function & quantity changer */}
        <QuantityPicker
          item={cartItem}
          itemIndex={itemIndex}
          setCartItems={setCartItems}
        />{" "}
        - <span onClick={() => {}}>delete</span>
      </p>
    </div>
  </div>
);

export default CartItem;
