import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import favoritesReducer from "./favourites/slice";
import filtersReducer from "./filters/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export default store;
