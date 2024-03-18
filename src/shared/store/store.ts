import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getPostsApi } from "../api/getPosts";

export const store = configureStore({
  reducer: {
    [getPostsApi.reducerPath]: getPostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getPostsApi.middleware),
});
setupListeners(store.dispatch);
