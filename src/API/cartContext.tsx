import { func } from "prop-types";
import * as React from "react";
import { CartItemType, Pokemon } from "types";

type Action =
  | { type: "ADD_TO_CART"; product: Pokemon; quantity: number }
  | { type: "UPDATE_QUANTITY"; product: Pokemon; quantity: number }
  | { type: "DELETE_ITEM"; product: Pokemon };
type Dispatch = (action: Action) => void;
type State = { cartItems: CartItemType[] };
type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

// you missed the type declarations here, otherwise it is producing any
function getLocalStorage(): State {
  // caling it twice is a potential performance issue (if you do it a lot)
  // the TypeScript complaint can easily prevented by extracting the retreived value
  const persistedState = localStorage.getItem("shopping-cart");
  if (persistedState)
    return JSON.parse(persistedState);
  else return { cartItems: [] };
}

function setLocalStorage(state: State) {
  if (state) localStorage.setItem("shopping-cart", JSON.stringify(state));
}

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const targetProductPosition = state.cartItems.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (targetProductPosition === -1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { product: action.product, quantity: action.quantity },
          ],
        };
        // setCartItems((prevState) => [...prevState, { product, quantity }]);
      }
      // skipping the else statement when the if had a return makes the code more readable

        // You shouldn't mutate the state here, rather create new state.
        // I don't love this solution for potentially unnecessary loops,
        // but it is very readable and does the job.
        // So if you can't see any actual performance hits, I wouldn't worry too much about it.
        // Something like https://immerjs.github.io/immer/
        // or https://github.com/kolodny/immutability-helpermight
        // might be helpful with more complex immutable data structures
        // (haven't tried any of them though)
        const updatedItems = state.cartItems.map((cartItem, index) => {
          if (index === targetProductPosition) {
            return { ...cartItem, quantity: cartItem.quantity + action.quantity };
          }
          return cartItem;
        })
        return { ...state, cartItems: updatedItems };
    }
    case "UPDATE_QUANTITY": {
      // same here -> the state handled by a reducer should be immutable
      if (action.quantity === 0) {
        return { ...state, cartItems: state.cartItems.filter((cartItem) => cartItem.product.id === action.product.id) };
      }

      const updatedItems = state.cartItems.map((cartItem) => {
        if (cartItem.product.id === action.product.id) {
          return { ...cartItem, quantity: action.quantity };
        }
        return cartItem;
      })
      return { ...state, cartItems: updatedItems };
    }
    case "DELETE_ITEM": {
      // same here -> I didn't change the code this time
      const targetProductPosition = state.cartItems.findIndex(
        (item) => item.product.id === action.product.id
      );
      state.cartItems.splice(targetProductPosition, 1);

      return { ...state, cartItems: [...state.cartItems] };
    }
    // default: {
    //   throw new Error(`Unhandled action type: ${action.type}`);
    // }
  }
}

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, getLocalStorage());
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  // are you aware it sets the local state on every render?
  setLocalStorage(state);
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
