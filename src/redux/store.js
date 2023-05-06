import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
  devTools: false, // Deshabilitar las herramientas de desarrollo de Redux
});

export default store;