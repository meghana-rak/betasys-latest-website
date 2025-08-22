import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice.js";
import contactReducer from './contactSlice.js'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    contact : contactReducer
  }
});