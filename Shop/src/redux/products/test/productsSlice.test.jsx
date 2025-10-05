import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "../slice";
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock global fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, title: "Product A" },
        { id: 2, title: "Product B" },
      ]),
  })
);

describe("productsSlice", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { products: productsReducer },
    });
    vi.clearAllMocks(); // reset mocks before each test
  });

  it("should handle initial state", () => {
    const state = store.getState().products;
    expect(state.items).toEqual([]);
    expect(state.status).toBe("idle");
  });

  it("should fetch products successfully", async () => {
    await store.dispatch(fetchProducts());
    const state = store.getState().products;
    expect(state.status).toBe("succeeded");
    expect(state.items.length).toBe(2);
    expect(state.items[0].title).toBe("Product A");
  });

  it("should handle fetch failure", async () => {
    // Mock a rejected fetch once
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("API error"))
    );

    await store.dispatch(fetchProducts());
    const state = store.getState().products;

    expect(state.status).toBe("failed");
    expect(state.error).toBeDefined();
  });
});
