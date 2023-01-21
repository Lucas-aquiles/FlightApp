import { configureStore } from "@reduxjs/toolkit";
import flightsSlice from "../features/flightsSlice";

export const store = configureStore({
  reducer: {
    stateGlobal: flightsSlice
  }
});
