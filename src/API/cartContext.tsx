import * as React from "react";
import { CartItem, Pokemon } from "shared/types";

type Action =
  | { type: "ADD_TO_CART"; product: Pokemon; quantity: number }
  | { type: "UPDATE_QUANTITY"; product: Pokemon; quantity: number }
  | { type: "DELETE_ITEM"; product: Pokemon };
type Dispatch = (action: Action) => void;
type State = { cartItems: CartItem[] };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function getLocalStorage(): State {
  const persistedState = localStorage.getItem("shopping-cart");
  if (persistedState) return JSON.parse(persistedState);
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
      }
      const updatedItems = state.cartItems.map((cartItem, index) => {
        if (index === targetProductPosition) {
          return { ...cartItem, quantity: cartItem.quantity + action.quantity };
        }
        return cartItem;
      });
      return { ...state, cartItems: updatedItems };
    }
    case "UPDATE_QUANTITY": {
      if (action.quantity === 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.product.id !== action.product.id
          ),
        };
      }

      const updatedItems = state.cartItems.map((cartItem) => {
        if (cartItem.product.id === action.product.id) {
          return { ...cartItem, quantity: action.quantity };
        }
        return cartItem;
      });
      return { ...state, cartItems: updatedItems };
    }
    case "DELETE_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product.id !== action.product.id
        ),
      };
    }
    // default: {
    //   throw new Error(`Unhandled action type: ${action.type}`);
    // }
  }
}

function CartProvider({ children }: { children: React.ReactNode }) {
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
