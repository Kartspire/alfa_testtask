import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";
import loaderSlice from "./reducers/loaderSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  loader: loaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
