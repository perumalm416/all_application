import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import RootSaga from "../Middleware/RootSaga";
import FlightSlice from "./FlightSlice";
import { UserFlightSearch } from "./UserFlightSlice";

const saga = createSagaMiddleware();
export const Store = configureStore({
  reducer: {
    flightSearch: UserFlightSearch.reducer,
    flight: FlightSlice.reducer,
  },
  middleware: [saga],
});

saga.run(RootSaga);
