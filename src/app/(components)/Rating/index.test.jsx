import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Rating from "./index";
import { Provider } from "react-redux";
import { api } from "@/state/api";
import { configureStore } from "@reduxjs/toolkit";

function mockStore(preloadedState) {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
}

describe("render Rating component", () => {
  test("show the stars", () => {
    render(<Rating rating={5} />);
    expect(screen.getAllByTestId("star-icon")).toHaveLength(5);
  });
});
