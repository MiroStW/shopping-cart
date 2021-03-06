import Link from "next/link";
import { useCart } from "../api/cartContext";
import CartItem from "../components/CartItem";
import Nav from "../components/Nav";

const Cart = () => {
  const {
    context: {
      state: { cartItems },
    },
    isLoading,
  } = useCart();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Nav />
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty :-( Add some <Link href="/products">products</Link>
          !
        </div>
      ) : (
        cartItems.map((cartItem, i) => <CartItem key={i} cartItem={cartItem} />)
      )}
    </>
  );
};

export default Cart;
