import DeleteItemButton from "./DeleteItemButton";
import QuantityPicker from "./QuantityPicker";
import styles from "../styles/cartItem.module.css";
import Link from "next/link";
import { CartItemType } from "../types";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => (
  <div className={styles.cartItem}>
    <div>
      <Link href={"/products/" + cartItem.product.id} passHref>
        <a>
          <img src={cartItem.product.sprite} alt="" />
        </a>
      </Link>
    </div>
    <div>
      <p>
        <Link href={"/products/" + cartItem.product.id} passHref>
          <a>
            <b>{cartItem.product.name}</b>
          </a>
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
