import { createSlice } from "@reduxjs/toolkit";

const FlightSlice = createSlice({
  name: "flight",
  initialState: { flightList: [] },
  reducers: {
    newFlightInfo(state, action) {
     state.flightList= action.payload;
    },
  },
});

export const flightAction = FlightSlice.actions;

export default FlightSlice;