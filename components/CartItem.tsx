import Link from "next/link";
import Image from "next/image";
import DeleteItemButton from "./DeleteItemButton";
import QuantityPicker from "./QuantityPicker";
import styles from "../styles/cartItem.module.css";
import { CartItemType } from "../types";

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => (
  <div className={styles.cartItem}>
    <div>
      <Link href={`/products/${cartItem.product.id}`} passHref>
        <a>
          <Image src={cartItem.product.sprite} width="96" height="96" />
        </a>
      </Link>
    </div>
    <div>
      <p>
        <Link href={`/products/${cartItem.product.id}`} passHref>
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
