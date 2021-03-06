import Image from "next/image";
import Link from "next/link";
import styles from "../styles/productThumb.module.css";
import { PokemonType } from "../types";
import AddToCartButton from "./AddToCartButton";

interface ProductThumbPropType {
  product: PokemonType;
}

const ProductThumb = ({ product }: ProductThumbPropType) => {
  return (
    <Link href={`products/${product.id}`}>
      <div className={styles.productThumb}>
        <Image src={product.sprite} width="96" height="96" />
        <p>{product.name}</p>
        <div>
          <AddToCartButton product={product} />
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
