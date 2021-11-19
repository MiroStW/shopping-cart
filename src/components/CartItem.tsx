import { Link } from "react-router-dom";
import { CartItemType } from "types";
import DeleteItemButton from "./DeleteItemButton";
import QuantityPicker from "./QuantityPicker";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => (
  <div className="cartItem">
    <div>
      <Link to={"/products/" + cartItem.product.id}>
        <img src={cartItem.product.sprite} alt="" />
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
        <QuantityPicker item={cartItem} />
        &nbsp;
        <DeleteItemButton item={cartItem} />
      </p>
    </div>
  </div>
);

export default CartItem;
