import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { images } from "./gallery/slice";

export const store = configureStore({
  reducer: combineReducers({ images }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
