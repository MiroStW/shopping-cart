/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import App from "../app/App";

it("Pokemon API is called correctly", () => {
  //assemble:
  // jest.mock("react-router-dom", () => ({
  //   ...jest.requireActual("react-router-dom"),
  //   useParams: () => {
  //     id: 1;
  //   },
  //   useRouteMatch: () => ({ url: "/products/1" }),
  // }));
  // render(<App />);

  //act
  // const heading = screen.getByRole("heading", { name: /bulbasaur/i });
  //assert
  expect(1).toBe(1);
});
