import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import loaderSlice from "./loaderSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  loader: loaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
