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

function getLocalStorage() {
  if (localStorage.getItem("shopping-cart"))
    return JSON.parse(localStorage.getItem("shopping-cart") as string);
  else return { cartItems: [] };
}

function setLocalStorage(state: State) {
  if (state) localStorage.setItem("shopping-cart", JSON.stringify(state));
}

function cartReducer(state: State, action: Action) {
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
      } else {
        state.cartItems[targetProductPosition].quantity += action.quantity;
        return { ...state, cartItems: [...state.cartItems] };
      }
    }
    case "UPDATE_QUANTITY": {
      const targetProductPosition = state.cartItems.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (action.quantity === 0)
        state.cartItems.splice(targetProductPosition, 1);
      else state.cartItems[targetProductPosition].quantity = action.quantity;

      return { ...state, cartItems: [...state.cartItems] };
    }
    case "DELETE_ITEM": {
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
