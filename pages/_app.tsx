import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { pokemonClient } from "../api/ApolloClient";
import { CartProvider } from "../api/cartContext";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ApolloProvider client={pokemonClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CartProvider>
  );
}
