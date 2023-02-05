import { configureStore } from "@reduxjs/toolkit";
import { FlightSlice } from "./FlightSlice";
import { UserFlightSearch } from "./UserFlightSlice";




export const Store=configureStore({
    reducer:{flightSearch:UserFlightSearch.reducer,flight:FlightSlice}
})