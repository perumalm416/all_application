import { createSlice } from "@reduxjs/toolkit";

export const FlightSlice = createSlice({
  name: "flight",
  initialState: { flightList: [] },
  reducers: {
    newFlightInfo(state, action) {
      const actionPayAction = action;
    },
  },
});

export const flightAction = FlightSlice.actions;
