import { createSlice } from "@reduxjs/toolkit";

export const UserFlightSearch = createSlice({
  name: "flightSearch",
  initialState: { flightSearchInfo: {} },
  reducers: {
    flightSearchInfo(state, action) {
        const searchInput=action.payload;
        console.log(searchInput);
      state.flightSearchInfo = searchInput;
    },
  },
});

export const flightSearchAction=UserFlightSearch.actions;