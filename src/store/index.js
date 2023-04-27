import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice from "./slices/searchSlice";

const reducer = combineReducers({
  search: searchSlice,
});

const store = configureStore({
  reducer,
});

export default store;
