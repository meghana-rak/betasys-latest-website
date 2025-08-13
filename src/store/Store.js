import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice.js";

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
});