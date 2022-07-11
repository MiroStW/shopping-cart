import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://pokeapi.co/api/v2/pokemon/" });

const httpLink = createHttpLink({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

export const pokemonClient = new ApolloClient({
  // uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: ApolloLink.from([restLink, httpLink]),
});

// const TEST_QUERY = gql`
//   query MyQuery {
//     pokemon_v2_pokemon(where: { id: { _eq: 10 } }) {
//       id
//       name
//     }
//   }
// `;

// const REST_QUERY = gql`
//   query sprites {
//     pokemon(id: "1") @rest(type: "pokemon", path: "{args.id}/") {
//       name
//     }
//   }
// `;
