import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { CartItemType, PokemonType } from "../types";

type Action =
  | { type: "ADD_TO_CART"; product: PokemonType; quantity: number }
  | { type: "UPDATE_QUANTITY"; product: PokemonType; quantity: number }
  | { type: "DELETE_ITEM"; product: PokemonType };
type Dispatch = (action: Action) => void;
type State = { cartItems: CartItemType[] };

const CartStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function getLocalStorage(): State {
  if (typeof window !== "undefined") {
    const persistedState = localStorage.getItem("shopping-cart");
    if (persistedState) return JSON.parse(persistedState);
    else return { cartItems: [] };
  } else return { cartItems: [] };
}

function setLocalStorage(state: State) {
  if (state && typeof window !== "undefined")
    localStorage.setItem("shopping-cart", JSON.stringify(state));
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
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(cartReducer, getLocalStorage());

  const value = { state, dispatch };

  setLocalStorage(state);
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartStateContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return { context, isLoading };
}

export { CartProvider, useCart };
