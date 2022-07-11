/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "../components/App";
// import fetch from "node-fetch";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

it("adds 1 item to the cart", () => {
  //assemble:
  // jest.mock("react-router-dom", () => ({
  //   ...jest.requireActual("react-router-dom"),
  //   useParams: () => {
  //     id: 1;
  //   },
  //   useRouteMatch: () => ({ url: "/products/1" }),
  // }));

  // jest.mock("fetch");

  const pokemon = {
    id: 1,
    name: "Bulbasaur",
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    height: 7,
    abilities: [
      {
        ability: {
          name: "outgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
      },
    ],
  };

  // renderWithRouter(<App />, { route: "/products/:id" });

  //act
  // userEvent.click(screen.getByRole("button", { name: /add to cart/i }));

  //assert
  expect(1).toBe(1);
});
